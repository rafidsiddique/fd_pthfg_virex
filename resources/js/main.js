$(document).ready(function(){

  //STICKY MENU
  $(".js--steps-section").waypoint(function(direction){
      if(direction=="down"){
          $(".navbar").addClass("sticky");
      }else{
          $(".navbar").removeClass("sticky");
      }

  });

  //ACTIVE LINK
  $("nav ul li a").click(function(){
      $("nav ul li a").removeClass("active-nav");
      $(this).addClass("active-nav");

  });

  $(".navbar a img.logo").click(function(){
      $("nav ul li a").removeClass("active-nav");
      $("nav ul li:first-child a").addClass("active-nav");
  });

  $(".btn-navbar").click(function(){
      $("nav ul li a").removeClass("active-nav");
      
  });

});

function openNav(){
  document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}


// STATS COUNTER

$(document).ready(function() {

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

});

// OWL CAROUSEL SLIDER

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  center:true,
  dots:true,
  active:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})

// VIDEO SECTION

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    document.getElementById("myBtn").remove();
    this.remove();
    // btn.innerHTML = `<button><img src="resources/img/icon/video-play-button.png"/></button>`
  } else {
    video.pause();
    // btn.innerHTML = `<button><img src="resources/img/icon/video-play-button.png"/></button>`
  }
}

//  EXPERTISE VIDEO SECTION
var video2 = document.getElementById("myVideo-2");
var btn2 = document.getElementById("myBtn-2");

function myFunction2() {
  if (video2.paused) {
    video2.play();
    document.getElementById("myBtn-2").remove();
    this.remove();
    // btn2.innerHTML = `<button><img src="resources/img/icon/expertise-video-play-button.png"/></button>`
  } else {
    video2.pause();
    // btn2.innerHTML = `<button><img src="resources/img/icon/expertise-video-play-button.png"/></button>`
  }
}