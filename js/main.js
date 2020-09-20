var counter = 0;

document.getElementById("header").style.height = window.innerHeight + "px";
document.getElementById("book").style.height = window.innerHeight + "px";

function menu(params) {
    if (counter == 0){
        var head = document.getElementById("header");
        var menu = document.getElementById("menu");
        menu.src = "images/close.png";
        menu.style.width = "100%";
        menu.style.height = "100%";
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
        menu.src = "images/menu.png";
        menu.style.width = "100%";
        menu.style.height = "100%";
        head.style.transitionProperty = "filter";
        head.style.transitionDuration = "250ms";
        head.style.filter = "brightness(100%)";
        counter--;
        document.onmousewheel=document.onwheel=function(){ 
            return true;
        };
    }
};

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