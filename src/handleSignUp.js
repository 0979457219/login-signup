


export function handleSignUp(userName, password, confirm) {
    if(userName === '')
    {
      var isRed = false;
        const userNameElement = document.querySelector('.JSNAME');
        
        const intervalId = setInterval(() => {
            if (isRed) {
                userNameElement.style.setProperty('border', '2px solid white', 'important');
            } else {
                userNameElement.style.setProperty('border', '2px solid red', 'important'); 
            }
            isRed = !isRed; 
          }, 300); 
        
          setTimeout(() => {
            clearInterval(intervalId);
            userNameElement.style.border = '2px solid white';
          }, 1800);
    }
    if( password === '')
    {
      var isRed2 = false;
        const passwordElement = document.querySelector('.JSPASS');
        
        const intervalId = setInterval(() => {
            if (isRed2) {
                passwordElement.style.setProperty('border', '2px solid white', 'important');
            } else {
                passwordElement.style.setProperty('border', '2px solid red', 'important'); 
            }
            isRed2 = !isRed2; 
          }, 300); 
        
          setTimeout(() => {
            clearInterval(intervalId);
            passwordElement.style.border = '2px solid white';
          }, 1800);
    }
    if ( confirm === '')
    {
      var isRed3 = false;
        const confirmElement = document.querySelector('.JSCONFIRM');
        
        const intervalId = setInterval(() => {
            if (isRed3) {
                confirmElement.style.setProperty('border', '2px solid white', 'important');
            } else {
                confirmElement.style.setProperty('border', '2px solid red', 'important'); 
            }
            isRed3 = !isRed3; 
          }, 300); 
        
          setTimeout(() => {
            clearInterval(intervalId);
            confirmElement.style.border = '2px solid white';
          }, 1800);
    }
    if( password !== confirm)
    {
      var isRed4 = false;
        const confirmElement = document.querySelector('.confirm');
        
        const intervalId = setInterval(() => {
            if (isRed4) {
                confirmElement.style.setProperty('border', '2px solid white', 'important');
            } else {
                confirmElement.style.setProperty('border', '2px solid red', 'important'); 
            }
            isRed4 = !isRed4; 
          }, 300); 
        
          setTimeout(() => {
            clearInterval(intervalId);
            confirmElement.style.border = '2px solid white';
          }, 1800);
    }
    else if( userName && confirm && password)
    alert(`Người dùng đã gửi request đăng ký tài khoản mới\n
        Tên đăng nhập: ${userName}\n
        Mật khẩu: ${password}`);
  }

  
  
  

  

  