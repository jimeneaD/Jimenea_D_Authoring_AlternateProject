// JAVASCRIPT DOCUMENT 
var a = document.querySelector("div.pro");
var Ar = [];

//Changing fav icons
function changeImage() {
	console.log("works");
	var x = document.getElementById("fav_item");
	if (x.src.match("images/fav_icon_gold")) {
        x.src = "images/fav_icon.png";
    } else {
        x.src = "images/fav_icon_gold.png";
    }
}

/*function changeImage() {
	console.log("works");
	var x = document.querySelectorAll("pro.fav_item");
	x.document.getElementById("fav_item").src="images/fav_icon_gold.png";
}*/

function init() {
	//console.log('INIT works');
	//console.log(a);
	if(typeof Storage !== "undefined") {
			// "!==" means is not equal
			console.log("local storage is supported");
			//localStorage.clear();
			//displayStoredContent();
		}else{
			console.log("upgrade your browser");
		}
}



window.addEventListener("load", init, false);




