import React, { useState, useContext, useEffect } from "react";
import axios from '../components/Axios'
import { Link } from "react-router-dom";
import ShoppingContext from "../Conext/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal } = shoppingContext;

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
 

  useEffect(() => {
    //Generate the special stripe secret which will allow us to charge a customer
  const getClientSecret = async () => {
    const response = await axios({
        method: 'POST',
        url:`/payments/creat?total=${getBasketTotal(basket) * 100}`,
    });
    setClientSecret(response.data.clientSecret);
  };
  getClientSecret();

}, [basket])

console.log("The secret key is => ", clientSecret);

const handleSubmit = (e) => {
    e.preventDefault();
};

const handleChange = (e) => {}
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p> Leshike 23 Street 2025</p>
            <p>Johannesburg, South Africa</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
                {basket.map((item) => (<CheckoutProduct key={item.id } 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
                ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/**Stripe code will go here */}
            <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment_price_container">
                <CurrencyFormat 
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                </button>
                </div>
                {error && <div>{error}</div>}
            </form>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Payment;
