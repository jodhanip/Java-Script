let fruits=["apple","banana","kiwi","chicoo","df"]

//1. length
// console.log(fruits.length)        //4

//2.forEach()
// fruits.forEach(function(a,b,c){        //(a=elements, b=index, c=array)          //call back with annonymous
//   console.log(a,b,c)                   // apple 0 [ 'apple', 'banana', 'kiwi', 'chicoo' ]
                                       // banana 1 [ 'apple', 'banana', 'kiwi', 'chicoo' ]
                                       // kiwi 2 [ 'apple', 'banana', 'kiwi', 'chicoo' ]
                                       // chicoo 3 [ 'apple', 'banana', 'kiwi', 'chicoo' ]
// })
// fruits.forEach((a,b,c)=>{                                                           //call back with arrow
//     console.log(a,b,c)
// })

//3.pop()
// let a=fruits.pop()
// console.log(fruits)                 //[ 'apple', 'banana', 'kiwi' ]
// var n1=[]
// let b=n1.pop()                 //undefined
// console.log(b)                 //[ 'apple', 'banana', 'kiwi' ]

//4.push()
// const countt=fruits.push("df")
// console.log(countt)                // 6
// console.log(fruits)                //[ 'apple', 'banana', 'kiwi', 'chicoo', 'df', 'df' ]

//Merging two arrays
// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']
// vegetables.push(...moreVegs);
// console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

//5.unshift()
// var c=fruits.unshift("mango")
// console.log(fruits)                  //[ 'mango', 'apple', 'banana', 'kiwi', 'chicoo' ]

//6.shift()
// var d=fruits.shift()                 
// console.log(fruits)                 //[ 'banana', 'kiwi', 'chicoo' ]

//7.indexof()
// console.log(fruits.indexOf("kiwi"))          //2
// console.log(fruits.indexOf("kiw"))           //-1

//8.concat()
// const a1=["a","b","c"]
// const a2=["d","e","f"]
// console.log(a1.concat(a2))         //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(a1.concat(a2))         //[ 'a', 'b', 'c', 'd', 'e', 'f' ]


// 9.lastIndexOf()
// let fruits=["apple","banana","kiwi","banana","chicoo"]
// console.log(fruits.lastIndexOf("banana"))                //3

// 10.reverse()
// console.log(fruits.reverse())          //[ 'chicoo', 'kiwi', 'banana', 'apple' ]

// 11.slice(start,end)
// console.log(fruits.slice(1,3))         //[ 'banana', 'kiwi' ]

// 12.splice(position,number)
// console.log(fruits.splice(2,3))        //[ 'kiwi', 'chicoo' ]
// console.log(fruits)

//13.includes()
// console.log(fruits.includes("kiwi"))         //true
// console.log(fruits.includes("berry"))         //false

// 14.at()
// console.log(fruits.at(2))   //kiwi

const num=[1,2,3,4,5]

// 15.every()        -----return boolean-------
// var check = (hi)=>hi%2==0
// console.log(num.every(check))     //false

// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//   [12, 5, 8, 130, 44].every(isBigEnough);   // false
//   [12, 54, 18, 130, 44].every(isBigEnough); // true

//16.some()            -----return boolean-------
// var check = (hi)=>hi%2==0
// console.log(num.some(check))     //true

// const fruit = ['apple', 'banana', 'mango', 'guava'];
// function checkAvailability(arr, val) {
//   return arr.some(function(ele) {
//       console.log(ele)
//     return val === ele;
//   });
// }
// console.log(checkAvailability(fruit, 'kela'));   // false
// console.log(checkAvailability(fruit, 'banana')); // true

// 21.find()               --------return first satisfies element
// console.log(num.find(x => x>3))              //4

// 22.findindex()
// console.log(num.findIndex(x => x>3))              //3

// 17.filter()    --------return satisfy condition--------
// var check = (hello)=>hello.length<5
// console.log(fruits.filter(check))                   //[ 'kiwi' ]
// console.log(fruits.filter(test=>test.length<6))         //[ 'apple', 'kiwi' ]
// console.log(fruits.filter((a,b,c)=>console.log(a,b,c))) //apple 0 [ 'apple', 'banana', 'kiwi', 'chicoo' ]
                                                        //banana 1 [ 'apple', 'banana', 'kiwi', 'chicoo' ]
                                                        //kiwi 2 [ 'apple', 'banana', 'kiwi', 'chicoo' ]
                                                        //chicoo 3 [ 'apple', 'banana', 'kiwi', 'chicoo' ]

// 18.map()  -------return change satisfy array-------
// console.log(num.map((x=>x*2)))        //x=element //[ 2, 4, 6, 8, 10 ]


// 19.reduce()
// var x=[10,20,30,40]
// var test = (p,c)=>p+c
// console.log(x.reduce(test))               //100
// console.log(x.reduce(test,50))             //150

// var t1 = (a,b,c,d) =>{              // (previousValue, currentValue, currentIndex, array) 
//     console.log(a,b,c,d)
//     console.log(`previous: ${a}, current: ${b}, index: ${c}, returns: ${d}`);
//     return a+b                      //previous: 10, current: 20, index: 1, returns: 10,20,30,40
//                                     //previous: 30, current: 30, index: 2, returns: 10,20,30,40
//                                    //previous: 60, current: 40, index: 3, returns: 10,20,30,40

