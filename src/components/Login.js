import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import {auth} from '../Firebase'

// const reducer = (state, action) => {
//   if (action.type === "EMAIL_INPUT") {
//     return { ...state, emailValue: action.payload };
//   }
//   if (action.type === "PASSWORD_INPUT") {
//     return { ...state, passwordValue: action.payload };
//   }

//   return { emailValue: "", passwordValue: "" };
// };

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  // const ctx = useContext(AuthContext);
  // const [formIsValid, setformIsValid] = useState(false);

  // const [state, dispatch] = useReducer(reducer, {
  //   emailValue: "",
  //   passwordValue: "",
  // });

  // const { emailValue: email, passwordValue: password } = state;

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("CHECKING FORM VALIDITY");
  //     setformIsValid(email.includes("@") && password.trim().length > 6);
  //   }, 500);
  //   return () => {
  //     console.log("CLEANUP HERE");
  //     clearTimeout(identifier);
  //   };
  // }, [email, email]);

  // const emailChangeHandler = (e) => {
  //   dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  // };

  // const passwordChangeHandler = (e) => {
  //   dispatch({ type: "PASSWORD_INPUT", payload: e.target.value });
  // };

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth=>
      {history.push('/')}).catch(error => alert(error.message));


  };

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      (auth) => {
        if(auth) {
          history.push('/')
        }
      }).catch((error)=> alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png"
          alt="
         amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input 
          type="text" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In :-)
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice. Created by Ms. KM Leshike
        </p>
        <button className="login_registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
