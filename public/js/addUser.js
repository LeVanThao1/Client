const regForm = document.querySelector('form#registerUser');
const errors_el = document.querySelector('form#registerUser .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
    e.preventDefault();
    
    const cusIDUser = document.querySelector('#registerUser #cusIDUser');
    const cusNameUser = document.querySelector('#registerUser #cusNameUser');
    const phoneNumberUser = document.querySelector('#registerUser #phoneNumberUser');
    const addUser = document.querySelector('#registerUser #addUser');
   
    
    let errors = [];
 
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const num_reg= /^([0-9])/;
    
    if (cusNameUser.value == "") {
        errors.push({text: "tên khách hàng", el: cusNameUser});
    }

    if (phoneNumberUser.value == "") {
        errors.push({text: "số điện thoại", el: phoneNumberUser});
    }

    if (addUser.value == "") {
        errors.push({text: "địa chỉ", el: addUser});
    }
    
    if (errors.length > 0) {
        handle_errors(errors);
        return false;
    }
    
    alert('SUBMITTED');
        return true;
    }

    function handle_errors(errs) {
        let str = "Bạn chưa điền thông tin vào các cột: ";   
        errs.map((er) => {
        er.el.classList.add('error');
        str += er.text + ", ";
        });
    
        errs[0].el.focus();
        
        let error_el = document.createElement('div');
        error_el.classList.add('error');
        error_el.innerText = str;
        
        error_el.addEventListener('click', function () {
            errors_el.removeChild(error_el);
        });
        
        errors_el.appendChild(error_el);
    }