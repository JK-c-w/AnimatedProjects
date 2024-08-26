let tl=gsap.timeline();
function abcd(){
    tl.from('nav ',{
        y:-100,
        duration:1,
        opacity:0
     })
     tl.to('.nav  i',{
        rotation:0,
        duration:0.3
     })
     tl.from('.main .left h1',{
         x:-100,
         duration:0.5,
         opacity:0
     })
     tl.from('.main .left .para',{
         opacity:0
     })
     tl.from('.main .right',{
         x:100,
         duration:0.5,
         opacity:0
     })
     tl.from('.comp img',{
         y:100,
         duration:0.5,
         opacity:0,
         stagger:0.1,
     })
}
abcd();
 function efgh(){
    let tl2=gsap.timeline({ 
        scrollTrigger:{
        trigger:'.services',
        scroller:"body",
        start:'top 50%',
        end:'top 0',
        scrub:2,
    }
    });
    tl2.from('.services .high',{
          x:-100,
          duration:0.5,
          opacity:0,
    })
    tl2.from('.services #A',{
          x:-100,
          duration:0.5,
          opacity:0
    },"ab")
    tl2.from('.services #B',{
        x:100,
        duration:0.5,
        opacity:0
    },"ab")
    tl2.from('.services #C',{
        x:-100,
        duration:0.5,
        opacity:0
    },"cd")
    tl2.from('.services #D',{
        x:100,
        duration:0.5,
        opacity:0
    },"cd")    
 }
 efgh();
function ijkl(){
    let tl3=gsap.timeline({
        scrollTrigger:{
           trigger:'.prop',
           scroller:'body',
           start:"top 70%",
           end:'top 0',
           scrub:2
        }  
    });
   
    tl3.from('.prop .left',{
       y:100,
       opacity:0,
       duration:0.5
    },"p")
    tl3.from('.prop .right',{
       scale:0,
       duration:0.5
    },"p")
}
ijkl();
let tl4=gsap.timeline();
tl4.from('.case .bot .a',{
    y:10,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:'.case',
        scroller:'body',
        scrub:2,
        start:'top 50%',
        end:'top 0'
    }
    
})