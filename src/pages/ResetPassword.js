import React from "react";
import Container from "../components/Container";
import InputForm from "../components/InputForm";

const ResetPassword = () => {
  return (
    <Container>
      <div className="resetpassword">
        <div className="resetpassword__left"> </div>
        <form className="resetpassword__form">
          <h2 className="resetpassword__title">Reset Your Password</h2>
          <div className="m-b-m">
            <InputForm
              className="meduim-input input-border p-b input-raduis"
              name="password"
              type="password"
              placeholder="password"
            />
          </div>

          <InputForm
            className="meduim-input input-border p-b input-raduis"
            name="passwordConfirm"
            type="password"
            placeholder="password confirm"
          />

          <button
            type="submit"
            className="btn btn-shadow btn-small btn-tomato white m-t-b"
          >
            Update
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
