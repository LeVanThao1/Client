$(document).ready(function () {
    loadTypeProductList();
});

async function loadTypeProductList() {
    const getDataTypeProducts = await axios.get(`http://localhost:3001/api/v1/type_product`);
    const ProductTypes = getDataTypeProducts.data.listPT;
    $('tbody').empty().append(
        `<tr class="heading typeproduc">
        <td class="cell-time align-right">
          <!-- <input type="checkbox" class="inbox-checkbox checkbox2"> -->
        </td>
        <td class="cell-check">
          Mã sản phẩm
        </td>
        <td class="cell-icon">
          Tên sản phẩm
        </td>
        <!-- <td class="cell-author hidden-phone hidden-tablet">
                                Mã kho
                            </td> -->
        <td>

        </td>
        <td>

        </td>

      </tr>`
    );
    ProductTypes.forEach(pt => {
        $('tbody').append(
            `<tr class='unread'>
                <td class='cell-check'>
                </td>
                <td class='cell-check'>
                    ${pt._id}
                </td>
                <td class='cell-icon'>
                    ${pt.name}
                </td>
                <td>
                    <div class="btn btn-primary pull-right view-${pt._id}">
                        Sửa
                    </div>
                </td>
                <td>
                    <div class="btn btn-primary pull-right delete-${pt._id}">
                        Xóa
                    </div>
                </td>
            </tr>`
        );
        $(`.view-${pt._id}`).click(() => {
            redirect(`typrProductDetails.html?id=${pt._id}`)
        });
        $(`.delete-${pt._id}`).click(() => {
            axios.delete(`http://localhost:3001/api/v1/type_product/${pt._id}`)
                .then(res => {
                    if (res.status === 200 && alert(res.data.message));
                });
        });
    });
}