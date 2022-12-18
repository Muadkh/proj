import inquirer from "inquirer";
import chalk from "chalk";
import { doesNotMatch } from "assert";
import { type } from "os";
type ty = {
   age_prompt: number,
   guess_number: number,
   input_age: number,
}

let guess_no: number = 5;
let age_prompt: ty;
let guess_prompt: ty;
let retry:number=3;
let i:number=0;

console.log(chalk.bold.red(`\n        GUESSIN\n                GGAME\n`));

age_prompt = await inquirer.prompt([{
   name: "input_age",
   type: "number",
   message: "What is Your Age ? "
}]);

async function guess_func() {
   guess_prompt = await inquirer.prompt([{
      name: "guess_number",
      type: "number",
      message: "Guess Any Number Between 1 & 10 ? "

   }]);
   let random_num = Math.floor(Math.random() * 11);
   if (random_num === guess_no) {
      console.log("Congrats You Have Guess the Number");
      return true;
   }
   else {

      console.log("Sorry you have failed to guess the Number");
      return false;
   }


};

if (age_prompt.input_age >= 18) {

   let output: boolean = true;
   switch (output == true) {
      case true:
         await guess_func();
      case false:
         while(i!==retry-1){
            i +=1;
            console.log(`Failed Attempt ${i} & Attempt left ${retry-i}`)
            await guess_func();
         }

   }

}

else {
   console.log("You Cant Play because your are below 18 ....");
}
