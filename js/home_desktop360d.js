/* eslint-disable no-undef */
$(document).ready(function() {
    const windowHeight = $(window).height();
    $("img").lazy();
    $(".lazy").lazy();
    $(".single-image-1").addClass("active");
    $(".outer-container-1").addClass("active");

    $(".single-image").click(function() {
        const next = $(this).next();
        const current = this;
        $(".outer-container").removeClass("active");
        next.addClass("active");
        $(".single-image").removeClass("active");
        $(this).addClass("active");
        new TimelineMax()
            .set(".single-image", { display: "flex", opacity: 1 })
            .set(current, { display: "none", opacity: 0 })
            .set(next, { x: "60%", opacity: 0 })
            .to(".outer-container", 1, { display: "none", opacity: 0 }, "-1")
            .to(next, 1.5, { display: "flex", x: "0%", opacity: 1, ease: Power1.easeOut }, "=-1");
    });

    let scale, yDir;
    if ($(window).width() <= 1800) {
        scale = 7.3;
        yDir = "126%";
    } else {
        scale = 10;
        yDir = "126%";
    }

    const tlFirstScroll1 = new TimelineMax();
    if ($(window).width() >= 1800) {
        tlFirstScroll1
            .set("header", { opacity: 0.4 })
            .set(".tile1 .image-container", { scale: scale, y: yDir, x: "0%", ease: Power0.easeNone })
            .set(".first-load", { display: "none" })
            .set(".tile1 .fixed-col", { top: "7.8%", ease: Power0.easeNone })
            .set(".tile1-content", { opacity: 1, top: "32%", ease: Power0.easeNone })

        .to(".tile1 .image-container", 3, { scale: 1, y: "0%", x: "0%", ease: Power1.easeNone })
            .to(".tile1 .hero-text", 3, { opacity: 0, top: "39%", ease: Power1.easeNone }, "=-3")
            .to(".tile1 .sub-heading", 3, { opacity: 0, top: "42.5%", ease: Power1.easeNone }, "=-3")
            .to(".tile1 .sms-message", 3, { opacity: 0, top: "46%", ease: Power1.easeNone }, "=-3")
            .to(".tile1 .mobile-box", 3, { opacity: 0, top: "47.5%", ease: Power1.easeNone }, "=-3")
            .to(".tile1 .sms-terms", 3, { opacity: 0, top: "51%", ease: Power1.easeNone }, "=-3")
            .to(".tile1 .fixed-col", 2, { top: "19%" }, "=-2")
            .to("header", 2, { display: "block", opacity: 1, ease: Power1.easeNone }, "=-1");


        $(window).scroll(function() {
            const scroll = $(window).scrollTop();
            if (scroll > windowHeight + 100) {
                $(".tile1 .overlay").css("opacity", 1 - scroll / 1600);
                $(".tile1 .gradient").fadeOut("slow");
            } else {
                $(".tile1 .overlay").css("opacity", 1);
                $(".tile1 .gradient").fadeIn("slow");
            }
            if (scroll > windowHeight * 1.8) {
                $("#glancelogo").css("display", "none");
                $("#herovideo").css("display", "block");
                $("#heroimage").css("display", "none");
                //$('#herovideo').play();
            } else {
                $("#herovideo").css("display", "none");
                $("#heroimage").css("display", "block");
                $("#glancelogo").css("display", "block");
            }
        });
    } else {
        tlFirstScroll1
            .set("header", { opacity: 0.4 })
            .set(".tile1 .image-container", { scale: scale, y: yDir, x: "0%", ease: Power0.easeNone })
            .set(".first-load", { display: "none" })
            .set(".tile1 .fixed-col", { top: "8.7%", ease: Power0.easeNone })
            .set(".tile1-content", { opacity: 1, top: "30%", ease: Power0.easeNone })
            .set(".tile1", { opacity: 1, top: "0%", ease: Power0.easeNone })

        .to(".tile1 .image-container", 3, { scale: 1, y: "0%", x: "0%", ease: Power1.easeNone })
            .to(".tile1", 3, { opacity: 1 - $(window).scrollTop() / 350, top: "1%", ease: Power1.easeNone }, "=-3")
            .to(".tile1-content", 3, { opacity: 0, top: "39%", ease: Power1.easeNone }, "=-3")
            .to(".tile1 .fixed-col", 2, { top: "17%" }, "=-2")
            .to("header", 2, { display: "block", opacity: 1, ease: Power1.easeNone }, "=-1");

        $(window).scroll(function() {
            const scroll = $(window).scrollTop();
            if (scroll > windowHeight + 100) {
                $(".tile1 .overlay").css("opacity", 1 - scroll / 1600);
                $(".tile1 .gradient").fadeOut("slow");
            } else {
                $(".tile1 .overlay").css("opacity", 1);
                $(".tile1 .gradient").fadeIn("fast");
            }
            if (scroll > windowHeight * 1.8) {
                $("#herovideo").css("display", "block");
                $("#heroimage").css("display", "none");
                $("#glancelogo").css("display", "none");
            } else {
                $("#herovideo").css("display", "none");
                $("#heroimage").css("display", "block");
                $("#glancelogo").css("display", "block");
            }
        });
    }

    // Mobile Number valodation
    $(".mobile-input").keypress(function(e) {
        const length = jQuery(this).val().length;
        if (length > 9) {
            return false;
        } else if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        } else if ((length == 0) && (e.which == 48)) {
            return false;
        }
    });

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: ".tile1",
            triggerHook: "0",
            duration: "100%"
        })
        .setPin(".tile1")
        .setTween(tlFirstScroll1)

    // .addIndicators({name: "tile1", colorStart:"#0b4bcc"})
    .addTo(controller);

    // Tile 4 Animation
    const secScroll = new TimelineMax();
    secScroll
        .to(".phone1", 6, { y: "90%", marginBottom: "30%" })
        .to(".phone2", 6, { y: "75%", marginBottom: "30%" }, "=-6")
        .to(".phone3", 6, { y: "60%", marginBottom: "30%" }, "=-6")
        .to(".phone4", 6, { y: "45%", marginBottom: "30%" }, "=-6")
        .to(".phone5", 6, { y: "30%", marginBottom: "30%" }, "=-6")
        .to(".phone6", 6, { y: "15%", marginBottom: "30%" }, "=-6")
        .to(".phone7", 6, { y: "0%", marginBottom: "30%" }, "=-6")
        .to(".tile4 .content .heading", 6, { y: "100%" }, "=-6");

    new ScrollMagic.Scene({
            triggerElement: ".tile4",
            duration: "200%",
            triggerHook: 0.5
        })
        .setTween(secScroll)

    // .addIndicators()
    .addTo(controller);

    const thirdScroll = new TimelineMax();
    thirdScroll
        .set(".tile7 .tile-heading", { display: "block" })
        .set(".tile7 .content", { x: "150%", opacity: 0 })
        .set(".tile7 .mobile-image", { width: "100%", ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe9", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe8", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe7", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe6", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe5", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe4", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe3", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image .swipe2", 2, { opacity: 0, ease: Power1.easeOut })
        .to(".tile7 .mobile-image", 2, { width: "80%", ease: Power1.easeOut })
        .to(".tile7 .inner-container", 2, { marginTop: "0", ease: Power1.easeOut }, "=-2")
        .to(".tile7 .tile-heading", 3, { x: "-70%", opacity: 1 })
        .to(".tile7 .image-item", 3, { x: "70%" }, "-=3")
        .to(".tile7 .content", 3, { display: "block", x: "0%", opacity: 1 }, "=-3");

    new ScrollMagic.Scene({
            triggerElement: ".tile7",
            duration: "100%",
            triggerHook: 0
        })
        .setPin(".tile7")
        .setTween(thirdScroll)
        .addTo(controller);

    // Tile2

    const tile2 = new TimelineMax();
    tile2

    // .set('.tile3 .overlay', {css:{background: 'url(/images/desktop/impression-before.png)'}})
        .set(".tile2 .inner-content", { y: "20%", opacity: 0, ease: Power1.easeOut })
        .to(".tile2 .inner-content", 3, { y: "0%", opacity: 1, ease: Power1.easeOut });

    new ScrollMagic.Scene({
            triggerElement: ".tile2",
            duration: "40%",
            triggerHook: 0.2
        })
        .setTween(tile2)
        .addTo(controller);


    // Tile 9
    new ScrollMagic.Scene({
            triggerElement: ".tile9",
            duration: "200%",
            triggerHook: 0
        })
        .setPin(".tile9")

    // .addIndicators()
    .addTo(controller);

    const tile9 = new TimelineMax();
    tile9
        .set(".tile9 .img2", { opacity: 0.8 })
        .set(".tile9 .img3", { opacity: 0.6 })
        .set(".tile9 .img4", { opacity: 0.3 })
        .set(".tile9 .img5", { opacity: 0.1 })
        .to(".tile9 .img1", 5, { x: "30%", y: "-20%", opacity: 0 })
        .to(".image-overlay5", 5, { opacity: 0, ease: Power1.easeOut }, "=-5")
        .to(".tile9 .img2", 5, { opacity: 1 }, "=-5")
        .to(".tile9 .img2", 5, { x: "30%", y: "-20%", opacity: 0 })
        .to(".image-overlay4", 5, { opacity: 0, ease: Power1.easeOut }, "=-5")
        .to(".tile9 .img3", 5, { opacity: 1 }, "=-5")
        .to(".tile9 .img3", 5, { x: "30%", y: "-20%", opacity: 0 })
        .to(".image-overlay3", 5, { opacity: 0, ease: Power1.easeOut }, "=-5")
        .to(".tile9 .img4", 5, { opacity: 1 }, "=-5")
        .to(".tile9 .img4", 5, { x: "30%", y: "-20%", opacity: 0 })
        .to(".image-overlay2", 5, { opacity: 0, ease: Power1.easeOut }, "=-5")
        .to(".tile9 .img5", 5, { opacity: 1 }, "=-5");

    new ScrollMagic.Scene({
        triggerElement: ".tile9",
        duration: "200%",
        triggerHook: 0,
        offset: 100
    })

    // .setPin(".tile9")
    .setTween(tile9)

    // .addIndicators()
    .addTo(controller);

    // Tile 14
    new ScrollMagic.Scene({
            triggerElement: ".tile14",
            duration: "200%",
            triggerHook: 0
        })
        .setPin(".tile14")

    // .addIndicators()
    .addTo(controller);

    const tile14 = new TimelineMax();
    tile14
        .set(".tile14 .live-video-2", { opacity: 0, display: "none" })
        .set(".tile14 .live-video-3", { opacity: 0, display: "none" })
        .set(".tile14 .live-video-4", { opacity: 0, display: "none" })
        .to(".tile14 .live-video-1", 1, { opacity: 0, display: "none" })
        .to(".tile14 .live-video-2", 1, { opacity: 1, display: "block" }, "=-1")
        .to(".tile14 .live-video-2", 1, { opacity: 0, display: "none" })
        .to(".tile14 .live-video-3", 1, { opacity: 1, display: "block" }, "=-1")
        .to(".tile14 .live-video-3", 1, { opacity: 0, display: "none" })
        .to(".tile14 .live-video-4", 1, { opacity: 1, display: "block" }, "=-1");

    new ScrollMagic.Scene({
        triggerElement: ".tile14",
        duration: "200%",
        triggerHook: 0,
        offset: 0
    })

    // .setPin(".tile9")
    .setTween(tile14)

    // .addIndicators()
    .addTo(controller);

    // SLiders
    new ScrollMagic.Scene({
            triggerElement: ".tile5-slider1",
            triggerHook: 0,
            duration: "20%"
        })
        .setPin(".tile5-slider1")

    // .addIndicators()
    .addTo(controller);

    const sixthScroll = new TimelineMax();
    sixthScroll
        .set(".tile8 .content-container", { y: "60%" })
        .set(".tile8 .content-container .content", { y: "60%", opacity: 0 })
        .set(".tile8 .hand-img-cont", { rotation: "50", y: "100%" })
        .set(".tile8 .hand-img-cont.reveal1", { opacity: 0 })
        .to(".tile8 .content-container", 4, { y: "0%", ease: Power1.easeOut })
        .to(".tile8 .content-container .content", 4, { y: "0%", opacity: 1, ease: Power1.easeOut }, "=-4")
        .to(".tile8 .hand-img-cont", 6, { rotation: "0", y: "0%", ease: Power1.easeOut }, "=-4")
        .to(".tile8 .hand-img-cont.reveal1", 0.3, { opacity: 1, ease: Power1.easeOut });

    new ScrollMagic.Scene({
        triggerElement: ".tile8",
        duration: "70%",
        triggerHook: 0.9
    })

    // .setPin(".tile8")
    .setTween(sixthScroll)

    // .addIndicators()
    .addTo(controller);

    const fifth = new TimelineMax({ repeat: -1 });
    fifth
        .to(".progress1", 3, {
            width: "100%",
            onUpdate: function() {
                $(".tile10-img1").addClass("hide");
                $(".tile10-img2").removeClass("hide");
            }
        })
        .set(".progress1", { width: "0%" })
        .to(".progress2", 3, {
            width: "100%",
            onUpdate: function() {
                $(".tile10-img2").addClass("hide");
                $(".tile10-img1").removeClass("hide");
            }
        })
        .set(".progress2", { width: "0%" });
});


