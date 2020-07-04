$(document).ready(() => {
    loadInfo()
});

async function loadInfo() {
    const userId = localStorage.getItem('userId');
    const data = await axios.get(`http://localhost:3001/api/v1/users/${userId}`);
    if(!data.data.user) {
        redirect('loginUser.html');
        return;
    }
    const user = data.data.user;
    $('#user_name').val(user.fullname);
    $('#user_email').val(user.email);
    $('#user_sdt').val(user.phoneNumber? user.phoneNumber: "");
    $('#male').checked = false;
    $('#female').checked = false;
    // user.gender? user.gender === "Male"? $('#male').checked = true:  $('#female').checked = true:"";
    user.gender? user.gender === "Male"? document.querySelector('#male').checked = true:  document.querySelector('#female').checked = true:"";
    $('#user_date').val(user.dateOfBirth? user.dateOfBirth.slice(0,10) : "");
    $('#user_address').val(user.address ? user.address : "");
    $('#user_registration_date').val(user.createdAt.slice(0,10));
}