// $(document).ready(() => {
//     register();
// })
// const user_mail = document.getElementById('user_mail');
async function register() {
    const email = $('input[name="user_email"]').val();
    const password = $('input[name="user_password"]').val();
    const fullname = $('input[name="fullname"]').val()
    const result = await axios.post('https://server-yourlap.herokuapp.com/api/v1/users', {
        email: email,
        password: password,
        fullname: fullname
    });
    console.log(result)
    if(result.data.createdUser) {
        localStorage.setItem('email', email);
        redirect('vetifyEmail.html');
    }
    else {
        setErrorFor(user_mail,'email đã tồn tại, vui lòng đăng ký email khác');
    }
}