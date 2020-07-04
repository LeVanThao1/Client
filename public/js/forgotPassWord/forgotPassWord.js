        const form = document.getElementById('formChangePassword');
        const confirm_password = document.getElementById('confirm_password');
        const new_password = document.getElementById('password');
        console.log(new_password);
        console.log(confirm_password);
        // Validate form change password
        form.addEventListener('submit',checkInputs);

        function checkInputs(e){
            e.preventDefault();
            const newPassValue = new_password.value.trim();
            const confirmPassValue = confirm_password.value.trim();
            console.log(newPassValue);
            let ck = 0;
            if(newPassValue === ''){
                setErrorFor(new_password,'Mật khẩu không được để trống');
            }else if(!isPassword(newPassValue)){
                setErrorFor(new_password,'Tối thiểu 8 kí tự. Bao gồm 1 chữ hoa, 1 chữ thường và 1 số');
            }else{
                setSuccessFor(new_password);
                ck = 1;
            }

            if(ck === 1){
                if(confirmPassValue === ''){
                    setErrorFor(confirm_password,'Mật khẩu không được để trống');
                }else if(confirmPassValue !== newPassValue){
                    setErrorFor(confirm_password,'Mật khẩu không trùng khớp');
                }else {
                    setSuccessFor(confirm_password);
                }
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