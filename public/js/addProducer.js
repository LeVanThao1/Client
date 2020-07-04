const regForm = document.querySelector('form#producer');
const errors_el = document.querySelector('form#producer .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
    e.preventDefault();

    const producerNameUp = document.querySelector('#producer #producerNameUp');
    const productNameUp = document.querySelector('#producer #productNameUp');
    
    let errors = [];
 
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const num_reg= /^([0-9])/;
    
    if (producerNameUp.value == "") {
        errors.push({text: "Tên nhà sản xuất", el: producerNameUp});
    }

    if (productNameUp.value == "") {
        errors.push({text: "tên sản phẩm", el: productNameUp});
    }

 
    if (errors.length > 0) {
        handle_errors(errors);
        return false;
    }
    
    // alert('SUBMITTED');
    //     return true;
        const name = document.querySelector('input[name="productNameUp"');
        const nsx = document.querySelector('input[name="producerIDUp"');
        const typeProduct = document.querySelector('input[name="typeProductIDUp"');
        const nsx = document.querySelector('input[name="producerIDUp"');
        const name = document.querySelector('input[name="productNameUp"');
        const nsx = document.querySelector('input[name="producerIDUp"');
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