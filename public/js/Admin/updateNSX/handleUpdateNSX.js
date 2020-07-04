const NSXId = window.location.search.slice(4);

async function loadNSXDetail() {
    const NSXDetail = await axios.get(`http://localhost:3001/api/v1/nsx/${NSXId}`);
    console.log(NSXDetail);
    $('#productNameUp').val(NSXDetail.data.listNSX.name);
    $('#nation').val(NSXDetail.data.listNSX.nation);
}

$(document).ready(function () {
    loadNSXDetail();
    $('#producerDetails').submit(function (event) {
        axios.put(`http://localhost:3001/api/v1/nsx/${NSXId}`, {
            name: $('#productNameUp').val(),
            nation: $('#nation').val()
        }).then(res => {
            if (res.status === 200 && alert(res.data.message));
        });
    });
});