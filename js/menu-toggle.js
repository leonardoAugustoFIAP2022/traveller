$(document).ready(function() {
    $("#toggle-menu").on("click", function() {
        $("header-menu").toggleClass("show");
        $(this).toggleClass("show");
    });
});