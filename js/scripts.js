$(document).ready(function(){
    $("#design-image").click(function(){
        $("#design-image").slideToggle().hide();
        $("#design h2").slideToggle();
        $("#design p").slideToggle();
    });

    $("#design").click(function(){
        $("#design h2").slideToggle().hide();
        $("#design p").slideToggle().hide();
        $("#design-image").slideToggle();
    });

    $("#development-image").click(function(){
        $("#development-image").slideToggle().hide();
        $("#development h2").slideToggle();
        $("#development p").slideToggle();
    });

    $("#development").click(function(){
        $("#development h2").slideToggle().hide();
        $("#development p").slideToggle().hide();
        $("#development-image").slideToggle();
    });

    $("#product-image").click(function(){
        $("#product-image").slideToggle().hide();
        $("#product h2").slideToggle();
        $("#product p").slideToggle();
    });

    $("#product").click(function(){
        $("#product h2").slideToggle().hide();
        $("#product p").slideToggle().hide();
        $("#product-image").slideToggle();
    });

    $("#this-button").click(function(){
        alert("Hello.Your message has been recieved.Thank you for reaching out to us!")
    })
});