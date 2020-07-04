$(document).ready(function () {
    loadOrderUser();
})

async function loadOrderUser() {
    const userId = localStorage.getItem('userId');
    const data = await axios.get(`http://localhost:3001/api/v1/order/user/${userId}`);
    const orders = data.data.order;
    if(orders.length === 0) {
        $('tbody').html('<tr><td col-span="9" style="font-size: 18px; color: gray; text-align:center; background-color: #f5f5f5;">Hiện tại chưa có đơn hàng nào cả </td></tr>')
        return;
    }
    $('tbody').html('')
    orders.forEach(or => {
        $('tbody').append(`
            <tr data-i="${or._id}" style="cursor:pointer">
                <td scope="row" style="font-weight: 500">${or._id.slice(15)}</td>
                <td>${or.createdAt.slice(0,10)}</td>
                <td>${or.dateOfDelivery ? or.dateOfDelivery.slice(0,10): "Đang xử lý"}</td>
                <td>${or.dateOfRecive ? or.dateOfRecive.slice(0,10): `Đang xử lý`}</td>
                <td>${or.state}</td>
                <td>${or.user.fullname}</td>
                <td>${or.recipientPhone}</td>
                <td>${or.recipientAddress}</td>
                <td>${formatMoney(or.total)}</td>
            </tr>
        `);
        $(`tr[data-i="${or._id}"]`).click(() =>{
            redirect(`chiTietDonHang.html?id=${or._id}`);
        })
    });
}