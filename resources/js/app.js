window.addEventListener('scroll', navShrink);
window.addEventListener('scroll', boxFadeIn);
window.addEventListener('scroll', boxFadeInTwo);
window.addEventListener('scroll', textTwoFadeIn);
window.addEventListener('scroll', stampFadeIn);
window.addEventListener('scroll', stampTwoFadeIn);
window.addEventListener('scroll', stampThreeFadeIn);

var isMobile = $(window).width() <= 768 ? true : false;
if(isMobile){
  window.addEventListener('scroll', textColMobileFadeInOne);
  window.addEventListener('scroll', textColMobileFadeInTwo);
  window.addEventListener('scroll', mobileTextThree);
  window.addEventListener('scroll', mobileTextFour);
}
if(!isMobile){
  window.addEventListener('scroll', textOneFadeIn);
}
function navShrink(){
  if($(window).scrollTop() >= 30){
    $("#logo").addClass("logo--scroll");
  } else if ($(".logo--scroll")){
    $("#logo").removeClass("logo--scroll");
  }
}
function boxFadeIn(){
  fadeInWhenBottomReached("#first-text", "#pink-square", '', boxFadeIn, false, "#first-text")
}
function boxFadeInTwo(){
  fadeInWhenBottomReached("#ethos-header", "#blue-square", '', boxFadeInTwo, false, "#ethos-body-text")
}
function textOneFadeIn(){
  fadeInWhenBottomReached("#downward-arrow", "#section-3-left-column--text", '#section-3-right-column--text', textOneFadeIn, true, "")
}
function textTwoFadeIn(){
  fadeInWhenBottomReached("#home--section-3", "#section-4-center-column--text", '', textTwoFadeIn, false, "#section-3-right-column--text")
}
function stampFadeIn(){
  fadeInWhenBottomReached("#section-6--heading", "#small-black-circle", "", stampFadeIn, false, "#section-6--subheading-3")
}
function stampTwoFadeIn(){
  fadeInWhenBottomReached("#small-black-circle", "#blue-circle", "", stampTwoFadeIn, false, "#small-black-circle")
}
function stampThreeFadeIn(){
  fadeInWhenBottomReached("#blue-circle", "#orange-circle", "", stampThreeFadeIn, false, "#blue-circle")
}

//Exclusively Mobile Animations
function textColMobileFadeInOne(){
  fadeInWhenBottomReachedMobile("#section-3-left-column--text", textColMobileFadeInOne, "#blue-square")
}
function textColMobileFadeInTwo(){
  fadeInWhenBottomReachedMobile("#section-3-right-column--text", textColMobileFadeInTwo, "#section-3-left-column--text")
}
function mobileTextThree(){
  fadeInWhenBottomReachedMobile("#section-5-mobile-fade", mobileTextThree, "#section-4-center-column--text")
}
function mobileTextFour(){
  fadeInWhenBottomReachedMobile("#section-6-mobile-fade", mobileTextFour, "#section-5-mobile-fade")
}

//Animation Function (Mobile and Desktop)
function fadeInWhenBottomReached(bottomObject, objectOneToAnimate, objectTwoToAnimate, listenerToTerminate, backToBackFade, mobileBottomObj){
  var smallScreen = $(window).width() <= 768 ? true : false;
  if (smallScreen){
    var bottom_of_object = $(mobileBottomObj).offset().top + $(mobileBottomObj).outerHeight() + 300;
  } else {
    var bottom_of_object = $(bottomObject).offset().top + $(bottomObject).outerHeight() + 320;
  }
  var bottom_of_window = $(window).scrollTop() + $(window).height();

  if( bottom_of_window > bottom_of_object ){
    if(backToBackFade){
      $(objectOneToAnimate).css('visibility', 'visible').hide().fadeIn(700).promise().done(function(){
        $(objectTwoToAnimate).css('visibility', 'visible').hide().fadeIn(700)
      });
    } else {
      $(objectOneToAnimate).css('visibility', 'visible').hide().fadeIn()
    }
    window.removeEventListener('scroll', listenerToTerminate);
  }
}

//Exclusively Mobile Animation Function
function fadeInWhenBottomReachedMobile(mobileObjectToAnimate, listenerToTerminate, mobileBottomObj){
  var bottom_of_object = $(mobileBottomObj).offset().top + $(mobileBottomObj).outerHeight() + 200;
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  if( bottom_of_window > bottom_of_object ){
    $(mobileObjectToAnimate).css('visibility', 'visible').hide().fadeIn(700)
    window.removeEventListener('scroll', listenerToTerminate);
  }
}