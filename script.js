function initialize(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}
initialize();

$(document).on("click mousemove","body",function(e){ 
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x + 12;
  var newposY = y - 27; $("#cursor").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});


var cursercircle = document.querySelector("#btn1");
var pg2 = document.querySelector("#page4-box2");

pg2.addEventListener("mousemove",function(dets){
  gsap.to(cursercircle,{
    x:dets.clientX,
    y:dets.clientY,
    duration:.1,
    ease:Expo,
    display:"flex",
  })
})

document.querySelector("#page4-box2").addEventListener("mouseenter",()=>{
  document.querySelector("#cursor").style.display = "none"
})

document.querySelector("#page4-box2").addEventListener("mouseleave",()=>{
  document.querySelector("#cursor").style.display = "flex"
  document.querySelector("#btn1").style.display = " none"
})

document.querySelector("#btn1").addEventListener("mouseenter",()=>{
  document.querySelector("#cursor").style.display = "none"
})

document.querySelector("#btn1").addEventListener("mouseleave",()=>{
  document.querySelector("#cursor").style.display = "flex"
})


document.querySelector("#page2").addEventListener("mouseenter",()=>{
  document.querySelector("#cursor").style.display = "none"
})

document.querySelector("#page2").addEventListener("mouseleave",()=>{
  document.querySelector("#cursor").style.display = "flex"
})

$(document).on("click mousemove","body",function(e){ 
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x - 80;
  var newposY = y - 60; $("#cursor2").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});

var flag = 0

document.querySelector("#navprt2").addEventListener("click",function(){
  if(flag == 0){
    document.querySelector("#navpage").style.height = "100vh"
    document.querySelector("#navline1").style.rotate = "45deg"
    document.querySelector("#navline3").style.opacity = 0
    document.querySelector("#navline2").style.rotate = "-45deg"
    document.querySelector("#nav").style.backgroundColor = "black"
    document.querySelector("#navline1").style.backgroundColor = "white"
    document.querySelector("#navline2").style.backgroundColor = "white"
    document.querySelector("#navprt3").style.color = "white"
    document.querySelector("#navprt4").style.color = "white"
    document.querySelector("#navprt4").style.borderLeft = "1px solid white"
    document.querySelector("#navprt4").style.borderRight = "1px solid white"
    document.querySelector("#nav").style.borderBottom = "1px solid white"
    document.querySelector("#svg2").style. filter = "invert()"
    document.querySelector("#svg1").style. filter = "invert()"
    document.querySelector("#navprt5").style.backgroundColor = "white"
    document.querySelector("#navprt5").style.color = "black"
    flag = 1
  }else{
    document.querySelector("#navpage").style.height = "0vh"
    document.querySelector("#navline1").style.rotate = "0deg"
    document.querySelector("#navline3").style.opacity = 1
    document.querySelector("#navline2").style.rotate = "0deg"
    document.querySelector("#nav").style.backgroundColor = ""
    document.querySelector("#navline1").style.backgroundColor = "black"
    document.querySelector("#navline2").style.backgroundColor = "black"
    document.querySelector("#navprt3").style.color = "black"
    document.querySelector("#navprt4").style.color = "black"
    document.querySelector("#navprt4").style.borderLeft = ""
    document.querySelector("#navprt4").style.borderRight = ""
    document.querySelector("#nav").style.borderBottom = ""
    document.querySelector("#svg2").style. filter = ""
    document.querySelector("#svg1").style. filter = ""
    document.querySelector("#navprt5").style.backgroundColor = ""
    document.querySelector("#navprt5").style.color = ""
    flag = 0
  }
 
})

document.querySelector("#p").addEventListener("mouseenter",function(){
  document.querySelector("#navpage").style.backgroundImage = "url(https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/04/1-2.jpg)"
})

document.querySelector("#p").addEventListener("mouseleave",function(){
  document.querySelector("#navpage").style.backgroundImage = "url()"
})

