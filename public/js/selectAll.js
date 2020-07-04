$(document).ready(function() {

    $('.selectall').click(function(event) {  
        if(this.checked) { 
            $('.checkbox2').each(function() {
                this.checked = true;     
            });

        }else{
            $('.checkbox2').each(function() {
                this.checked = false;                  
            });      
        }
    });

});