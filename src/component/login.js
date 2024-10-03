import React, { useState } from 'react'
import { handleLogin } from '../handleLogin';
import { handleSignUp } from '../handleSignUp';

export default function Login() {

  const [isHidden, setIsHidden] = useState(false);

  function changeContent() {
    setIsHidden(!isHidden);

    setLoginUserName('');
    setLoginPassword('');
    setRegisterUserName('');
    setRegisterPassword('');
    setConfirmPassword('');
    
  }


  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');


  const [registerUserName, setRegisterUserName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault(); 
    handleLogin(loginUserName, loginPassword);
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();
    handleSignUp(registerUserName, registerPassword, confirmPassword); 
  }


  return (
  

    <div className="login">
        <div className= {`content${isHidden ? ' hide' : ''}`} >
          <p className="content_header" >đăng nhập</p>
          <form className="fake_content" onSubmit={handleSubmit}>
              <input className="content_name" placeholder='Tên đăng nhập' type='text'
              value={loginUserName} 
              onChange={(e) => setLoginUserName(e.target.value)}
              /> 

              <input className="content_pass" placeholder='Mật khẩu' type='password'
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              />

              <div className="content_row">
                <p className="content-desc" >Bạn chưa có tài khoản?</p>
                <button className="btn_change"  onClick={changeContent} type="button" >
                  <p>Đăng ký</p>
                </button>
              </div>

              <button className="btn_login" type="submit" >Đăng nhập</button>
          </form>
          

        </div>


        {/*  */}
        <div className= {`content${isHidden ? '' : ' hide'}`} >
          <p className="content_header" >đăng ký</p>
          <form className="fake_content" onSubmit={handleRegisterSubmit}>
            <input className="content_name JSNAME" placeholder='Tên đăng nhập' type='text'
            value={registerUserName} 
            onChange={(e) => setRegisterUserName(e.target.value)}
            /> 
            <input className="content_pass JSPASS" placeholder='Mật khẩu' type='password'
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            /> 
            <input className="content_pass confirm JSCONFIRM" placeholder='Nhập lại mật khẩu' type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="content_row">
              <p className="content-desc" >Bạn đã có tài khoản?</p>
              <button className="btn_change" onClick={changeContent} type="button">
                <p>Đăng nhập</p>
              </button>
            </div>

            <button className="btn_login" type="submit" >Đăng ký</button>
            </form>

        </div>

    </div>


  )
}