document.querySelector("#s").addEventListener("mouseenter",function(){
  document.querySelector("#navpage").style.backgroundImage = "url(https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/04/2.jpg)"
})

document.querySelector("#s").addEventListener("mouseleave",function(){
  document.querySelector("#navpage").style.backgroundImage = "url()"
})

document.querySelector("#a").addEventListener("mouseenter",function(){
  document.querySelector("#navpage").style.backgroundImage = "url(https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/07/LC_Menu_Articles5.jpg)"
})

document.querySelector("#a").addEventListener("mouseleave",function(){
  document.querySelector("#navpage").style.backgroundImage = "url()"
})

document.querySelector("#n").addEventListener("mouseenter",function(){
  document.querySelector("#navpage").style.backgroundImage = "url(https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/07/LC_Menu_Articles7.jpg)"
})

document.querySelector("#n").addEventListener("mouseleave",function(){
  document.querySelector("#navpage").style.backgroundImage = "url()"
})

var ani = gsap.timeline();

ani.from("#nav",{
  y:-2000,
  opacity:0,
  duration:0.6
})

ani.from("#box1",{
  y:"100%",
  delay: 1,
  opacity:0,
  duration:0.6
})

gsap.from("#animate",{
  y:"100%",
  delay: 1.8,
  opacity:0,
  duration:0.6
})


var tl = gsap.timeline({repeat: -1});

tl.to('#pic1',{
  delay: 1,
  transform: 'translate(-50%,-50%) scale(1)'
})

.from(".line #we span,.small-line span",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2,
})

.from(".line2 #prayer span",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2,
  delay: -.5
})

.to('#count1 #span1',{
  x: 0,
  ease: Sine.easeInOut,
  delay: -1.5
})

.to('#fill',{
  width: '100%',
  ease: Sine.easeInOut,
  duration: 5.7,
  delay: -1
})

.to('#fill',{
  width: '0%',
  ease: Sine.easeInOut,
  duration: -1,
})

.to('#pic1 img',{
  filter: 'blur(10px)',
  transform: 'scale(1.2)',
})

.to('#pic1',{
  transform: 'translate(-50%,-50%) scale(0)'
})

.to('#pic2',{
  delay: .5,
  transform: 'translate(-50%,-50%) scale(1)',
})

.to('#count1 #span1',{
  x: -50,
  ease: Sine.easeInOut,
  delay: -.5
})

.to('#count1 #span2',{
  x: 0,
  ease: Sine.easeInOut,
})

.to("#prayer span",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: -.2,
  delay: -2
})

.to("#we span,.small-line span",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: -.2,
  delay: -1.5
})

.to("#support span,#artical",{
  y: "0%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2
})

.to("#women span",{
  y: "0%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2,
  delay: -.5
})

.to('#fill',{
  width: '100%',
  ease: Sine.easeInOut,
  duration: 5.7,
  delay: -1
})

.to('#fill',{
  width: '0%',
  ease: Sine.easeInOut,
  duration: -1,
})

.to('#pic2 img',{
  filter: 'blur(10px)',
  transform: 'scale(1.2)',
  delay: .5,
})

.to('#pic2',{
  transform: 'translate(-50%,-50%) scale(0)',
})

.to('#pic3',{
  transform: 'translate(-50%,-50%) scale(1)'
})

.to('#count1 #span2',{
  x: -50,
  ease: Sine.easeInOut,
})

.to('#count1 #span3',{
  x: 0,
  ease: Sine.easeInOut,
})

.to("#women span",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: -.2,
  delay: -2
})

.to("#support span,#artical",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  delay: -1,
  stagger: -.2
})

.to("#group",{
  y: "250%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2
})

.to("#radical span",{
  y: "0%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2,
  delay: -1.5
})

.to('#fill',{
  width: '100%',
  ease: Sine.easeInOut,
  duration: 5.7,
  delay: -1
})

.to('#fill',{
  width: '0%',
  ease: Sine.easeInOut,
  duration: -1,
})

