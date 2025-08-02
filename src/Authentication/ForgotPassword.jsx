import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <div className="container">
        <div className="form-box">
          <form action="">
            <h1 className="passwordTitle">Forgot Password</h1>
            <div className="input-box">
              <label for="phoneNumber" className="numberLabel">Type your phone number</label>
              <input className="" id="phoneNumber" type="tel" placeholder="(+84)" required />
            </div>
            <button type="submit" className="btns">Submit</button>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Don't Worry,</h1>
            <p>We've got you covered!</p>
            <Link to={"/"} className="btns" style={{ padding: 8 }}>Back</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ForgotPassword;