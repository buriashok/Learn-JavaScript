// scopes
// scope in javaScript refers to the current context of code, which determine the accessibity of variables to javaScript.
// There are two types of scopes in javaScript

// Global Scope variables are those declared outside of the block

//Local Scope variables are those declared inside of the block

let textMessage = "HI";// Global Scope
console.log(textMessage);

function showMessage(){
    let textMessage = "Hello";// Local Scope
    console.log(textMessage);
}

showMessage();