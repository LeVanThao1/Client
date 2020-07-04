$(document).ready(function(){
    loadUsers();
})

async function loadUsers() {
    const getDataUsers = await axios.get(`http://localhost:3001/api/v1/users`);
    const users = getDataUsers.data.listUser;
    console.log(users);
    users.forEach(user => {
        console.log(typeof user.createdAt)
        $('tbody').append(
            `<tr class="unread">
                <td class="cell-check">
                    ${product._id}
                </td>
                <td class="cell-check">
                    ${product._name}
                </td>

                <td class="cell-author hidden-phone hidden-tablet">
                    ${user.fullname}
                </td>
                <td class="cell-title">
                    0123456789
                </td>
                <td class="cell-icon hidden-phone hidden-tablet">
                    <i class="far fa-eye"></i>
                </td>
                <td class="cell-time align-right">
                    ${user.createdAt ? user.createdAt.slice(0,10): 'Jan 02 2020'}
                </td>                                              
            </tr>`
        )
    });

}

// `<tr class="unread">
//     <td class="cell-check">
//     <input type="checkbox" class="inbox-checkbox">
//     </td>
//     <td class="cell-check">
//     ABC123
//     </td>

//     <td class="cell-author hidden-phone hidden-tablet">
//         John Wick
//     </td>
//     <td class="cell-title">
//         0123456789
//     </td>
//     <td class="cell-icon hidden-phone hidden-tablet">
//         <i class="far fa-eye"></i>
//     </td>
//     <td class="cell-time align-right">
//         Jan 02 2020
//     </td>                                              
// </tr>`