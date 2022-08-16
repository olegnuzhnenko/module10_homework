// Циклы

// Задание 6

let arr = [1,2,3,2,3,4,2]
let x = true
for (let i = 1; i<arr.length; i++){
    if (arr[0]!== arr[i])
    {x=false; break}
};

console.log (x)

// Задание 7

// let arr = [1, 2, 3, 0, "kokos"]
// for (let i = 0;i < arr.length; i++){
//     if (typeof arr[i] === 'number'){
//         if (arr[i]%2 === 0 && arr[i] !== 0)
//         {console.log ("ЧЕТНОЕ")}
//         else if (arr[i] % 2 !== 0)
//         {console.log("НЕЧЕТНОЕ")}
//         else if (arr[i] === 0)
//         {console.log("ЭТО НОЛЬ")}
//     }
//     else {console.log("ЭТО НЕ ЧИСЛО")}
// }