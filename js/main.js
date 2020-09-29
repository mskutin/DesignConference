var counter = 0;

document.getElementById("header").style.height = window.innerHeight + "px";

// Menu
function menu() {
    if (counter == 0){
        var menu = document.getElementById("menu");
        var head = document.getElementById("header");
        var modal = document.getElementById("modal-menu")
        modal.style.animation = "show 1s";
        modal.style.opacity = 1;
        modal.style.display = "block";
        menu.style.zIndex = "999";
        modal.style.zIndex = "1";
        menu.src = "images/close.png";
        modal.style.filter = "brightness(100%)";
        document.getElementById("message").style.transitionProperty = "filter";
        document.getElementById("message").style.filter = "brightness(60%)";
        document.getElementById("header-second").style.transitionProperty = "filter";
        document.getElementById("header-second").style.filter = "brightness(60%)";
        document.getElementById("header-third").style.transitionProperty = "filter";
        document.getElementById("header-third").style.filter = "brightness(60%)";
        document.getElementById("header-four").style.transitionProperty = "filter";
        document.getElementById("header-four").style.filter = "brightness(60%)";
        head.style.backgroundColor = "#998f00";
        counter++;
        document.onmousewheel=document.onwheel=function(){ 
            return false;
        };
    }else{
        var head = document.getElementById("header");
        var menu = document.getElementById("menu");
        var modal = document.getElementById("modal-menu")
        modal.style.animation = "back 1s";
        modal.style.opacity = 0;
        menu.src = "images/menu.png";
        modal.style.filter = "brightness(100%)";
        document.getElementById("message").style.transitionProperty = "filter";
        document.getElementById("message").style.filter = "brightness(100%)";
        document.getElementById("header-second").style.transitionProperty = "filter";
        document.getElementById("header-second").style.filter = "brightness(100%)";
        document.getElementById("header-third").style.transitionProperty = "filter";
        document.getElementById("header-third").style.filter = "brightness(100%)";
        document.getElementById("header-four").style.transitionProperty = "filter";
        document.getElementById("header-four").style.filter = "brightness(100%)";
        head.style.backgroundColor = "#ffef00";
        counter--;
        document.onmousewheel=document.onwheel=function(){ 
            return true;
        };
    }
};
function link() {
    var head = document.getElementById("header");
        var menu = document.getElementById("menu");
        var modal = document.getElementById("modal-menu")
        modal.style.display = "none";
        menu.style.zIndex = "999";
        modal.style.zIndex = "1";
        menu.src = "images/menu.png";
        modal.style.filter = "brightness(100%)";
        document.getElementById("message").style.transitionProperty = "filter";
        document.getElementById("message").style.filter = "brightness(100%)";
        document.getElementById("header-second").style.transitionProperty = "filter";
        document.getElementById("header-second").style.filter = "brightness(100%)";
        document.getElementById("header-third").style.transitionProperty = "filter";
        document.getElementById("header-third").style.filter = "brightness(100%)";
        document.getElementById("header-four").style.transitionProperty = "filter";
        document.getElementById("header-four").style.filter = "brightness(100%)";
        head.style.backgroundColor = "#ffef00";
        counter--;
        document.onmousewheel=document.onwheel=function(){ 
            return true;
    };
}

// Speakers
var slider = tns({
    container: ".slider",
    mode: "carousel",
    slideBy: "page",
    nav: false,
    speed: 500,
    responsive: {
        320: {
            items: 1,
            gutter: 10,
            touch: true,
            mouseDrag: true,
            controls: false
        },
        900: {
            items: 3,
            touch: true,
            gutter: 20,
            mouseDrag: true,
            controls: true
        }
    }
});
function close_modal() {
    var modal_fillip = document.getElementById("modal-fillip-speaker");
    var modal_alexandra = document.getElementById("modal-alexandra-speaker");
    var modal_alexey = document.getElementById("modal-alexey-speaker");
    var modal_sergey = document.getElementById("modal-sergey-speaker");
    var modal_maria = document.getElementById("modal-maria-speaker");
    var modal_yana = document.getElementById("modal-yana-speaker");
    modal_fillip.style.display = "none";
    modal_alexandra.style.display = "none";
    modal_alexey.style.display = "none";
    modal_sergey.style.display = "none";
    modal_maria.style.display = "none";
    modal_yana.style.display = "none";
    document.onmousewheel = document.onwheel = function(){ 
        return true;
    };
}
function fillip() {
    var modal = document.getElementById("modal-fillip-speaker");
    modal.style.display = "block";
    document.onmousewheel = document.onwheel = function(){ 
        return false;
    };
}
function alexandra() {
    var modal = document.getElementById("modal-alexandra-speaker");
    modal.style.display = "block";
    document.onmousewheel = document.onwheel = function(){ 
        return false;
    };
}
function alexey() {
    var modal = document.getElementById("modal-alexey-speaker");
    modal.style.display = "block";
    document.onmousewheel = document.onwheel = function(){ 
        return false;
    };
}
function sergey() {
    var modal = document.getElementById("modal-sergey-speaker");
    modal.style.display = "block";
    document.onmousewheel = document.onwheel = function(){ 
        return false;
    };
}
function maria() {
    var modal = document.getElementById("modal-maria-speaker");
    modal.style.display = "block";
    document.onmousewheel = document.onwheel = function(){ 
        return false;
    };
}
function yana() {
    var modal = document.getElementById("modal-yana-speaker");
    modal.style.display = "block";
    document.onmousewheel = document.onwheel = function(){ 
        return false;
    };
}

// Shedule
function tab1() {
    document.getElementById("tab1").style.backgroundColor = "#ffef00";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "white";
    document.getElementById("tab2").style.borderColor = "#ffef00";
    document.getElementById("tab3").style.borderColor = "#ffef00";
};
function tab2() {
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "#ffef00";
    document.getElementById("tab3").style.backgroundColor = "white";
    document.getElementById("tab1").style.borderColor = "#ffef00";
    document.getElementById("tab3").style.borderColor = "#ffef00";
};
function tab3() {
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "#ffef00";
    document.getElementById("tab1").style.borderColor = "#ffef00";
    document.getElementById("tab2").style.borderColor = "#ffef00";
};

// Gallery
function year1() {
    document.getElementById("year1").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year2() {
    document.getElementById("year2").style.backgroundColor = "#ffef00";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year1").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year3() {
    document.getElementById("year3").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year1").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year4() {
    document.getElementById("year4").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year1").style.borderColor = "#ffef00";
};

var options = {
    interval: 3000,
    pause: "hover",
    wrap: true
};
carousel = document.getElementById("#gallery-slider");
carousel.carousel(options);
