// Scrolling behavior

window.sr = ScrollReveal({
  duration: 800,
  distance: '10px',
  scale: .95
});

// Hover states

var body = document.body;

function addClass(element, nameOfClass) {
	if (element.classList) {
 		element.classList.add(nameOfClass);
	}
	else {
		var regExp = new RegExp('(\\s|^)' + nameOfClass + '(\\s|$)');
		if (!element.className.match(regExp)) {
			element.className += " " + nameOfClass;
		}
	}
}

function removeClass(element, nameOfClass) {
	if (element.classList) {
		element.classList.remove(nameOfClass);
	}
	else {
		var regExp = new RegExp('(\\s|^)' + nameOfClass + '(\\s|$)');
		if (element.className.match(regExp)) {
			element.className.replace(regExp, ' ');
		}
	}
}

// Easter egg

var allowedKeys = {
  76: 'l',
  65: 'a',
  85: 'u',
  82: 'r',
  69: 'e',
  78: 'n',
};

var laurenCode = ['l', 'a', 'u', 'r', 'e', 'n'];
var laurenCodePosition = 0;

document.addEventListener('keydown', function (e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = laurenCode[laurenCodePosition];

  if (key == requiredKey) {
    laurenCodePosition++;
    if (laurenCodePosition == laurenCode.length) {
      activateCheats();
      laurenCodePosition = 0;
    }
  } else {
    laurenCodePosition = 0;
  }
});

function activateCheats() {
  body.classList.add('easter-egg');
}
