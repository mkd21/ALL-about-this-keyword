            // ALL ABOUT THIS KEYWORD 
// "use strict"

// behavious of this in global scope 

console.log(this);       // will point to window object , if used in global scope

// this keyword in global space will point to the current global object .
// kuch aisa fixed nhi hai ki window object ko he point krega
// different places me global object kuch aur bhi ho skta hai 

// haan yaha pr global object window hai kyuki we are inide browser isliye 


// behavour inside a function 

// yaha pr behavious of this will depend on how we are using JS. 
                        // it will show different behaviour in normal mode and different behaviour in strict mode
                        // IN NORMAL MODE YE BHI WINDOW OBJECT KO POINT KREGA
                        // IN STRICT MODE ME YE UNDEFINED HO JYEGA
function x()
{
    console.log(this);  
}

x();

// NOTE  ---> this in non strict mode (this substitution) happens                    
                    // that's why below thing happen
// NOTE ---> if the value of this keyword is undefined or null then it will be replace with window object, ONLY IN NON STRICT MODE

// when someone asks what is the value of this keyword inside a function 

// ans -> value of this keyword inside a function is undefined but there is something called this substitution due to which it points to global object ie window in this case . IF WE ARE NOT USING STRICT MODE



