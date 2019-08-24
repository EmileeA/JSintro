// const age = 34;
// if (age < 21) {
//   console.log('no drinks for you');
// } else {
//   console.log('PARTAY!!!!!');
// }

const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)')
        //do the thing
    } else {
        console.log('Shame')
        //do the other thing
    }
}

bouncer(12);
bouncer(93);

const me = 'martin'
console.log(me.length)

const myObject = {
    name: 'john',
    age: '41',
}

console.log(myObject.name)
//or 
//console.log(myObject['name'])
//why user an object? store stuff in it. You wouldn't user const
//because it's grouping things together. It's easier to call the object later. 
//it's a way to encapsulate information


// Challenge
// create a function that takes in an employee,
//if the employees firstName starts with an M then add a key=status and value='vip'
//if the employees firstName does not start with an M then add a key=status and value='peasant'

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'c') {
        employee.status = 'vip'
    } else {
        employee.status = 'peasant'
    }
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}

findAndLogEmployeeStatus(person)
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
})
findAndLogEmployeeStatus({
    name: prompt('Enter Employee Name'),
    status: ''
})
