var fullpage;

$(function() {
  var currentSlide = 1;
    var quickEvents = false;
  if($(window).width() >= 960 ){



    var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {

        

        var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            $(".header-wrapper").removeClass("nostick");

          } else {
            $(".header-wrapper").addClass("nostick");
          }
          prevScrollpos = currentScrollPos;
          if(window.pageYOffset <= 100){
            $(".process-page .header-wrapper").removeClass("nostick");
          }
          else{
            $(".process-page .header-wrapper").addClass("nostick");
          }
        }
    

    if($("#fullpage").length){
      fullpage = $('#fullpage').fullpage({
      css3: true,
      scrollBar: true,
      scrollingSpeed: 1100,

      onLeave: function(index, nextIndex, direction) {

        console.log(nextIndex, index)
        if(nextIndex == 2){
          $(".process-page .header-wrapper").addClass("white-logo");
        }
        else{
          $(".process-page .header-wrapper").removeClass("white-logo");
        }
        
          // var index = index.index;
          // console.log(index, direction);
          // console.log(index)
          // if(index == 1){
          //   $(".header-wrapper").addClass("stay-top")
          // }
          // if(index > 1){
          //   $(".header-wrapper").removeClass("stay-top")
          // }
          
          if (index != 2)
              return true;

          
          if (quickEvents == false) {
              quickEvents = true;
              setTimeout(function() { quickEvents = false; }, 500);

              if (index == 2 && direction === "down" && currentSlide < 4) {
                  currentSlide++;
                  fixslide()
                  $(".process-page .header-wrapper").addClass("white-logo");
                  return false;
              } else if (index == 2 && direction === "up" && currentSlide > 1) {
                  currentSlide--;
                  fixslide()
                  $(".process-page .header-wrapper").addClass("white-logo");
                  return false;
              }
          } else {
              return false;
          }

            
      },
  });
    }

   



  // $.scrollify({
  //   section : "section",
  //   sectionName : "section-name",
  //   interstitialSection : "",
  //   easing: "easeOutExpo",
  //   scrollSpeed: 1100,
  //   offset : 0,
  //   scrollbars: true,
  //   standardScrollElements: "",
  //   setHeights: true,
  //   overflowScroll: true,
  //   touchScroll:true,
  //   afterRender:function(){
  //     $('body').attr('data-preIndex',0);
  //     $.scrollify.update();
  //     },
  //   before: function(index) {
  //         var direction,preIndex;
  //         preIndex = parseInt($('body').attr('data-preIndex'));
  //         if (index > preIndex){
  //             direction = "down";
  //             }else{
  //             direction = "up";
  //     }

  //     $('body').attr('data-preIndex',index);

  //     if (index != 2)
  //               return true;
  //           if (quickEvents == false) {
  //               quickEvents = true;
  //               setTimeout(function() { quickEvents = false; }, 500);

  //               if (index == 2 && direction === "down" && currentSlide < 5) {
  //                   currentSlide++;
  //                   // fixSlider();
  //                   console.log(currentSlide)
  //                   return false;
  //               } else if (index == 2 && direction === "up" && currentSlide > 1) {
  //                   currentSlide--;
  //                   console.log(currentSlide)
  //                   // fixSlider();
  //                   return false;
  //               }
  //           } else {
  //               return false;
  //           }

  //     // if(index == 2){
  //     //   console.log("Sfs")
  //     //   return false;
  //     // }

  //   }
  // });
  $('.panel-wrapper .panel').fadeOut(0);
        $('.panel-wrapper .panel').eq(0).fadeIn(0);
  }else{
    // $.fn.fullpage.destroy('all');
  }

        function fixslide(){
          $('.section-nav ul li').eq(currentSlide - 1).trigger("click")
        }



        
        // $("#process .section-notch::before").css("left",$(".process-head-img").offset().left)
        

        $(".hamberger-check").on("change", function(){
          if($(this).is(":checked")){
            $(".menu-wrapper, .header-wrapper").addClass("go")
            
          }
          else{
            $(".menu-wrapper, .header-wrapper").removeClass("go")
          }
        })

        $(".menu-wrapper ul a").hover(function(){
          $(".menu-wrapper").addClass("hoverd");
          $(this).css("opacity", "1");
        }, function(){
          $(".menu-wrapper").removeClass("hoverd")
          $(this).css("opacity", "");
        })
        
        $('.section-nav ul li').click(function(){
            var secIndex = $(this).index();
 
            
            var processClass = $("#process").attr("class").split(" ");
            var background;

            if(secIndex == 0){
              $("#process").css("background","#1be0a8")
            }
            else if(secIndex == 1){
              $("#process").css("background","#8d0fef")
            }
            else if(secIndex == 2){
              $("#process").css("background","#f55")
            }
            else if(secIndex == 3){
              $("#process").css("background","#5c74ff")
            }

            // $("#process").attr("class","").addClass(processClass[0] +  " " + processClass[1] + " back" + (secIndex+1));
            $('.section-nav ul li').removeClass('active');
            // $(this).addClass('active createLine');
            // $(this).next().removeClass("createLine")
            currentSlide = secIndex + 1;
            $('.section-nav ul li').removeClass("createLine")
            for(i = 0; i<= secIndex; i++){
              //$('.section-nav ul li').eq(0).addClass("createLine")
              $('.section-nav ul li').eq(i).addClass("active createLine")
            }
            $('.panel-wrapper .panel').fadeOut(150).removeClass("active");

            setTimeout(function(){
                $('.panel-wrapper .panel').eq(secIndex).fadeIn(150).addClass("active");
               
                // $.fn.fullpage.rebuild()
            }, 150)
            
          })
});
