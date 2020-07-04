

$(document).ready(function(){
    loadCategory();
});

async function loadCategory() {
    // const category = document.querySelector('.category-list');
    const dataCT = await axios.get(`https://server-yourlap.herokuapp.com/api/v1/type\_product`);
    console.log(dataCT);
    dataCT.data.listPT.forEach(ct => {
        $('.category-list').append(
            `<li class="category-item ct-${ct._id}">
                <div class="category-item__link">${ct.name}</div>
            </li>`
        )
        $(`.ct-${ct._id}`).click(() => {
            localStorage.setItem('ct',`${ct._id}`);
            redirect('')
            // loadProduct(`https://server-yourlap.herokuapp.com/api/v1/products/type/${ct._id}`)
            // loadPagination(`https://server-yourlap.herokuapp.com/api/v1/products/type/${ct._id}?`)
        })
    });
}