let productsList;
$(document).ready(function(){
    loadProduct();
});

async function loadProduct(url="http://localhost:3001/api/v1/products?page=1&limit=4") {
    // const category = document.querySelector('.category-list');http://localhost:3001/api/v1/products
    console.log(`qqeeqw`)
    $('.allProduct').html('');
    const dataCT = await axios.get(url);
    if(dataCT.data.data.length === 0) {
        $('.allProduct').html('<h3 style="text-align: center; font-size: 14px; width: 100%;">Không có kết quả phù hợp</h3>');
    }
    localStorage.setItem('listProduct', JSON.stringify(dataCT.data.data))
    console.log(dataCT);
    // productsList = dataCT.data.ListProducts;
    dataCT.data.data.forEach(pr => {
        const checkPr = (pr.amount > 0);
        $('.allProduct').append(
            `<div class="grid__column-3">
            <div class="home-product-item item-${pr._id}" href="#">
                <a href="#" class="home-product-wrapp">
                    <div class="home-product-item__img"
                    style="background-image: url(${pr.images[0].url});">
                </div>
                <h4 class="home-product-item__name">${pr.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${formatMoney(pr.price)}</span>
                    <span class="home-product-item__price-current">${formatMoney(moneyAfterDiscount(pr.price,10))}</span>
                </div>
                </a>
                
                <div class="home-product-item__action">
                    <!-- Sản phẩm được like thì thêm class ...--liked vào -->
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart" onclick="liked(this)"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart" onclick="unliked(this)"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">${pr.amount > 0? "Còn hàng": "Hết hàng"}</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__origin-brand">${pr.NSX.name}</span>
                    <span class="home-product-item__origin-name">${pr.NSX.nation}</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">10%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </div>
        </div>`
        )
        $(`.item-${pr._id}`).click(() => {
            redirect(`chitiet.html?id=${pr._id}`)
        })
    });
}