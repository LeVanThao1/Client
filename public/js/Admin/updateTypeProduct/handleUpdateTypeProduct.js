const typeProductId = window.location.search.slice(4);
async function loadProductDetail() {
    const typeProductDetail = await axios.get(`http://localhost:3001/api/v1/type_product/${typeProductId}`);
    console.log(typeProductDetail);
    $('#productNameType').val(typeProductDetail.data.pt.name);
}
$(document).ready(function () {
    loadProductDetail();
    $('#register').submit(function (event) {
        axios.put(`http://localhost:3001/api/v1/type_products/${typeProductId}`, {
            name: $('#productNameType').val(),
        }).then(res => {
            if (res.status === 200 && alert(res.data.message));
        });
    })
});