// this in event handlers refers to the element that has triggered the event 

// matlab uss element ko hi point krega jis element ke andar hai wo 

let btn = document.querySelector("button");
// console.log(btn);

function exec(e){
    console.log(this.tagName);
}

btn.onclick = exec;