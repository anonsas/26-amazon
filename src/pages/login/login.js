import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { images } from '../../constants/index';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const signInHandler = (e) => {
    e.preventDefault();

    setUser({
      email: '',
      password: '',
    });
  };

  const registerHandler = () => {};

  return (
    <div className="login">
      <Link to="/">
        <img src={images.logoDark} alt="logo" className="login__logo" />
      </Link>

      <div className="form">
        <h1>Sign-in</h1>

        <form onSubmit={signInHandler}>
          <h5>E-mail</h5>
          <input type="email" name="email" value={user.email} onChange={handleChange} />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit" className="form__signIn">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON'S CLONE (FAKE) Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our Interest-based Ads
          Notice.
        </p>

        <button className="form__register" onClick={registerHandler}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
