let obj = {
    a : 23,
    x : () =>{
        console.log(this);
    }
}

// obj.x();

// this keyword will point to the window object because the arrow function doesn't have it's own (this) binding

// now 

let obj1 = {
    a : 12 , 
    x : function (){

        // enclosing lexical context
        let funk = () =>{
            console.log(this);
        }

        funk();
    }
}


obj1.x();

// in above case this will be pointing to the obj1. because the arrow function don't have this binding.

// terminology ko yaad rakho ye wala

// arrow function will retain the value of this from it's enclosing lexical context
