
function checkLoginState() {
    FB.getLoginStatus(async function(response) {
        // statusChangeCallback(response);
        // alert('Login FB successfully.');
        const accessToken = response.authResponse.accessToken;
        console.log(accessToken)
        const resultLogin = await axios.post('http://localhost:3001/api/v1/loginFB', {
            accessToken
        });
        console.log(resultLogin);
        if (resultLogin.status === 201) {
            const token = resultLogin.data.access_token;
			const userId = resultLogin.data.userId;
            const username = resultLogin.data.username;
            localStorage.setItem('token', token);
			localStorage.setItem('userId', userId);
            localStorage.setItem('username', username);
            window.location = "https://61637942db13.ngrok.io/homepage.html";
        }
        else
            alert("Login not successfully");
    });
}

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '910855292727205',
      cookie     : true,
      xfbml      : true,
      version    : 'v7.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
