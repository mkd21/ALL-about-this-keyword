// this keyword 

/*
. in an object method (this) refers to the object inside an object 

. alone it refers to the global object

. in function this refers to global object

. in a function in strict mode (this) is undefined

. in an event (this) refers to the element that received the event

.methods like call() , apply() and bind() can refer (this) to any object

*/

                                    // WE WILL SEE THE DIFFERENT BEHAVIOUR OF (THIS) KEYWORD 


// function funk()
// {
//     console.log(this);
// }


// funk();


// const obj = {
//     firstName : "Mayank",
//     LastName : "Deep",

//     fullname()              // this keyword here will point the obj
//     {
//         console.log(this);
//         console.log(`${this.firstName} ${this.LastName}`);
//     }
// }

// obj.fullname();


// const obj = {
//     firstName : "Mayank",
//     LastName : "Deep",

//     fullname()
//     {
//         function GetAge()
//         {
//             function deep()
//             {
//                 console.log(this);    // this keyword here will point the global window object 
//             }

//             deep();
//         }
//         GetAge();
//         console.log(this);    // this keyword here will print the obj
//     }
// }

// obj.fullname();




// const obj = {
//     firstName : "Mayank",
//     LastName : "Deep",
//     arr : ['a' , 'b' , 'c'],
//     fullname()
//     {
//         let funk = () => {
//             console.log(this);     // (this) here will point the obj because of arrow function and will take reference of outer function
//         }
//         funk();
//         console.log(this);            // (this) here will point the obj 
//     }
// }

// obj.fullname();





// const obj = {
//     firstName : "Mayank",
//     LastName : "Deep",
//     arr : ['a' , 'b' , 'c'],
//     fullname()
//     {
//         this.arr.forEach( function(elem) {      // here see the function it's anonymous
//             console.log(elem);
//             console.log(this.firstName);         // this keyword will be pointing to global object because normal function is used
//         })        
//     }
// }

// obj.fullname();




// const obj = {
//     firstName : "Mayank",
//     LastName : "Deep",
//     arr : ['a' , 'b' , 'c'],
//     fullname()
//     {
//         this.arr.forEach( (elem) => {      // here see the function is arrow function
//             console.log(elem);
//             console.log(this.firstName,this.LastName);       // this keyword will be pointing to obj because arrow function is used
//         })        
//     }
// }

// obj.fullname();


                            // BEHAVIOUR OF ARROW FUNCTION WITH (THIS) KEYWORD

// arrow function should never be used while working with this keyword

let ob = {

    firstName : "Mayank",
    lastName : "Deep",

    funk : () => {
        console.log(this);
    } ,
};


ob.funk();