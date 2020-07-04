$(document).ready(function () {
    loadUserList();
});

async function loadUserList() {
    const getDataUsers = await axios.get(`http://localhost:3001/api/v1/users`);
    const Users = getDataUsers.data.listUser;
    $('tbody').empty().append(
        `<tr class="heading">
        <td class="cell-check selectall">
          <!-- <input type="checkbox" class="selectall" id="selectall"> -->
        </td>
        <td class="cell-icon">
          Mã KH
        </td>
        <td class="cell-author hidden-phone hidden-tablet">
          Tên khách hàng
        </td>
        <td class="cell-title">
          SĐT
        </td>
        <td class="cell-icon hidden-phone hidden-tablet">
          Email
        </td>
        <td class="cell-time align-right">
          Ngày đăng ký
        </td>
        <td></td>
        <td></td>
      </tr>
      `
    );
    Users.forEach(user => {
        $('tbody').append(
            `<tr class='unread'>
                <td class='cell-check'>
                </td>
                <td class='cell-check'>
                    ${user._id}
                </td>
                <td class='cell-author hidden-phone hidden-tablet'>
                    ${user.fullname}
                </td>
                <td class="cell-title">
                    ${user.phoneNumber}
                </td>
                <td class="cell-icon hidden-phone hidden-tablet">
                    ${user.email}
                </td>
                <td class="cell-time align-right">
                    ${user.createdAt}
                </td>
                <td>
                    <div class="btn btn-primary pull-right view-${user._id}">
                        Sửa
                    </div>
                </td>
                <td>
                    <div class="btn btn-primary pull-right delete-${user._id}">
                        Xóa
                    </div>
                </td>
            </tr>`
        );
        $(`.view-${user._id}`).click(() => {
            redirect(`userDetail.html?id=${user._id}`)
        });
        $(`.delete-${user._id}`).click(() => {
            axios.delete(`http://localhost:3001/api/v1/users/${user._id}`)
                .then(res => {
                    if (res.status === 200 && alert(res.data.message));
                });
        });
    });
}