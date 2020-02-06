const tools: NodeListOf<HTMLDivElement> = document.querySelectorAll('aside .icon');
const toolsInner: HTMLDivElement = document.querySelector('.frame-popup .frame-inner-div');
const toolsWheele: HTMLDivElement = document.querySelector('.wheele-popup .wheele-inner-div');
const toolsSaddle: HTMLDivElement = document.querySelector('.saddle-popup .saddle-inner-div');
const closeFrame: HTMLParagraphElement = document.querySelector('.frame-popup .frame-inner-div p');
const closeSaddle: HTMLParagraphElement = document.querySelector('.saddle-popup .saddle-inner-div p');
const closeWheele: HTMLParagraphElement = document.querySelector('.wheele-popup .wheele-inner-div p');
const colors: NodeListOf<HTMLDivElement> = document.querySelectorAll('.frame-popup .frame-inner-div div');
const colorsSaddle: NodeListOf<HTMLDivElement> = document.querySelectorAll('.saddle-popup .saddle-inner-div div');
const colorsWheele: NodeListOf<HTMLDivElement> = document.querySelectorAll('.wheele-popup .wheele-inner-div div');
const bikeImage: HTMLImageElement = document.querySelector('.bike img');
const bikeSaddle: NodeList = document.querySelectorAll('.saddle');
const bikeFrame: NodeList = document.querySelectorAll('.bikeframe');
const bikeWheele: NodeList = document.querySelectorAll('.wheele');

//Open toolbar windows
for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener('click', () => {
        let name: String = tools[i].classList[0];
        let popup: HTMLDivElement = document.querySelector(`.${name}-popup`);
        console.log(name)
        popup.classList.add('show');
        setTimeout(() => {
            if (name === 'frame')
            toolsInner.style.visibility = 'visible';
            if (name === 'wheele')
            toolsWheele.style.visibility = 'visible';
            if (name === 'saddle')
            toolsSaddle.style.visibility = 'visible';
        },800)
    })
}



//Close toolbar windows
closeFrame.addEventListener('click', () => {
    toolsInner.style.visibility = 'hidden';
    toolsInner.parentElement.classList.remove('show');
})
closeWheele.addEventListener('click', () => {
    toolsWheele.style.visibility = 'hidden';
    toolsWheele.parentElement.classList.remove('show');
})
closeSaddle.addEventListener('click', () => {
    toolsSaddle.style.visibility = 'hidden';
    toolsSaddle.parentElement.classList.remove('show');
})



//Color picker Frame
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', () => {
        let color: String = colors[i].classList[0];
        console.log(color);
        bikeImage.setAttribute('src', `./img/bike${color}.jpg`);
        bikeFrame.forEach((frame: HTMLElement) => {
            frame.style.stroke = `${color}`;
        })
    })
}



//Color picker Wheels
for (let i = 0; i < colorsWheele.length; i++) {
    colorsWheele[i].addEventListener('click', () => {
        let color: String = colorsWheele[i].classList[0];
        console.log(color);
        bikeWheele.forEach((wheele: HTMLElement) => {
            wheele.style.stroke = `${color}`;
        })
    })
}


//Color picker Saddle
for(let i = 0; i < colorsSaddle.length; i++) {
    colorsSaddle[i].addEventListener('click', () => {
        let color: String = colorsSaddle[i].classList[0];
        console.log(color);
        bikeSaddle.forEach((saddle: HTMLElement) => {
            saddle.style.stroke = `${color}`
            saddle.style.fill = `${color}`
        })
    })
}
