const productId = window.location.search.slice(4);
async function loadProductDetail() {
    const productDetail = await axios.get(`http://localhost:3001/api/v1/products/${productId}`);
    $('#productIDUpload').val(productDetail._id);
    $('#productNameUp').val(productDetail.name);
    $('#producerIDUp').val(productDetail.NSX._id);
    $('#typeProductIDUp').val(productDetail.typeProduct._id);
    $('#entryPriceUp').val(productDetail.entryPrice);
    $('#sellPriceUp').val(productDetail.price);
    $('#amountUp').val(productDetail.amount);
    $('#dateUpdateUp').val(productDetail.updatedAt);
    $('#descriptionUp').val(productDetail.description);
}
$(document).ready(function () {
    loadProductDetail();
    $('#register').submit(function (event) {
        axios.put(`http://localhost:3001/api/v1/products/${productId}`, {
            name: $('#productNameUp').val(),
            description: $('#descriptionUp').val(),
            entryPrice: $('#entryPriceUp').val(),
            price: $('#sellPriceUp').val(),
            amount: $('#amountUp').val(),
            NSX: $('#producerIDUp').val(),
            typeProduct: $('#typeProductIDUp').val()
        }).then(res => {
            if (res.status === 200 && alert(res.data.message));
        });
    })
});