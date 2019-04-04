$(document).ready(function(){

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0,
      reverse: true
    }
  });

  var viewer      = document.querySelector('#homepage-main'),
      frameCount  = 35,
      offsetValue = 130;

  new ScrollMagic.Scene({
    triggerElement: '#home--header',
    duration: (frameCount * offsetValue) + 'px',
    reverse: true
  })
  .addTo(controller);

  // Create scene for each of the animated items
  for (var i = 1, l = frameCount; i <= l; i++) {
    var offsetTotal = i * offsetValue;
    if (i === 1) {
      offsetTotal = 0;
    }
    new ScrollMagic.Scene({
        triggerElement: '#home--header',
        offset: offsetTotal
      })
      .setClassToggle(viewer, 'frame' + i)
      .addTo(controller);
  }

})