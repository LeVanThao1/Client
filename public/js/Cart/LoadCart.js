var total = 0;
let VAT = 0;

const userId = localStorage.getItem('userId')
$(document).ready(function(){
    loadCartProduct();
});

function loadTotal(total) {
    console.log(total);
    $('.total-tamp').html(`${formatMoney(total)}`)
    if(VAT > 0 ) {
        $('.total-main').html(`${formatMoney(total)}`)
        $('.note').html('(Không bao gồm VAT)')
    }
    else{
        $('.total-main').html(`${formatMoney(total * VAT + total)}`)
        $('.note').html('(Đã bao gồm VAT)')
    }
}

async function loadCartProduct2(pd) {
        $('.cart_content').append(`
        <li class="cart_content-child child-${pd.productId}">
        <img src=${pd.images[0].url}
            alt="photo" class="cart_content__img">
        <div class="cart_content__info">
            <a href="http://localhost:3000/chitiet.html?id=${pd.productId}" class="cart_content__heading">${pd.name}</a>
            <span class="cart_content__seller">Cung cấp bởi
                <a href="http://localhost:3000/homepage.html?ct=${pd.typeProduct}">${pd.NSX}</a>
            </span>
            <div class="cart_content__actions">
                <span class="cart_content__del del-${pd.productId}">Xóa</span>
                <span class="cart_content__buylater buylater-${pd.productId}">Để dành mua sau</span>
            </div>
        </div>
        <div class="cart_content__details">
            <div class="cart_content__price">
                <span class="cart_content__price--current">${formatMoney(pd.price)}</span>
                <span class="cart-content__discount-prices">
                    <span class="cart_content__price--old">${formatMoney(pd.price * 110 / 100)}</span>
                    <span class="cart_content__discout--percent">-10%</span>
                </span>
            </div>
            <div class="cart_content__quanity">
                <button class="cart_content__quanity-btn quantity-btn__decrease decrease-${pd.productId}">
                    <i class="cart_content__quanity-icon fas fa-minus"></i>
                </button>
                <form action="#">
                    <input class="cart_content__quanity-input quantity-${pd.productId}" type="text" value="${pd.amount}">
                </form>
                <button class="cart_content__quanity-btn quantity-btn__increase increase-${pd.productId}">
                    <i class="cart_content__quanity-icon fas fa-plus"></i>
                </button>
            </div>
        </div>
    </li>
        `)
    total += Math.ceil(pd.price * (100 - 10) / 100) * pd.amount;
    loadTotal(total);
    $(`.increase-${pd.productId}`).click(() => {
        if(+$(`.quantity-${pd.productId}`) >= pd.amountProduct) {
            return;
        }
        else {
            const result = axios.put(`http://localhost:3001/api/v1/cart/change`, {
            check: "true",
            userId: userId,
            productId: pd.productId
        }).then(() => {
            total += parseInt(pd.price);
            // const quantity = document.querySelector(`.quantity-${pd.productId}`);
            // quantity.value = ++pd.amount + "";
            $(`.quantity-${pd.productId}`).val(++pd.amount)
            loadTotal(total);
            loadCart()
        })
        }
    })
    $(`.decrease-${pd.productId}`).click(() => {
        console.log(+$(`.quantity-${pd.productId}`).val(), +$(`.quantity-${pd.productId}`).val() === 1);
        if(+$(`.quantity-${pd.productId}`).val() === 1)  {
            const result = axios.put('http://localhost:3001/api/v1/cart/deletesp', {
                    userId: userId,
                    productId: pd.productId
            }).then((res) => {
                $(`.child-${pd.productId}`).remove();
                loadCart();
            });
        }
        if(+$(`.quantity-${pd.productId}`).val() <= 0) {
            return;
        }
        else {
            const result = axios.put(`http://localhost:3001/api/v1/cart/change`, {
            check: "false",
            userId: userId,
            productId: pd.productId
        }).then(() => {
            total -= parseInt(pd.price);
            $(`.quantity-${pd.productId}`).val(--pd.amount)
            // const quantity = document.querySelector(`.quantity-${pd.productId}`);
            // quantity.value = --pd.amount;
            loadTotal(total);
            // loadCartProduct();
            loadCart();
        })
        }
    });
    $(`.del-${pd.productId}`).click(() => {
        const result = axios.put('http://localhost:3001/api/v1/cart/deletesp', {
                    userId: userId,
                    productId: pd.productId
        }).then((res) => {
            $(`.child-${pd.productId}`).remove();
            total -= pd.amount * pd.price;
            loadTotal(total);
            // loadCart();
        })
    })
    $(`.buylater-${pd.productId}`).click(() => {
        total -= pd.price * pd.amount;
        $(`.child-${pd.productId}`).remove();
        loadTotal(total);
    })
    $('.cart-total-prices__btn').click(() => {
        localStorage.setItem('products', prod)
    })
}
async function loadCartProduct() {
    const userId = localStorage.getItem('userId');
    const cart = await axios.get(`http://localhost:3001/api/v1/cart/${userId}`);
    const getCart = cart.data.cart.cart;
    total = 0
    console.log(getCart);
    if(getCart.length === 0) {
        $('.cart_content').append(`
            <div style="font-size: 18px; color: gray; text-align:center; background-color: #f5f5f5;">Chưa có sản phẩm nào trong giỏ hàng</div>
        `);
    }
    const a = getCart.map((pd,cb) => {
        console.log(pd)
         axios.get(`http://localhost:3001/api/v1/products/${pd.productId}`).then(function (response) {
            const product = {
                productId: pd.productId,
                amountProduct: response.data.product.amount,
                name: response.data.product.name,
                images: response.data.product.images,
                price: response.data.product.price,
                amount: pd.amount,
                type:  response.data.product.typeProduct.name,
                NSX: response.data.product.NSX.name,
                typeProduct:  response.data.product._id

            }
            loadCartProduct2(product);
        });

        loadTotal(total);

    $('.cart-total-prices__btn').click(() => {
        localStorage.setItem('products', JSON.stringify(getCart));
        redirect('thanhtoan.html')
    })
        console.log(total)
    })
}

