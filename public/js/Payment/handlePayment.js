
$(document).ready(function () {
    handlePayment()
})
const products = JSON.parse(localStorage.getItem('products'));
const token = localStorage.getItem('token');

function CheckName(name) {
    for(let i = 0; i< name.length; i++){
        if(name.charCodeAt(i)<31 || (name.charCodeAt(i)>33 && name.charCodeAt(i)<65) || (name.charCodeAt(i)>90 && name.charCodeAt(i)<97) || name.charCodeAt(i)>122)
            return false;
    }
    return true;
}

function CheckPhoneNumber(phone) {
    for(let i = 0; i< phone.length; i++){
        if(phone.charCodeAt(i)<48 || phone.charCodeAt(i)>57)
            return false;
    }
    return true;
}

function CheckWarn_Street(input) {
    for(let i = 0; i< input.length; i++){
        if(input.charCodeAt(i)>=33 && input.charCodeAt(i)<=47 || input.charCodeAt(i)>=91 && input.charCodeAt(i)<=96 )
            return false;
    }
    return true;
}

async function handlePayment() {
    $('.payment').click(() => {
        const name = $('#name').val();
        const phone = $('#phone').val();
        const city = document.querySelector('#provinces').selectedOptions[0].dataset.name;
        const district = document.querySelector('#district').selectedOptions[0].dataset.name;
        const warn = $('#warn').val();
        const street = $('#street').val();

        if(!name || CheckName(name) === false || name.includes('^')){
            alert('Tên không hợp lệ ! ');
            return;
        }
        if(!phone || CheckPhoneNumber(phone) === false  ){
            alert('Số điện thoại không hợp lệ ! ');
            return;
        }
        if(!city){
            alert('Tỉnh/Thành phố không hợp lệ ! ');
            return;
        }
        if(!district){
            alert('Quận/Huyện không hợp lệ ! ');
            return;
        }
        if(!warn){
            alert('Phường/Xã không hợp lệ ! ');
            return;
        }
        if(!street){
            alert('Toà nhà/Tên đường không hợp lệ ! ');
            return;
        }
        if(name.length<2){
            alert('Tên phải có ít nhât 2 kí tự ! ');
            return;
        }
        if(phone.length < 10 || phone.length > 11){
            alert('Số điện thoại chỉ 10 hoặc 11 số ! ');
            return;
        }
        if(warn.length<2){
            alert('Phường/Xã phải có ít nhất 2 kí tự ! ');
            return;
        }
        if(street.length<2){
            alert('Toà nhà/Tên đường phải có ít nhất 2 kí tự ! ');
            return;
        }
        if(CheckWarn_Street(warn) === false){
            alert('Phường/Xã phải không được có kí tự đặc biệt ! ');
            return;
        }
        if(CheckWarn_Street(street) === false){
            alert('Toà nhà/Tên đường phải không được có kí tự đặc biệt ! ');
            return;
        }

        const paymentAddress = {
            recipientName: name,
            recipientPhone: phone,
            recipientAddress: `${city}, ${district}, ${warn}, ${street}`,
            products
        }
        axios.post(`https://server-yourlap.herokuapp.com/api/v1/order?token=${token}`, paymentAddress).then((res) => {
            if(res.data.createdOrder ) {
                alert('Đặt hàng thành công !!! ');
                localStorage.removeItem('products');
                redirect('donhangOfOneUser.html');
            }
            else {
                console.log(res)
                alert('Đặt hàng thất bại 😞 ')
            }
        })
        
    })
}