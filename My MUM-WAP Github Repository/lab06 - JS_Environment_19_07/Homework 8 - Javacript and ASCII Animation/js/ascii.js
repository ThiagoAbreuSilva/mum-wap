"use strict";

var control = (function (){

  var speed = 250;
  var animationTimer = null;
  var animation = "";
  var animationFrames = "";
  var frame = 0;


  var frameAnimation = function (){
    document.getElementById("textbox").value = animationFrames[frame];
    if(frame == animationFrames.length - 1){
     frame = 0;
   } else {
     frame++;
   }
   clearInterval(animationTimer);
   animate();
  }

  var animate = function (){
    animationTimer = setInterval(frameAnimation, speed);
  }

  var start = function (){
    frame = 0;
    if(document.getElementById("start").disabled == false){
      document.getElementById("start").disabled = true;
      if(document.getElementById("stop").disabled == true){
        document.getElementById("stop").disabled = false;
        }
      animationFrames = animation.split("=====\n");
      animate();
    }
  }
  var stop = function (){
    if(document.getElementById("stop").disabled == false){
     document.getElementById("stop").disabled = true;
      document.getElementById("start").disabled = false;
      clearInterval(animationTimer);
      document.getElementById("textbox").value = animation;
    }
  }
  var changeAnimation = function (){
      //stop the current animation
      stop();
      //load the selected animation
      let animationSelected = document.getElementById("animation").value;
      animation = ANIMATIONS[animationSelected];
      document.getElementById("textbox").value = animation;
  }
  var size = function (){
      let textbox = document.getElementById("textbox");
      let size = document.getElementById("size").value;
      textbox.style.fontSize = size;
  }
  var turbo = function (){
      console.log("Changing speed from " + speed + " to ");
      let turbo = document.getElementById("turbo");
      if(turbo.checked){
       speed = 50;
       console.log(speed);
      } else {
       speed = 250;
       console.log(speed);
      }
  }
  return {
    start : start,
    stop : stop,
    changeAnimation : changeAnimation,
    size : size,
    turbo : turbo
  }
})();

function main(){
  document.getElementById("start").onclick = control.start;
  document.getElementById("stop").onclick = control.stop;
  document.getElementById("animation").onchange = control.changeAnimation;
  document.getElementById("size").onchange = control.size;
  document.getElementById("turbo").onchange = control.turbo;
}

window.onload = main;
