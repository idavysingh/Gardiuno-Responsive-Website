// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	
	//varibales
	
	//functions
	
	//listeners
scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
  console
}

document.getElementById("info").addEventListener('click', () => {
  scrollTo(document.getElementById("10"));
});

document.getElementById("showcase").addEventListener('click', () => {
  scrollTo(document.getElementById("5"));
});

document.getElementById("Contact").addEventListener('click', () => {
  scrollTo(document.getElementById(""));
});
	
})();