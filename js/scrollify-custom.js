$(function() {
  if($(window).width() >= 960 ){
  $.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    touchScroll:true,
    before:function(i) {
    /*  var active = $(".slide.active");

      active.addClass("remove");


      //setTimeout(function() {
        $("[data-slide=" + i + "]").addClass("active");
        active.removeClass("remove active");
      //},300);*/

    },
    afterRender() {
      //$(".panel").each(function() {
      //  $(this).css("height", parseInt($(window).height())*6 );

        //$(this).find(".inner").css("height", $(window).height());

      //});


      $.scrollify.update();

      //$("[data-slide=0]").addClass("active");

    }
  });
  }else{
    $.scrollify.destroy();
  }
});
