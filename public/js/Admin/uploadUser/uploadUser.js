$(document).ready(function () {
    $('#uploadUser').submit(function (event) {
        axios.post(`http://localhost:3001/api/v1/users`, {

        }).then(res => {
            if (res.data.message === 'update successful' && alert('Thêm user thành công'));
        });
    })
})