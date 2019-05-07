
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


li.forEach(function(el) {
	var span = document.createElement("span");
	span.appendChild(document.createTextNode("delete"));
	span.addEventListener('click', deleteLi);
	el.appendChild(span);
});

function deleteLi() {
	this.parentNode.remove();
}

// verifier s'il y a quelque chose dans le champ input
function checkinputlength() {
	return input.value.length;
}
// function pour ajouter/retrancher la classe done
function done(e) {
	if(e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}
// function pour créer un tag li, 
// prendre le contenu dans le champ input et l'insérer dans li
// ajouter li au bas de la liste de ul
// vider le champ input
function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode("delete"));
	span.addEventListener('click', deleteLi);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	ul.appendChild(li);
	input.value = "";
}


function addListAfterClick() {
	if(checkinputlength() > 0) {
		createListElement();		
	}
}

function addListAfterKeypress(event) {
	if(checkinputlength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



ul.addEventListener('click', done);

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);


/*----------------------------- changing background color -----------------------------*/

var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById('body');
var random = document.getElementById('random');
var gradientInfo = document.getElementById('gradientInfo');
setGradientColor();

color1.addEventListener('input', setGradientColor);
color2.addEventListener('input', setGradientColor);
random.addEventListener('click', pickRandomColor);

function setGradientColor() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
	gradientInfo.textContent = body.style.background;
}

function pickRandomColor() {
	body.style.background = 'linear-gradient(to right, ' + pickColor() + ',' + pickColor() + ')';
	gradientInfo.textContent = body.style.background;
}

function pickColor() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}




