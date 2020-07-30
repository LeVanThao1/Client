
var length = 0;
// if(!userId) {
//     $('.header__cart-list ').hide();
// }
// else {
//     $('.header__cart-list ').show();
// }
async function loadCart2(pd) {
    // console.log(products)
    // products.map(pd => {
    //     console.log(pd)
    console.log(pd)
        $('.header__cart-list-item').append(`
            <li class="header__cart-item id-${pd.productId}">
                <img src=${pd.images[0].url}
                    alt="Photo" class="header__cart-img">
                <div class="header__cart-item-info">
                    <div class="header__cart-item-head">
                        <h5 class="header__cart-item-name">${pd.name}</h5>
                        <div class="header__cart-item-buy-wrap">
                            <span class="header__cart-item-price">${formatMoney(pd.price)}</span>
                            <span class="header__cart-item-multipy">x</span>
                            <span class="header__cart-item-quantity">${pd.amount}</span>
                        </div>
                    </div>
                    <div class="header__cart-item-body">
                        <span class="header__cart-item-description">Phân loại: ${pd.type}</span>
                        <span class="header__cart-item-btnremove del-${pd.productId}">Xóa</span>
                    </div>
                </div>
            </li>
        `)
        $(`.del-${pd.productId}`).click(()=> {
            const userId = localStorage.getItem('userId')
            const result = axios.put('https://server-yourlap.herokuapp.com/api/v1/cart/deletesp', {
                    userId: userId,
                    productId: pd.productId
            }).then((res) => {
                length--;
                $(`.id-${pd.productId}`).remove();
                $('.header__cart-notice').html(`${length}`)
                // loadCart()
            })
        })
}
async function loadCart() {
    const userId = localStorage.getItem('userId');
    $('.header__cart-list-item').html('');
    const cart = await axios.get(`https://server-yourlap.herokuapp.com/api/v1/cart/${userId}`);
    if(!cart.data.cart) {
        $('.header__cart-list').html(
            `<img src="../assets/img/noCart.png" alt="No-cart" class="header__cart-no-cart-img">
            <span class="header__cart-list-no-cart-msg">Chưa có sản phẩm</span>`)
            $('.header__cart-notice').html(`${length}`);
            return;
    }
    else {
        const getCart = cart.data.cart.cart;
    console.log(cart);
    length = 0;
    for(let i = 0; i < getCart.length; i++) {
        length += getCart[i].amount;
    }
    console.log(length)
    if(length === 0) {
        $('.header__cart-list').html(
        `<img src="../assets/img/noCart.png" alt="No-cart" class="header__cart-no-cart-img">
        <span class="header__cart-list-no-cart-msg">Chưa có sản phẩm</span>
        <a href="#" class="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a>`)
        $('.header__cart-notice').html(`${length}`);

        $('.header__cart-view-cart').click(() => {
            redirect('cart.html')
        })
        return;
    }
    else {
        $('.header__cart-notice').html(`${length}`);
        $('.header__cart-list ').html(`<ul class="header__cart-list-item"></ul>
        <a href="https://your-lap.herokuapp.com/cart.html" class="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a>`)

        $('.header__cart-view-cart').click(() => {
            redirect('cart.html')
        })
    // $('.fa-shopping-cart').click(() => {
    //     const userId = localStorage.getItem('userId');
    //     console.log(userId)
    //     if(userId) {
    //         console.log('1')
    //     }else {
    //         console.log('2')
    //     }
    // })
    console.log(getCart);
    const a = getCart.map((pd,cb) => {
        console.log(pd)
         axios.get(`https://server-yourlap.herokuapp.com/api/v1/products/${pd.productId}`).then(function (response) {
             console.log(response)
            const product = {
                productId: pd.productId,
                name: response.data.product.name,
                images: response.data.product.images,
                price: response.data.product.price,
                amount: pd.amount,
                type:  response.data.product.typeProduct.name
            }
            loadCart2(product);
        });
    })
    }
    }
}