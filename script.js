/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("check");

var menuButton = document.querySelector("body header nav div");
var ul = document.querySelector("body header nav ul");

var article1 = document.querySelector(".article1");
var tekst1 = document.querySelector(".article1 p");
var pijl1 = document.querySelector(".article1 > img");

var article2 = document.querySelector(".article2");
var tekst2 = document.querySelector(".article2 p");
var pijl2 = document.querySelector(".article2 > img");

var article3 = document.querySelector(".article3");
var tekst3 = document.querySelector(".article3 p");
var pijl3 = document.querySelector(".article3 > img");

menuButton.addEventListener("click", function () {
    ul.classList.toggle("active");
});

/*Verbeterde code hamburger menu maar niet werkend
var hamburger = function(){
    ul.classListist.toggle("active");
    
menuButton.addEventListener("click", hamburger);
};*/


var uitschuiven1 = function() {
    tekst1.classList.toggle("tekst");
    pijl1.classList.toggle("pijl");
};

var uitschuiven2 = function() {
    tekst2.classList.toggle("tekst");
    pijl2.classList.toggle("pijl");
};

var uitschuiven3 = function() {
    tekst3.classList.toggle("tekst");
    pijl3.classList.toggle("pijl");
};

article1.addEventListener("click", uitschuiven1);
article2.addEventListener("click", uitschuiven2);
article3.addEventListener("click", uitschuiven3);

