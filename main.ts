#! /usr/bin/env node


// Made a table Generator using with while loop 

let table= true;
import inquirer from "inquirer";
while(table){
let numtable = await  inquirer.prompt
(
    [
        {
            message: `Enter any number to generate a table:\n`,
            name: "anyNumber",
            type: "number",
        }
    ]
) 
    let myNumber= numtable.anyNumber;
    console.log(myNumber);
if(myNumber){
    console.log(`here is a table of ${myNumber}\n `);
    for (let i = 1; i <=10 ; i++) {
        console.log(`${myNumber} X ${i} = ${myNumber*i}`)   
    }
}else{
    console.log("Only Enter a Numeric form  ");
    
}
// asking question you want to stop the program or continue

let againprint = await inquirer.prompt
(
    {
        name:"askUser",
        type:"confirm",
        message:`\nDo you want to print another table?\n`,
        default:false,
    }
)
if (againprint.askUser == false ){
    table= false; 
    console.log(`\nThank you for useing this table Generator`);
    
}
 }