.to('#pic3 img',{
  filter: 'blur(10px)',
  transform: 'scale(1.2)',
})

.to('#pic3',{
  transform: 'translate(-50%,-50%) scale(0)'
})

.to('#pic4',{
  transform: 'translate(-50%,-50%) scale(1)'
})

.to('#count1 #span3',{
  x: -50,
  ease: Sine.easeInOut,
})

.to('#count1 #span4',{
  x: 0,
  ease: Sine.easeInOut,
})

.to("#radical span",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: -.2,
  delay: -2
})

.to("#group",{
  y: "500%",
  ease: Power3.easeInOut,
  duration: 1,
  delay: -.5,
  stagger: -.2
})

.to("#media",{
  y: "250%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2
})

.to("#daily span",{
  y: "0%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: .2,
  delay: -.5
})

.to('#fill',{
  width: '100%',
  ease: Sine.easeInOut,
  duration: 5.7,
  delay: -2
})

.to('#fill',{
  width: '0%',
  ease: Sine.easeInOut,
  duration: -1,
})

.to('#count1 #span4',{
  x: -50,
  ease: Sine.easeInOut,
})

.to("#daily span",{
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: -.2,
})

.to("#media",{
  y: "500%",
  ease: Power3.easeInOut,
  duration: 1,
  delay: -.5,
  stagger: -.2
})






document.querySelector("#num h3:nth-child(2)").addEventListener("click",function(){
  document.querySelector("#num h3:nth-child(2)").style.boxShadow = "-5px 5px 0px black"
  document.querySelector("#num h3:nth-child(2)").style.backgroundColor = "#FEF9F3"
  document.querySelector("#num h3:nth-child(1)").style.backgroundColor = "transparent"
  document.querySelector("#num h3:nth-child(1)").style.border = "1px solid black"
  document.querySelector("#num h3:nth-child(1)").style.boxShadow = "0px 0px 0px "

  var tl3 = gsap.timeline();

  tl3.to("#box2img1",{
    filter: "blur(5px)",
  })

  .to("#box2img1",{
    transform: "scale(0)",
    delay: -.4
  })

  .to("#box2img2",{
    filter: "blur(0px)",
    transform: "scale(1)",
    delay: -.5
  })
  
  .to("#chat span",{
    y: "100%",
    ease: Power3.easeInOut,
    duration: 1,
    stagger: -.2,
    delay: -1
  })
  
  .to("#room span",{
    y: "0%",
    ease: Power3.easeInOut,
    duration: 1,
    stagger: .2,
    delay: -.5
  })
})

document.querySelector("#num h3:nth-child(1)").addEventListener("click",function(){
  document.querySelector("#num h3:nth-child(1)").style.boxShadow = "-5px 5px 0px black"
  document.querySelector("#num h3:nth-child(1)").style.backgroundColor = "#FEF9F3"
  document.querySelector("#num h3:nth-child(2)").style.backgroundColor = "transparent"
  document.querySelector("#num h3:nth-child(2)").style.border = "1px solid black"
  document.querySelector("#num h3:nth-child(2)").style.boxShadow = "0px 0px 0px "

  var tl4 = gsap.timeline();

  tl4.to("#box2img2",{
    filter: "blur(5px)",
  })

  .to("#box2img2",{
    transform: "scale(0)",
    delay: -.4
  })

  .to("#box2img1",{
    filter: "blur(0px)",
    transform: "scale(1)",
    delay: -.5
  })
  
  .to("#room span",{
    y: "100%",
    ease: Power3.easeInOut,
    duration: 1,
    stagger: -.2,
    delay: -1
  })
  
  .to("#chat span",{
    y: "0%",
    ease: Power3.easeInOut,
    duration: 1,
    stagger: .2,
    delay: -.5
  })
})


document.querySelector("#num h3:nth-child(2)").addEventListener("mouseenter",function(){
  document.querySelector("#num h3:nth-child(2)").style.boxShadow = "-5px 5px 0px black"
  document.querySelector("#num h3:nth-child(2)").style.backgroundColor = "#FEF9F3"
})

