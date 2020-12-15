import React from "react";
import Container from "../components/Container";
import InputForm from "../components/InputForm";

const ForgotPassword = () => {
  return (
    <Container>
      <div className="forgot-password">
        <div className="forgotpassword__left"></div>

        <form className="forgot-password__form">
          <h2 className="forgotPassword__title">Forgot Your Password</h2>

          <InputForm
            className="meduim-input input-border p-b input-raduis"
            name="email"
            type="email"
            placeholder="Email"
          />

          <button
            type="submit"
            className="btn-small btn-tomato btn-shadow btn white m-t-b"
          >
            Reset
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
