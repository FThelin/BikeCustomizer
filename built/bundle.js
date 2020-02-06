var tools = document.querySelectorAll('aside .icon');
var toolsInner = document.querySelector('.frame-popup .frame-inner-div');
var toolsWheele = document.querySelector('.wheele-popup .wheele-inner-div');
var toolsSaddle = document.querySelector('.saddle-popup .saddle-inner-div');
var closeFrame = document.querySelector('.frame-popup .frame-inner-div p');
var closeSaddle = document.querySelector('.saddle-popup .saddle-inner-div p');
var closeWheele = document.querySelector('.wheele-popup .wheele-inner-div p');
var colors = document.querySelectorAll('.frame-popup .frame-inner-div div');
var colorsSaddle = document.querySelectorAll('.saddle-popup .saddle-inner-div div');
var colorsWheele = document.querySelectorAll('.wheele-popup .wheele-inner-div div');
var bikeImage = document.querySelector('.bike img');
var bikeSaddle = document.querySelectorAll('.saddle');
var bikeFrame = document.querySelectorAll('.bikeframe');
var bikeWheele = document.querySelectorAll('.wheele');
var button = document.querySelector('.button');
var bike = document.querySelector('.bike');
var svgbike = document.querySelector('.svgbike svg');
var svgdiv = document.querySelector('.svgbike');
button.addEventListener('click', function () {
    if (svgbike.style.display === 'none') {
        bike.style.display = 'none';
        svgdiv.style.width = '60%';
        svgbike.style.width = '100%;';
        svgbike.style.display = 'flex';
    }
    else {
        bike.style.display = 'flex';
        svgdiv.style.width = '0%';
        svgbike.style.width = '0%;';
        svgbike.style.display = 'none';
    }
});
var _loop_1 = function (i) {
    tools[i].addEventListener('click', function () {
        var name = tools[i].classList[0];
        var popup = document.querySelector("." + name + "-popup");
        console.log(name);
        popup.classList.add('show');
        setTimeout(function () {
            if (name === 'frame')
                toolsInner.style.visibility = 'visible';
            if (name === 'wheele')
                toolsWheele.style.visibility = 'visible';
            if (name === 'saddle')
                toolsSaddle.style.visibility = 'visible';
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
closeWheele.addEventListener('click', function () {
    toolsWheele.style.visibility = 'hidden';
    toolsWheele.parentElement.classList.remove('show');
});
closeSaddle.addEventListener('click', function () {
    toolsSaddle.style.visibility = 'hidden';
    toolsSaddle.parentElement.classList.remove('show');
});
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
//Color picker Frame
for (var i = 0; i < colors.length; i++) {
    _loop_2(i);
}
var _loop_3 = function (i) {
    colorsWheele[i].addEventListener('click', function () {
        var color = colorsWheele[i].classList[0];
        console.log(color);
        bikeWheele.forEach(function (wheele) {
            wheele.style.stroke = "" + color;
        });
    });
};
//Color picker Wheels
for (var i = 0; i < colorsWheele.length; i++) {
    _loop_3(i);
}
var _loop_4 = function (i) {
    colorsSaddle[i].addEventListener('click', function () {
        var color = colorsSaddle[i].classList[0];
        console.log(color);
        bikeSaddle.forEach(function (saddle) {
            saddle.style.stroke = "" + color;
            saddle.style.fill = "" + color;
        });
    });
};
//Color picker Saddle
for (var i = 0; i < colorsSaddle.length; i++) {
    _loop_4(i);
}
