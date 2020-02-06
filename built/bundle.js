var tools = document.querySelectorAll('aside .icon');
var toolsInner = document.querySelector('.frame-popup .frame-inner-div');
var closeFrame = document.querySelector('.frame-popup .frame-inner-div p');
var colors = document.querySelectorAll('.frame-popup .frame-inner-div div');
var bikeImage = document.querySelector('.bike img');
var bikeFrame = document.querySelectorAll('.bikeframe');
console.log(bikeFrame);
var _loop_1 = function (i) {
    tools[i].addEventListener('click', function () {
        var name = tools[i].classList[0];
        var popup = document.querySelector("." + name + "-popup");
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
var _loop_2 = function (i) {
    colors[i].addEventListener('click', function () {
        var color = colors[i].classList[0];
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
