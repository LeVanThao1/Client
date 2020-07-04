const orderId = window.location.search.slice(4);
async function loadOrderDetail() {
    const orderDetail = await axios.get(`http://localhost:3001/api/v1/orders/${orderId}`);
    //fill data
}

$(document).ready(function () {
    loadOrderDetail();
    $('id cua form').submit(function (event) {
        axios.put(`http://localhost:3001/api/v1/orders/${orderId}`, {
            //data
        }).then(res => {
            if (res.status === 200 && res.data.message);
        });
    })
})