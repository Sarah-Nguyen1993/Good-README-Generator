const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require('inquirer');
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
  "What is the Title of your README file?",
  "Enter your Description:",
  "Enter information for Table of Contents: ",
  "Enter Installation instruction: ",
  "Enter Usage instruction: ",
  "Enter information for Credits section:",
  "Enter information for Contributing section:",
  "Enter information for Tests:",
  "Enter information for Question section:",
  "Enter License:",
];

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
        name: "table",
        message: questions[2]
      },
      {
        type: "input",
        name: "installation",
        message: questions[3]
      },
      {
        type: "input",
        name: "usage",
        message: questions[4]
      },
      {
        type: "input",
        name: "credits",
        message: questions[5]
      },
      {
        type: "input",
        name: "contributing",
        message: questions[6]
      },
      {
        type: "input",
        name: "test",
        message: questions[7]
      },
      {
        type: "input",
        name: "questions",
        message: questions[8]
      },
      {
        type: "input",
        name: "license",
        message: questions[9]
      },
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