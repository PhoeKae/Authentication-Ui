import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
const Auth = () => {
  const [isActive, setIsActive] = useState(false); // register form active state

  return (

    <div className={`container ${isActive ? 'active' : ''}`}>
      {/* login form  */}
      <div className="form-box">
        <form action="">
          <h1>Sign in</h1>
          <div className="input-box">
            <input type="tel" placeholder="Text input" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="forgot-link">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit" className="btns">Sign in</button>
        </form>
      </div>


      {/* register form  */}
      <div className="form-box register">
        <form action="">
          <h1>Sign up</h1>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Text Input" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="forgot-link">
            <input type="checkbox" />
            <span>By creating an acoount your aggree to our <strong>Term and Conditions</strong></span>
          </div>
          <button type="submit" className="btns">Sign up</button>
        </form>
      </div>


      {/* toggle box */}
      <div className="toggle-box">

        {/* toggle box left */}
        <div className="toggle-panel toggle-left">
          <h1>Welcome to us,</h1>
          <p>Hello there, create New account</p>
          <button className="btns register-btns" onClick={() => setIsActive(true)}  >Sign up</button>
        </div>

        {/* toggle box right */}
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back</h1>
          <p>Hello there, sign in to continue</p>
          <button className="btns login-btns" onClick={() => setIsActive(false)} >Sign in</button>
        </div>

      </div>
    </div>
  )
}

export default Auth;