import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../../constants/index';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const signInHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user) navigate('/', { replace: true });
      })
      .catch((error) => {
        alert(error.code);
      });

    setUser({
      email: '',
      password: '',
    });
  };

  const registerHandler = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        if (user) navigate('/', { replace: true });
      })
      .catch((error) => {
        alert(error.code);
      });
  };

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
