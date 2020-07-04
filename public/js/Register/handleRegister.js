// $(document).ready(() => {
//     register();
// })

async function register() {
    const email = $('input[name="user_email"]').val();
    const password = $('input[name="user_password"]').val();
    const fullname = $('input[name="fullname"]').val()
    const result = await axios.post('http://localhost:3001/api/v1/users', {
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
        alert('email đã tồn tại, vui lòng đăng ký email khác');
    }
}