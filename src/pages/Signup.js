import React from "react";
import FullHeightWrapper from "../components/FullHeightWrapper";
import InputForm from "../components/InputForm";

const Signup = () => {
  return (
    <FullHeightWrapper>
      <div className="signup">
        <div className="signup__content">
          <div className="signup__left">
            <div className="signup__left--box">
              <h3 className="signup__left--title">Create Your Free Account</h3>
              <p className="signup__left--description">
                By creating your account you will get unlimited access to our products
                that include explore all the products and having your own shopping cart
                and you will have your own public profile that you can share with other
                people.
              </p>
            </div>
          </div>

          <form className="signup__form">
            <InputForm
              className="meduim-input transparent-input"
              name="firstName"
              type="text"
              placeholder="Jhone"
            />

            <InputForm
              className="meduim-input transparent-input"
              name="lastName"
              type="text"
              placeholder="Dohe"
            />

            <InputForm
              className="meduim-input transparent-input"
              name="email"
              type="email"
              placeholder="example@example.com"
            />

            <InputForm
              className="meduim-input transparent-input"
              name="password"
              type="password"
              placeholder="**********"
            />

            <InputForm
              className="meduim-input transparent-input"
              name="passwordConfirm"
              type="password"
              placeholder="**********"
            />

            <button
              type="submit"
              className="btn-small link btn btn-shadow btn-tomato white btn-width-fixed m-t-s p-t-b"
            >
              <span> Signup</span>
            </button>
          </form>
        </div>
      </div>
    </FullHeightWrapper>
  );
};

export default Signup;
