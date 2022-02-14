
let keyboard = document.getElementById('keyboard');
let keys = [...keyboard.querySelectorAll('div.key')];

document.addEventListener('keydown', (e) => {
    e = e || window.event;
    for (let num = 0; num < 13; ++num)
    if(e.key == `F${num}` || e.key === "Tab" || e.key === "'" || e.key === "/" || e.key === "Alt"){
        e.preventDefault();
    }
});
function assignKey(event) {
    let pressedKey = event.key;
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i].textContent;
        if ((key).toLowerCase() === pressedKey.toLowerCase() || keys[i].id === event.code) {
            keys[i].classList.add('toggledKey');
            keys[i].classList.add('keyPressed');
            let log = document.getElementById('log')
            if (key == ''){
                log.textContent = `<${keys[i].id}> ${log.textContent}`
            } else {
                log.textContent = `<${key}> ${log.textContent}`
            }
        }
    }
} 
function specialKeys(event) {
    let pressedKey = event.key;
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i].textContent;
        if ((key).toLowerCase() === pressedKey.toLowerCase() || keys[i].id === event.code) {
            keys[i].classList.add('toggledKey');
            keys[i].classList.remove('keyPressed');
        }
    }
}