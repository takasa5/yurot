function parallax_height() {
    var scroll_top = $(this).scrollTop();
    // var sample_section_top = $(".section").offset().top;
    var header_height = $(".header-section").outerHeight();
    var hcontent_height = parseInt($(".header-section").css("padding-top")) + $(".header-section").height();
    $(".section-wrap").css({ "margin-top": header_height });
    // ナビバー
    if (header_height - scroll_top > 50) {
        $(".header").css({height: header_height - scroll_top});
        $(".nav").css({opacity: 1 - (header_height - scroll_top - 50) / (header_height - 50)});
    }else {
        $(".header").css({height: 50});
        $(".nav").css({opacity: 1});
    }

    // hero内文字
    if (header_height - scroll_top - hcontent_height > 0)
        $(".header-section").css({opacity: (header_height - scroll_top - hcontent_height) / (header_height - hcontent_height)});
    else
        $(".header-section").css({opacity: 0});
    if (header_height - scroll_top < 50)
        $(".header-section").hide();
    else if ($(".header-section").is(":hidden"))
        $(".header-section").show();
}
function resizing() {
    $(".section-wrap").css({ "margin-top": $(".header-section").outerHeight()});
    $("#merit > .container").height($("#merit").height() - $("#merit > h2").outerHeight(true));
}
parallax_height();
$(window).scroll(function() {
    parallax_height();
});
$(window).resize(function() {
    parallax_height();
    resizing();
});
$(document).ready(function() {
    resizing();
});