// Логический тип и ветвление

// Задание 1

const a = +prompt ('Введите значение')

console.log(typeof a)

if (a !== NaN){
    if (a % 2 === 0){
        console.log ('Чётное')
    }
    else{
        console.log ('Нечётное')
    }
} else {
    console.log ('Упс, кажется, вы ошиблись')
}




// Задание 2

//1st case//

// let x = 42

// if (typeof x == "number"){

//   console.log ('x — число')
// }

// else if (typeof x == "string"){
//     console.log ('x — строчка')
// }

// else if (typeof x == "boolean"){
//     console.log ('x — boolean')
//  }

// else {
//     console.log("Тип x не определён")
// }

// //2nd case//


// let x = '42'

// if (typeof x == "number"){

//     console.log ('x — число')
// }

// else if (typeof x == "string"){
//     console.log ('x — строчка')
// }

// else if (typeof x == "boolean"){
//     console.log ('x — boolean')
// }

// else {
//     console.log("Тип x не определён")
// }

// //3rd case

// let x = true

// if (typeof x == "number"){

//     console.log ('x — число')
// }

// else if (typeof x == "string"){
//     console.log ('x — строчка')
// }

// else if (typeof x == "boolean"){
//     console.log ('x — boolean')
// }

// else {
//     console.log("Тип x не определён")
// }