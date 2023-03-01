// 3. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, 
// отсортировать его по имени сотрудника и 
// вывести данные о них при помощи ранее созданного метода
  

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
        name: 'Dmitry', 
        sName: 'M', 
        age: 25, 
        occupation: 'developer',
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

    {
        name: 'Anna', 
        sName: 'W', 
        age: 29, 
        occupation: 'UA/UX',
        show: function() {
            console.log(this);
        }
    },

];



allEmployees.sort(function compare(a, b) {

    if (a.name < b.name) {
        return - 1;

    } else if (a.name > b.name) {
        return 1;

    } else {
        return 0;
    }
});

console.table(allEmployees);



// еще вариант

function sortByName(field) {
    

    return (x, y) => x[field] > y[field] ? 1 : -1;

}

//  при вызове функции можем передать другоe свойство как аргумент для сортировки
allEmployees.sort(sortByName('age'));
console.table(allEmployees);