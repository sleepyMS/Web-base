import React from "react";
import "boxicons";
import "./login.css";

function login() {
  return (
    <div className="wrapper">
      <div className="login-box">
        <form>
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <box-icon type="solid" name="user" color="white"></box-icon>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <box-icon type="solid" name="lock-alt" color="white"></box-icon>
          </div>

          <div className="remember-forgod">
            <label>
              <input type="checkbox" /> 아이디 기억하기
            </label>
            <a href="#"> 비밀번호 찾기</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="register-link">
            <p>
              계정이 없으신가요? <a href="#">회원가입</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
