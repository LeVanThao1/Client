$(document).ready(function () {
    $('#uploadProductType').submit(function (event) {
        event.preventDefault();
        axios.post(`http://localhost:3001/api/v1/type_product`, {
            name: $('#name').val()
        }).then(res => {
            if (res.status === 200 && alert('Thêm loại sản phẩm thành công'));
        });
    })
})