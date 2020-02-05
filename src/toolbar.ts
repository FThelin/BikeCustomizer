const tools: NodeListOf<HTMLDivElement> = document.querySelectorAll('aside .icon');
const toolsInner: HTMLDivElement = document.querySelector('.frame-popup .frame-inner-div');
const closeFrame: HTMLParagraphElement = document.querySelector('.frame-popup .frame-inner-div p');
const colors: NodeListOf<HTMLDivElement> = document.querySelectorAll('.frame-popup .frame-inner-div div');
const bikeImage: HTMLImageElement = document.querySelector('.bike img');

//Open toolbar windows
for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener('click', () => {
        let name: String = tools[i].classList[0];
        let popup: HTMLDivElement = document.querySelector(`.${name}-popup`);
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

//Color picker
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', () => {
        let color: String = colors[i].classList[0];
        bikeImage.setAttribute('src', `./img/bike${color}.jpg`);
    })
}