const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
   const triggerBottom = window.innerHeight /5 *4;

   boxes.forEach( box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
   })
}

const container = document.querySelector('body');
const URL = 'https://picsum.photos/200'

function getRandNum() {
   return Math.floor(Math.random() *100);
}

function loadImages(numImages = 10){
    let i =0;
    while(i<numImages){
        const img = document.createElement('img');
        img.src = `${URL}`
        container.appendChild(img);
        i++;
    }
}

loadImages();

window.addEventListener('scroll', () => {
    if(window.scrollY +window.innerHeight > document.documentElement.scrollHeight){
        loadImages();
    }
})