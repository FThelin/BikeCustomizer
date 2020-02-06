var tools = document.querySelectorAll('aside .icon');
var toolsInner = document.querySelector('.frame-popup .frame-inner-div');
var toolsWheele = document.querySelector('.wheele-popup .wheele-inner-div');
var closeFrame = document.querySelector('.frame-popup .frame-inner-div p');
var closeWheele = document.querySelector('.wheele-popup .wheele-inner-div p');
var colors = document.querySelectorAll('.frame-popup .frame-inner-div div');
var colorsWheele = document.querySelectorAll('.wheele-popup .wheele-inner-div div');
var bikeImage = document.querySelector('.bike img');
var bikeSaddle = document.querySelectorAll('.saddle');
var bikeFrame = document.querySelectorAll('.bikeframe');
var bikeWheele = document.querySelectorAll('.wheele');
var _loop_1 = function (i) {
    tools[i].addEventListener('click', function () {
        var name = tools[i].classList[0];
        var popup = document.querySelector("." + name + "-popup");
        console.log(name);
        if (name === 'frame') {
            frameColor();
        }
        else if (name === 'wheele') {
            wheeleColor();
        }
        else if (name === 'saddle') {
            saddleColor();
        }
        popup.classList.add('show');
        setTimeout(function () {
            toolsInner.style.visibility = 'visible';
        }, 800);
    });
};
//Open toolbar windows
for (var i = 0; i < tools.length; i++) {
    _loop_1(i);
}
//Close toolbar windows
closeFrame.addEventListener('click', function () {
    toolsInner.style.visibility = 'hidden';
    toolsInner.parentElement.classList.remove('show');
});
function frameColor() {
    var _loop_2 = function (i) {
        colors[i].addEventListener('click', function () {
            var color = colors[i].classList[0];
            console.log(color);
            bikeImage.setAttribute('src', "./img/bike" + color + ".jpg");
            bikeFrame.forEach(function (frame) {
                frame.style.stroke = "" + color;
            });
        });
    };
    //Color picker
    for (var i = 0; i < colors.length; i++) {
        _loop_2(i);
    }
}
function wheeleColor() {
    var _loop_3 = function (i) {
        colors[i].addEventListener('click', function () {
            var color = colors[i].classList[0];
            console.log(color);
            colors[i].removeEventListener('click', function () { });
            bikeWheele.forEach(function (wheele) {
                wheele.style.stroke = "" + color;
            });
        });
    };
    //Color picker
    for (var i = 0; i < colors.length; i++) {
        _loop_3(i);
    }
}
function saddleColor() {
    var _loop_4 = function (i) {
        colors[i].addEventListener('click', function () {
            var color = colors[i].classList[0];
            console.log(color);
            bikeSaddle.forEach(function (saddle) {
                saddle.style.stroke = "" + color;
                saddle.style.fill = "" + color;
            });
        });
    };
    for (var i = 0; i < colors.length; i++) {
        _loop_4(i);
    }
}
