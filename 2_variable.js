//var
var a
var b
var c = a + b
console.log(c)
console.log(a)
console.log(b)

// NaN
// undefined
// undefined

//let
let x = 20 //var x = 20
console.log(x)

{
    let x = 10
    console.log(x)
}
console.log(x)

// 20
// 10
// 20

//const
const j = 3.14
console.log(j)

{
    const j = 99
    console.log(j)
}
//3.14
//99

a=20
b='20'
console.log(a==b)   //true
console.log(a===b)  //false

c='string'
a=`string`
console.log(a==c)  //true

console.log("hello")
console.log(undefined==null)    //true
console.log(undefined===null)   //false

console.log(NaN==null)   //false
console.log(NaN===null)   //false

console.log(NaN==undefined)   //false
console.log(NaN===undefined)   //false

console.log(undefined==undefined)   //true
console.log(undefined===undefined)   //true

console.log(NaN==NaN)   //false
console.log(NaN===NaN)   //false