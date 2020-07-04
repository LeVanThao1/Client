$(document).ready(function () {
    loadOrderDetail();
})

async function loadOrderDetail() {
    const id = window.location.search.slice(4);
    const data = await axios.get(`http://localhost:3001/api/v1/orderdetail/${id}`);
    console.log(data)
    const orderDetail = data.data.orderDetail;
    $('.info_bill').html(`
        <div class="info_bill__name">
            <span>Đơn hàng : </span>
            <span class="info_bill__name--id">${orderDetail.order._id.slice(15)}</span>
        </div>
        <div class="info_bill_states">
            <span>Trạng Thái : </span>
            <span class="info_bill_state">${orderDetail.order.state}</span>
        </div>
        <div class="info_bill__dates">
            <span>Ngày Đặt : </span>
            <span class="info_bill__date">${orderDetail.order.createdAt.slice(0,10)}</span>
        </div>
        <div class="info_bill__dates">
            <span>Ngày Giao : </span>
            <span class="info_bill__date">${orderDetail.dateOfDelivery ? orderDetail.dateOfDelivery.slice(0,10): "Đang xử lý"}</span>
        </div>
        <div class="info_bill__dates">
            <span>Ngày Nhận : </span>
            <span class="info_bill__date">${orderDetail.dateOfRecive ? orderDetail.dateOfRecive.slice(0,10): "Đang xử lý"}</span>
        </div>
        <div class="info_bill__prices">
            <span>Tổng Thành Tiền : </span>
            <span class="info_bill__price">${formatMoney(orderDetail.order.total)}</span>
        </div>
    `)
    $('.cart_content').html('')
    orderDetail.products.forEach(pr => {
        axios.get(`http://localhost:3001/api/v1/products/${pr.productId}`).then((res) => {
            console.log(res);
            const product = res.data.product;
            $('.cart_content').append(`
            <li class="cart_content-child">
                <img src="${product.images[0].url}"
                    alt="photo" class="cart_content__img">
                <div class="cart_content__info">
                    <a href="#" class="cart_content__heading">${product.name}</a>
                    <span class="cart_content__seller">Cung cấp bởi
                        <a href="#">${product.NSX.name}</a>
                    </span>
                    <div class="cart_content__details">
                        <div class="cart_content__price">
                            <span class="info_bil__quantity">
                                Số lượng
                                <span class="info_bil__quantity--current">${pr.amount}</span>
                            </span>
                            <span class="cart_content__price--current">
                                Giá sản phẩm
                                <span class="info_bill_current--price">${formatMoney(pr.price)}</span>
                            </span>
                            <span class="cart-content__discount-prices">
                                <span class="cart_content__price--old">Khuyến mãi</span>
                                <span class="cart_content__discout--percent">10%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
        `)
        })
        
    });
}