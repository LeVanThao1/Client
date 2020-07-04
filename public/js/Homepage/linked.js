$(document).ready(function(){
   
    $('.header__cart-icon').click(() => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        if(userId && token)
            redirect('cart.html');
        redirect('loginUser.html')
    })
    $('.fa-bell').click(()=> {
        redirect('notification.html')
    })
    $('.logo').click(() => {
        redirect('homepage.html')
    })
    $('.header__cart-view-cart').click(() => {
        redirect('cart.html')
    })

});

    // $('.header__navbar-user-item--separate').click(()=> {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('userId');
    //     localStorage.removeItem('username');
    //     redirect('loginandregiter.html')
    // });
    // $('.header__cart-wrap').click(() => {
    //     redirect('cart.html')
    // })
    // $('.fa-bell').click(()=> {
    //     redirect('notification.html')
    // })
    // $('.logo').click(() => {
    //     redirect('homepage.html')
    // })
    // $('.productItem').click(function () {
    //     console.log('adsd')
    //         redirect(`chitiet.html/${this.attr('id')}`)
    // })
    // $('header__navbar-item header__navbar-user').click(() => {
    //     redirect('loginandregiter.html')
    // })
