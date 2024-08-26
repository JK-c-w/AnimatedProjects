let h1=document.querySelector('h1');
let text=h1.textContent;
let clutter="";
let len=text.length/2;
text.split('').forEach(function(elem,idx){
   if(idx<len)clutter+=`<span class="a">${elem}</span>`;
   else clutter+=`<span class="b">${elem}</span>`;
})
h1.innerHTML=clutter;

gsap.from('h1 .a',{
    y:100,
    duration:0.3,
    stagger:0.1
},"ab")
gsap.from('h1 .b',{
    y:100,
    duration:0.3,
    stagger:-0.1
},"ab")
