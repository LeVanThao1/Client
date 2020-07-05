        const form = document.getElementById('formChangePassword');
        const confirm_password = document.getElementById('confirm_password');
        const new_password = document.getElementById('password');
        const email = localStorage.getItem('email');
        const code = localStorage.getItem('code');
        if(!email || !code) {
            redirect('forgotPW.html')
        }
        console.log(new_password);
        console.log(confirm_password);
        // Validate form change password
        form.addEventListener('submit',checkInputs);

        function checkInputs(e){
            let error = false;
            e.preventDefault();
            const newPassValue = new_password.value.trim();
            const confirmPassValue = confirm_password.value.trim();
            console.log(newPassValue);
            let ck = 0;
            if(newPassValue === ''){
                setErrorFor(new_password,'Mật khẩu không được để trống');
                error = true;
            }else if(!isPassword(newPassValue)){
                setErrorFor(new_password,'Tối thiểu 8 kí tự. Bao gồm 1 chữ hoa, 1 chữ thường và 1 số');
                error = true;
            }else{
                setSuccessFor(new_password);
                ck = 1;
                error = false;
            }

            if(ck === 1){
                if(confirmPassValue === ''){
                    setErrorFor(confirm_password,'Mật khẩu không được để trống');
                    error = true;
                }else if(confirmPassValue !== newPassValue){
                    setErrorFor(confirm_password,'Mật khẩu không trùng khớp');
                    error = true;
                }else {
                    setSuccessFor(confirm_password);
                    error = false;
                }
            }

            if(!error) {
                axios.post('https://server-yourlap.herokuapp.com/api/v1/users/reset-password', {
                    email,
                    code,
                    newPassword: newPassValue
                }).then((res) => {
                    if(res.data.message === 'change password successful') {
                        localStorage.removeItem('email');
                        localStorage.removeItem('code');
                        redirect('loginUser.html');
                        return;
                    } else {
                        console.log(res)
                        $('#err').html('Có lỗi. Vui lòng thử lại');
                        return;
                    }
                })
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