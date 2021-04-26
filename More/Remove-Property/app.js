let person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 50,
    eyecolor: 'blue'
}

delete person.age
document.getElementById('demo').innerHTML =
    person.firstname + ' is ' + person.age + ' years old.'