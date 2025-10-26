var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url = "";
// var vid_time_triggered=false;

//
default_exit.on('click', function () {
  myFT.clickTag(1, clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads', function () {

  clickTag1_url = myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set(['#copy2, #copy3'], {y: 20})

  .addLabel('frame1', 0)
    .to('#copy1', 0.5, {autoAlpha: 1, ease: Power1.easeInOut}, 'frame1')
    .to('#copy1', 0.5, {autoAlpha: 0, ease: Power1.easeInOut}, 'frame1+=3')
  .addLabel('frame2', 'frame1+=3.2')
    .to('#copy2', 0.5, {y: 0, autoAlpha: 1, ease: Power1.easeInOut}, 'frame2')
    .to('#copy2', 0.5, {autoAlpha: 0, ease: Power1.easeInOut}, 'frame2+=4.5')
  .addLabel('frame3', 'frame2+=4.7')
    .to('#copy3', 0.5, {y: 0, autoAlpha: 1, ease: Power1.easeInOut}, 'frame3')
    .to('#copy3', 0.5, {autoAlpha: 0, ease: Power1.easeInOut}, 'frame3+=4.5')
  .addLabel('frame4', 'frame3+=4.7')
    .to('#lastFrame',0.6,{x: 0, ease: Power2.easeOut}, 'frame4')
    .to('#shine', 0.5, {backgroundPosition: '535px 0px'}, 'frame4+=1');
}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();

}
