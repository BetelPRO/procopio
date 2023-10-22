function menu() {
    const menu = document.getElementById('menu');
    const exit =document.getElementById('exit');
    const deitado = document.getElementById('deitado');
    deitado.classList.add('deitado')
    menu.classList.add("menuAtivo");
    exit.classList.add('Off');
};

function exit() {
    const exit = document.getElementById('exit');
    const menu = document.getElementById('menu');
    const deitado = document.getElementById('deitado');
    deitado.classList.remove('deitado')
    menu.classList.remove('menuAtivo');
    exit.classList.remove('Off');
}