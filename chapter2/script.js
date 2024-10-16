var tl = gsap.timeline();

tl.from("h2", {
    y: -20,
    opacity: 0,
    delay: 0.5,
    duration: 1
})

tl.from("h4", {
    y: -20,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2
})

tl.from("h1", {
    y: 30,
    // scale: 0.5,
    opacity: 0,
    duration: 1
})
