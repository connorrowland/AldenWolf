window.addEventListener('scroll', navShrink);
window.addEventListener('scroll', boxFadeIn);
window.addEventListener('scroll', textOneFadeIn);
window.addEventListener('scroll', textTwoFadeIn);
window.addEventListener('scroll', stampFadeIn);
window.addEventListener('scroll', stampTwoFadeIn);
window.addEventListener('scroll', stampThreeFadeIn);

function navShrink(){
  if($(window).scrollTop() >= 30){
    $("#logo").addClass("logo--scroll");
  } else if ($(".logo--scroll")){
    //Small logo class has already been added. Scrolltop < 30. Small logo class needs to be removed.
    $("#logo").removeClass("logo--scroll");
  }
}
function boxFadeIn(){
  fadeInWhenBottomReached("#first-text", "#pink-square", '#blue-square', boxFadeIn, true)
}
function textOneFadeIn(){
  fadeInWhenBottomReached("#downward-arrow", "#section-3-left-column--text", '#section-3-right-column--text', textOneFadeIn, true)
}
function textTwoFadeIn(){
  fadeInWhenBottomReached("#home--section-3", "#section-4-center-column--text", '', textTwoFadeIn, false)
}
function stampFadeIn(){
  fadeInWhenBottomReached("#section-6-text-1", "#small-black-circle", "", stampFadeIn, false)
}
function stampTwoFadeIn(){
  fadeInWhenBottomReached("#section-6-text-2", "#blue-circle", "", stampTwoFadeIn, false)
}
function stampThreeFadeIn(){
  fadeInWhenBottomReached("#section-6-text-3", "#orange-circle", "", stampThreeFadeIn, false)
}

function fadeInWhenBottomReached(bottomObject, objectOneToAnimate, objectTwoToAnimate, listenerToTerminate, backToBackFade){
  var bottom_of_object = $(bottomObject).offset().top + $(bottomObject).outerHeight() + 100;
  var bottom_of_window = $(window).scrollTop() + $(window).height();

  if( bottom_of_window > bottom_of_object ){
    if(backToBackFade){
      $(objectOneToAnimate).css('visibility', 'visible').hide().fadeIn(500).promise().done(function(){
        $(objectTwoToAnimate).css('visibility', 'visible').hide().fadeIn(900)
      });
    } else {
      $(objectOneToAnimate).css('visibility', 'visible').hide().fadeIn()
    }
    window.removeEventListener('scroll', listenerToTerminate);
  }
}