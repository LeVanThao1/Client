$(document).ready(function(){
    loadUsers();
})

async function loadUsers() {
    const getDataProdcts = await axios.get(`http://localhost:3001/api/v1/products`);
    const products = getDataProdcts.data.listProduct;
    console.log(products);
    products.forEach(product => {
        console.log(typeof product.createdAt)
        $('tbody').append(
            `<tr class="unread">
            <a href="#">
              <td class="cell-check">
                    ${product._id}
                    </td>
                    <td class="cell-check">
                       
                    </td>
                    <td class="cell-icon">
                        ABC123
                    </td>
                    <td class="cell-author hidden-phone hidden-tablet">
                        Dell
                    </td>
                    <td class="cell-title">
                        100
                    </td>
                    <td class="cell-title">
                      100
                  </td>
                    <td class="cell-icon hidden-phone hidden-tablet">
                      Jan 02 2020
                    </td>
                    <td>
                      <div class="pull-right">
                          <a href="productDetails.html" class="btn btn-primary">Sửa</a>
                      </div>
                  </td>
                  <td>
                      <div class="pull-right">
                          <a href="#" class="btn btn-primary">Xoá</a>
                      </div>
                  </td>                                                 
                 </a>                      
            </tr>`
        )
    });

}
