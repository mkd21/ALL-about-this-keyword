let student1 = {
    Name : "Mayank",
    print : function(){
        console.log(this.Name);
    }
}


student1.print();

let student2 = {
    Name: "Minakshi",
}

// i want to use the print method of student1 object to print the Name that is inside student2

// we can use call method  


// call method helps us to customise the this keyword. we can decide which object it should point now 

student1.print.call(student2);
                   // yaha pr this keyword ko bol rhe hai ki ab student 2 ko point kro