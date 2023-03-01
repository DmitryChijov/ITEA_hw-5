// Создать объект Calculator, который должен содержать методы для расчета суммы, разницы, произведения и деления двух чисел.
// Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// В зависимости от принятого знака операции, вызвать соответствующий метод.



const calculator = {
    numberOne: parseInt(prompt('Введите первое число')),
    operand: prompt('Введите оператор вычисления'),
    numberTwo: parseInt(prompt('Введите второе число')),
    
    checksAndCalculates: function() {

        if (isNaN(this.numberOne) || isNaN(this.numberTwo)) {
            return 'Нужно вводить числa. Начните сначала';
            
        }   else if (this.operand !== '+' || this.operand !== '+' || this.operand !== '+' || this.operand !== '+') {
            return 'Нужно вводить арифметический знак. Начните сначала';

        } else {

            switch(this.operand) {
                    case '+':
                        this.result = this.numberOne + this.numberTwo;
                        break;
                    case '-':
                        this.result = this.numberOne - this.numberTwo;
                        break;
                    case '*':
                        this.result = this.numberOne * this.numberTwo;
                        break;
                    case '/':
                        this.result = this.numberOne / this.numberTwo;
                        break;
                    } 
                    
                    
        }   return this.result;

        
        
    }    
    
}


console.log(calculator.checksAndCalculates());