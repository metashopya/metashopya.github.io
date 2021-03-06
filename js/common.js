$(document).ready(function() {
    var imgNumber = 74;

    function heightResize() {
        $(".main_head").css("height", $(window).height());
        $(".top_mnu ul").css("margin-top", $(window).height() * 0.35);
    };
    heightResize();
    $(window).resize(function() {
        heightResize();
    });
    for (var i = 1; i < imgNumber; i++) {
        var block = $("#portfolio_main_item").clone().attr('id', ' ');
        block.attr('id', ' ');
        $("#portfolio_main_item").after(block);
    }

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".section_header h2").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".section_header h2").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
        $(".section_header h2").css("opacity", "1");
    }).append("<span>");

    $(".section_header").animated("fadeInDown", "fadeOutUp");

    $(".animation_1").animated("flipInY", "fadeOut");
    $(".animation_2").animated("fadeInUp", "fadeOutDown");
    $(".animation_3").animated("fadeInUp", "fadeOutDown");

    $(".portfolio_item").animated("zoomIn", "zoomIn");

    $(".popup_image").magnificPopup({
        type: "image",
        mainClass: "portfolio_popup"
    });
    $(".popup").magnificPopup({
        midClick: true,
        mainClass: "portfolio_popup"
    });
    var imgId = imgNumber + 1;
    $(".portfolio_item").each(function(i) {
        $(this).find(".popup").attr("href", "#work_" + imgId);
        $(this).find(".portfolio_description").attr("id", "work_" + imgId);
        imgId--
        $('img', this).attr('src', 'img/thumbs/' + imgId + '.jpg');
    });

    $(".top_mnu ul a").mPageScroll2id();

});
$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");

});