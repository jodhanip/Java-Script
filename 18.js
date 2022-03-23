// let func = () => "Hello";
// console.log(func())                                            //Hello

// async function func() { return "Hello" };
// console.log(func())                                             //Promise { 'Hello' }       

// let func = async () => "Hello";
// console.log(func())                                            //Promise { 'Hello' }

// let func = async function () { return "Hello" };
// console.log(func())                                             //Promise { 'Hello' }       


// let func = async function () { return "Hello" };
// var val = 100
// // console.log(func().then((val) => console.log(val)));
// // console.log(func().then(console.log));
// func().resolve(console.log)
// // So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.

// // console.log("1")
// // console.log("2")
// // setTimeout(() => {
// //     console.log("3")

// // }, 1000)
// // console.log("4")

// let hello = async function () { return "Hello" };
// // console.log(hello())
// // async function hello() { return "Hello" };
// // var val = 100
// // console.log(hello().then((val) => console.log(val)));
// console.log(hello().then(console.log));

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

// let is_shop_open = true;
// // let order = async ( time, work ) => {
// async function time ( time, work ) {
//        if( 1 ){
//          setTimeout(()=>{
//           work() 
//         }, time)
//       }
//       else{
//         console.log("Our shop is closed") 
//       }
    
// }

let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}


async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}
kitchen()
// // step 1
// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
// // console.log(order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`)))

// // step 2
// .then(()=>{
//   return order(0000,()=>console.log('production has started'))
// })

// // step 3
// .then(()=>{
//   return order(2000, ()=>console.log("Fruit has been chopped"))
// })

// // step 4
// .then(()=>{
//   return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })

// // step 5
// .then(()=>{
//   return order(1000, ()=>console.log("start the machine"))
// })

// // step 6
// .then(()=>{
//   return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })

// // step 7
// .then(()=>{
//   return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })

// // Step 8
// .then(()=>{
//   return order(2000, ()=>console.log("Serve Ice Cream"))
// })