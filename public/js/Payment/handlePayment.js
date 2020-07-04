$(document).ready(function () {
    handlePayment()
})
const products = JSON.parse(localStorage.getItem('products'));
const token = localStorage.getItem('token')
async function handlePayment() {
    $('.payment').click(() => {
        const name = $('#name').val();
        const phone = $('#phone').val();
        const city = document.querySelector('#provinces').selectedOptions[0].dataset.name;
        const district = document.querySelector('#district').selectedOptions[0].dataset.name;
        const warn = $('#warn').val();
        const street = $('#street').val();
        if(!name || !phone || !city || !district || !warn || !street) {
            alert('field nhap chua du');
            return;
        }
        const paymentAddress = {
            recipientName: name,
            recipientPhone: phone,
            recipientAddress: `${city}, ${district}, ${warn}, ${street}`,
            products
        }
        axios.post(`http://localhost:3001/api/v1/order?token=${token}`, paymentAddress).then((res) => {
            if(res.data.createdOrder ) {
                alert('thanh cong');
                localStorage.removeItem('products');
                redirect('donhangOfOneUser.html');
            }
            else {
                console.log(res)
                alert('that bai')
            }
        })
        
    })
}