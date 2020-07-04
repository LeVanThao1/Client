

$(document).ready(function(){
    loadCategory();
});

async function loadCategory() {
    // const category = document.querySelector('.category-list');
    const dataCT = await axios.get(`http://localhost:3001/api/v1/type\_product`);
    console.log(dataCT);
    dataCT.data.listPT.forEach(ct => {
        $('.category-list').append(
            `<li class="category-item ct-${ct._id}">
                <div class="category-item__link">${ct.name}</div>
            </li>`
        )
        $(`.ct-${ct._id}`).click(() => {
            localStorage.setItem('ct',`${ct._id}`);
            redirect('homepage.html')
            // loadProduct(`http://localhost:3001/api/v1/products/type/${ct._id}`)
            // loadPagination(`http://localhost:3001/api/v1/products/type/${ct._id}?`)
        })
    });
}