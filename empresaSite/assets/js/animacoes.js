// gsap

gsap.registerPlugin(ScrollTrigger);

// hero section
gsap.fromTo(".hero-title", {
    x:-1000,
    opacity:0
} , {
    x:0,
    duration:2,
    opacity:1,
})

gsap.fromTo(".description-hero", {
    x:-1000,
    opacity:0
} , {
    x:0,
    duration:2.5,
    opacity:1
})

gsap.fromTo(".botaoContatoDois", {
    x:-1000,
    opacity:0
} , {
    x:0,
    duration:3,
    opacity:1
})

// sobre-serction
gsap.fromTo(".tituloSobrenois" ,{
    y:500,
    opacity:0

},{
    y:0,
    duration:2,
    opacity:1,
     scrollTrigger:{
        trigger:".hero-title",
        start:"top 15%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".sobrenoisparagrafo" , {
    y: 500,
    opacity:0,
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".sobrenoisparagrafo",
        start:"top 160%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".imgsobrenois", {
    y:500,
    opacity:0
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".imgsobrenois",
        start: "top 160%",
        toggleActions:"play none none none"
    }
})


    gsap.fromTo(".cardes" , {
        x: -2000,
        opacity:0
        },{
        x:0,
        opacity:1,
        duration: 2,
        scrollTrigger:{
            trigger:".cardes",
            start:"top 90%",
            toggleActions:"play none none none"
        }
    })


    // serviçoes section

    gsap.fromTo(".tituloNossosServicos" , {
        x:-1000,
        opacity:0
    } , {
        x:0,
        opacity:1,
        duration:2,
        scrollTrigger:{
            trigger:".tituloNossosServicos",
            start:"top 90%",
            toggleActions:"play none none none"
        }
    })


    gsap.fromTo(".itenServiço" , {
        y:500,
        opacity:0
    },{
        y:0,
        duration:2,
        opacity:1,
        scrollTrigger:{
            trigger:".itenServiço",
            start:"top 150%",
            toggleActions:"play none none none"
        }
    })