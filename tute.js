<!doctype html>
<html lang="en">

<head>
    <link rel="stylesheet" href="style.css">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">JavaScript Tutorial</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Upcoming
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">C programming</a></li>
                            <li><a class="dropdown-item" href="#">C++ </a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">MongoDB</a></li>
                        </ul>
                    </li>

                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <div class="container" ,id="side">
        <b>
            <h1 style="text-align: center;color:blue;">JavaScript Tutorial</h1>
        </b>
        <h2 style="color: firebrick;">JavaScript Functions</h2>
        <p><b> JavaScript functions </b> are used to perform operations. We can call JavaScript function many times to
            reuse the code.</p>
        <hr>
        <h4 class="headingg">Advantage of JavaScript function</h4>
        <ol type="1">
            <li>Code reusability: We can call a function several times so it save coding.
            </li>
            <li>Less coding: It makes our program compact. We don’t need to write many lines of code each time to
                perform a common task.</li>
        </ol>
        <hr>
        <h4 class="headingg">Function Defination</h4>
        <ul>
            <li>A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses
                ().</li>
            <li>Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
            </li>
            <li>Function parameters are listed inside the parentheses () in the function definition.</li>
            <li>The code to be executed, by the function, is placed inside curly brackets: {}</li>
            <li>Function arguments are the values received by the function when it is invoked.</li>
        </ul>
        <hr>

        <h4 class="headingg">Type of Functions </h4>
        <h6>
            <ol type="1">
                <li>Simple Function</li>
                <li>Anonymous Function</li>
                <li>Arrow Function</li>
                <li>Call back Function / Self invoke function</li>
            </ol>
        </h6>

        <h5 class="h5">1. Simple Function</h5>
        <h5 class="SE">Sytax:</h5>
        <div class="shadow border border-secondary border border-3 bg-light rounded-3 ">
            <pre class="box">
 function  functionName (Parameter1, Parameter2)				    //function definition
 {
             // code to be executed                         	 
 }
 console.log(functionName ())                            	    // function called</pre>
        </div>
        <h5 class="SE">Example:</h5>
        <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
            <pre class="box">
 function square(number) 
 {
   return number * number;                                       //25
 }
 console.log(square (5));
</pre>
        </div><br>

        <h5 class="h5">2. Anonymous Function</h5>
        <h5 class="SE">Sytax:</h5>
        <div class="shadow border border-secondary border border-3 bg-light rounded-3 ">
            <pre class="box">
                variable functionName = function (Parameter1, Parameter2, ..)
                {
                            // code to be executed  
                }</pre>
        </div>
        <hr>
        <ul>
            <li> An anonymous function is a function without a name. The following shows how to define an anonymous
                function:</li>
            <li>If you want to create a function and execute it immediately after the declaration, you can declare an
                anonymous function like this :</li>
            <h5 class="SE">Sytax:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                <pre class="box">
 (function() {
     console.log('Immediately invoked function execution');             //Immediately invoked function execution
 })();
</pre>
            </div>
            <hr>
            <li>The following shows an anonymous function that displays a message.</li>
            <h5 class="SE">Example:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3">
                <pre class="box">
 let show = function() {
     console.log('Anonymous function');	                                //Anonymous function
 };
 show();
                    
</pre>
            </div>
            <hr>

            <li>Using anonymous passing parameter.</li>
            <h5 class="SE">Example:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3">
                <pre class="box">
 var test = function (p1,p2)
 {
       return p1 * p2;                                               	//45
 }
 console.log(test (5,9));                 
</pre>
            </div>
            <hr>
            <li>Using anonymous functions as arguments.</li>
            <h5 class="SE">Example:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3">
                <pre class="box">
 setTimeout(function() {
     console.log('Execute later after 1 second')                        //Execute later after 1 second
 }, 1000);               
</pre>
            </div>
            <b>In this example, we pass an anonymous function into the setTimeout() function. The setTimeout() function
                executes this anonymous function one second later.</p>
                <hr>
        </ul>

        <h5 class="h5">3. Arrow Function</h5>
        <h5 class="SE">Sytax:</h5>
        <div class="shadow border border-secondary border border-3 bg-light rounded-3 ">
            <pre class="box">
variable  functionName = (Parameter1, Parameter2, ..) =>
{
        	// Function body
}
</pre>
        </div>
        <hr>

        <ul>
            <li>Arrow Functions Return Value by Default:</li>
            <h5 class="SE">Example:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                <pre class="box">
 test = () => "Hello World!";                                           //Hello World!
 test();</pre>
            </div>
            <p>It gets shorter! If the function has only one statement, and the statement returns a value, you can
                remove the brackets and the return keyword :</p>
            <hr>

            <li>Arrow Function With Parameters:</li>
            <h5 class="SE">Example:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                <pre class="box">
 test = (p1,p2) => p1*p2;                                           //45
 test(5,9);</pre>
            </div>
            <hr>
        </ul>

        <h5 class="h5">4. Call back Function / Self invoke function</h5>
        <li>A callback function is a function passed into another function as an argument, which is then invoked inside
            the outer function to complete some kind of routine or action.</li>
        <h5 class="SE">Sytax:</h5>
        <div class="shadow border border-secondary border border-3 bg-light rounded-3 ">
            <pre class="box">
