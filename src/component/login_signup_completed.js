import React from 'react';
import loginImage from './login.svg';
import signupImage from './sign_up.svg'



export default function login_signup_completed() {
  return (
    <>
    <div className="message_completed JS_LOGIN hide">
      <div className="message_popup">
        <img className='message_img' src={loginImage} alt="Description of image" />
      </div>
    </div>


    <div className="message_completed JS_SIGN_UP hide">
      <div className="message_popup">
        <img className='message_img' src={signupImage} alt="Description of image" />
      </div>
    </div>

    </>
  );
}

