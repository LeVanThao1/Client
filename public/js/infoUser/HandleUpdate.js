$('.update').click(()=> {
    const userId = localStorage.getItem('userId');
    const check = document.querySelector('#submit_change_password').checked === true;
    const fullname = $('#user_name').val();
    // const email = $('#user_email').val();
    const phoneNumber = $('#user_sdt').val();
    const gender = document.querySelector('#male').checked === true? "Male": "Female";
    const dateOfBirth = new Date($('#user_date').val());
    const address = $('#user_address').val();
    axios.put(`http://localhost:3001/api/v1/users/${userId}`, {
        fullname,
        phoneNumber,
        gender,
        dateOfBirth,
        address
    }).then((res) => {
        if(res.data.message === 'update successful') {
            if(check) {
                const oldPw = $('#old_password').val();
                const newPw = $('#password').val();
                axios.put(`http://localhost:3001/api/v1/changepw/${userId}`, {
                    oldPw,
                    newPw
                }).then((res) => {
                    console.log(res)
                    if(res.data.message === 'update password success') {
                        $('#succ').html('Cập nhật thành công');
                        return;
                    }
                    else {
                        $('#err').html('Mật khẩu cũ không đúng');
                        return;
                    }
                })
            }
            else {
                $('#succ').html('Cập nhật thành công');
            }
        }
        else {
            $('#err').html('Cập nhật không thành công');
            return;
        }
    });
})

