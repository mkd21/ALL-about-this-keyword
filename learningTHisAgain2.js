// now we will be using this keyword in strict mode 

"use strict"


// value of this depends on how function is called 


function x()
{
    console.log(this);
}

// x();  // it will be undefined because of strct mode 


// now if we call the function by using reference of an object then it will point to that object

// window.x();     // now it will point to the window




                                    // BEHAVIOUR OF THIS KEYWORD INSIDE OBJECT'S METHOD 

// NOTE --> FUNCTION INSIDE THE OBJECT IS CALLED A METHOD 

let obj = {
    a : 12,
    Name : "Mayank Deep",
    funk : function (){
        console.log(this);
        console.log(this.a);
        console.log(this.Name);
    }
}

obj.funk();          // here the this keyword will contain the obj object

// agar aisa hai toh we can use this keyword to access the key value pair of object 

// mapping kuch iss prakar hai --> obj.funk() --> point to obj object and we know that to access any value dot laga ke access kr skte hai 
//whi kr rhe hai (this.a) likhne se "a" ka value access kr skte hai.