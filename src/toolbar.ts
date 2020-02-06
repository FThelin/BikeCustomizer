const tools: NodeListOf<HTMLDivElement> = document.querySelectorAll('aside .icon');
const toolsInner: HTMLDivElement = document.querySelector('.frame-popup .frame-inner-div');
const toolsWheele: HTMLDivElement = document.querySelector('.wheele-popup .wheele-inner-div');
const closeFrame: HTMLParagraphElement = document.querySelector('.frame-popup .frame-inner-div p');
const closeWheele: HTMLParagraphElement = document.querySelector('.wheele-popup .wheele-inner-div p');
const colors: NodeListOf<HTMLDivElement> = document.querySelectorAll('.frame-popup .frame-inner-div div');
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
        console.log(name);
        
        if(name === 'frame') {
            frameColor();    

        } else if (name === 'wheele') {
            wheeleColor();
        } else if(name === 'saddle') {
            saddleColor();
        }
        
        popup.classList.add('show');
        setTimeout(() => {
            toolsInner.style.visibility = 'visible';
        },800)
    })
}



//Close toolbar windows
closeFrame.addEventListener('click', () => {
    toolsInner.style.visibility = 'hidden';
    toolsInner.parentElement.classList.remove('show');
})


function frameColor() {
    //Color picker
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
}

function wheeleColor() {
    //Color picker
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', () => {
            let color: String = colors[i].classList[0];
            console.log(color);
            colors[i].removeEventListener('click', () => {})
            bikeWheele.forEach((wheele: HTMLElement) => {
                wheele.style.stroke = `${color}`;
            })
        })
    }
}

function saddleColor() {
    for(let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', () => {
            let color: String = colors[i].classList[0];
            console.log(color);
            bikeSaddle.forEach((saddle: HTMLElement) => {
                saddle.style.stroke = `${color}`
                saddle.style.fill = `${color}`
            })
        })
    }
}
