/*1. Создать переменную “item_1”
2. Присвоить переменной item_1 цифру 5.
3. Вывести в консоль item_1.
4. Создать переменную “item_2”
5. Присвоить переменной item_2 цифру 3.
6. Вывести в консоль item_2.
7. Создать переменную “item_3”
8. Присвоить переменной item_3 сложение item_1 и item_2.
9. Вывести в консоль item_3.
10. Создать переменную “item_4”
11. Присвоить переменной item_4 строку “Yolochka”
12. Вывести в консоль item_4.
13. Вывести в консоль сложение item_3 и item_4.
14. Вывести в консоль умножение item_3 и item_4.
15. Создать переменную “item_5”
16. Присвоить переменной item_5 переменную item_3
17. Создать переменную item_6.
18. Создать переменную item_6_type
19. Присвоить переменной item_6 значение 15
20. Присвоить переменной item_6_type тип переменной item_6
21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
22. Создать переменную item_7 и в ней преобразовать item_6 в String.
23. Создать переменную item_7_type
24. Присвоить переменной item_7_type тип переменной item_7
25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
26. Создать переменную “age_1” и присвоить ей значение 10
27. Создать переменную “age_2” и присвоить ей значение 18
28. Создать переменную “age_3” и присвоить ей значение 60
29. Создать if в котором будите проверять значение переменной age_1
30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
33. Иначе выводите “Technical work”.
*/
let item_1 = 5                          // 1 and 2
console.log(item_1)                     // 3

let item_2 = 3                          // 4 and 5
console.log(item_2)                     // 6

let item_3 = item_1 + item_2            // 7 and 8
console.log(item_3)                     // 9

//10,11,12
let item_4 = "Yolochka"
console.log(item_4)

//13,14
console.log(item_3 + item_4)
console.log(item_3 * item_4)

//15,16
let item_5 = item_3

//17-21
let item_6 = 15
let item_6_type = typeof(item_6)
console.log("item_6 ==", typeof(item_6), "item_6_type ==", typeof(item_6_type))

//22-25
let item_7 = `${item_6}` // also possible like: let item_7 = String(item_6)
let item_7_type = typeof(item_7)
console.log("item_7 ==", typeof(item_7),  "item_7_type ==", typeof(item_7_type))

//26-33
let age_1 = 10
let age_2 = 18
let age_3 = 60

if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + " it's less then")
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!")
} else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}

//Tasks with ***

/*
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61
*/
console.log('')
console.log('first task with *')
console.log('')

const checkAge = function(age) {
    let less = "You don't have access cause your age is " + age + " it's less then"
    let equall = "Welcome!"
    let old = "Keep calm and look Culture channel"
    let nothing = "Technical work"

    if (age < 18) {
        return less
    } else if (age >= 18 && age < 60) {
        return equall
    } else if (age > 60) {
        return old
    } else {
        return nothing
    }
}

console.log(checkAge(17))
console.log(checkAge(18))
console.log(checkAge(61))

/*
2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
И если он не Number - кидалась ошибка. 
*/
console.log('')
console.log('second task with *')
console.log('')

const checkType = function(age) {
    let less = "You don't have access cause your age is " + age + " it's less then"
    let equall = "Welcome!"
    let old = "Keep calm and look Culture channel"
    let nothing = "Technical work"
    let error = "Error! Put number!"
    
    if (typeof(age) != "number") {
        return error
    } else {
        if (age < 18) {
            return less
        } else if (age >= 18 && age < 60) {
            return equall
        } else if (age > 60) {
            return old
        } else {
            return nothing
        }
    }
}
console.log(checkType("hello!"))
console.log(checkType(false))
console.log(checkType(true))
console.log(checkType(17))
console.log(checkType(18))
console.log(checkType(61))

/*
 3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
*/
console.log('')
console.log('third task with *')
console.log('')

const checkType2 = function(age) {
    let less = "You don't have access cause your age is " + age + " it's less then"
    let equall = "Welcome!"
    let old = "Keep calm and look Culture channel"
    let nothing = "Technical work"
    let error = "Error! Put number!"
    
    convert = parseInt(age)
    if (isNaN(convert)) {
        return error
    } else {
        if (age < 18) {
            return less
        } else if (age >= 18 && age < 60) {
            return equall
        } else if (age > 60) {
            return old
        } else {
            return nothing
        }
    }
}
console.log(checkType2("hello!"))
console.log(checkType2("2"))
console.log(checkType2(true))
console.log(checkType2(17))
console.log(checkType2(18))
console.log(checkType2(61))

//fourth
