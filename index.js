#! /usr/bin/env node  
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 23456;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin:"
    }
]);
if (pinanswer.pin === myPin) {
    console.log("Correct pin code!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option:",
            choices: ["with draw", "check balance", "fast cash"],
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "with draw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount you want to withdraw:"
            }
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your remaing balance is:" + myBalance);
        }
        else {
            console.log("Insufficent Balance!!");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    if (operationAns.operation === "fast cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select the cash:",
                choices: [2000, 3000, 40000]
            }
        ]);
        if (fastcash.fastcash === 2000) {
            myBalance -= fastcash.fastcash;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        else if (fastcash.fastcash === 3000) {
            myBalance -= fastcash.fastcash;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        else if (fastcash.fastcash === 40000) {
            myBalance -= fastcash.fastcash;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code!!");
}
