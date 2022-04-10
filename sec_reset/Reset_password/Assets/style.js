$(document).ready(function(){
    $("#this_reset").validate({

        rules:{
            emailfield:{
               required:true,
           }
        }
    });
});