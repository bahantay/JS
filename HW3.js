// Task 1.
// Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt

let arr = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
]

let info = arr.filter(el => el.registrationDate == '09.10.2021' || el.registrationDate == '10.10.2021')
console.log(info)

// // Task 2*
// // Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// // Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
// // Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

let task_2 = [{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
        }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
    }
},
{
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
        }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
},
{
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
        }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
    }
},
{
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
},
{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
        }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
    }
},
{
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
},
{
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
}
]

// count before uniq values (16)

count_not_uniq = 0
for (i=0; i<task_2.length; i++){
    count_not_uniq ++;
}
console.log(count_not_uniq)

let cachedObject = {};
task_2.map((item)=> cachedObject[item.name] = item)
task_2 = Object.values(cachedObject)
unique = task_2
console.log(unique)

// count after uniq values (10)

count_uniq = 0
for (i=0; i < unique.length; i++){
    count_uniq ++;
}
console.log(count_uniq)

// //Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

// sync json file to string then to array
var fs = require('fs')
var string = fs.readFileSync("task2.json").toString().replace('[','').replace(']','');
var array = JSON.parse("[" + string + "]");

// count not uniq (16)

count_not_uniq_2 = 0
for (i=0; i < array.length; i++){
    count_not_uniq_2 ++;
}
console.log(count_not_uniq_2)

//make it uniq

let cachedObject = {};
array.map((item)=> cachedObject[item.name] = item)
array = Object.values(cachedObject)
unik = array
console.log(unik)

// count not uniq (10)

count_uniq_2 = 0
for (i=0; i < unik.length; i++){
    count_uniq_2 ++;
}
console.log(count_uniq_2)

/*Task 3.1
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников) */

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]


// // в общем тут есть косяки, но надеюсь такой вариант тоже подойдет)) 
// // думаю надо тут через функцию делать, если будет время постараюсь чтобы в консоль выводила также как и в примере

for (i = 0; i < enterprises.length; i++){
    let obj = enterprises[i];
    for(key in obj){
        value = obj[key];
        let count = 0;
            if (key == 'departments'){
                for (j = 0; j < value.length; j++){
                    let obj_2 = value[j];
                    for (key_2 in obj_2){
                        value_2 = obj_2[key_2]
                        if (key_2 == 'employees_count'){
                            count += value_2
                        }
                        if (key_2 == 'id'){
                            continue
                        }
                        console.log(value_2)
                        if (value_2 == 0){
                            console.log("there are no empoyers in company number 3")
                        }
                    }
                }
            }
        if (count != 0){
            console.log("total in company number", i+1, "("+count+" employers)")
        }
    }
}

// // 3.2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// // Пример:
// // getEnterpriseName(4) // Предприятие 1
// // getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(arg) {
    for (i = 0; i < enterprises.length; i++){
        let obj = enterprises[i];
        for(key in obj){
            value = obj[key];
            if (key == 'departments'){
                for (j = 0; j < value.length; j++){
                    let obj_2 = value[j];
                    for (key_2 in obj_2){
                        if (key_2 == 'employees_count'){
                            continue
                        }
                        value_2 = obj_2[key_2]
                        if (value_2 == arg){
                            return obj['name']
                        }
                    }
                }
            }
        }
    }
}

console.log(getEnterpriseName(2))
console.log(getEnterpriseName("Отдел разработки"))
console.log(getEnterpriseName(10)) // code is working)) returns company number3 not first (because of empoyess number)

// // 3.3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// // Пример:
// // addEnterprise("Название нового предприятия")

function addEnterprise(company) {
    var arr = enterprises;
    arr.push({"id":"11", "name": `${company}`})
    jsonStr = JSON.stringify(arr);
    console.log(jsonStr)
}
addEnterprise("new_company")

// // 3.4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// // Пример:
// // addDepartment(1, "Название нового отдела")

