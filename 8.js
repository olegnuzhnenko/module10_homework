// Задание 8

const myMap = new Map();

myMap.set("x", "1");
myMap.set("y", '2');

for (const [key, value] of myMap) {
    console.log(`Ключ - ${key}, значение - ${value}`)
}