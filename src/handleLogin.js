export function handleLogin(userName, password) {
    if(userName === '')
    {
        var isRed = false;
        const userNameElement = document.querySelector('.content_name');
        
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

    if(password === '')
    {
        var isRed2 = false;
        const passwordElement = document.querySelector('.content_pass');
        
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
    if(userName && password)
    alert(`Người dùng đã gửi request đăng nhập\n
        Tên đăng nhập: ${userName}\n
        Mật khẩu: ${password}`);
  }

