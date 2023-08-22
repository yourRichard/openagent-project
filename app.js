var loader = document.getElementById("preloader");
window.addEventListener("load", function(load){
    window.removeEventListener("load",load,false);
    setTimeout(function(){ loader.style.display = "none"
},1000);
},false)

ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2500,
    delay:400
});
ScrollReveal().reveal(".navbar" ,{ delay:100, origin:'top' });
ScrollReveal().reveal(".cata-container" ,{ delay:600, origin:'bottom' });
ScrollReveal().reveal(".content-reveal" ,{ delay:1000, origin:'top' });
ScrollReveal().reveal(".card-article" ,{ delay:500, origin:'left' });
ScrollReveal().reveal(".heading" ,{ delay:500, origin:'left' });
ScrollReveal().reveal(".video-container" ,{ delay:700, origin:'left' });
ScrollReveal().reveal(".content" ,{ delay:500, origin:'left' });
ScrollReveal().reveal("#iconz" ,{ delay:400, origin:'top' });
ScrollReveal().reveal(".AI-games" ,{ delay:500, origin:'bottom' });
ScrollReveal().reveal(".AI-bg" ,{ delay:500, origin:'left' });
ScrollReveal().reveal(".header-des h1" ,{ delay:500, origin:'left' });
ScrollReveal().reveal(".AI-side-img1" ,{ delay:500, origin:'bottom' });
ScrollReveal().reveal(".AI-side-img2" ,{ delay:600, origin:'right' });
ScrollReveal().reveal(".AI-con1" ,{ delay:500, origin:'right' });
ScrollReveal().reveal(".AI-img1" ,{ delay:700, origin:'top' });
ScrollReveal().reveal(".AI-bot-1" ,{ delay:500, origin:'left' });
ScrollReveal().reveal(".AI-bot-2" ,{ delay:600, origin:'bottom' });
ScrollReveal().reveal(".AI-bot-3" ,{ delay:700, origin:'right' });
ScrollReveal().reveal(".aii1" ,{ delay:700, origin:'left' });
ScrollReveal().reveal(".aii2" ,{ delay:600, origin:'bottom' });
ScrollReveal().reveal(".aii3" ,{ delay:800, origin:'right' });
ScrollReveal().reveal(".aii-p1" ,{ delay:300, origin:'left' });
ScrollReveal().reveal(".aii-p2" ,{ delay:300, origin:'bottom' });
ScrollReveal().reveal(".sin1" ,{ delay:300, origin:'left' });

