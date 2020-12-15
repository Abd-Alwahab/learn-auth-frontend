import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import FullHeightWrapper from "../components/FullHeightWrapper";

const Login = (props) => {
  return (
    <FullHeightWrapper>
      <div className="auth">
        <div className="auth__content">
          <div className="login__left">
            <div className="login__left--box">
              <h3 className="login__left--title">Login to Your Account</h3>
              <p className="login__left--description">
                By LogingIn to your account you will get unlimited access to our products
                that include explore all the products and having your own shopping cart
                and you will have your own public profile that you can share with other
                people.
              </p>
            </div>
          </div>

          <form className="login__form">
            <InputForm
              className="meduim-input transparent-input"
              name="email"
              type="email"
              placeholder="Email"
            />

            <InputForm
              className="meduim-input transparent-input"
              name="password"
              type="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="btn-small link btn btn-tomato btn-shadow white btn-width-fixed m-t-s p-t-b"
            >
              Login
            </button>

            <Link className="link login__title m-t-b m-b-b" to="/forgotpassword">
              Forgot Your Password
            </Link>
          </form>
        </div>
      </div>
    </FullHeightWrapper>
  );
};

export default Login;
