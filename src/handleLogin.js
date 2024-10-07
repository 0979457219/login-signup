
export function handleBorder (element) {
        let isRed = false
        
        const intervalId = setInterval(() => {
            if (isRed) {
                element.style.setProperty('border', '2px solid white', 'important');
            } else {
                element.style.setProperty('border', '2px solid red', 'important'); 
            }
            isRed = !isRed; 
          }, 300); 
        
          setTimeout(() => {
            clearInterval(intervalId);
            element.style.border = '2px solid white';
          }, 1800);
    }



export function handleLogin(userName, password) {
    if(userName === '')
    {
        const userNameElement = document.querySelector('.content_name');
        handleBorder(userNameElement)
        
    }

    if(password === '')
    {
        const passwordElement = document.querySelector('.content_pass');
        handleBorder(passwordElement)
    }
    if(userName && password)
    {
        console.log(`Người dùng đã gửi request đăng nhập\n
        Tên đăng nhập: ${userName}\n
        Mật khẩu: ${password}`);
    
    const meme = document.querySelector('.JS_LOGIN')
    meme.classList.remove('hide')
        
    // setTimeout(() => {
    //     meme.classList.add('hide');
    // }, 2000);

    setTimeout(() => {
        window.location.reload();
    }, 2000);

    }
}