// async function addPrice(){
//     var thanhTien = document.getElementsByClassName('cart-total-prices__cal-number');
//     console.log(thanhTien)
//     var giaMotSPs =document.getElementsByClassName('cart_content__price--current');
//     var result = 0;
//     for(var k = 0 ; k <giaMotSPs.length ; k++){
//         var giaMotSP = giaMotSPs[k];
//         var text = giaMotSP.innerText;
//         var currentValue = text.match(/\d/g).join('');
//         // console.log(currentValue);
//         var spLuongs = giaMotSP.parentElement.parentElement.querySelectorAll('.cart_content__quanity form input');
//         var spLuong = spLuongs[0].value;
//         // console.log(spLuong);
//         result += currentValue * spLuong;
//         // console.log(typeof result);
//     }  
//     var kq = ['đ'];
//     var d = 0;
//     // console.log(typeof (result % 10 + ''));
//     // kq.unshift((result % 10) + '');
//     // console.log(kq);
//     var previewResult = result +'';
//     previewResult = previewResult.split('');
//     var chiaHetChoBa = false;
//     console.log(chiaHetChoBa);
//     if(previewResult.length % 3 ==0){
//         chiaHetChoBa = true;
//     }
//     console.log(chiaHetChoBa);
//     while(result > 0) {
//         kq.unshift((result % 10) + '');
//         result = Math.floor(result / 10);
//         d++;
//         if(d == 3) {
//             kq.unshift('.');
//             d = 0;
//         }
//     }
//     if(chiaHetChoBa == true){
//         kq.shift();
//     }
//     kq = kq.join('');
//     thanhTien[0].innerText = kq;
//     var phaiTra = document.getElementsByClassName('cart-total-prices__cur-number');
//     phaiTra[0].innerHTML = `${kq}<i>(Đã bao gồm VAT nếu có)</i>`;

// }