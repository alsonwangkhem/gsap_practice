gsap.to("#box1", {
    x: 1750,
    duration: 1.5,
    delay: 1,
    borderRadius: "50%",
    rotate: 720,
    backgroundColor: "rgb(8, 223, 58)",
    scale: 0.5,
    // repeat: 1 does it twice
    repeat: -1,
    yoyo: true
})

gsap.from("#box2", {
    x: 1700,
    duration: 1.5,
    delay: 1,
    borderRadius: "50%",
    rotate: 720,
    backgroundColor: "rgb(8, 223, 58)",
    repeat: -1,
    yoyo: true
})

gsap.from("h1", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    stagger: 0.3,
})