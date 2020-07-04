$(document).ready(function () {
    loadNSX();
    loadTypeProduct();
})

async function loadTypeProduct() {
    $('select[name="typeProduct"]').html(`<option value="0">Chọn mã loại sản phẩm</option>`)
    const types = await axios.get('http://localhost:3001/api/v1/type_product');
    console.log(types.data.listPT)
    types.data.listPT.forEach((pt) => {
        $('select[name="typeProduct"]').append(`
            <option value="${pt._id}">${pt.name}</option>
        `)
    })
}
async function loadNSX() {
    $('select[name="NSX"]').html(`<option value="0">Chọn mã nhà sản xuất</option>`)
    const nsx = await axios.get('http://localhost:3001/api/v1/nsx');
    console.log(nsx.data.listPT)
    nsx.data.listNSX.forEach((pt) => {
        $('select[name="NSX"]').append(`
            <option value="${pt._id}">${pt.name}</option>
        `)
    })
}