console.log('hander')


//  h1  er text change korbo buton a click korle

document.getElementById('btn-update-title').addEventListener('click',function(){
    // console.log('btn-click')
    const pageTitleElement=document.getElementById('page-title')
    pageTitleElement.innerText='updated  page title text'
})

// P tag er  title update

document.getElementById('btn-login').addEventListener('click',function(){
    const btnLoginCheck=document.getElementById('user-update');
    btnLoginCheck.innerText = 'User Login';
})

