const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require('inquirer');
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
  "What is the Title of your README file?",
  "Enter your Description:",
  "Enter Installation instruction: ",
  "Enter Usage instruction: ",
  "Enter information for Credits section:",
  "Enter information for Contributing section:",
  "Enter information for Tests:",
  "Enter information for Question section:",
  "Enter License:",
  "What is your GitHub username?",
  "What is your email address?"
];

const licenseChoices =
["Apche--License--2.0",
"GNU--General--Public--License--v3.0",
"MIT--License", 
'BSD--2--Clause--Simplified--License"',
'BSD--3--Clause--Revised--License"',
"Boost--Software--License--1.0", 
"Creative--Commons--Zero--v1.0--Universal",
"Eclipse--Public--License--2.0", 
"GNU--Affero--General--Public--License--v3.0",
"GNU--General--Public--License--v2.0",
"GNU--Lesser--General--Public--License--v2.1",
"Mozilla--Public--License--2.0", 
]

//function to get user's information
function getUserInfo() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: questions[0]
      },
      {
        type: "input",
        name: "description",
        message: questions[1]
      },
      {
        type: "input",
        name: "installation",
        message: questions[2]
      },
      {
        type: "input",
        name: "usage",
        message: questions[3]
      },
      {
        type: "input",
        name: "credits",
        message: questions[4]
      },
      {
        type: "input",
        name: "contributing",
        message: questions[5]
      },
      {
        type: "input",
        name: "test",
        message: questions[6]
      },
      {
        type: "input",
        name: "questions",
        message: questions[7]
      },
      {
        type: "checkbox",
        name: "license",
        message: questions[8],
        choices: licenseChoices
      },
      {
        type: "input",
        name: "github",
        message: questions[9]
      },
      {
        type: "input",
        name: "email",
        message: questions[10]
      }
    ])
}
   
async function init(){
    try{
        const data = await getUserInfo();
        const readme = generateMarkdown(data);
        await writeFileAsync("README_Template.md", readme)
        console.log("Successfully created a readme file!")
    } catch(err){
        if (err){
            throw err
        }
    }
}    
init()  