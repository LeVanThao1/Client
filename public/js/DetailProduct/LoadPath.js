const productId = window.location.search.slice(4);
const cartId = localStorage.getItem('cartId');
// const userId = localStorage.getItem('userId');

async function getCart() {
    const cart = await axios.get(`http://localhost:3001/api/v1/cart/${cartId}`);
    return cart;
}

async function getProduct(id = productId) {
    const product = await axios.get(`http://localhost:3001/api/v1/products/${productId}`);
    return product;
}
$(document).ready(function(){

    loadPath();
    loadProduct();
    // loadCart();
});


async function loadPath() {
    const product = await getProduct();
    $('.home-path__list').append(`
        <li class="home-path__item">
            <a href="http://localhost:3000/homepage.html?ct=${product.data.product.typeProduct._id}" class="home-path__link">
                <i class="home-path__icon fas fa-angle-right"></i>${product.data.product.typeProduct.name}
            </a>
        </li>
        <li class="home-path__item">
            <a href="#" class="home-path__link">
                <i class="home-path__icon fas fa-angle-right"></i>${product.data.product.name}
            </a>
        </li> 
    `)
}

async function loadProduct() {
    const product = await getProduct();
    console.log(product);
    $('.detail-product').append(`
        <img src="${product.data.product.images[0].url}"
        alt="Photo" class="detail-product__img">
        <div class="info-product">
        <h3 class="info-product__heading">${product.data.product.name}</h3>
        <div class="home-product-item__price info-product__price">
            <span class="home-product-item__price-old info-product__price--old">${formatMoney(moneyAfterDiscount(product.data.product.price,10))}</span>
            <span class="home-product-item__price-current info-product__price--current">${formatMoney(product.data.product.price)}</span>
        </div>
        <div class="info-product__summary">
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                CPU: Intel® Core™ i5 Coffee Lake (1.4 Ghz upto 3.9 GHz)
            </span>
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                RAM: 8GB LPDDR3
            </span>
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                HDD: 128GB SSD
            </span>
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                VGA: Intel Iris Plus Graphics 645
            </span>
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                Màn hình: 13.3inch Retina
            </span>
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                OS: macOS
            </span>
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                Cân nặng: 1.37 kg
            </span>
            <span class="item">
                <i class="info-product__icon fa fa-check-circle"></i>
                Tính năng: Touch ID
            </span>
        </div>
        <span class="info-product__guarantee">Bảo hành:	12 tháng (hàng chính hãng, bảo hành tại trung tâm bảo hành APPLE VN)</span>
        <div class="info-product__quantity">
            <span class="quantity-text">Số Lượng</span>
            <div class="quantity-show">
                <div class="quantity-show__control">
                    <button class="quantity-btn" id="quantity-btn__decrease">
                        <i class="quantity-icon fas fa-minus"></i>
                    </button>
                    <form action="#">
                        <input class="quantity-input" type="text" value="1">
                    </form>
                    <button class="quantity-btn" id="quantity-btn__increase">
                        <i class="quantity-icon fas fa-plus"></i>
                    </button>
                </div>
                <span class="quantity-available">${product.data.product.amount} sản phẩm sẵn có</span>
            </div>
        </div>
        <div class="info-product__buy">
            <button class="info-product__add--cart btn id-${product.data.product._id}" type="button">
                <i class="info-product__icon fas fa-cart-plus "></i>Thêm vào giỏ hàng
            </button>
            <button class="info-prodcut__buy btn" type="button">Mua ngay</button>
        </div>
    `)
    console.log($('.quantity-input').val());
    $(`.id-${product.data.product._id}`).click(() => {
        const userId = localStorage.getItem('userId');
        if(!userId) {
            localStorage.setItem('path', `chitiet.html?id=${product.data.product._id}`);
            redirect('loginUser.html')
            return;
        }
        const addCart = axios.put('http://localhost:3001/api/v1/cart/addsp', {
            userId: userId,
            productId: product.data.product._id,
            price: +product.data.product.price,
            amount: +$('.quantity-input').val()
        }).then(function(response) {
            if(response.status === 200) {
                length++;
                $('.header__cart-notice').html(`${length}`);
                alert('them thanh cong');
                loadCart();
            }
            else {
                alert('them that bai');
            }
        })
        
    })


    var btnGiam = document.getElementById('quantity-btn__decrease');
    var btnTang = document.getElementById('quantity-btn__increase');
    var inputValue = document.getElementsByClassName('quantity-input');
    btnGiam.addEventListener('click',function(){
        let value = inputValue[0].value;
        value = +value;
        if(value > 0)
            {
                inputValue[0].value = value - 1;
            }
    });
    btnTang.addEventListener('click',function(){
        let value = inputValue[0].value;
        value = +value;
        // var text = document.getElementsByClassName('quantity-available');
        // text = text[0].innerText;
        // currentValue = +currentValue;
        if(value < product.data.product.amount){
            inputValue[0].value = value + 1;
        }
    });
    $('.info-prodcut__buy').click( () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        localStorage.setItem('productId' , product.data.product._id);
        // const reponse = axios.get(`http://localhost:3001/api/v1/auth?token=${token}`).then((data) =>{
        //     console.log(data)
            if(!token || !userId) {
                localStorage.setItem('path', `cart.html`)
                redirect('loginUser.html')
            }
            else {
                // localStorage.setItem('pathprev', `${window.location.pathname.slice(1)+ window.location.search}`)
                axios.put('http://localhost:3001/api/v1/cart/addsp', {
                    userId: userId,
                    productId: product.data.product._id,
                    price: +product.data.product.price,
                    amount: +$('.quantity-input').val()
                }).then((data) => {
                    redirect(`cart.html`)
                })
                
            }
        // });
        
    })
}