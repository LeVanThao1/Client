$(document).ready(function () {
    $('#uploadProduct').submit(function (event) {
        event.preventDefault();
        axios.post(`http://localhost:3001/api/v1/products`, {
            name: $('#name').val(),
            typeProduct: $('#typeProduct selectt').val(),
            NSX: $('#NSX selectt').val(),
            amount: $('#amount').val(),
            entryPrice: $('#entryPrice').val(),
            price: $('#price').val(),
            promotion: $('#promotion').val()
        }).then(res => {
            if (res.status === 200 && alert('Thêm sản phẩm thành công'));
        });
    })
})