function limpar(elem1, elem2) {
    elem1.innerHTML = '[]'

    // forEach Every Some
    if (elem2.id == 'outputForEach' || elem2.id == 'outputEvery' || elem2.id == 'outputSome') {
        elem2.innerHTML = ''
    } else {
        elem2.innerHTML = '[]'
    }
    // funcionou!!!
}

function limpar2(elem) {
    elem.innerHTML = '[]'
}

function forEach() {
    document.getElementById('outputForEach').innerText = ''
    let array1 = document.getElementById('arrayForEach').textContent
    let array2 = array1.slice(1, array1.length - 1).split(', ')
    array2.forEach(elem => {
        document.getElementById('outputForEach').innerText += `Olá, ${elem.slice(1, elem.length-1)}!\n`
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
    let newArray = array2.map(elem => `${elem}`.toUpperCase())
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
    let arrayText = document.getElementById('arrayReduce').textContent;
    
    // Remove colchetes e divide os elementos
    let elements = arrayText.slice(1, -1).split(',').map(e => e.trim());
    
    // Converte para número
    let numbers = elements.map(Number);

    // Verifica se há elementos que não são números válidos
    if (numbers.some(isNaN)) {
        document.getElementById('outputReduce').innerText = 'NaN';
        return;
    }

    // Faz a soma
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('outputReduce').innerText = sum.toString();
}

function inputReduce() {
    const input = document.getElementById('inputReduce').value.trim();
    if (input === '') return;

    const isNumber = !isNaN(Number(input));
    const formattedValue = isNumber ? input : `"${input}"`;

    let arrayText = document.getElementById('arrayReduce').textContent;
    arrayText = arrayText === '[]'
        ? `[${formattedValue}]`
        : arrayText.slice(0, -1) + `, ${formattedValue}]`;

    document.getElementById('arrayReduce').innerText = arrayText;
}

function filter() {
    document.getElementById('outputFilter').innerText = '[]';
    let array1 = document.getElementById('arrayFilter').textContent;
    let array2 = array1.slice(1, array1.length - 1).split(', ');
    let newArray = array2.filter(elem => elem.length > 8); // Exemplo: filtrar strings com mais de 3 caracteres
    let text = '[';
    newArray.forEach((elem, index) => {
        if (index === newArray.length - 1) {
            text += `"${elem.slice(1, elem.length-1)}"]`;
        } else {
            text += `"${elem.slice(1, elem.length-1)}", `;
        }
    });
    document.getElementById('outputFilter').innerText = text;
    // filtrando idades maiores ou iguais a 18
    // entradas esperadas: [10, 15, 18, 20, 25]
}

function inputFilter() {
    const elem = document.getElementById('inputFilter').value;
    let array = document.getElementById('arrayFilter').textContent;
    array = array.slice(0, array.length - 1);
    if (array.length < 2) {
        array += '"' + elem + '"]';
    } else {
        array += ', "' + elem + '"]';
    }
    document.getElementById('arrayFilter').innerText = array;
}

function every() {
    const arrayText = document.getElementById('arrayEvery').textContent;

    // Transforma o texto em array, preservando strings entre aspas
    const elements = arrayText.slice(1, -1).split(',').map(e => {
        e = e.trim();
        return e.startsWith('"') && e.endsWith('"') 
            ? e.slice(1, -1) // Remove aspas (string)
            : Number(e);     // Converte para número
    });

    // Só testa se for número
    const result = elements.every(elem => typeof elem === 'number' && elem > 0);
    document.getElementById('outputEvery').innerText = result.toString();
}

function inputEvery() {
    const input = document.getElementById('inputEvery').value.trim();
    if (input === '') return;

    // Detecta se é número ou não
    const isNumber = !isNaN(Number(input));

    // Recupera array atual
    let arrayText = document.getElementById('arrayEvery').textContent;
    
    // Adiciona ao array (com ou sem aspas)
    const formattedValue = isNumber ? input : `"${input}"`;
    arrayText = arrayText === '[]' 
        ? `[${formattedValue}]` 
        : arrayText.slice(0, -1) + `, ${formattedValue}]`;

    document.getElementById('arrayEvery').innerText = arrayText;
}

function some() {
    const arrayText = document.getElementById('arraySome').textContent;

    const elements = arrayText.slice(1, -1).split(',').map(e => {
        e = e.trim();
        return e.startsWith('"') && e.endsWith('"') 
            ? e.slice(1, -1) 
            : Number(e);
    });

    const result = elements.some(elem => typeof elem === 'number' && elem > 10);
    document.getElementById('outputSome').innerText = result.toString();
}

function inputSome() {
    const input = document.getElementById('inputSome').value.trim();
    if (input === '') return;

    const isNumber = !isNaN(Number(input));
    const formattedValue = isNumber ? input : `"${input}"`;

    let arrayText = document.getElementById('arraySome').textContent;
    arrayText = arrayText === '[]' 
        ? `[${formattedValue}]` 
        : arrayText.slice(0, -1) + `, ${formattedValue}]`;

    document.getElementById('arraySome').innerText = arrayText;
}

function testFrom() {
    const string = document.getElementById('inputFrom').value
    const result = Array.from(string)
    // transformar result em uma string no formato de array
    for (let i = 0; i < result.length; i++) {
        result[i] = `"${result[i]}"`
    }
    document.getElementById('outputFrom').innerText = `[${result.join(', ')}]`
}

function inputKeys() {
    const elem = document.getElementById('inputKeys').value;
    let array = document.getElementById('arrayKeys').textContent;
    array = array.slice(0, array.length - 1);
    if (array.length < 2) {
        array += '"' + elem + '"]';
    } else {
        array += ', "' + elem + '"]';
    }
    document.getElementById('arrayKeys').innerText = array;
}

function testKeys() {
    let array1 = document.getElementById('arrayKeys').textContent;
    let array2 = array1.slice(1, array1.length - 1).split(', ');
    const result = [...array2.keys()];
    // transformar result em uma string no formato de array
    document.getElementById('outputKeys').innerText = `[${result.join(', ')}]`;
}

function inputEntries() {
    const elem = document.getElementById('inputEntries').value.trim();
    if (elem === '') return;

    const isNumber = !isNaN(Number(elem));
    const formattedValue = isNumber ? elem : `"${elem}"`;

    let arrayText = document.getElementById('arrayEntries').textContent;
    arrayText = arrayText === '[]'
        ? `[${formattedValue}]`
        : arrayText.slice(0, -1) + `, ${formattedValue}]`;

    document.getElementById('arrayEntries').innerText = arrayText;
}

function testEntries() {
    const arrayText = document.getElementById('arrayEntries').textContent;
    const elements = arrayText
        .slice(1, -1)
        .split(',')
        .map(e => e.trim().replace(/^"|"$/g, '')); // remove aspas se tiver

    const result = [...elements.entries()]; // [[0, "a"], [1, "b"], ...]

    const formatted = result.map(([index, value]) => `[${index}, "${value}"]`);
    document.getElementById('outputEntries').innerText = `[${formatted.join(', ')}]`;
}

function testWith() {
    const arrayInput = document.getElementById('inputWithArray').value
        .split(',')
        .map(e => e.trim().replace(/^"|"$/g, '')); // Remove aspas extras

    const index = parseInt(document.getElementById('inputWithIndex').value, 10);
    const newValue = document.getElementById('inputWithValue').value;

    try {
        const result = arrayInput.with(index, newValue);
        document.getElementById('arrayWith').innerText = `[${arrayInput.map(JSON.stringify).join(', ')}]`;
        document.getElementById('outputWith').innerText = `[${result.map(JSON.stringify).join(', ')}]`;
    } catch (e) {
        document.getElementById('outputWith').innerText = `Erro: ${e.message}`;
    }
}

function testSpread() {
    const baseArray = document.getElementById('inputSpreadArray').value
        .split(',')
        .map(e => e.trim());

    const additionalValue = document.getElementById('inputSpreadValue').value;
    const result = [...baseArray, additionalValue];

    document.getElementById('arraySpread').innerText = `[${baseArray.map(JSON.stringify).join(', ')}]`;
    document.getElementById('outputSpread').innerText = `[${result.map(JSON.stringify).join(', ')}]`;
}

function testRest() {
    const input = document.getElementById('inputRest').value
        .split(', ');

    const resto = `[${input.slice(1).map(e => `"${e}"`).join(', ')}]`;

    document.getElementById('arrayRest').innerText = `[${input.join(', ')}]`;
    document.getElementById('outputRest').innerText = resto.toString();
}