
$('#submit_change_password').click(function (e) {
    if (e.target.checked) {
        $('.changepassword').html(`<div class="auth-form__group">
                                <label class="info_user_label" for="old_password">Mật Khẩu Cũ</label>
                                <input spellcheck="false" name="info_oldpass" id="old_password" required
                                    type="password" class="auth-form__input" value>
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div class="auth-form__group">
                                <label class="info_user_label" for="password">Mật Khẩu Mới</label>
                                <input id="password" name="info_newpass" spellcheck="false"
                                    required type="password" class="auth-form__input" value>
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                                <small>Error message</small>
                            </div>
                            <div class="auth-form__group deleted_marinbottom">
                                <label class="info_user_label" for="confirm_password">Nhập Lại Mật Khẩu</label>
                                <input id="confirm_password" name="info_confirmpass" spellcheck="false"
                                        required type="password" class="auth-form__input" value>
                                <i class="fas fa-check-circle"></i>
                                <i class="fas fa-exclamation-circle"></i>
                            </div>
                            <div class="auth-form__group group_change_password">
                                <div id="message" class="error-message"></div>
                            </div>`);
        // onInputName();
        var inputPass = document.getElementById('password');
        var inputConfirmPass = document.getElementById('confirm_password');
        inputPass.addEventListener('keyup',check);
        inputConfirmPass.addEventListener('keyup',check);
    }
    else {
        $('.changepassword').html(``);
        // noneInputName();
    }
})

function check() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'blue';
        document.getElementById('message').innerHTML = 'Mật khẩu hợp lệ';
        const confirm_password = document.getElementById('confirm_password');
        confirm_password.parentElement.classList.remove('error');
        confirm_password.parentElement.classList.add('success');
    }
    else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Mật khẩu thay đổi phải trùng nhau';
        const confirm_password = document.getElementById('confirm_password');
        confirm_password.parentElement.classList.remove('success');
        confirm_password.parentElement.classList.add('error');
    }
}

const form = document.getElementById('form');
const user_name = document.getElementById('user_name');
const user_sdt = document.getElementById('user_sdt');
const user_address = document.getElementById('user_address');
const user_date = document.getElementById('user_date');
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInputs();
    
});

function checkInputs(){
    const user_nameValue = user_name.value.trim();
    const user_sdtValue = user_sdt.value.trim();
    const user_addressValue = user_address.value.trim();
    const user_dateValue = user_date.value.trim();
    // const user_oldpassValue = old_password.value.trim();
    // const user_newpassValue = password.value.trim();
    // const user_confirmpasssValue = confirm_password.value.trim();

    if(user_nameValue === ''){
        setErrorFor(user_name,'Tên khách hàng không được để trống');
    }else{
        setSuccessFor(user_name);
    }

    if(user_sdtValue === ''){
        setErrorFor(user_sdt,'Số điện thoại không được để trống');
    }else{
        setSuccessFor(user_sdt);
    }
    if(user_addressValue === ''){
        setErrorFor(user_address,'Địa chỉ không dược để trống')
    }else{
        setSuccessFor(user_address);
    }
}

function isPassword(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pass);
}

function setErrorFor(input,message){
    const formcontrol = input.parentElement;
    console.log(formcontrol);
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