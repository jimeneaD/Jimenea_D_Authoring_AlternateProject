// JAVASCRIPT DOCUMENT 

// 1. Once favourite has been clicked, it triggers and gets ID of product
// 2. The ID gets saved into LocalStorage
// 3. Once ID is in LocalStorage, change favourite icon to gold icon
// 4. Once broswer is closed/refrshed, the gold icon is still there AND ID is still in LocalStorage until the product has been "unfavourite".

var Arr = [];
//var x = document.querySelector("#fav_item");
var c = document.querySelector(".c");
var product = document.querySelector(".pro");



//Changing favourite icons
function changeImage() {
	console.log("favourite works");
	if (c.src.match("images/fav_icon_gold.png")) {
        c.src = "images/fav_icon.png";
    } else {
        c.src = "images/fav_icon_gold.png";
    }
}

// toggle the navigation in mobile
function Toggle() {
	//console.log("mobile works");
    var x = document.querySelector('.mobile-Nav');

    if (x.style.display == 'none') {
    //console.log("mobile works");
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function init() {
	//console.log('init works');
	//console.log(a);
	if(typeof Storage !== "undefined") {// "!==" means is not equal
			console.log("local storage is supported");
		}else{
			console.log("upgrade your browser");
		}


	//when favourite is clicked, get the ID of item and save that item in the LS
	c.addEventListener('click', function(e) {
		console.log("this is " + c.id);
		trigger(c.id);
		e.preventDefault();
	});

	// This is used to display the stored data in the console
	/*var LS_Btn = document.querySelector(".btn");
	LS_Btn.addEventListener('click', function() {
		//console.log('works');
		var getStored = getItems();
		console.log(getStored);
	}, false);*/

	var mob_Btn = document.querySelectorAll("#menu-icon");

    for (var i = 0; i < mob_Btn.length; i++) {
        if (mob_Btn[i].addEventListener) {
            mob_Btn[i].addEventListener("click", function () {
                Toggle();
            });
        } else {
            mob_Btn[i].attachEvent("click", function () {
                Toggle();
            });
        }
    }


}

function trigger(items) {
	Arr.push(items); // this is adding to the array
	//console.log(items);
	addLS(Arr);// This is what will add the "items" into localstorage
}

// adds the data to localStorage
function addLS(Arr) {
	localStorage.setItem("item",Arr);
}

// gets the stored data from localStorage 
function getItems() {
	var stored = localStorage.getItem('item');
	return stored;
}





window.addEventListener("load", init, false);




