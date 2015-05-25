//首页轮播
$("#myCarousel").carousel('cycle');
$("#myCarousel a.left").click(function(){
  $(".carousel").carousel("prev");
});
$("#myCarousel a.right").click(function(){
  $(".carousel").carousel("next");
});
//讲骨堂轮播
$("#jianggutangCarousel").carousel('cycle');
$("#jianggutangCarousel a.left").click(function(){
  $(".carousel").carousel("prev");
});
$("#jianggutangCarousel a.right").click(function(){
  $(".carousel").carousel("next");
});
function headerScroll(){
  var windowsWidth=$(window).width();
  if (windowsWidth >992){
    $('.navbar').removeClass('navbar-fixed-top');
    $(window.document).scroll(function () {
      var scrollTop = $(document).scrollTop();
      var top_div = $( ".head-top" );
      if( scrollTop >= 14 ) {
        top_div.attr('display','none');
        $('.navbar').addClass('navbar-fixed-top');
      } else {
        top_div.attr('display','block');
        $('.navbar').removeClass('navbar-fixed-top');
      }
    });
  }else{
    $('.navbar').removeClass('navbar-fixed-top');
    $('.navbar').removeClass('opacityHeader');
    $('.navbar').addClass('navbar-default')
    $(window.document).scroll(function () {
      var scrollTop = $(document).scrollTop();
      var top_div = $( ".head-top" );
      if( scrollTop >= 14 ) {
        top_div.attr('display','none');
        $('.navbar').addClass('navbar-fixed-top');
        $('.navbar').addClass('navbar-default')
      } else {
        top_div.attr('display','block');
        $('.navbar').removeClass('navbar-fixed-top');
        $('.navbar').addClass('navbar-default')
      }
      console.log(scrollTop);
    });
  }
}
headerScroll();
$(window).resize(function(){
  headerScroll();
});
function edit_UserInfo(){
  $('#userBaseInfo input').removeAttr('disabled');
  $('#userBaseInfo select').removeAttr('disabled');
  $('#userBaseInfo textarea').removeAttr('disabled');
};
function save_userInfo(){
  $('#userBaseInfo input').attr('disabled','disabled');
  $('#userBaseInfo select').attr('disabled','disabled');
  $('#userBaseInfo textarea').attr('disabled','disabled');
};

$(".text-cont p").rowsControlText();
$(".art-detail p").rowsControlText();
$(".art-detail h4").rowsControlTitle();
$('.artCont p').rowsControlText();
$('.artCont h4').rowsControlTitle();
$(window).resize(function(){
  $(".text-cont p").rowsControlText();
  $(".art-detail p").rowsControlText();
  $(".art-detail h4").rowsControlTitle();
  $('.artCont p').rowsControlText();
  $('.artCont h4').rowsControlTitle();
});



