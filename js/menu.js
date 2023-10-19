function menu() {
    const menu = document.getElementById('menu');
    const exit =document.getElementById('exit');
    menu.classList.add("menuAtivo");
    exit.classList.add('Off')
};

function exit() {
    const exit = document.getElementById('exit')
    const menu = document.getElementById('menu')
    menu.classList.remove('menuAtivo')
    exit.classList.remove('Off')
}