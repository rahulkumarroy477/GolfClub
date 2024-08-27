var crsr = document.getElementById("cursor");
var crsr_blur = document.getElementById("cursor-blur");
document.addEventListener("mousemove",function(dist){
    crsr.style.left = dist.x+"px";
    crsr.style.top = dist.y+"px";
    crsr_blur.style.left = dist.x-200+"px";
    crsr_blur.style.top = dist.y-200+"px";
})



var cardList = document.getElementById('card-list');
var cards = document.getElementsByClassName('card');

document.addEventListener('mousemove', function(e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;

  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;

  var maxRotation = 15; // Maximum rotation angle

  var rotateX = ((mouseY - centerY) / centerY) * maxRotation;
  var rotateY = ((mouseX - centerX) / centerX) * -maxRotation;

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    card.style.transition= '0.2ms'
  }
});


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end: "top -11%",
        scrub:1 // to repeat
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        // markers:true,
        trigger:"#main",
        scroller:"body",
        start : "top -30%",
        end: "top -80%",
        scrub:2 // slow transition
    }
})
var h4all = document.querySelectorAll('#nav h4');
h4all.forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
        crsr.style.transform = 'scale(3)';
        crsr.style.border = '1px solid #95C11E';
        crsr.style.backgroundColor = 'transparent';
    });

    elem.addEventListener('mouseleave', function() {
        crsr.style.transform = 'scale(1)';
        crsr.style.border = '0px solid #fff';
        crsr.style.backgroundColor = '#95C11E';
    });
});