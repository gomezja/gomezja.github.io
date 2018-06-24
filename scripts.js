// hamburger icon is pressed
$(document).ready(function() {
    $("#ham").click(function() {
        $("#nav").toggleClass("responsive");
        $("#ham").toggleClass("icon-x");
    });
});