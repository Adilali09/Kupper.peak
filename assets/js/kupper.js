gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




$(document).ready(function () {
    $('#products').owlCarousel({
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        smartSpeed: 2000,
        margin: 0,
        stagepadding: 0,

        responsive: {
            0: {
                items: 1
            },

            767: {
                items: 1
            },

            768: {
                items: 3
            },

            1366: {
                items: 4
            }
        }
    });
});

$(document).ready(function () {
    $('#review-slider').owlCarousel({
        autoplay: true,
        loop: true,
        autoplaySpeed: 2000,
        dots: false,
        smartSpeed: 2000,
        margin: 20,
        stagepadding: 0,

        responsive: {
            320: {
                items: 1
            },

            600: {
                items: 2
            },

            768: {
                items: 2
            },

            1366: {
                items: 3
            }
        }
    });
});