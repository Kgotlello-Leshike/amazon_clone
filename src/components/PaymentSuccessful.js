import React from "react";
import "./PaymentSuccessful.css"
import {Link} from "react-router-dom"

const PaymentSuccessful = () => {
    return (
        <div className="payment_successful">
            <Link to="./PaymentSuccessful">
            <div>
                <img 
                className="img_top"
                src="https://icpih.com/media-intestinal-health-ihsig/PAYMENT-SUCCESS.png"  alt=''/>
            </div>
            </Link>

        </div>
    )
}
export default PaymentSuccessful