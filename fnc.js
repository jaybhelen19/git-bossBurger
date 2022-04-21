   
$(document).ready(function(){$("#hamburger").on('click', function(){
if($( "#menus" ).hasClass( "show" )){
$("#menus").removeClass( "show" );
}else{
$("#menus").addClass( "show" );
}});
});

window.addEventListener("resize", () =>{ 
    if(window.innerWidth > 992){
        if($( "#menus" ).hasClass( "show" )){
            $("#menus").removeClass( "show" ); 
    }};
});

 






 
 
 
 