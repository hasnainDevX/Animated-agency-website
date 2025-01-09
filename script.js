function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(e){
  crsr.style.left = e.x + 20+"px"
  crsr.style.top = e.y + 20+"px"
})

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})
var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: "#main",
      start: "top 27%",
      end: "top 0",
      scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to(".page1 video", {
  width: "90%"
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: "#main",
      start: "top -115%",
      end: "top -120%",
      scrub: 3
  }
})
tl2.to("#main", {
  backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: "#main",
      start: "top -280%",
      end: "top -300%",
      scrub: 3
  }
})

tl3.to("#main",{
  backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
      var att = elem.getAttribute("data-image")
      crsr.style.width = "470px"
      crsr.style.height = "370px"
      crsr.style.borderRadius = "0"
      crsr.style.backgroundImage = `url(${att})`
      crsr.style.transition = "all 1s"
  })
  elem.addEventListener("mouseleave",function(){
      elem.style.backgroundColor = "transparent"
      crsr.style.width = "20px"
      crsr.style.height = "20px"
      crsr.style.borderRadius = "50%"
      crsr.style.backgroundImage = `none`
      crsr.style.transition = "none"
  })
})

let h4s = document.querySelectorAll("nav h4");
let purple = document.querySelector(".purple");
let nav = document.querySelector("nav")
let h4item = document.querySelector(".h4item")
h4s.forEach((element)=> {
  element.addEventListener("mouseenter", ()=> {
    purple.style.display = "block"
    purple.style.opacity = 1
    let navItemtext = element.innerHTML.toString()
    h4item.innerHTML = navItemtext
  })
  nav.addEventListener("mouseleave", ()=> {
    purple.style.display = "none"
    purple.style.opacity = 0
  })
})

const video = document.querySelector('.page1 video');
video.addEventListener("mouseenter", () => {
  crsr.classList.remove("cursor");
  crsr.classList.add("onVideo");
  crsr.innerHTML = "Sound On";
})
video.addEventListener("mouseleave", () => {
  crsr.classList.remove("onVideo");
  crsr.classList.add("cursor");
  crsr.innerHTML = "";
})

var tl4 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page4",
      scroller: "#main",
      start: "top -135%",
      end: "top -150%",
      scrub: 3
  }
})
tl4.to(".footer", {
  backgroundColor: "#edbfff",
})

ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function() {
      gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: "#main",
              start: "top 27%",
              end: "top 0",
              scrub: 3,
          },
      })
      .to(".page1 h1", { x: -100 })
      .to(".page1 h2", { x: 100 })
      .to(".page1 video", { width: "90%" });
  },
  "(min-width: 601px) and (max-width: 1023px)": function() {
      gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: "#main",
              start: "top 50%", // Adjust start point for smaller screens
              end: "top 10%",
              scrub: 3,
          },
      })
      .to(".page1 h1", { x: -40 }) // Smaller movements for medium screens
      .to(".page1 h2", { x: 40 })
      .to(".page1 video", { width: "80%" });
  },
  "(max-width: 600px)": function() {
      gsap.timeline({
          scrollTrigger: {
              trigger: ".page1",
              scroller: "#main",
              start: "top -5%",
              end: "top -20%",
              scrub: 3,
          },
      })
      .to(".page1 h1", { x: -20 }) 
      .to(".page1 h2", { x: 20 })
      .to(".page1 video", { width: "80%" })
      .to("#main", { backgroundColor: "#fff" });
      gsap.timeline({
        scrollTrigger : {
          trigger: ".page3",
          scroller: "#main",
          start: "top -25%",
          end: "top -40%",
          scrub: 3
        }
      })
  }
});
