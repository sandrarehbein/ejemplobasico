$(document).ready(function() {
    let h1=$("#titulo_1");
    let h2=$("#titulo_2");
    
    $("#btn").click(function() {
       console.log("hola");
       console.log(h1);
      $("#titulo_1").click(function(){
          document.write("cambiar texto sobre ");
      });
        });

        $(".miCaja" ).mouseover(function() {
            $(this).css('background-color', '#FF4000');

          });
          $(".miCaja" ).mouseout(function() {
            $(this).css('background-color', 'white');
          })
});