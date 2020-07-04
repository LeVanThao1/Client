
// ----------------------------xử lý danh mục


// -----------------------------Xử lý tiền
// format hiện thị của tiền
function formatMoney(money){
    money +="";
    let format ='';
    for(let i = 0 ; i < money.length ; i++){
        if(i % 3 == 0 && i){
            format = money[money.length - i - 1] + '.' + format;
        }
        else {
            format = money[money.length - i - 1] + format;
        }
    }
    return format + 'đ';
}
// thêm % 
function addPercent(per){
    per +="";
    return per +'%';
}
// Tính giá tiền sau khi được giảm giá
function moneyAfterDiscount(oldMoney,percent){
   return Math.ceil(oldMoney * (100 - percent) / 100);
}


// xử lý like-unlike sản phẩm
function liked(e){
    e.style.display = 'none';
    var isLike = e.parentElement.getElementsByClassName('home-product-item__like-icon-fill');
    isLike[0].style.display = 'inline-block';
}

function unliked(e){
    e.style.display = 'none';
    var isUnlike = e.parentElement.getElementsByClassName('home-product-item__like-icon-empty');
    isUnlike[0].style.display = 'block';
}