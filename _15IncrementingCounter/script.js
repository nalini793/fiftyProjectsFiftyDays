const counters = document.querySelectorAll('.counter');

counters.forEach(element => {
    element.innerText ='0'
    const updateCounter = () => {
        const target = +element.getAttribute('data-target')
        const c = +element.innerText
        const increment = target / 200
        if(c <target){
            element.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
        } else {
            element.innerText = target;
        }
    }
    updateCounter()
});