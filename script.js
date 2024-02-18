// function loco(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }

// loco();



let container = document.querySelector(".container");
let cursur = document.querySelector(".cursur");
// console.log(cursur);

container.addEventListener("mousemove" , function(dets){
    // console.log(dets);
    cursur.style.left = dets.x+"px";
    cursur.style.top = dets.y+"px";
    // cursur.style.transform = "translate(-50%, -50%)"
})


let  rightswipe = document.querySelector("#rightswipe");
let  leftswipe = document.querySelector("#hello");

let tl = gsap.timeline();


tl.to(".slide1", {
    x: "-100%",
    duration:1,
    stagger:1
})


tl.pause();


rightswipe.addEventListener("click" ,function(){
    tl.play();
})


leftswipe.addEventListener("click" ,function(){
    tl.reverse();
})



// gsap.from(".upper", {
//     // y: -100,
//     transform: "scale(0.5)",
//     duration:1,
//     stagger:1
// })


// gsap.from(".upper,i", {
//     // y: -100,
//     opacity:0,
//     // transform: "scale(0.5)",
//     duration:1,
//     stagger:1
// })
