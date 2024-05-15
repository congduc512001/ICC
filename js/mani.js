$(document).ready(function () {
    $(document).on("click", ".menu_item", function () {
        $(this).find('.menu_item-small').toggleClass("open");
        $(this).find('.menu_item-small').slideToggle(800);
    });
    $(document).on("click", ".header_menu", function () {
       $(".menu").addClass("open");
    });
    $(document).on("click", ".close", function () {
        $(".menu").removeClass("open");
     });
});