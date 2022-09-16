// Falsy or truthy?
// Dado dos valores, devolver el primero si es falsy, si no devolver el segundo

function filterOutFalsy(value1, value2) {
    return (!value1) ? value1 : value2
}

console.log(filterOutFalsy(null, 200))

// el length de cualquier array

function arrLength (arr) {
    return arr.length
}

console.log (arrLength([2, 5, 10, 15, 2, 3.4]))

// devolver ultimo elemento de un array

function lastElem (arr) {
    return arr[arr.length - 1]
}

console.log(lastElem([0, 2, 'perro']))

// devolver la suma de un array

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    } 
    return sum
}

console.log(arrSum([0, 10, 20, 3, 1.2]))

// Añade todos los números anteriores a un numero dado
//Suma progresiva, por ejemplo progressiveSum(4) = 1 + 2 + 3 + 4


function sumaProgresiva(num1) {
    let sum = 0
    for (let i = 0; i <= num1; i++) {
        sum = sum + i
    }
    return sum
}

console.log(sumaProgresiva(600))

// Calcular tiempo, Dar un numero en segundos y devolverlo en mm:ss format

function calcTime(num1) {
    sec = num1 % 60
    min = ((num1 - sec) / 60)

    if (min.toString().length === 1) {
        min = '0' + min
    }

    if (sec.toString().length === 1) {
        sec = '0' + sec
    }

    return `${min}:${sec}`
}

console.log(calcTime(590))

// Encuentra el mayor número dentro de un array

function getMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(getMax([-50, -80, -10]))

// Reverse a string (3 métodos)

//Metodo loop for positivo


function reverseString1(str) {
    newstr = ''
    for (let i = 0; i < str.length; i++) {
        newstr = str[i] + newstr
    }
    return newstr
}

console.log(reverseString1('Hola Mundo'))

// Metodo loop negativo
function reverseString2(str) {
    newstr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newstr = newstr + str[i]
    }
    return newstr
}

console.log(reverseString2('Thomas'))

//Método array reverse .split(''), reverse(), join('')
function reverseString3 (str) {
    return newstr = str.split('').reverse().join('')
}

console.log(reverseString3('Frontend is the Best'))

// Transforma cada elemento de un array en 0
//1er método con FOR LOOP

function converttoZeros1(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
}

console.log(converttoZeros1([2, 5, 12]))

//2do metodo array "fill"
function converttoZeros2(arr) {
    return new Array(arr.length).fill(0)
}

console.log(converttoZeros2([5, 10, 15, 12, 1]))

//3er método "map"

function converttoZeros3(arr) {
    return arr.map(() => {                  // Cuando usas el {} dentro de un map si o si debes poner "return" porque si no todo quedará
        return 0                            // como undefined
    });
}

console.log(converttoZeros3([100, 100, 200, 300, 200, 100, 200]))

//Si es un "apple" lo removemos del array
//1er método con loop for
function removeApples(arr) {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'apple') {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeApples(['apple', 'dog', 'banana', 'apple']))
console.log(removeApples(['apple', 'Owo', 'apple', 'orange', 5]))

//2do método con filter() 

function removeApples2(arr) {
    return arr.filter(response => {
        if (response !== 'apple') {
            return true
        }
    })
}

console.log(removeApples2(['hola', 'apple', 'banana', 'apple', 'pineaple']))

//2do método mas rapido

function removeApples3(arr) {
    return arr.filter(response => response !== 'apple')
}

console.log(removeApples3(['apple', 'banana', 'apple', 'pineaple', 'fruit', 'apple']))


// Filtrar todos los falsy values
//1er metodo loop
function filtrarFalsy(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filtrarFalsy(['', [], 0, null, undefined, '0']))
console.log(filtrarFalsy(['Tomato', 'Banana', false, 'orange']))
console.log(filtrarFalsy(['', [], 0, null, undefined, '0']))

//2do metodo filter

function filtrarFalsy2(arr) {
    return arr.filter(response => !!response === true)
}

console.log(filtrarFalsy2([[], '', NaN, 'orange', 5, false]))

// Pasar todos los elementos de un array a su booleano

function converToBoolean(arr) {
    return arr.map(response => !!response)
}

console.log(converToBoolean([[], '', NaN, 'orange', 5, false]))

