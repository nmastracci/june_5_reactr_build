// (function (){})();
(function (){
	"use strict";
	// console.log("works!");
//HEX SVG SCROLLING
var hex1 = document.querySelector("#outside_hexes");
var hex1OP = document.querySelector("#outside_hexesOP");
var hex2 = document.querySelector("#outside_hexes2");
var hex2OP = document.querySelector("#outside_hexes2OP");
var hex3 = document.querySelector("#inside_hex");
var hex3OP = document.querySelector("#inside_hexOP");
var hex4 = document.querySelector("#inside_hex2");
console.log(hex1,hex2,hex3,hex4,hex1OP,hex2OP,hex3OP);

var length1 = hex1.getTotalLength();
var length1OP = hex1OP.getTotalLength();
var length2 = hex2.getTotalLength();
var length2OP = hex2OP.getTotalLength();
var length3 = hex3.getTotalLength();
var length3OP = hex3OP.getTotalLength();
var length4 = hex4.getTotalLength();

hex1.style.strokeDasharray = length1 + " " + length1;
hex1.style.strokeDashoffset = length1;
console.log(length1);
hex1OP.style.strokeDasharray = length1OP + " " + length1OP;
hex1OP.style.strokeDashoffset = length1OP;
console.log(length1);
hex2.style.strokeDasharray = length2 + " " + length2;
hex2.style.strokeDashoffset = length2;
console.log(length2);
hex2OP.style.strokeDasharray = length2OP + " " + length2OP;
hex2OP.style.strokeDashoffset = length2OP;
console.log(length2);
hex3.style.strokeDasharray = length3 + " " + length3;
hex3.style.strokeDashoffset = length3;
console.log(length3);
hex3OP.style.strokeDasharray = length3OP + " " + length3OP;
hex3OP.style.strokeDashoffset = length3OP;
console.log(length3);
hex4.style.strokeDasharray = length4 + " " + length4;
hex4.style.strokeDashoffset = length4;
console.log(length4);

hex1.getBoundingClientRect();
hex1OP.getBoundingClientRect();
hex2.getBoundingClientRect();
hex2OP.getBoundingClientRect();
hex3.getBoundingClientRect();
hex3OP.getBoundingClientRect();
hex4.getBoundingClientRect();

var section1 = document.querySelector("#forScrolling1");
// console.log(section1.offsetHeight);
window.addEventListener("scroll", function(e){
	// var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 
 // 	(document.documentElement.scrollHeight - document.documentElement.clientHeight);

 // var scrollPercentage = .25;
  // console.log("Scroll Top: document element" + document.documentElement.scrollTop);
  // console.log("Scroll Top: body" + document.body.scrollTop);
  // console.log("Scroll height: doc ele" + document.documentElement.scrollHeight);
  // console.log("client height: doc ele" + document.documentElement.clientHeight);

 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/
  (document.documentElement.scrollTop + section1.offsetHeight);
  
  // console.log("section"+section1.offsetTop);
  // console.log("section"+section1.offsetHeight);

 console.log("scrollPercentage"+" "+scrollPercentage);
  var drawLength1 = length1 * scrollPercentage;
  var drawLength1OP = length1OP * scrollPercentage;
  var drawLength2 = length2 * scrollPercentage;
  var drawLength2OP = length2OP * scrollPercentage;
  var drawLength3 = length3 * scrollPercentage;
  var drawLength3OP = length3OP * scrollPercentage;
  var drawLength4 = length4 * scrollPercentage;
  hex1.style.strokeDashoffset = length1 - drawLength1;
  hex1OP.style.strokeDashoffset = length1OP - drawLength1OP;
  hex2.style.strokeDashoffset = length2 - drawLength2;
  hex2OP.style.strokeDashoffset = length2OP - drawLength2OP;
  hex3.style.strokeDashoffset = length3 - drawLength3;
  hex3OP.style.strokeDashoffset = length3OP - drawLength3OP;
  hex4.style.strokeDashoffset = length4 - drawLength4;

// TweenLite.to(drawLength1, 0.2,{ease:Elastic.easeOut});

  if (scrollPercentage >= 0.99) {
    hex1.style.strokeDasharray = "none"; 
    hex1OP.style.strokeDasharray = "none";
    hex2.style.strokeDasharray = "none";
    hex2OP.style.strokeDasharray = "none";
    hex3.style.strokeDasharray = "none";
    hex3OP.style.strokeDasharray = "none";
    hex4.style.strokeDasharray = "none";
  } else {
    hex1.style.strokeDasharray = length1 + ' ' + length1;
    hex1OP.style.strokeDasharray = length1OP + ' ' + length1OP;
    hex2.style.strokeDasharray = length2 + ' ' + length2;
    hex2OP.style.strokeDasharray = length2OP + ' ' + length2OP;
    hex3.style.strokeDasharray = length3 + ' ' + length3;
    hex3OP.style.strokeDasharray = length3OP + ' ' + length3OP;
    hex4.style.strokeDasharray = length4 + ' ' + length4;
  }
 //HEX SVG SCROLLING
});

//CIRCLE SVG SCROLLING BEGIN
var cir1 = document.querySelector("#outsideCircle1");
var cir2 = document.querySelector("#outsideCircle2");
var cir3 = document.querySelector("#outsideCircle3");
var cir4 = document.querySelector("#insideCircle");
var cir5 = document.querySelector("#insideCircle2");


var lengthcir1 = cir1.getTotalLength();
var lengthcir2 = cir2.getTotalLength();
var lengthcir3 = cir3.getTotalLength();
var lengthcir4 = cir4.getTotalLength();
var lengthcir5 = cir5.getTotalLength();

cir1.style.strokeDasharray = lengthcir1 + " " + lengthcir1;
cir1.style.strokeDashoffset = lengthcir1;
// console.log(lengthcir1);
cir2.style.strokeDasharray = lengthcir2 + " " + lengthcir2;
cir2.style.strokeDashoffset = lengthcir2;
// console.log(lengthcir2);
cir3.style.strokeDasharray = lengthcir3 + " " + lengthcir3;
cir3.style.strokeDashoffset = lengthcir3;
// console.log(lengthcir3);
cir4.style.strokeDasharray = lengthcir4 + " " + lengthcir4;
cir4.style.strokeDashoffset = lengthcir4;
// console.log(lengthcir4);
cir5.style.strokeDasharray = lengthcir5 + " " + lengthcir5;
cir5.style.strokeDashoffset = lengthcir5;
// console.log(lengthcir5);

cir1.getBoundingClientRect();
cir2.getBoundingClientRect();
cir3.getBoundingClientRect();
cir4.getBoundingClientRect();
cir5.getBoundingClientRect();

var section2 = document.querySelector("#forScrolling2");
console.log(section2);

function cirScroll(){
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/
  (document.documentElement.scrollTop + section2.offsetHeight);


console.log("CIR scrollPercentage"+" "+scrollPercentage);

  var drawLengthCir1 = lengthcir1 * scrollPercentage; 
  var drawLengthCir2 = lengthcir2 * scrollPercentage;
  var drawLengthCir3 = lengthcir3 * scrollPercentage;
  var drawLengthCir4 = lengthcir4 * scrollPercentage;
  var drawLengthCir5 = lengthcir5 * scrollPercentage;
  
  cir1.style.strokeDashoffset = lengthcir1 - drawLengthCir1;
  cir2.style.strokeDashoffset = lengthcir2 - drawLengthCir2;
  cir3.style.strokeDashoffset = lengthcir3 - drawLengthCir3;
  cir4.style.strokeDashoffset = lengthcir4 - drawLengthCir4;
  cir5.style.strokeDashoffset = lengthcir5 - drawLengthCir5;

  if (scrollPercentage >= 0.99) {
    cir1.style.strokeDasharray = "none"; 
    cir2.style.strokeDasharray = "none";
    cir3.style.strokeDasharray = "none";
    cir4.style.strokeDasharray = "none";
    cir5.style.strokeDasharray = "none";
    
  } else {
    cir1.style.strokeDasharray = lengthcir1 + ' ' + lengthcir1;
    cir2.style.strokeDasharray = lengthcir2 + ' ' + lengthcir2;
    cir3.style.strokeDasharray = lengthcir3 + ' ' + lengthcir3;
    cir4.style.strokeDasharray = lengthcir4 + ' ' + lengthcir4;
    cir5.style.strokeDasharray = lengthcir5 + ' ' + lengthcir5;
    
  }
 
}; 
 
window.addEventListener("scroll", cirScroll,false);
//CIRCLE SVG SCROLLING END

//TRIANGLE SVG SCROLLING BEGIN
var tri1 = document.querySelector("#insideSpiral");
var tri2 = document.querySelector("#centerOut1");
var tri3 = document.querySelector("#centerOut2");
var tri4 = document.querySelector("#centerOut3");
var tri5 = document.querySelector("#centerOut4");
var tri6 = document.querySelector("#hash1");
var tri7 = document.querySelector("#hash2");
var tri8 = document.querySelector("#hash3");
var tri9 = document.querySelector("#hash4");
var tri10 = document.querySelector("#hash5");
var tri11 = document.querySelector("#invertedTri1");
var tri12 = document.querySelector("#ousideTri1");
var tri13 = document.querySelector("#ousideTri2");
var tri14 = document.querySelector("#ousideTri3");
var tri15 = document.querySelector("#invertedTri2");

// console.log(tri14);

var lengthtri1 = tri1.getTotalLength();
var lengthtri2 = tri2.getTotalLength();
var lengthtri3 = tri3.getTotalLength();
var lengthtri4 = tri4.getTotalLength();
var lengthtri5 = tri5.getTotalLength();
var lengthtri6 = tri6.getTotalLength();
var lengthtri7 = tri7.getTotalLength();
var lengthtri8 = tri8.getTotalLength();
var lengthtri9 = tri9.getTotalLength();
var lengthtri10 = tri10.getTotalLength();
var lengthtri11 = tri11.getTotalLength();
var lengthtri12 = tri12.getTotalLength();
var lengthtri13 = tri13.getTotalLength();
var lengthtri14 = tri14.getTotalLength();
var lengthtri15 = tri15.getTotalLength();



tri1.style.strokeDasharray = lengthtri1 + " " + lengthtri1;
tri1.style.strokeDashoffset = lengthtri1;
// console.log(lengthtri1);
tri2.style.strokeDasharray = lengthtri2 + " " + lengthtri2;
tri2.style.strokeDashoffset = lengthtri2;
// console.log(lengthtri2);
tri3.style.strokeDasharray = lengthtri3 + " " + lengthtri3;
tri3.style.strokeDashoffset = lengthtri3;
// console.log(lengthtri3);
tri4.style.strokeDasharray = lengthtri4 + " " + lengthtri4;
tri4.style.strokeDashoffset = lengthtri4;
// console.log(lengthtri4);
tri5.style.strokeDasharray = lengthtri5 + " " + lengthtri5;
tri5.style.strokeDashoffset = lengthtri5;
// console.log(lengthtri5);
tri6.style.strokeDasharray = lengthtri6 + " " + lengthtri6;
tri6.style.strokeDashoffset = lengthtri6;
// console.log(lengthtri6);
tri7.style.strokeDasharray = lengthtri7 + " " + lengthtri7;
tri7.style.strokeDashoffset = lengthtri7;
// console.log(lengthtri7);
tri8.style.strokeDasharray = lengthtri8 + " " + lengthtri8;
tri8.style.strokeDashoffset = lengthtri8;
// console.log(lengthtri8);
tri9.style.strokeDasharray = lengthtri9 + " " + lengthtri9;
tri9.style.strokeDashoffset = lengthtri9;
// console.log(lengthtri9);
tri10.style.strokeDasharray = lengthtri10 + " " + lengthtri10;
tri10.style.strokeDashoffset = lengthtri10;
// console.log(lengthtri10);
tri11.style.strokeDasharray = lengthtri11 + " " + lengthtri11;
tri11.style.strokeDashoffset = lengthtri11;
// console.log(lengthtri11);
tri12.style.strokeDasharray = lengthtri12 + " " + lengthtri12;
tri12.style.strokeDashoffset = lengthtri12;
// console.log(lengthtri12);
tri13.style.strokeDasharray = lengthtri13 + " " + lengthtri13;
tri13.style.strokeDashoffset = lengthtri13;
// console.log(lengthtri13);
tri14.style.strokeDasharray = lengthtri14 + " " + lengthtri14;
tri14.style.strokeDashoffset = lengthtri14;
// console.log(lengthtri14);
tri15.style.strokeDasharray = lengthtri15 + " " + lengthtri15;
tri15.style.strokeDashoffset = lengthtri15;
// console.log(lengthtri15);

tri1.getBoundingClientRect();
tri2.getBoundingClientRect();
tri3.getBoundingClientRect();
tri4.getBoundingClientRect();
tri5.getBoundingClientRect();
tri6.getBoundingClientRect();
tri7.getBoundingClientRect();
tri8.getBoundingClientRect();
tri9.getBoundingClientRect();
tri10.getBoundingClientRect();
tri11.getBoundingClientRect();
tri12.getBoundingClientRect();
tri13.getBoundingClientRect();
tri14.getBoundingClientRect();
tri15.getBoundingClientRect();

var section3 = document.querySelector("#forScrolling3");

function triScroll(){
 var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/
  (document.documentElement.scrollTop + section3.offsetHeight);

console.log("TRI scrollPercentage"+" "+scrollPercentage);

  var drawLengthTri1 = lengthtri1 * scrollPercentage;
  var drawLengthTri2 = lengthtri2 * scrollPercentage;
  var drawLengthTri3 = lengthtri3 * scrollPercentage;
  var drawLengthTri4 = lengthtri4 * scrollPercentage;
  var drawLengthTri5 = lengthtri5 * scrollPercentage;
  var drawLengthTri6 = lengthtri6 * scrollPercentage;
  var drawLengthTri7 = lengthtri7 * scrollPercentage;
  var drawLengthTri8 = lengthtri8 * scrollPercentage;
  var drawLengthTri9 = lengthtri9 * scrollPercentage;
  var drawLengthTri10 = lengthtri10 * scrollPercentage;
  var drawLengthTri11 = lengthtri11 * scrollPercentage;
  var drawLengthTri12 = lengthtri12 * scrollPercentage;
  var drawLengthTri13 = lengthtri13 * scrollPercentage;
  var drawLengthTri14 = lengthtri14 * scrollPercentage;
  var drawLengthTri15 = lengthtri15 * scrollPercentage;
  
  tri1.style.strokeDashoffset = lengthtri1 - drawLengthTri1;
  tri2.style.strokeDashoffset = lengthtri2 - drawLengthTri2;
  tri3.style.strokeDashoffset = lengthtri3 - drawLengthTri3;
  tri4.style.strokeDashoffset = lengthtri4 - drawLengthTri4;
  tri5.style.strokeDashoffset = lengthtri5 - drawLengthTri5;
  tri6.style.strokeDashoffset = lengthtri6 - drawLengthTri6;
  tri7.style.strokeDashoffset = lengthtri7 - drawLengthTri7;
  tri8.style.strokeDashoffset = lengthtri8 - drawLengthTri8;
  tri9.style.strokeDashoffset = lengthtri9 - drawLengthTri9;
  tri10.style.strokeDashoffset = lengthtri10 - drawLengthTri10;
  tri11.style.strokeDashoffset = lengthtri11 - drawLengthTri11;
  tri12.style.strokeDashoffset = lengthtri12 - drawLengthTri12;
  tri13.style.strokeDashoffset = lengthtri13 - drawLengthTri13;
  tri14.style.strokeDashoffset = lengthtri14 - drawLengthTri14;
  tri15.style.strokeDashoffset = lengthtri15 - drawLengthTri15;

  if (scrollPercentage >= 0.99) {
    tri1.style.strokeDasharray = "none"; 
    tri2.style.strokeDasharray = "none";
    tri3.style.strokeDasharray = "none";
    tri4.style.strokeDasharray = "none";
    tri5.style.strokeDasharray = "none";
    tri6.style.strokeDasharray = "none"; 
    tri7.style.strokeDasharray = "none";
    tri8.style.strokeDasharray = "none";
    tri9.style.strokeDasharray = "none";
    tri10.style.strokeDasharray = "none";
    tri11.style.strokeDasharray = "none"; 
    tri12.style.strokeDasharray = "none";
    tri13.style.strokeDasharray = "none";
    tri14.style.strokeDasharray = "none";
    tri15.style.strokeDasharray = "none";
    
  } else {
    tri1.style.strokeDasharray = lengthtri1 + ' ' + lengthtri1;
    tri2.style.strokeDasharray = lengthtri2 + ' ' + lengthtri2;
    tri3.style.strokeDasharray = lengthtri3 + ' ' + lengthtri3;
    tri4.style.strokeDasharray = lengthtri4 + ' ' + lengthtri4;
    tri5.style.strokeDasharray = lengthtri5 + ' ' + lengthtri5;
    tri6.style.strokeDasharray = lengthtri6 + ' ' + lengthtri6;
    tri7.style.strokeDasharray = lengthtri7 + ' ' + lengthtri7;
    tri8.style.strokeDasharray = lengthtri8 + ' ' + lengthtri8;
    tri9.style.strokeDasharray = lengthtri9 + ' ' + lengthtri9;
    tri10.style.strokeDasharray = lengthtri10 + ' ' + lengthtri10;
    tri11.style.strokeDasharray = lengthtri11 + ' ' + lengthtri11;
    tri12.style.strokeDasharray = lengthtri12 + ' ' + lengthtri12;
    tri13.style.strokeDasharray = lengthtri13 + ' ' + lengthtri13;
    tri14.style.strokeDasharray = lengthtri14 + ' ' + lengthtri14;
    tri15.style.strokeDasharray = lengthtri15 + ' ' + lengthtri15;
    
  }
 
};
 
window.addEventListener("scroll", triScroll,false);
//TRIANGLE SVG SCROLLING END

//SPIRAL SVG SCROLLING BEGIN
var sp1 = document.querySelector("#spiral1");
var sp2 = document.querySelector("#spiral2");
var sp3 = document.querySelector("#outside1");
var sp4 = document.querySelector("#outside2");

// console.log(sp1,sp2,sp3,sp4);

var lengthsp1 = sp1.getTotalLength();
var lengthsp2 = sp2.getTotalLength();
var lengthsp3 = sp3.getTotalLength();
var lengthsp4 = sp4.getTotalLength();

sp1.style.strokeDasharray = lengthsp1 + " " + lengthsp1;
sp1.style.strokeDashoffset = lengthsp1;
// console.log(lengthsp1);
sp2.style.strokeDasharray = lengthsp2 + " " + lengthsp2;
sp2.style.strokeDashoffset = lengthsp2;
// console.log(lengthsp2);
sp3.style.strokeDasharray = lengthsp3 + " " + lengthsp3;
sp3.style.strokeDashoffset = lengthsp3;
// console.log(lengthsp3);
sp4.style.strokeDasharray = lengthsp4 + " " + lengthsp4;
sp4.style.strokeDashoffset = lengthsp4;
// console.log(lengthsp4);

sp1.getBoundingClientRect();
sp2.getBoundingClientRect();
sp3.getBoundingClientRect();
sp4.getBoundingClientRect();
var section4 = document.querySelector("#forScrolling4");

function spScroll(){
  // var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 
 //   (document.documentElement.scrollHeight - document.documentElement.clientHeight);

 // var scrollPercentage = .25;
  // console.log("Scroll Top: document element" + document.documentElement.scrollTop);
  // console.log("Scroll Top: body" + document.body.scrollTop);
  // console.log("Scroll height: doc ele" + document.documentElement.scrollHeight);
  // console.log("client height: doc ele" + document.documentElement.clientHeight);

 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/
  (document.documentElement.scrollTop + section4.offsetHeight);
  
  // console.log("section"+section1.offsetTop);
  // console.log("section"+section1.offsetHeight);

 console.log("SP scrollPercentage"+" "+scrollPercentage);
  var drawLengthSp1 = lengthsp1 * scrollPercentage;
  var drawLengthSp2 = lengthsp2 * scrollPercentage;
  var drawLengthSp3 = lengthsp3 * scrollPercentage;
  var drawLengthSp4 = lengthsp4 * scrollPercentage;
  sp1.style.strokeDashoffset = lengthsp1 - drawLengthSp1;
  sp2.style.strokeDashoffset = lengthsp2 - drawLengthSp2;
  sp3.style.strokeDashoffset = lengthsp3 - drawLengthSp3;
  sp4.style.strokeDashoffset = lengthsp4 - drawLengthSp4;

  if (scrollPercentage >= 0.99) {
    sp1.style.strokeDasharray = "none"; 
    sp2.style.strokeDasharray = "none";
    sp3.style.strokeDasharray = "none";
    sp4.style.strokeDasharray = "none";
  } else {
    sp1.style.strokeDasharray = lengthsp1 + ' ' + lengthsp1;
    sp2.style.strokeDasharray = lengthsp2 + ' ' + lengthsp2;
    sp3.style.strokeDasharray = lengthsp3 + ' ' + lengthsp3;
    sp4.style.strokeDasharray = lengthsp4 + ' ' + lengthsp4;
  }
 
};

window.addEventListener("scroll", spScroll, false); 
//SPIRAL SVG SCROLLING END



})();

