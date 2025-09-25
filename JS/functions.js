function forEach() {
    document.getElementById('outputForEach').innerText = ''
    let array1 = document.getElementById('arrayForEach').textContent
    let array2 = array1.slice(1, array1.length - 1).split(', ')
    array2.forEach(elem => {
        document.getElementById('outputForEach').innerText += `Olá, ${elem}!\n`
    })
}

function inputForEach() {
    const elem = document.getElementById('inputForEach').value
    let array = document.getElementById('arrayForEach').textContent
    array = array.slice(0, array.length - 1)
    if (array.length < 2) {
        array += '"' + elem + '"]'
    } else {
        array += ', "' + elem + '"]'
    }
    document.getElementById('arrayForEach').innerText = array
}

function map() {
    document.getElementById('outputMap').innerText = '[]'
    let array1 = document.getElementById('arrayMap').textContent
    let array2 = array1.slice(1, array1.length - 1).split(', ')
    let newArray = array2.map(elem => `Olá, ${elem}!`.toUpperCase())
    let text = '['
    newArray.forEach((elem, index) => {
        if (index === newArray.length - 1) {
            text += `"${elem}"]`
        } else {
            text += `"${elem}", `
        }
    })
    document.getElementById('outputMap').innerText = text
}

function inputMap() {
    const elem = document.getElementById('inputMap').value
    let array = document.getElementById('arrayMap').textContent
    array = array.slice(0, array.length - 1)
    if (array.length < 2) {
        array += '"' + elem + '"]'
    } else {
        array += ', "' + elem + '"]'
    }
    document.getElementById('arrayMap').innerText = array
}

function reduce() {
    document.getElementById('outputReduce').innerText = '0'
    let array1 = document.getElementById('arrayReduce').textContent
    let array2 = array1.slice(1, array1.length - 1).split(', ').map(Number)
    let sum = array2.reduce((acc, curr) => acc + curr, 0)
    document.getElementById('outputReduce').innerText = sum.toString()
}

function inputReduce() {
    const elem = document.getElementById('inputReduce').value
    let array = document.getElementById('arrayReduce').textContent
    array = array.slice(0, array.length - 1)
    if (array.length < 2) {
        array += elem + ']'
    } else {
        array += ', ' + elem + ']'
    }
    document.getElementById('arrayReduce').innerText = array
}

function filter() {
    document.getElementById('outputFilter').innerText = '[]'
    let array1 = document.getElementById('arrayFilter').textContent
    let array2 = array1.slice(1, array1.length - 1).split(', ').map(Number)
    let newArray = array2.filter(elem => elem >= 18)
    let text = '['
    newArray.forEach((elem, index) => {
        if (index === newArray.length - 1) {
            text += elem.toString() + ']'
        } else {
            text += elem.toString() + ', '
        }
    })
    document.getElementById('outputFilter').innerText = text
    // filtrando idades maiores ou iguais a 18
    // entradas esperadas: [10, 15, 18, 20, 25]
}

function inputFilter() {
    const elem = document.getElementById('inputFilter').value
    let array = document.getElementById('arrayFilter').textContent
    array = array.slice(0, array.length - 1)
    if (array.length < 2) {
        array += elem + ']'
    } else {
        array += ', ' + elem + ']'
    }
    document.getElementById('arrayFilter').innerText = array
}