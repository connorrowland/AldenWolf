$(document).ready(function(){

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0,
      reverse: true
    }
  });

  var sceneClasses = ["pink-square--fade-in", "blue-square--fade-in", "section-3-text-one--fade-in", "section-3-text-two--fade-in", "section-4-center-text--fade-in", "section-6-stamp-one--fade-in", "section-6-stamp-two--fade-in", "section-6-stamp-three--fade-in"];

  var triggerElements = ["#first-text", "#pink-square", "#blue-square", "#blue-square", "#section-3-right-column--text", "#section-6--heading", "#section-6--heading", "#section-6--heading"];

  var offsetAmounts = [0, -100, -50, 150, 40, -200, 50, 250];

  var viewer = document.querySelector('#homepage-main');

  for (var i = 0, l = 7; i <= l; i++) {
    new ScrollMagic.Scene({
      triggerElement: triggerElements[i],
      offset: offsetAmounts[i],
      duration: 600,
      reverse: true
    })
    .setClassToggle(viewer, sceneClasses[i])
    .addTo(controller);
  }

})