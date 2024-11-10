$(document).ready(function(){
    $("#singup-form").validate({
        rules:{
            fname:{
                required:true,
                minlenght:4
                
            },
            sname:{
            required:true,
            minlenght:4
            },
            emilAdress:{
                required:true,
                email:true

            },
            password:{
                minlenght:6
            }
        }
        
    })
})