$(".phone-submit-form").submit((e) => {
    e.preventDefault();
    const phone = $(e.currentTarget).find(".textbox").val();
    if (/^\d{10}$/.test(phone)) {
        $(".phone-submit-form .textbox").addClass('hide');
        $(".phone-submit-form .disable").addClass('hide');
        $(".phone-submit-form .button").addClass('hide');
        $(".phone-submit-form .success").removeClass('hide');
        $(".phone-submit-form .sms_success").removeClass('hide');
        //$( ".phone-submit-form .button" ).addClass('center');
        //$( ".phone-submit-form .button" ).attr('value', "Link Sent to Your Mobile Number");
        dataLayer.push({
            "event": "send",
            "eventCategory": "Send Link CTA",
            "eventAction": "Click",
        });
        $.ajax({
            url: "https://experience.glance.com/v3api/send-sms",
            data: JSON.stringify({
                phone: phone
            }),
            type: "POST",

            dataType: "json",
            contentType: "application/json",
            success: function(result) {
                console.log(result);
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    } else {

    }
});



// Youtube Video Popup
const scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/9f996d3e\/www-widgetapi.vflset\/www-widgetapi.js';
if (!window["YT"]) var YT = { loading: 0, loaded: 0 };
if (!window["YTConfig"]) var YTConfig = { "host": "https://www.youtube.com" };
if (!YT.loading) {
    YT.loading = 1;
    (function() {
        var l = [];
        YT.ready = function(f) { if (YT.loaded) f();
            else l.push(f) };
        window.onYTReady = function() { YT.loaded = 1; for (var i = 0; i < l.length; i++) try { l[i]() } catch (e) {} };
        YT.setConfig = function(c) { for (var k in c)
                if (c.hasOwnProperty(k)) YTConfig[k] = c[k] };
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.id = "www-widgetapi-script";
        a.src = scriptUrl;
        a.async = true;
        var c = document.currentScript;
        if (c) { var n = c.nonce || c.getAttribute("nonce"); if (n) a.setAttribute("nonce", n) }
        var b =
            document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })()
};
let videoId;
const tag = document.createElement('script');
tag.src = scriptUrl;
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
$(".play-button").click(function(item) {
    $("#player").removeClass("hide");
    $("#player").show();
    videoId = item.currentTarget.dataset.src;
    onYouTubeIframeAPIReady();
});
$(document).click((event) => {
    if (!$(event.target).closest('.play-button').length && player) {
        $("#player").fadeOut(300, () => {
            // Animation complete.
            $("#player").addClass("hide");
            stopVideo();
        });
    }
});
const onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
        playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            iv_load_policy: 3,
            showinfo: 0,
            rel: 0,
            loop: 1,
            fs: 1,
        },
        height: "90%",
        width: 650,
        videoId: videoId,
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        },
    });
}
const onPlayerReady = (event) => {
    event.target.playVideo();
}
const onPlayerStateChange = (event) => {
    if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.CUED) {
        $("#player").fadeOut(200, () => {
            // Animation complete.
            $("#player").addClass("hide");
            stopVideo();
        });
    }
}
const stopVideo = () => {
    player.stopVideo();
    player.destroy();
}