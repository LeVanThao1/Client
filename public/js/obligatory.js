// const regForm = document.querySelector('form#register');
// const errors_el = document.querySelector('form#register .errors');
// let token = localStorage.getItem('token');
// regForm.addEventListener('submit', validateRegisterForm);
// // const images = document.querySelector('.custom-file-input');
// // images.addEventListener('change', handleFiles)
// // let fileList;

// // function handleFiles() {
// //     console.log(this.files)
// //     fileList = this.files; /* now you can work with the file list */
// //   }
// async function validateRegisterForm (e) {
//     e.preventDefault();
    
    // const productIDUpload = document.querySelector('#register #productIDUpload');
    // const productName = document.querySelector('#register #productName');
    // const producerIDUp = document.querySelector('#register #producerIDUp');
    // const typeProductIDUp = document.querySelector('#register #typeProductIDUp');
    // const entryPrice = document.querySelector('#register #entryPrice');
    // const sellPrice = document.querySelector('#register #sellPrice');
    // const amountDetailPro = document.querySelector('#register #amountDetailPro');
    //const dateUpdateUp = document.querySelector('#register #dateUpdateUp');
    //const descriptionUp = document.querySelector('#register #descriptionUp');
    
//     let errors = [];
 
//     const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     const num_reg= /^([0-9])/;
    
    // if (productIDUpload.value == "") {
    //     errors.push({text: "Product ID", el: productIDUpload});
    // }
    
    // if (productName.value == "") {
    //     errors.push({text: "tên sản phẩm", el: productName});
    // }

    // if (producerIDUp.value == "") {
    //     errors.push({text: "producer ID", el: producerIDUp});
    // }

    // if (typeProductIDUp.value == "") {
    //     errors.push({text: "product type ID", el: typeProductIDUp});
    // }

    // if (entryPrice.value == "") {
    //     errors.push({text: "giá nhập", el: entryPrice});
    // }else if (!num_reg.test(entryPrice.value)){
    //     errors.push({text: "giá nhập", el:entryPrice});
    // }

    // if (sellPrice.value == "") {
    //     errors.push({text: "giá bán", el: sellPrice});
    // }else if (!num_reg.test(sellPrice.value)){
    //     errors.push({text: "giá bán", el:sellPrice});
    // }

    // if (amountDetailPro.value == "") {
    //     errors.push({text: "số lượng", el: amountDetailPro});
    // }else if (!num_reg.test(amountDetailPro.value)){
    //     errors.push({text: "số lượng", el:amountDetailPro});
    // }
    
    // if (errors.length > 0) {
    //     handle_errors(errors);
    //     return false;
    // }
    
    // alert('SUBMITTED');
    //     return true;
    // }

    // function handle_errors(errs) {
    //     let str = "Bạn chưa điền thông tin vào các cột: ";    
    //     errs.map((er) => {
    //     er.el.classList.add('error');
    //     str += er.text + ", ";
    //     });
    
//         errs[0].el.focus();
        
//         let error_el = document.createElement('div');
//         error_el.classList.add('error');
//         error_el.innerText = str;
        
//         error_el.addEventListener('click', function () {
//             errors_el.removeChild(error_el);
//         });
        
//         errors_el.appendChild(error_el);
    // }