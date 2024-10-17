gsap.from("#page1 #box", {
    opacity: 0,
    scale: 0,
    delay: 1,
    duration: 2,
    borderRadius: "50%",
    rotate: 180
})
gsap.from("#page2 #box", {
    opacity: 0,
    scale: 0,
    delay: 1,
    duration: 2,
    borderRadius: "50%",
    rotate: 180,
    // scrollTrigger: "#page2 box" // do this if you want it simple
    scrollTrigger: {
        trigger: "#page2 #box", 
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2, // values range from 1 to 5 or can be set to true
    }
})

gsap.to("#page3 h1", {
    transform: "translateX(-190%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})