const fs = require('fs');

fs.writeFile("hello.txt","HELLO HOW ARE YOU?",function (err){
    if(err) console.log("Error :",err);
    else console.log("Done!");
})

fs.appendFile("hello.txt","\n ASI CHANGE TUC DASO !!",function (err){
    if(err) console.log("Error :",err);
    else console.log("Done!");
})

// fs.unlink("hello.txt","HELLO HOW ARE YOU?",function (err){
//     if(err) console.log("Error :",err);
//     else console.log("Done!");
// })