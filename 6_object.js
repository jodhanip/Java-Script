// var a= new Object()
// console.log(a)              //{}
// console.log(typeof(a))      //object
// var x
// var y =""

// console.log(x)              //undefined
// console.log(y)              //

// var b = Object(undefined)
// console.log(b)              //{}
// var c= Object(null)
// console.log(c)              //{}

// //1 type
// var car = new Object()
// car.brand="maruti"
// car.color="balck"
// car.fueltype="cng"
// console.log(car)    //{ brand: 'maruti', color: 'balck', fueltype: 'cng' }

// //2 type
// var newcar = {
//     brand:"maruti",
//     color:"balck",
//     fueltype:"cng",
//     type:{
//         small:'hatchback',
//         medium:"seaden",
//         large:"suv"
//     }
// }
// console.log(newcar)    //{
//                        //  brand: 'maruti',
//                        //  color: 'balck',
//                        //  fueltype: 'cng',
//                        //  type: { small: 'hatchback', medium: 'seaden', large: 'suv' }
//                        //}

// //type 1                       
// console.log(newcar.type.large)      //suv
// //type 2
// console.log(newcar["type"]["large"])        //suv

//=============================================================================================================================================

let person = {
    first_Name: "John",
    last_Name: "Doe",
    middle_Name: "C",
    current_Age: "18"
}
// // object distructring //type 1
// let { middle_Name, first_Name, last_Name, current_Age: age = 60 } = person   //Assigning to new variable names (age)
// console.log(typeof (first_Name))    //string
// console.log(last_Name)          //Doe
// console.log(middle_Name)        //C
// console.log(age)                //18

// let a = { middle_Name, first_Name, last_Name, current_Age: age = 60 } = person
// console.log(last_Name)          //Doe
// console.log(middle_Name)        //C
// console.log(age)                //18
// console.log(a)
//  {
//   first_Name: 'John',
//   last_Name: 'Doe',
//   middle_Name: 'C',
//   current_Age: '18'
//  }

// object distructring //type 2
// let b = person
// console.log(first_Name)          //error
// console.log(typeof (first_Name))    //undefined
// console.log(b.first_Name)          //Jone
// console.log(typeof (b.first_Name))    //string
// console.log(b)
// // {
//     first_Name: 'John',
//     last_Name: 'Doe',
//     middle_Name: 'C',
//     current_Age: '18'
// }

//null
// let a = 40
// function getPerson() {
//     return null;
// }
// let { c, d } = getPerson() || {}
// console.log(c, d) //undefined undefined

// //other
// let a = 40
// function getPerson() {
//     return 678
// }
// let { c } = getPerson()
// console.log(c) //undefined undefined

let employee = {
    name: {
        first_Name: "John",
        last_Name: "Doe",
        middle_Name: "C",
        current_Age: "18",
        address: {
            city: "surat",
            state: "gujrat",
            country: "india"
        }
    }
}

// 1
let {
    name: {
        first_Name,
        last_Name
    }
} = employee

console.log(first_Name) //John

//2
// let { last_Name, middle_Name: mn } = employee.name
// console.log(last_Name)      //Doe
// console.log(mn)             //C

// let { city, country } = employee.name.address
// console.log(city)               //surat
// console.log(country)            //india

// let { last_Name, middle_Name, ...rest } = employee.name
// console.log(typeof (rest))      //object
// console.log(rest)               //{
//                                     first_Name: 'John',
//                                     current_Age: '18',
//                                     address: { city: 'surat', state: 'gujrat', country: 'india' }
//                                  }  
// console.log(last_Name)      //Doe
// console.log(middle_Name)    //C 

// ==============================================================================================================================

//1
// var person={
//     personName:"raj",
//     birthday:
//         function(){
//             return "happy birthday"
//         }
// }
// console.log(person)                    //{ personName: 'raj', birthday: [Function: birthday] }
// console.log(person.birthday)        //[Function: birthday]
// console.log(person.birthday())      //happy birthday

//2     //this        this = current object
// var person = {
//   personName: "raj",
//   age:23,
//   birthday: function () {               //object literals
// //     console.log(this)                   //{ personName: 'raj', birthday: [Function: birthday] }   //this = current object
// //     console.log(this.age)               //23
//     return `happy birthday to ${person.personName}`
//   }
// };
// person.birthday()
// console.log(person);            //{ personName: 'raj', birthday: [Function: birthday] }
// console.log(person.birthday()); //happy birthday to raj

// this.x = 100;
// var x=89
// console.log(this);      //{ x: 100 }
// console.log(this.x);    //100

//3 for...in
// var student = {
//   studentName: "scott",
//   email: "scott@gmail.com",
//   branch: "cs",
//   physics: 20,
//   chemistry: "70",
//   maths: "34",
// };
// for (let prop in student) {
//     console.log(prop, "-", student[prop]);
//     if (prop == "physics" || prop == "chemistry" || prop == "maths") {
//     student[prop] = student[prop] + 5;
//     student[prop] = parseInt(student[prop] + 5);
// }
// }
// studentName - scott
// email - scott@gmail.com
// branch - cs
// physics - 20
// chemistry - 70
// maths - 34

//4 object distructring in function
// var fun1 = function ({ studentName: sn, email: em, dateofbirth, ...other }) {
//   console.log("fun1", sn, em);          //fun1 scott scott@gmail.com
//   console.log(other)                    //{ phone: '123456', city: 'london' }
//   console.log(other["phone"],other.city)   //123456 london
// };
// var student={studentName:"scott",email:"scott@gmail.com",phone:"123456",city:"london"}
// fun1(student);

// 5
// var student = {};
// student.marks = 70;
// student.getResult = function () {
//   if (this.marks >= 35) return "pass";
//   else return "fail";
// };
// console.log(student.marks); //70
// console.log(student.getResult()); //pass


//R.G extra

//object creat using constructer type function
// var person=function(){
//     this.name="jaldipp";s
//     this.address="118";
// }
// console.log(jaldip=new person())  //person { name: 'jaldipp', address: '118' }


// var animal={type:"carnivars",display_type:function() {console.log("home") }}
// var horse=Object.create(animal);
// // horse.type="something else"
// console.log(horse)

// var treiner={
//     name :"abc",
//     subject:["math","oh","chem"],
//     teches:["f","s"],
//     age:60,
// }
// var prop=""
// for(p in treiner){
//     prop+=p+":";
// }
// console.log(prop)

// delete treiner.age;
// var prop=""
// for(p in treiner){
//     prop+=p+":";
// }
// console.log(prop)

// //merge two object
// // object 1
// const person = {
//   name : "jack",
//   age : 45,
// }

// //object 2
// const student ={
//   gender:"male",
// }

// // const newobj = Object.assign(person,student);
// const newobj = {...person,...student} //{ name: 'jack', age: 45, gender: 'male' }
// console.log(newobj)                   //{ name: 'jack', age: 45, gender: 'male' }
