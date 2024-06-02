#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Correct Pin Code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one option",
            type: "list",
            choices: ["withdraw",
                "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Ypur remaining balance is :" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is : " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Number");
}
