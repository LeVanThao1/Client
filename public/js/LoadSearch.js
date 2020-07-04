const filterDate = document.querySelectorAll('.home-filter__btn');
const filterPrice = document.querySelectorAll('.select-input__item');
// console.log(filter);
const filterName = document.querySelector('.header__search-input');
let valueSearch = ""; 
let timeOutId;
filterDate.forEach((ft, i) => {
    ft.addEventListener('click', function() {
        filterDate.forEach((ft2) => {
            ft2.classList.remove('btn--primary');
            ft2.disabled = false;
        })
        if(this.dataset.i === '1') {
            loadProduct('http://localhost:3001/api/v1/products?date=false&page=1&limit=4');
            loadPagination(`http://localhost:3001/api/v1/products?date=false&`)
        }
        if(this.dataset.i === '0') {
            loadProduct('http://localhost:3001/api/v1/products?date=true&page=1&limit=4');
            loadPagination('http://localhost:3001/api/v1/products?date=true&')
        }
        ft.classList.add('btn--primary');
        this.disabled = true;
    })
})

filterPrice.forEach((ft, i) => {
    ft.addEventListener('click', function() {
        filterPrice.forEach((ft2) => {
            ft2.style.pointerEvents = "auto";
        })
        console.log(this.dataset.p)
        if(this.dataset.p === '1') {
            loadProduct('http://localhost:3001/api/v1/products?price=false&page=1&limit=4');
            loadPagination('http://localhost:3001/api/v1/products?price=false&')
        }
        if(this.dataset.p === '0') {
            loadProduct('http://localhost:3001/api/v1/products?price=true&page=1&limit=4');
            loadPagination('http://localhost:3001/api/v1/products?price=true&');
        }
        document.querySelector('.select-input__label').innerHTML = this.textContent;
        this.style.pointerEvents = "none";
    })
})

filterName.addEventListener('input', function (){
    valueSearch = this.value;
    if(timeOutId) {
        clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
        console.log(valueSearch);
        loadProduct(`http://localhost:3001/api/v1/products?search=${valueSearch}&page=1&limit=4`);
        loadPagination(`http://localhost:3001/api/v1/products?search=${valueSearch}&`);
    },300)
})