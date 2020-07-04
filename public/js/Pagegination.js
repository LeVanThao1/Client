let getAllProduct;
// const url = 'http://localhost:3001/api/v1/products';
let page;
async function getProducts(url) {
    getAllProduct = await axios.get(url);
    console.log(getAllProduct)
}
$(document).ready(function () {
    // getProducts();
    loadPagination('http://localhost:3001/api/v1/products?');
})
const limit = 4;
let currentPage = 1;
async function loadPagination (url) {
    console.log(url)
    await getProducts(url);
    $('.home-product__pagination').html(`
        <li class="pagination-item prev">
            <div style="cursor: pointer" class="pagination-item__link">
                <i class="pagination-item__icon fas fa-angle-left"></i>
            </div>
        </li>`
    );
    $('.prev').click(() => {
        if(currentPage <= 1) return;
        --currentPage;
        const itemPage = document.querySelectorAll('.pagination-item');
        itemPage.forEach((p, i) =>{
            if(i === 0 || i === itemPage.length-1) return;
            p.classList.remove('pagination-item--active');
        })
        loadProduct(`${url}page=${currentPage}&limit=4`);
        $(`.page-${currentPage}`).addClass('pagination-item--active')
    })
    page = Math.ceil(getAllProduct.data.data.length / limit);
    console.log(page)
    for(let i = 1; i <= page; i++) {
        console.log(1)
        $('.home-product__pagination').append(`
            <li class="pagination-item  page-${i} ${i===1? "pagination-item--active": ""}" data-page="${i}">
                <div style="cursor: pointer" class="pagination-item__link">${i}</div>
            </li>
        `)
    }
    
    $('.home-product__pagination').append(`
        <li class="pagination-item next">
            <div style="cursor: pointer" class="pagination-item__link">
                <i class="pagination-item__icon fas fa-angle-right"></i>
            </div>
        </li>`
    );
    $('.next').click(() => {
        if(currentPage >= page) return;
        ++currentPage;
        const itemPage = document.querySelectorAll('.pagination-item');
        itemPage.forEach((p, i) =>{
            if(i === 0 || i === itemPage.length-1) return;
            p.classList.remove('pagination-item--active');
        })
        loadProduct(`${url}page=${currentPage}&limit=4`);
        $(`.page-${currentPage}`).addClass('pagination-item--active')
    })

    removeClassActive(url);
}

function removeClassActive(url) {
    const pages = document.querySelectorAll('.pagination-item');
    pages.forEach((p, i) =>{
        if(i === 0 || i === pages.length-1) return;
        p.addEventListener('click', function () {
            pages.forEach((p2, a) => {
                p2.classList.remove('pagination-item--active');
            })
            p.classList.add('pagination-item--active');
            if(currentPage === this.dataset.page) return;
            currentPage = this.dataset.page;
            loadProduct(`${url}page=${currentPage}&limit=4`);
            
        })

    })
}