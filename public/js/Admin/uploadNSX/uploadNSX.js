$(document).ready(function () {
    $('#uploadProducer').submit(function (event) {
        console.log(1);
        axios.post(`http://localhost:3001/api/v1/nsx`, {
            name: $('#producerNameUp').val(),
            nation: $('#nation').val()
        }).then(res => {
            console.log(res);
            if (res.status === 200 && alert('Thêm nhà sản xuất thành công'));
            // location.reload();
        });
    })
})