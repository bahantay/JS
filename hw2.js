/*
2я домашка по JS со звездочками:

1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)

2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
e.g. function printSmile(stroka, numberOfRows)

3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли:
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'

4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba' */

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for (i=1; i < 11; i++){
    console.log(2**i)
}
console.log('')
console.log('')

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
const power = function(number) {
    error = "error!"
    if (typeof(number) != "number") {
        return error
    } else {
        for (i=1; i < number+1; i++) {
            console.log(2**i)
        }
    }
}
power('asd')
power(12)
console.log('')
console.log('')

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
let symbol = ":)"
let text = ""
for (i = 0; i < 5; i++) {
    text += symbol
    console.log (text)
}
console.log('')
console.log('')

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик),
// а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)
const printsymbol = function(symbol, number_of_iteration) {
    error = "error! type number as a second value!"
    if (typeof(number_of_iteration) != "number") {
        return error
    } else {
        let text = ""
        for (i = 0; i < number_of_iteration; i++) {
            text += symbol
            console.log(text)
        }
    }
}
printsymbol("*", 10)
console.log('')
console.log('')

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, 
// и сколько согласных букв. e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'
function getWordStructure(word) {
    consonant_letters = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ"
    vowel_letters = "aeiouyAEIOUY"
    count_consonant = 0
    count_vowel = 0
    for (i=0; i < word.length; i++){
        if (consonant_letters.includes(word[i])){
            count_consonant += 1
        } else if (vowel_letters.includes(word[i])){
            count_vowel += 1
        }
    }
    console.log (word, "contains: consonant_letters =", count_consonant, "vowel_letters =", count_vowel) 
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')
console.log('')
console.log('')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba' */
function check_palindrome(word) {
    let len = word.length
    let first = 0
    let last = len -1
    let isPalindrome = true
    while (first < last) {
        if (word[first] == word[last]){
            first += 1
            last -= 1
        } else {
            isPalindrome = false
            break
        }
    }
    return isPalindrome
}

function true_or_false(sentence) {
    sentence = check_palindrome(sentence)
    if (sentence) {
        console.log ("It is a palindrom")
    } else {
        console.log ("It is not a palindrom")
    }
}

true_or_false ('abba')
true_or_false ('absrtrsba')
true_or_false ('hello')
