// $('.tinh').append(
// )
$(document).ready(function () {
    loadTinh()
})
async function loadTinh() {
    const tinh = await axios.get('https://thongtindoanhnghiep.co/api/city');
    console.log(tinh);
}