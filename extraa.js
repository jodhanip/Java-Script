// object 1
const person = {
    name : "jack",
    age : 45,
}

//object 2
const student ={
    gender:"male",
}

//merge two object
// const newobj = Object.assign(person,student);
const newobj = {...person,...student} //{ name: 'jack', age: 45, gender: 'male' }
console.log(newobj)                   //{ name: 'jack', age: 45, gender: 'male' }