document.querySelector("#num h3:nth-child(2)").addEventListener("mouseleave",function(){
  document.querySelector("#num h3:nth-child(2)").style.boxShadow = "0px 0px 0px"
  document.querySelector("#num h3:nth-child(2)").style.backgroundColor ="transparent"
  document.querySelector("#num h3:nth-child(2)").style.border = "1px solid black"
})

document.querySelector("#num h3:nth-child(1)").addEventListener("mouseenter",function(){
  document.querySelector("#num h3:nth-child(1)").style.boxShadow = "-5px 5px 0px black"
  document.querySelector("#num h3:nth-child(1)").style.backgroundColor = "#FEF9F3"
})

document.querySelector("#num h3:nth-child(1)").addEventListener("mouseleave",function(){
  document.querySelector("#num h3:nth-child(1)").style.boxShadow = "0px 0px 0px"
  document.querySelector("#num h3:nth-child(1)").style.backgroundColor ="transparent"
  document.querySelector("#num h3:nth-child(1)").style.border = "1px solid black"
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  freeMode: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


document.querySelector("#page5lines1").addEventListener("mouseenter",function(){
  document.querySelector("#page5lines1 img").style.opacity = 1
})
document.querySelector("#page5lines1").addEventListener("mouseleave",function(){
  document.querySelector("#page5lines1 img").style.opacity = 0
})
document.querySelector("#page5lines1").addEventListener("mousemove",function(dets){
  document.querySelector("#page5lines1 img").style.left = `${dets.x}px`
})

document.querySelector("#page5lines2").addEventListener("mouseenter",function(){
  document.querySelector("#page5lines2 img").style.opacity = 1
})
document.querySelector("#page5lines2").addEventListener("mouseleave",function(){
  document.querySelector("#page5lines2 img").style.opacity = 0
})
document.querySelector("#page5lines2").addEventListener("mousemove",function(dets){
  document.querySelector("#page5lines2 img").style.left = `${dets.x}px`
})

document.querySelector("#page5lines3").addEventListener("mouseenter",function(){
  document.querySelector("#page5lines3 img").style.opacity = 1
})
document.querySelector("#page5lines3").addEventListener("mouseleave",function(){
  document.querySelector("#page5lines3 img").style.opacity = 0
})
document.querySelector("#page5lines3").addEventListener("mousemove",function(dets){
  document.querySelector("#page5lines3 img").style.left = `${dets.x}px`
})

document.querySelector("#page5lines4").addEventListener("mouseenter",function(){
  document.querySelector("#page5lines4 img").style.opacity = 1
})
document.querySelector("#page5lines4").addEventListener("mouseleave",function(){
  document.querySelector("#page5lines4 img").style.opacity = 0
})
document.querySelector("#page5lines4").addEventListener("mousemove",function(dets){
  document.querySelector("#page5lines4 img").style.left = `${dets.x}px`
})

document.querySelector("#page5lines5").addEventListener("mouseenter",function(){
  document.querySelector("#page5lines5 img").style.opacity = 1
})
document.querySelector("#page5lines5").addEventListener("mouseleave",function(){
  document.querySelector("#page5lines5 img").style.opacity = 0
})
document.querySelector("#page5lines5").addEventListener("mousemove",function(dets){
  document.querySelector("#page5lines5 img").style.left = `${dets.x}px`
})

document.querySelector("#page5lines6").addEventListener("mouseenter",function(){
  document.querySelector("#page5lines6 img").style.opacity = 1
})
document.querySelector("#page5lines6").addEventListener("mouseleave",function(){
  document.querySelector("#page5lines6 img").style.opacity = 0
})
document.querySelector("#page5lines6").addEventListener("mousemove",function(dets){
  document.querySelector("#page5lines6   img").style.left = `${dets.x}px`
})

window.addEventListener("resize",function(){
  location.reload()
})
