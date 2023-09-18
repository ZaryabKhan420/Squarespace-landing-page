
var tl = gsap.timeline();

tl.from(".logo > img , .navbar , .btns > a",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.3
})

tl.from(".content > h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from(".content > .left-img1",{
    x:100,
    opacity:0,
    stagger:0.3
})

tl.from(".content > .right-img2",{
    opacity:0,
    stagger:0.5
})

tl.from(".content > h5",{
    scale:0,
    opacity:0,
})

tl.to(".content > h5",{
    y:-20,
    duration:0.7,
    repeat:-1,
    yoyo:true

})