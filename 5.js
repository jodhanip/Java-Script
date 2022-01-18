// // const fruits = ["abacdedbc"]
// var n='abacdedbc'.split("")
// var m='abacdedbc'


//  const filterItems = (arr, query) => {
//   arr.filter(el => el.indexOf(query) >= 0)

// }
// for(i=0;i<n.length;i++){
//   console.log(filterItems(n,m.charAt(i)))
// }

//using consturterwith anon
setTimeout(function(){console.log("settimeoutfunction called"),100000});
var a =10,b=20

 var cons = new Function("a","b","console.log('hello');return a+b;")
 console.log(cons(a,b))

