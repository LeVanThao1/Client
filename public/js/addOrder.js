const regForm = document.querySelector('form#addOrder');
const errors_el = document.querySelector('form#addOrder .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
    e.preventDefault();
    
    const cusIDor = document.querySelector('#addOrder #cusIDor');
    const cusNameor = document.querySelector('#addOrder #cusNameor');
    const cusPhoneNumberor = document.querySelector('#addOrder #cusPhoneNumberor');
    const cusEmailor = document.querySelector('#addOrder #cusEmailor');
    const cusAddor = document.querySelector('#addOrder #cusAddor');
    const dateUpdateOr = document.querySelector('#addOrder #dateUpdateOr');
    const statusOr = document.querySelector('#addOrder #statusOr')

    let errors = [];
 
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const num_reg= /^([0-9])/;
        
    if (cusIDor.value == "") {
        errors.push({text: "mã khách hàng", el: cusIDor});
    }

    if (cusNameor.value == "") {
        errors.push({text: "tên khách hàng", el: cusNameor});
    }

    if (cusPhoneNumberor.value == "") {
        errors.push({text: "số điện thoại", el: cusPhoneNumberor});
    }

    if (cusEmailor.value == "") {
        errors.push({text: "email", el: cusEmailor});
    }else if (!email_reg.test(cusEmailor.value)){
        errors.push({text: "email", el:cusEmailor});
    }

    if (cusAddor.value == "") {
        errors.push({text: "địa chỉ", el: cusAddor});
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