variable  functionName = (Parameter1, Parameter2, ..) =>
{
        	// Function body
}
</pre>
        </div>

        <div class="boxes">
            <hr>
            <li>In JavaScript, you can also pass a function as an argument to a function. This function that is passed
                as an
                argument inside of another function is called a callback function. </li>

            <h5 class="SE">Example:</h5>
            <div class="row">
                <div class="col-lg-6" class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%;">
                  
                </div>

                <div class="col-lg-6" class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%;">
                    <pre class="box1">

                </div>
            </div>
            <div>

            </div>
            <h5 class="SE">Output:</h5>
            <div class="out">
                <div class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%">
                    <pre class="box">
 call first...
 call second...
</pre>
                </div>
                <div class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%">
                    <pre class="box">
 call second...
 call first...
</pre>
                </div>
            </div>


            <div class="row">
                <hr>
                <li>In JavaScript, you can also pass a function as an argument to a function. This function that is
                    passed
                    as an
                    argument inside of another function is called a callback function. </li>

                <h5 class="SE">Example:</h5>
                <div class="col-lg-6">
                    <div class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%;">
                        <pre class="box1">
 function secondFunc(para){
     para()
     console.log("call second...")
 }

 // call back by arrow
 secondFunc(()=>console.log("call first..."))</pre>
                    </div>

                    <div class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%;">
                        <pre class="box1">
 function secondFunc(para){
     para()
     console.log("call second...")
 }

 //call back by anonymous
 secondFunc(function(){
   console.log("call first...")
 })</pre>
                    </div>
                </div>

                <h5 class="SE">Output:</h5>
                <div class="col-lg-6">
                    <div class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%">
                        <pre class="box">
 call first...
 call second...
</pre>
                    </div>
                    <div class="shadow border border-primary border border-3 bg-light rounded-3 " style="width: 50%">
                        <pre class="box">
 call first...
 call second...
</pre>
                    </div>
                </div>

                <li>In the above program, there are two functions. While calling the secondFunc() function, one argument
                    as
                    function are passed. The firstFunc() function is a callback function.</li>
                <hr>

            </div>

            <h5 class="SE">Example:Program with setTimeout()</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                <pre class="box">
 //  program that shows the delay in execution

 function greet() {
     console.log('Hello world');
 }
                    
 function sayName(name) {
     console.log('Hello' + ' ' + name);
 }
                    
 // calling the function
 setTimeout(greet, 2000);
 sayName('John');</pre>
            </div>
            <h5 class="SE">Output:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                <pre class="box">
 Hello John
 Hello world
</pre>
            </div>
            <ul type="square">
                <li>As you know, the setTimeout() method executes a block of code after the specified time.</li>
                <li>Here, the greet() function is called after 2000 milliseconds (2 seconds). During this wait, the
                    sayName('John'); is executed. That is why Hello John is printed before Hello world.</li>
                <li>The above code is executed <U>asynchronously</U> (the second function; sayName() does not wait for
                    the
                    first function; greet() to complete).</li>
            </ul>
            <hr>

            <h5 class="SE">Example:Using a Callback Function</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                <pre class="box">
 // Callback Function Example
 function greet(name, myFunction) {
     console.log('Hello world');
                    
 // callback function
 // executed only after the greet() is executed
 myFunction(name);
 }                   
                    
 // callback function
 function sayName(name) {
     console.log('Hello' + ' ' + name);
 }                   
                    
 // calling the function after 2 seconds
 setTimeout(greet, 2000, 'John', sayName);</pre>
            </div>
            <h5 class="SE">Output:</h5>
            <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                <pre class="box">
 Hello world
 Hello Jone
</pre>
            </div>
            <ul type="square">
                <li>In the above program, the code is executed <U>synchronously</U>. The sayName() function is passed as
                    an
                    argument to the greet() function.</li>
                <li>The setTimeout() method executes the greet() function only after 2 seconds. However, the sayName()
                    function waits for the execution of the greet() function.</li>
                <div class="card border-info rounded border-3" style="max-width: 50rem;">
                    <div class="card-header"><b>Note : </b> The callback function is helpful when you have to wait for a
                        result that takes time. For example, the data coming from a server because it takes time for
                        data to
                        arrive.</div>

                </div>
                <hr>



                <h5 class="SE">Examle:</h5>
                <div class="shadow border border-primary border border-3 bg-light rounded-3 ">
                    <pre class="box">
 test = () => "Hello World!";                                           //Hello World!
 test();</pre>
                </div>
                <p>It gets shorter! If the function has only one statement, and the statement returns a value, you can
                    remove the brackets and the return keyword :</p>
                <hr>




        </div>

        <div class="row">
            <div class="col-lg-6">hello</div>
            <div class="col-lg-6">world</div>
        </div>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>


</body>

</html>
