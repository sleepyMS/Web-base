import React from "react";
import "boxicons";
import "./login.css";

function login() {
  const loginSub = (e) => {
    e.preventDefault();

    // API
    let body = {
      id,
      password,
    };
    axios.post(LOGIN_API_KEY, body).then((res) => {
      // code = 데이터 상태
      const code = res.data.code;
      if (code === 400) {
        // 로그인 정보가 부족할 때,
        alert("아이디/패스워드를 입력해 주세요.");
      } else if (code === 401) {
        // id가 틀렸을 때,
        alert("존재하지 않는 id입니다.");
      } else if (code === 402) {
        // 비밀번호가 틀렸을때,
        alert("비밀번호가 일치하지 않습니다.");
      } else {
        dispatch(loginUser(res.data.userInfo));
      }
    });
    // 1순위 로그인 버튼을 누르면 클릭이 안되도록.
    setLoading(true);
  };

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
