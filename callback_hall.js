//https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let order = (fruits, call_production) => {
    console.log("Order placed. Please call production")
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruits]} was selected..`)
        setTimeout(() => {
            console.log(`${stocks.Fruits[fruits]} was chopped..`)
            setTimeout(() => {
                console.log(`${stocks.liquid} added`)
                setTimeout(() => {
                    console.log(`bhmmmmmmmmmmmmmmmmmmmm`)
                    setTimeout(() => {
                        console.log(`hold ice cream on ${stocks.holder[2]} `)
                        setTimeout(() => {
                            console.log(` ${stocks.toppings[1]} toppings added `)
                            setTimeout(() => {
                                console.log(` take your ice cream.... `)
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
        call_production();
    }, 2000)

};
let production = () => {
    console.log("Production has started")
};
order(1, production)
/*
Order placed. Please call production
grapes was selected..
Production has started
grapes was chopped..
water,ice added
bhmmmmmmmmmmmmmmmmmmmm
hold ice cream on stick 
 peanuts toppings added 
 take your ice cream.... 
*/