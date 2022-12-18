import inquirer from "inquirer";
import chalk from "chalk";
let Balance_amount = 5000;
let username_prompt;
let username_prompt2;
let username_prompt3;
let username_prompt4;
let username_prompt5;
async function userID_pass() {
    username_prompt = await inquirer.prompt([{
            name: "user_ID",
            type: "string",
            message: "Please Enter your ID....",
            validate: (answer) => {
                if (answer === "adil") {
                    return true;
                }
            }
        },
        {
            name: "user_PIN",
            type: "password",
            message: "Please Enter your PIN....",
            when: (answer) => {
                return answer.user_ID;
            }
        }]);
}
;
async function menue() {
    username_prompt2 = await inquirer.prompt([{
            name: "account_type",
            type: "list",
            message: "Please Select Your Account Type....",
            choices: ["Current Account", "Saving Account"]
        },
        {
            name: "menue_option",
            type: "list",
            message: "Menue Options....",
            choices: ["Balance Inquiry", "Cash Withdrawal", "Fast Cash"]
        }
    ]);
    return username_prompt2.menue_option;
}
;
async function balance() {
    console.log(`You Have ${Balance_amount} in your Account`);
}
;
async function withdrawal() {
    username_prompt4 = await inquirer.prompt([{
            name: "cash_withdrawal",
            type: "number",
            message: "Please Enter the Amount to Witdhrawal...."
        }
    ]);
    if (username_prompt4.cash_withdrawal <= Balance_amount) {
        console.log(`Please Take your Amount Rs: ${username_prompt4.cash_withdrawal}`);
        Balance_amount = Balance_amount - username_prompt4.cash_withdrawal;
        console.log(`Remaining Balance in your Account is Rs: ${Balance_amount}`);
    }
    else {
        console.log("You Don't Have Enough Money to Draw ");
    }
}
;
async function fastcash() {
    username_prompt5 = await inquirer.prompt([{
            name: "fastcash_withdrawal",
            type: "list",
            message: "Please Choose Amount to Witdhrawal....",
            choices: [500, 1000, 2000, 3000, 5000]
        }]);
    if (username_prompt5.fastcash_withdrawal <= Balance_amount) {
        console.log(`Please Take your Amount Rs: ${username_prompt5.fastcash_withdrawal}`);
        console.log(`Remaining Amount in Your Account is ${Balance_amount - username_prompt5.fastcash_withdrawal}`);
    }
    else {
        console.log("You Don't Have Enough Money to Draw ");
    }
}
;
console.log(chalk.bold.cyan `\n*************** ATM MACHINE ***************\n`);
let id = await userID_pass();
let menue_reply = await menue();
switch (menue_reply) {
    case 'Balance Inquiry':
        await balance();
        break;
    case 'Cash Withdrawal':
        await withdrawal();
        break;
    case 'Fast Cash':
        await fastcash();
        break;
}
