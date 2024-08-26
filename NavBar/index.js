let tl=gsap.timeline();
tl.to('#right',{
    right:0,
    duration:0.5
})
tl.from('#right #nav a ',{
    x:"40px",
    duration:0.2,
    opacity:0,
    stagger:0.3
})
tl.from('#right i ',{
    opacity:0,
})
tl.pause();

let nav=document.querySelector("#left i");
nav.addEventListener('click',function(){
    tl.play();
})

let cut=document.querySelector("#right i");
cut.addEventListener('click',function(){
    tl.reverse();
})

