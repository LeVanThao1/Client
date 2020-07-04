const regForm = document.querySelector('form#producttype');
const errors_el = document.querySelector('form#producttype .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
    e.preventDefault();
    const productNameType = document.querySelector('#producttype #productNameType');
    const warehouseID = document.querySelector('#producttype #warehouseID');
    
    let errors = [];
 
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const num_reg= /^([0-9])/;
    
    if (productNameType.value == "") {
        errors.push({text: "Tên loại sản phẩm", el: productNameType});
    }
    
    if (warehouseID.value == "") {
        errors.push({text: "mã kho", el: warehouseID});
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