import "./App.css";
import { useContext, useEffect} from 'react'
import { Route , Switch, Redirect} from "react-router-dom";
import {loadStripe } from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PaymentSuccessful from "./components/PaymentSuccessful";
import ShoppingContext from "./Conext/shopping/shoppingContext";
import { auth } from "./Firebase"
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";


const promise = loadStripe('pk_test_51QgW2QFad9Y91BQeV9f4MJLH44UUuPzSk1OQvMPKtTRdd6EaAFqMMoUnFKKAsVQHCaPoEVrZ9Lb9eXFJ1SKPxDxl00sMuMzQdn')

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const {setUser} = shoppingContext;
useEffect(() => {
auth.onAuthStateChanged((authUser) => {
  console.log("User is  ->", authUser);

  if(authUser) {
    setUser(authUser)
  } else {
    setUser(null)
  }
})
}, [])
  return (

<>
    <Header />
      <main>
      <Switch>
     
        <Route path="/" exact>
        <Redirect to="/home" />
        </Route>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
        <ProductDetails />
        </Route>
        <Route path="/checkout" >
        <Checkout />
        </Route>
        <Route path="/payment" >
        <Elements stripe={promise}>
        <Payment />
        </Elements>
        </Route>
        <Route path="/login" >
        <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        <Route path="/paymentSuccessful">
          <PaymentSuccessful />
        </Route>
      
      </Switch>
      </main>
      
    </>
  );
};

export default App;