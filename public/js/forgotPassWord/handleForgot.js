let typeEmail = false;
$(document).ready(() => {
    sendCode();
    verify();
})
async function sendCode() {
    
    $('#send').click((e) => {
        const email = $('#email').val();
        e.preventDefault();
        axios.put('https://server-yourlap.herokuapp.com/api/v1/sendcode', {
            email
        }).then(res => {
            console.log(res)
            if(res.data.message === 'We have sent the code') {
                $('#succ').html('Chúng tôi đã gửi mã mới đến email của bạn');
                typeEmail = true;
                localStorage.setItem('email', email);
            }
            else {
                $('#succ').html('Xảy ra lỗi vui lòng thử lại');
                typeEmail = false;
            }
        });
    })
}

async function verify () {
    $('#verify').click((e) => {
        const email = $('#email').val();
        if(!typeEmail) {
            $('#succ').html('')
            $('#err').html('Vui lòng nhập email và nhấn nhận mã code');
            $('#email').focus();
            return;
        }
        e.preventDefault();
        const code = $('input[name="vetify_email"]').val();
        if(code.length < 6) {
            $('#succ').html('')
            $('#err').html('Tối thiểu 6 kí tự');
            $('input[name="vetify_email"]').focus();
            return;
        }
        axios.put('https://server-yourlap.herokuapp.com/api/v1/verifyemail', {
            email,
            code
        }).then((res) => {
            if(res.data.message === 'update successful') {
                localStorage.setItem('code', code);
                redirect('forgotPassword.html');
                return;
            }
            else if(res.data.message === "CODE_EXPIRED") {
                $('#succ').html('')
                $('#err').html('Mã code hết hạn');
            }
            else {
                $('#succ').html('')
                $('#err').html('Mã code không hợp lệ. Vui lòng nhập lại');
            }
        });
        // console.log(result);
    });
    
}

