var counter = 0;

document.getElementById("header").style.height = window.innerHeight + "px";

window.addEventListener("mousewheel", function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
        return false;
    }
});

function menu(params) {
    if (counter == 0){
        var menu = document.getElementById("menu");
        var head = document.getElementById("header");
        var modal = document.getElementById("modal-menu")
        modal.style.display = "block";
        menu.style.zIndex = "999";
        modal.style.zIndex = "1";
        menu.src = "images/close.png";
        modal.style.filter = "brightness(100%)";
        head.style.transitionProperty = "filter";
        head.style.transitionDuration = "250ms";
        head.style.filter = "brightness(40%)";
        counter++;
        document.onmousewheel=document.onwheel=function(){ 
            return false;
        };
    }else{
        var head = document.getElementById("header");
        var menu = document.getElementById("menu");
        var modal = document.getElementById("modal-menu")
        modal.style.display = "none";
        menu.style.zIndex = "999";
        menu.src = "images/menu.png";
        head.style.transitionProperty = "filter";
        head.style.transitionDuration = "250ms";
        head.style.filter = "brightness(100%)";
        counter--;
        document.onmousewheel=document.onwheel=function(){ 
            return true;
        };
    }
};

function link(params) {
    var head = document.getElementById("header");
        var menu = document.getElementById("menu");
        var modal = document.getElementById("modal-menu")
        modal.style.display = "none";
        menu.style.zIndex = "999";
        modal.style.zIndex = "1";
        menu.src = "images/menu.png";
        head.style.transitionProperty = "filter";
        head.style.transitionDuration = "250ms";
        head.style.filter = "brightness(100%)";
        counter--;
        document.onmousewheel=document.onwheel=function(){ 
            return true;
    };
}

function next(params) {
    var speaker_1 = document.getElementById("speaker-1");
    var speaker_2 = document.getElementById("speaker-2");
    var speaker_3 = document.getElementById("speaker-3");
    speaker_1.src = "images/sergey.png";
    speaker_2.src = "images/maria.png";
    speaker_3.src = "images/yana.png";
}
function prev(params) {
    var speaker_1 = document.getElementById("speaker-1")
    var speaker_2 = document.getElementById("speaker-2")
    var speaker_3 = document.getElementById("speaker-3")
    speaker_1.src = "images/fillip.png";
    speaker_2.src = "images/alexandra.png";
    speaker_3.src = "images/alexey.png";
}

function fillip(params) {
    var modal = document.getElementById("modal-fillip");
    var btn = document.getElementsByClassName("fillip")
    var div = document.getElementById("speakers");
    div.style.transitionProperty = "filter";
    div.style.transitionDuration = "250ms";
    div.style.filter = "brightness(40%)";
    document.onmousewheel=document.onwheel=function(){ 
        return false;
    };
    btn.onclick = function () {
       modal.style.display = "block";
    }
    window.onclick = function (event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
    }
}
function modal_fillip_close(params) {
    var div = document.getElementById("speakers");
    var modal = document.getElementById("modal-fillip")
    modal.style.display = "none";
    div.style.transitionProperty = "filter";
    div.style.transitionDuration = "250ms";
    div.style.filter = "brightness(100%)";
    document.onmousewheel=document.onwheel=function(){ 
        return true;
    };
}

function tab1(params) {
    document.getElementById("tab1").style.backgroundColor = "#ffef00";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "white";
    document.getElementById("tab2").style.borderColor = "#ffef00";
    document.getElementById("tab3").style.borderColor = "#ffef00";
};
function tab2(params) {
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "#ffef00";
    document.getElementById("tab3").style.backgroundColor = "white";
    document.getElementById("tab1").style.borderColor = "#ffef00";
    document.getElementById("tab3").style.borderColor = "#ffef00";
};
function tab3(params) {
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "#ffef00";
    document.getElementById("tab1").style.borderColor = "#ffef00";
    document.getElementById("tab2").style.borderColor = "#ffef00";
};

function year1(params) {
    document.getElementById("year1").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year2(params) {
    document.getElementById("year2").style.backgroundColor = "#ffef00";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year1").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year3(params) {
    document.getElementById("year3").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year1").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year4(params) {
    document.getElementById("year4").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year1").style.borderColor = "#ffef00";
};