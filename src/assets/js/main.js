    !(function ($) {
    "use strict";   

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $("#header").outerHeight() - 21;
    if (window.matchMedia("(max-width: 991px)").matches) {
        scrolltoOffset += 20;
    }
    $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (e) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == "#header") {
                    scrollto = 0;
                }

                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );

                if ($(this).parents(".nav-menu, .mobile-nav").length) {
                    $(".nav-menu .active, .mobile-nav .active").removeClass("active");
                    $(this).closest("li").addClass("active");
                }

                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass("fa fa-align-justify icofont-close");
                    $(".mobile-nav-overly").fadeOut();
                }
                return false;
            }
        }
    });

    // =========== OWL Product Category
    // $(document).ready(function() {
    //     // $(".owl-carousel").owlCarousel();
        
    //     //Load global header & footer
    //     $(function () {
    //         fetch("./header.html")
    //             .then(response => {
    //                 return response.text()
    //             })
    //             .then(data => {
    //                 $("#header").html(data);
    //                 manageMobileNavMenu();
    //             });

    //         fetch("./footer.html")
    //             .then(response => {
    //                 return response.text()
    //             })
    //             .then(data => {
    //                 document.querySelector("footer").innerHTML = data;
    //             });
    //     }); 
    // });
    
    /* - Magnific Popup ===== */
    if ($(".vidya-image").length) {
        var url;
        $(".vidya-image").magnificPopup({
            delegate: "a.zoom",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: ("<a href=" % url) % ">The image #%curr%</a> could not be loaded.",
            },
        });
    }

    
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header").addClass("header-scrolled");
            $("#topbar").addClass("topbar-scrolled");
        } else {
            $("#header").removeClass("header-scrolled");
            $("#topbar").removeClass("topbar-scrolled");
        }
    });

    if ($(window).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
        $("#topbar").addClass("topbar-scrolled");
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            500, "easeInOutExpo"
        );
        return false;
    });

      

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }
    $(window).on("load", function () {
        aos_init();
    });
    
    // ========= right-side fixed form
    $("#inquiry_form").click(function () {
        $(".b-notification-bar").toggleClass("active");
        if ($(".b-notification-bar .inq").hasClass('info-box1')) {
            $(".b-notification-bar .inq").removeClass("info-box1");
            $("#inquiry_form").removeClass("contact")
        } else {
            $(".b-notification-bar .inq").addClass("info-box1");
            $("#inquiry_form").addClass("contact")
        }
        $("#rfp_form").removeClass("submitrfp");
        $(".b-notification-bar .rfp").removeClass("info-box2")
    });
    $(".closeInquiry").click(function () {
        $(".b-notification-bar").removeClass("active");
        $(".b-notification-bar .inq").removeClass("info-box1");
        $("#inquiry_form").removeClass("contact")
    });
    $(".closeRfp").click(function () {
        $(".b-notification-bar").removeClass("active");
        $(".b-notification-bar .rfp").removeClass("info-box2");
        $("#rfp_form").removeClass("submitrfp")
    });
    $("#rfp_form").click(function () {
        $(".b-notification-bar").toggleClass("active");
        $(".b-notification-bar .inq").removeClass("info-box1");
        $("#inquiry_form").removeClass("contact");
        if ($(".b-notification-bar .rfp").hasClass("info-box2")) {
            $(".b-notification-bar .rfp").removeClass("info-box2");
            $("#rfp_form").removeClass("submitrfp")
        } else {
            $(".b-notification-bar .rfp").addClass("info-box2");
            $("#rfp_form").addClass("submitrfp")
        }
    });

    function manageMobileNavMenu() {
        // Mobile Navigation
        if ($(".nav-menu").length) {
            var $mobile_nav = $(".nav-menu").clone().prop({
                class: "mobile-nav d-lg-none",
            });
            $("body").append($mobile_nav);
            $("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-align-justify"></i></button>');
            $("body").append('<div class="mobile-nav-overly"></div>');

            $(document).on("click", ".mobile-nav-toggle", function (e) {
                $("body").toggleClass("mobile-nav-active");
                $(".mobile-nav-toggle i").toggleClass("fa fa-align-justify fa fa-close icofont-close");
                $(".mobile-nav-overly").toggle();
            });

            $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
                e.preventDefault();
                $(this).next().slideToggle(300);
                $(this).parent().toggleClass("active");
            });

            $(document).click(function (e) {
                var container = $(".mobile-nav, .mobile-nav-toggle");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($("body").hasClass("mobile-nav-active")) {
                        $("body").removeClass("mobile-nav-active");
                        $(".mobile-nav-toggle i").toggleClass("fa fa-align-justify fa fa-close icofont-close");
                        $(".mobile-nav-overly").fadeOut();
                    }
                }
            });
        } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
            $(".mobile-nav, .mobile-nav-toggle").hide();
        }
    }

    /*---- image hover 3D effect ------*/
    var tilt = $('.js-tilt');
        if(tilt.length) {
        const tilt = $('.js-tilt').tilt();
    }
    /* Fully year */
    // var date = new Date().getFullYear();document.getElementById("year").innerHTML = date;  

})(jQuery);   
    