function addDepartment(dep) {
    var arr = enterprises;
    arr[2]['departments'].push({"id":"11", "name": `${dep}`})
    jsonStr = JSON.stringify(arr);
    console.log(jsonStr)
}
addDepartment("new_department")

// // 3.5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// // Пример:
// // editEnterprise(1, "Новое название предприятия")

function editEnterprise(id, name_company){
    let edit_version = enterprises;
    for (i = 0; i < edit_version.length; i++){
        let obj = edit_version[i];
        for(key in obj){
            if (obj['id'] == id){
                obj['name'] = name_company;
            }
        }
    }
    console.log(edit_version);
}

editEnterprise(1, "NEW_NAAAAAME")
editEnterprise(5, "NEW_second_name")

// // 3.6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// // Пример:
// // editDepartment(7, "Новое название отдела")

function editDepartment(id, name_dep){
    let edit_version = enterprises;
    for (i = 0; i < edit_version.length; i++){
        let obj = edit_version[i];
        for(key in obj){
            value = obj[key];
            if (key == 'departments'){
                for (j = 0; j < value.length; j++){
                    let obj_2 = value[j];
                    for (key_2 in obj_2){
                        if (obj_2['id'] == id){
                            obj_2['name'] = name_dep;
                        }
                    }
                }
            }
        }
        console.log(obj);
    }
}

editDepartment(2, "NEW_DEEEEEP")
console.log('')
console.log('')
console.log('')
editDepartment(7, "NEW_second_department")



// // 3.7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// // Пример:
// // deleteEnterprise(1)

function deleteEnterprise(id) {
    let arr = enterprises;
    for (i = 0; i < arr.length; i++){
        let obj = arr[i];
        if (obj['id'] == id){
            delete arr[i];
        }
    }
    console.log(arr);
}
deleteEnterprise(9)

// // 3.8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// // Пример:
// // deleteDepartment(3)

function deleteDepartment(id) {
    let arr = enterprises;
    for (i = 0; i < arr.length; i++){
        let obj = arr[i];
        for(key in obj){
            value = obj[key];
            if (key == 'departments'){
                for (j = 0; j < value.length; j++){
                    let obj_2 = value[j];
                    if (obj_2['id'] == id){
                            delete value[j];
                    }
                }
            }
        }
        console.log(obj);
    }
}
deleteDepartment(10)

// // 3.9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// // Пример:
// // moveEmployees(2, 3)

function moveEmployees(alt, neue) {
    let arr = enterprises;
    for (i = 0; i < arr.length; i++){
        let obj = arr[i];
        for(key in obj){
            value = obj[key];
            if (key == 'departments'){
                for (j = 0; j < value.length; j++){
                    let obj_2 = value[j];
                    if (obj_2['id'] == alt){
                        var old_em = obj_2['employees_count'];
                        obj_2['employees_count'] = 0;
                    } 
                    else if (obj_2['id'] == neue) {
                        obj_2['employees_count'] += old_em
                    }
                }
            }
        }
        console.log(obj);
    }
}
moveEmployees(6, 7)

const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]
  
  /* 
  Написать функцию: 
  
  Функция строит древовидный список компании.
  При ее вызове в консоль должен выветить список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.
  
  Пример:
  
  Компания (10)
  -- Отдел тестирования (7)
  ---- Тестирование Web (5)
  ---- Тестирование Mobile (0)
  -- Отдел маркетинга (30)
  -- Администрация (25)
  ---- Бухгалтерия (10)
  ---- Менеджмент (15)
  ------ Подраздел менеджмента 1 (5)
  ------ Подраздел менеджмента 2 (10)
  ---- HR (1)
  */

function parseObjectProperties (obj, parse) {
    for (var k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
        parseObjectProperties(obj[k], parse)
        } else if (obj.hasOwnProperty(k)) {
        parse(obj['name'], obj['users_count'])
        }
    }
}

parseObjectProperties(company, function(k, prop) {
    console.log(k, `(${prop})`)
})
