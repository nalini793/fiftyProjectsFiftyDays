const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e)=> {
    createTags(e.target.value)
    if(e.key === 'Enter') {
        randomSelect();
        setTimeout(()=> {
            e.target.value =''
        },10)
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!==' ').map(tag=> tag.trim());
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag;
        tagsEl.append(tagEl);
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();
        highLightTag(randomTag);
        setTimeout(() => {
            unhighLightTag(randomTag)
        }, 100)
    },100)
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(()=> {
            const randomTag = pickRandomTag();
            highLightTag (randomTag);
        })
    }, times * 100);
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag (tag) {
    tag.classList.add('highlight')
}
function unhighLightTag (tag) {
    tag.classList.remove('highlight')
}