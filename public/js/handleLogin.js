const API_URL = 'https://server-yourlap.herokuapp.com';
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');
const dataCT = axios.get(`https://server-yourlap.herokuapp.com/api/v1/users/${userId}`);
if(token && userId || dataCT.status === 200) {
	redirect('');
}
$('.Login').click(function () {
	login($('#email').val().trim(), $('#password').val().trim());
});
$('.auth-form__help-forgot').click(function () {
	redirect('forgotPW.html');
});
$('.btn auth-form__controls-back').click(function () {
	redirect('');
});


async function login(email , password) {
	try {
		const loginResponse = await axios({
			method: 'post',
			url: `${API_URL}/api/v1/login`,
			data: {
				email,
				password
			}
        });
		console.log(loginResponse);
		
		if (loginResponse.data.access_token) {
			console.log(loginResponse);
			// debugger;
			const token = loginResponse.data.access_token;
			const userId = loginResponse.data.userId;
			const username = loginResponse.data.username;
			const path = localStorage.getItem('path')
			// const cart = loginResponse.data.cart._id;
			localStorage.setItem('token', token);
			localStorage.setItem('userId', userId);
			localStorage.setItem('username', username);
			// localStorage.setItem('cartId', cart);
			console.log(token, userId, username )
			return redirect(path? path: '/');
		}
		else {
			$('#err').html('Tài khoản hoặc mật khẩu không đúng');
			return;
		}
	} catch (e) {
		alert(e.response);
	}
}