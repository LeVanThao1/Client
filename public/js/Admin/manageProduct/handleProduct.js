

$(document).ready(function () {
    loadProductList();
});

async function loadProductList() {
    const getDataProducts = await axios.get(`http://localhost:3001/api/v1/products`);
    const Products = getDataProducts.data.data;
    $('tbody').empty().append(
        `<tr class="heading">
        <td class="cell-time align-right">
          <!-- <input type="checkbox" class="inbox-checkbox checkbox2"> -->
        </td>
        <td class="cell-check">
          Mã SP
        </td>
        <td class="cell-icon">
          Tên SP
        </td>
        <td class="cell-author hidden-phone hidden-tablet">
          Mã NSX
        </td>
        <td class="cell-title">
          Số lượng
        </td>
        <td class="cell-title">
          Đơn giá
        </td>
        <td class="cell-icon hidden-phone hidden-tablet">
          Ngày cập nhật
        </td>
        <td></td>
        <td></td>
      </tr>`
    );
    Products.forEach(product => {
        console.log(2);
        $('tbody').append(
            `<tr class='unread'>
                <td class='cell-check'>
                </td>
                <td class='cell-check'>
                    ${product._id}
                </td>
                <td class='cell-icon'>
                    ${product.name}
                </td>
                <td class="cell-author hidden-phone hidden-tablet">
                    ${product.NSX._id}
                </td>
                <td class="cell-title">
                    ${product.amount}
                </td>
                <td class="cell-title">
                    ${product.price}
                </td>
                <td class="cell-icon hidden-phone hidden-tablet">
                    ${product.updatedAt}
                </td>
                <td>
                    <div class="btn btn-primary pull-right view-${product._id}">
                        Sửa
                    </div>
                </td>
                <td>
                    <div class="btn btn-primary pull-right delete-${product._id}">
                        Xóa
                    </div>
                </td>
            </tr>`
        );
        $(`.view-${product._id}`).click(() => {
            redirect(`productDetails.html?id=${product._id}`)
        });
        $(`.delete-${product._id}`).click(() => {
            axios.delete(`http://localhost:3001/api/v1/products/${product._id}`)
                .then(res => {
                    if (res.status === 200 && alert(res.data.message));
                });
        });
    });
}