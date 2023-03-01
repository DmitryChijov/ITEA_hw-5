// 2. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект, содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о сотруднике.
// Реализовать заполнение массива пользователем.

//  {
//   name: 'Yegor', 
//   sName: 'M', 
//   age: 18, 
//   occupation: 'developer',
//   show: function(){}
// },


const allEmployees = [

    {
        name: 'Yegor', 
        sName: 'M', 
        age: 18, 
        occupation: 'developer',
        show: function() {
            console.log(this);
        }
    },

    {
        name: 'Dmitry', 
        sName: 'M', 
        age: 38, 
        occupation: 'SMM',
        show: function() {
            console.log(this);
        }
    },

    {
        name: 'Max', 
        sName: 'M', 
        age: 28, 
        occupation: 'UA/UX',
        show: function() {
            console.log(this);
        }
    },

];



// просмотр сотрудников по индексу массива

allEmployees[0].show();


// добавить сотрудника

const nameEmployee = prompt('Введите имя сотрудника, которого хотите довавить');
const sName = prompt('Введите пол сотрудника');
const age = prompt('Введите возраст сотрудника');
const occupation = prompt('Введите специальность сотрудника');

  

allEmployees.push({name: nameEmployee, sName: sName, age: age, occupation: occupation, show: function() {console.log(this);}});

console.table(allEmployees);
