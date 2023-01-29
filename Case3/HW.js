// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function maximum(a, b, c) {
    let max = a;
    if (b > a) {
        max = b;
    }
    if (c > b) {
        max = c;
    }
    return max;
}


let num1 = Number(prompt('Введите число'));
let num2 = Number(prompt('Введите число'));
let num3 = Number(prompt('Введите число'));

let max = maximum(num1, num2, num3);

alert(`Максимальное значение среди введённых чисел ${max}`);