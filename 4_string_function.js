// 1. .charAt(index) +-
var a="skill qode the programming lab"
// console.log(a.charAt())              // s   
// console.log(a.at(87))                // undefined
// console.log(a.at(-5))                // g
// console.log(a.charAt(2))               // i   
// console.log(a.charAt(2),'hello')       // i hello 
// console.log(a.charAt(2)+'hello')       // ihello  

// 2. .indexOf()
// var a="skill qode the programming qode lab"
// console.log(a.indexOf("t"))                             // 11
// console.log(a.indexOf("x"))                             // -1
// console.log(a.indexOf("programming"))                   // 15

// searchTerm="qode"
// const indexOfFirst = a.indexOf(searchTerm);
// console.log(a.indexOf(searchTerm))                       // 6
// console.log(a.lastIndexOf(searchTerm))                       // 27
// console.log(a.indexOf(searchTerm, (indexOfFirst + 1)))   // 27

// console.log(a.indexOf("the")==11)                        // true
// console.log(a.indexOf("teh")==11)                        // false
// console.log(a.indexOf("teh")!==11)                       // true

// 5. .replace()  //6. .replaceAll()
// var a="skill qode the programming qode lab"
// console.log(a.replace("qode","hello"))           //skill hello the programming qode lab 
// console.log(a.replaceAll("qode","hello"))        //skill hello the programming hello lab 

// const b="skill qode the programming Qode lab"
// console.log(b.replace("qode","hello"))            //skill hello the programming qode lab
// console.log(b.replaceAll("qode","hello"))         //skill hello the programming hello lab

// const regex = /QoDe/ig;
// console.log(b.replace(regex,"hi"))               //skill hi the programming hi lab
// console.log(b.replaceAll(regex,"hi"))            //skill hi the programming hi lab

//8. .slice(start number , end number)        
// const a="skill qode the programming lab"
// console.log(a.slice())       //skill qode the programming lab
// console.log(a.slice(2))      //ill qode the programming lab
// console.log(a.slice(-2))     //ab
// var b='skill qode'
// console.log(b.slice(2,8))    //ill qo    
// console.log(b.slice(-8,-2))  //ill qo    
// console.log(b.slice(2,-2))   //ill qo    
// console.log(b.slice(-8,8))   //ill qo    

//9. .split()
// const a="skill qode the programming lab"
// console.log(a.split())        //[ 'skill qode the programming lab' ]
// console.log(a.split(""))      //['s', 'k', 'i', 'l', 'l', ' ','q', 'o', 'd', 'e', ' ', 't','h', 'e', ' ', 'p', 'r', 'o','g', 'r', 'a', 'm', 'm', 'i','n', 'g', ' ', 'l', 'a', 'b'] 
// console.log(a.split(" "))     //[ 'skill', 'qode', 'the', 'programming', 'lab' ]
// console.log(a.split(" ",3))     //[ 'skill', 'qode', 'the',]
  
//10. .substr(from,length)
// const a="skill qode the programming lab"
// console.log(a.substr())   //skill qode the programming lab
// console.log(a.substr(2))   //ill qode the programming lab
// console.log(a.substr(-2))   //ab
// console.log(a.substr(2,5))   //ill q
// console.log(a.substr(-6,4))   //ng l

// 13. .substring(start , end)
// const a="skill qode the programming lab"
// console.log(a.substring())    //skill qode the programming lab
// console.log(a.substring(2))   //ill qode the programming lab
// var b='skill qode'
// console.log(b.substring(2,8))    //ill qo      //negative and NaN mean 0
// console.log(b.substring(-8,-2))  //    
// console.log(b.substring(2,-2))   //sk
// console.log(b.substring(-8,8))   //skill qo 

//12. .toLowerCase()
// const a="skill qode the programming lab"
// console.log(a.toUpperCase())        //SKILL QODE THE PROGRAMMING LAB
// console.log(a.toLowerCase())        //skill qode the programming lab
// console.log(a.toLocaleUpperCase('TR')) //SKİLL QODE THE PROGRAMMİNG LAB

//14.trim()
// const a="         skill qode the programming lab       "
// console.log(a.trim())       //skill qode the programming lab
// console.log(a.trimEnd())    //         skill qode the programming lab
// console.log(a.trimStart())  //skill qode the programming lab       

//17. .length    //property
// const a="skill qode the programming lab"
// console.log(a.length)     //30

// //18. .concat()
var a="skill qode"
// const b="the programming lab"

// console.log(a.concat("",b)) //skill qode the programming lab

// 19. .include(searchString, position)  //first
console.log(a.includes("kill"))     //true
console.log(a.includes("skill",5))     //false
console.log(a.includes("kill",1))     //true

//20.endsWith(searchString, length)  //last
console.log(a.endsWith("qode")) //ture
console.log(a.endsWith("kill",5)) //ture
console.log(a.endsWith("skill",7)) //false

//21.charCodeAt()
// console.log(a.charCodeAt(6))          //113 
// console.log(a.charCodeAt(-6))          //NaN
// console.log(a.charCodeAt(96))          //NaN

//22.padEnd()
// console.log(a.padEnd(9))        //skill qode
// console.log(a.padEnd(4))        //skill qode
// console.log(a.padEnd(13,'-'))   //skill qode---
// console.log(a.padStart(13,'-'))   //---skill qode

//23.repeat()
// console.log(a.repeat(2))            //skill qodeskill qode

// 24.valueOf()
// var x = new String('Hello world');
// console.log(x.valueOf()); 

// 25.concat()
// const str1 = 'Hello';
// const str2 = 'World';
// console.log(str1.concat(' ', str2)) //Hello World





