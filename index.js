const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

console.log("Eagle ")
function askQuestions() {
  console.log("Welcome to the README generator. This is a tool designed to quickly generate a README file for your new project, please answer the following questions, and I'll do the rest for you.")
  console.log("-------------")
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "First of all, what's your name?"
    },
    {
      type: "input",
      name: "github",
      message: "And what's your github username (type exactly please)?"
    },
    {
      type: "input",
      name: "title",
      message: "So what's the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Go ahead and type out a short description"
    },
    {
      type: "input",
      name: "installation",
      message: "What input command will people input in order to install the project?"
    },
    {
      type: "input",
      name: "usage",
      message: "How will this project be used?"
    },
    {
      type: "input",
      name: "license",
      message: "What license will your project be released under?"
    },
    {
      type: "input",
      name: "testing",
      message: "In order to test your project, what command should people input?"
    },
    
  ]);
}

  function generateREADME(answers){
      return `# ${answers.title}
${answers.description}

# Table of Contents
* [Installation ](#installation)
* [Usage ](#usage)
* [License ](#license)
* [Testing ](#testing)
* [Questions ](#questions)

## Installation
In order to install necessary content, run the following command in the command line 
>${answers.installation}

## Usage
${answers.usage}

## License
This project will be using the ${answers.license} license.

## Testing
In order to run tests, the following command
>${answers.testing}
must be ran in the command line

## Questions
<img src ="https://github.com/${answers.github}.png" height=100px width=100px />
If you have any questions, reach out to ${answers.name} directly at, https://github.com/${answers.github}
      `;
  }



  async function init() {
    console.log("mode.")
      try{

      const answers = await askQuestions();
          console.log("ok generating your README now! BZZZZZZTTTTT...... GENERATING.... BZZT IN .... PROGRESS... BZZZT...")
      const htmldoc = generateREADME(answers);
  
      await writeFileAsync("README.md", htmldoc);
  
      console.log("README file created for ya! yer welcome :D");
      }catch(err) {
        console.log(err);
      }
    } 
  
  
  init();
  
