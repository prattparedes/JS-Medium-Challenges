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

// Reverse a string