// }
// console.log(x.reduce(t1))            //100

// let deposite=[200,440,7000,680]
// const max=deposite.reduce((a,b)=>{
//     if(a>b)return a
//     else return b
// })
//deposite[0])
// console.log(max)            //7000

// 20.toString()
var array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString());          //1,2,a,1a

//23.spread(...)

// let deposite=[200,440.7000,680]
// let withdra=[-400,-680,-280]
// console.log(...deposite,...withdra)        //200 440.7 680 -400 -680 -280
// console.log([...deposite,...withdra])      //[ 200, 440.7, 680, -400, -680, -280 ]


// const number=[1,2,3]
// console.log(200,89,...number,56)         //200 89 1 2 3 56

// var new_number=12
// console.log([100,...number,new_number])    //[ 100, 1, 2, 3, 12 ]

// 26.entries()
// var array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
// console.log(iterator1.next().value);    //[ 0, 'a' ]

// -----------extra------------

// # array distructuting(swap)
// var a=10,b=65;
// [a,b]=[b,a]
// console.log("a : ",a)     //65
// console.log("b : ",b)     //10


// function result(s1,s2,s3){
//     return[s1+s2+s3,(s1+s2+s3)/3]       //return only array not two digit
// }
// console.log(result(80,90,70))     //[ 240, 80 ]
// let [total,percentage]=result(80,90,70)
// console.log(total,"-",percentage)   //240 - 80

// var getmarks=()=>[34,56,98,79,99]
// let marks = getmarks()
// console.log(marks)       //[ 34, 56, 98, 79, 99 ]

// let [...a1]=getmarks()
// console.log(a1)             //[ 34, 56, 98, 79, 99 ]


// 23. for...of
var amt=[200,450,-400,-3000,-650,-130,70,1300]
// for(const x of amt)                  //x=element
// {
//     console.log(x)   //200
//                      //450
//                      //-400 ...
// }

// for(let [x,y] of amt.entries())         //x=index,y=element
//     console.log(x,"-",y)    //0 - 200    
                               //1 - 450
                               //2 - -40

// 24.fill()
console.log(num.fill(0, 2, 4));         //[ 1, 2, 0, 0, 5 ]

// 1  //using for...of
// for(var [x,y] of amt.entries()){
//     if(y>0){
//         console.log(`y ${x+1} : you deposited ${y}`)                    //y 1 : you deposited 200
//     }                                                                   //y 2 : you deposited 450
//     else{                                                               //y 3 : you withdrew 400
//         console.log(`y ${x+1} : you withdrew ${(Math.abs(y))}`)
//     }
// }

//2   //using forEach
// amt.forEach((x,y)=>{                 //x=element,y=index,z=array
//     if(x>0){
//         console.log(`y ${y+1} : you deposited ${x}`)                    //y 1 : you deposited 200
//     }                                                                   //y 2 : you deposited 450
//     else{                                                               //y 3 : you withdrew 400
//         console.log(`y ${y+1} : you withdrew ${(Math.abs(x))}`)
//     }
// })

//1 using map
var amt1=[200,450,400,3000,650,130,70,1300]
var rate=1.1
// for(var s of amt1){
    // t=amt1.map((ele)=>ele*rate)          
    // console.log(t)                         //[220,495,440 ....77,1430]
    // console.log(s*rate)                    // 220,495,440 ....77,1430
// }
// console.log(t)                             //[220,495,440 ....77,1430]

//2 using for...of
// var arr=[]
// for(var ele of amt1){
//      arr.push(ele*rate)
// }
// console.log(arr)                                //[220,495,440 ....77,1430] 

// const test=amt.map((x,y)=>`y ${y+1} : ${x>0?'deposited ':'withdrew '}${(Math.abs(x))}`)        //x=element,y=index
// console.log(test)                               //[ 'y 1 : deposited 200',
                                                // 'y 2 : deposited 450',
                                                // 'y 3 : withdrew 400',.....]   

//using map
// var a=[1,2,3,4,5]
// console.log(a.map((ele,i)=>ele*2))        //[ 2, 4, 6, 8, 10 ]

//using forEach
// arr=[] 
// a.forEach((ele)=>{   
//     arr.push(ele*2)
// })
// console.log(arr)                            //[ 2, 4, 6, 8, 10 ]

// //using for...of
// array=[]
// for(var ele of a){
//     array.push(ele*2)
// }
// console.log(array)                          //[ 2, 4, 6, 8, 10 ]

//using for...of
// array=[]        
// for(var ele in a){                          //index
//     console.log(ele)                          //[ '0', '1', '2', '3', '4' ]
// }
// console.log(array)                          //[ '0', '1', '2', '3', '4' ]

// //using filter()
// arr2=[]
// a.filter((ele)=>{
//     arr2.push(ele*2)
// })
// console.log(arr2)                               //[ 2, 4, 6, 8, 10 ]

// arr1=[]
// a.reduce((x,y)=>{
//     arr1.push(y*2)
// })
// console.log(arr1)                               //[ 4, 6, 8, 10 ]


console.log(jaldip)