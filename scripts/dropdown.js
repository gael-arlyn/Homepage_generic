$('#dropdown_footer').click(function() {
    if(!$("body").hasClass("dropDownOpen")) {
        $("body").addClass("dropDownOpen");
    } else {
        $("body").removeClass("dropDownOpen");
    }
})

// // hiding drop downs when click outside of container
// $(document).mouseup(function(e) {
//     var navMenu = $(".nav_menu");
//     if (navMenu.hasClass('show')) {
//         if (!navMenu.is(e.target) && navMenu.has(e.target).length === 0) {
//             $('.nav_menu').removeClass('show');
//         }
//     }
// });
$('.menu_btn').click(function() {
    if (!$('.nav_menu').hasClass('show')) {
        $('.nav_menu').addClass('show');
    } else {
        $('.nav_menu').removeClass('show');
    }
})
$(this).scroll(function () {
    if ($('.nav_menu').hasClass('show')) {
        $('.nav_menu').removeClass('show');
    }
})