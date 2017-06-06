// (function (){})();
(function (){
	"use strict";
	// console.log("works!");

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

window.addEventListener("scroll", function(e){
	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 
  (document.documentElement.scrollHeight - document.documentElement.clientHeight);
 
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
});





})();

