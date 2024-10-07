import { handleBorder } from './handleLogin';


export function handleSignUp(userName, password, confirm) {
    if(userName === '')
    {
      
        const userNameElement = document.querySelector('#signUpName');
        handleBorder(userNameElement)

    }
    if( password === '')
    {
        const passwordElement = document.querySelector('#signUpPass');
        handleBorder(passwordElement)
    }
    if ( confirm === '')
    {
        const confirmElement = document.querySelector('.confirm');
        handleBorder(confirmElement)
    }
    if( password !== confirm)
    {
        const confirmElement = document.querySelector('.confirm');
        handleBorder(confirmElement)
    }
    else if( userName && confirm && password)
    {
      console.log(`Người dùng đã gửi request đăng ký tài khoản mới\n
        Tên đăng nhập: ${userName}\n
        Mật khẩu: ${password}`);

        const meme = document.querySelector('.JS_SIGN_UP')
        meme.classList.remove('hide')
            
        // setTimeout(() => {
        //     meme.classList.add('hide');
        // }, 2000);

        setTimeout(() => {
          window.location.reload();
      }, 2000);
        

    }
  }

  
  
  

  

  