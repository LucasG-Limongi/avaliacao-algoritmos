
let divAtual = '1'

// não está funcionando pois o evento keydown não está sendo capturado porque o foco está no input dentro do container. Para resolver, adicionei um event listener ao container que verifica se a tecla pressionada é 'Enter' e se o foco está no input do slide atual. Se sim, ele simula um clique no botão correspondente.

function forward() {
    let slide;
    for (let i = 1; i <= 4; i++) {
        const container = document.getElementById(i.toString());
        if (container.style.display === 'block') {
            slide = container
            break
        }
    }
    let ID = slide.id
    let nextID = (parseInt(ID) + 1).toString()
    const slide2 = document.getElementById(nextID)
    if (slide2) {
        slide2.style.display = 'block'
        slide.classList.add('slide-out-left')
        slide2.classList.add('slide-in-left')
        let cont = document.getElementById('container')
        cont.style.width = '200%'
        setTimeout(() => {
            slide.style.display = 'none'
            slide.classList.remove('slide-out-left')
            slide2.classList.remove('slide-in-left')
            cont.style.width = '100%'
        }, 500);
    }
    if (parseInt(nextID) >= 2) {
        document.getElementById('back').style.display = 'block'
    }
    if (parseInt(nextID) === 4) {
        document.getElementById('forward').style.display = 'none'
    }
    divAtual = nextID
}

function back() {
    let slide;
    for (let i = 1; i <= 4; i++) {
        const container = document.getElementById(i.toString());
        if (container.style.display === 'block') {
            slide = container;
            break;
        }
    }
    let ID = slide.id;
    let prevID = (parseInt(ID) - 1).toString();
    const slide2 = document.getElementById(prevID);
    if (slide2) {
        slide2.style.display = 'block';
        slide.classList.add('slide-out-right');
        slide2.classList.add('slide-in-right');
        let cont = document.getElementById('container')
        cont.style.width = '200%'
        setTimeout(() => {
            slide.style.display = 'none';
            slide.classList.remove('slide-out-right');
            slide2.classList.remove('slide-in-right');
            cont.style.width = '100%'
        }, 500);
    }
    if (parseInt(prevID) <= 4) {
        document.getElementById('forward').style.display = 'block';
    }
    if (parseInt(prevID) === 1) {
        document.getElementById('back').style.display = 'none';
    }
    divAtual = prevID

}


// dom content loaded
const container1 = document.getElementById('container')


container1.addEventListener('keydown', function (e) {
    console.log(e.target)
    
    // pegar o próximo button vizinho a partir do e.target
    const button = e.target.nextElementSibling
    
    if (e.key === 'Enter') {
        button.click()
    }
})

