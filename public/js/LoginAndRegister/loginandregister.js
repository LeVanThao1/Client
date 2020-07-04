const registerForm = document.getElementById('form1');
const loginForm = document.getElementById('form2');
const user_mail = document.getElementById('user_mail');
const user_pass = document.getElementById('user_pass');
const user_confirmpass = document.getElementById('user_confirmpass');
const login_email = document.getElementById('email');
const login_pass = document.getElementById('password');


// Validate registerForm
registerForm.addEventListener('submit',function(e){
    e.preventDefault();
    checkInputsRegister();
});

loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    checkInputsLogin();
});



function checkInputsRegister(){
    let error = false;
    const user_mailValue = user_mail.value.trim();
    const user_passValue = user_pass.value.trim();
    const user_confirmpassValue = user_confirmpass.value.trim();

    if(user_mailValue === ''){
        setErrorFor(user_mail,'Email không được để trống');
        error = true;
    }else if(!isEmail(user_mailValue)){
        setErrorFor(user_mail,'Email không hợp lệ, xin thử lại');
        error = true;
    }else{
        setSuccessFor(user_mail);
    }

    if(user_passValue === ''){
        setErrorFor(user_pass,'Mật khẩu không được để trống');
        error = true;
    }else if(!isPassword(user_passValue)){
        setErrorFor(user_pass,'Tối thiểu 8 kí tự. Bao gồm 1 chữ hoa, chữ thường và 1 số');
        error = true;
    }else {
        setSuccessFor(user_pass);
    }

    if(user_confirmpassValue === ''){
        setErrorFor(user_confirmpass,'Bạn phải nhập để xác nhận mật khẩu mới');
        error = true;
    }else if(user_passValue !== user_confirmpassValue){
        setErrorFor(user_confirmpass,'Mật khẩu mới không trùng khớp');
        error = true;
    }else{
        setSuccessFor(user_confirmpass);
    }
    if(!error) {
        register();
    }
}

function checkInputsLogin(){
    const login_emailValue = login_email.value.trim();
    const login_passValue = login_pass.value.trim();

    if(login_emailValue === ''){
        setErrorFor(login_email,'Email không được để trống');
    }else if(!isEmail(login_emailValue)){
        setErrorFor(login_email,'Email không hợp lệ, xin thử lại');
    }else{
        setSuccessFor(login_email);
    }

    if(login_passValue === ''){
        setErrorFor(login_pass,'Mật khẩu không được để trống');
    }else if(!isPassword(login_passValue)){
        setErrorFor(login_pass,'Bạn nhập sai mật khẩu');
    }else {
        setSuccessFor(login_pass);
    }
}


function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pass);
}
function setErrorFor(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    small.innerText = message;
    formcontrol.classList.remove('success');
    formcontrol.classList.add('error');
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}