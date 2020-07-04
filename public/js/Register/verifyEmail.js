
// async function verify() {
    $('#verify').click((e) => {
        e.preventDefault();
        const email = localStorage.getItem('email');
        const code = $('input[name="vetify_email"]').val();
        if(code.length < 6) {
            $('#err').html('Tối thiểu 6 kí tự');
            $('input[name="vetify_email"]').focus();
            return;
        }
        axios.put('http://localhost:3001/api/v1/verifyemail', {
            email,
            code
        }).then((res) => {
            if(res.data.message === 'update successful') {
                localStorage.removeItem('email');
                redirect('loginUser.html');
                return;
            }
            else if(res.data.message === "CODE_EXPIRED") {
                $('#err').html('Mã code hết hạn');
            }
            else {
                $('#err').html('Mã code không hợp lệ. Vui lòng nhập lại');
            }
        });
        // console.log(result);
    });
    $('#send').click((e) => {
        const email = localStorage.getItem('email');
        e.preventDefault();
        axios.put('http://localhost:3001/api/v1/sendcode', {
            email
        }).then(res => {
            console.log(res)
            if(res.data.message === 'We have sent the code') {
                $('#succ').html('Chúng tôi đã gửi mã mới đến email của bạn');
            }
            else {
                $('#succ').html('Xảy ra lỗi vui lòng thử lại');
            }
        });
    })
    
   
    // if(result.data.data)
// }