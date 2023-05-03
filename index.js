// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'username',
    message: 'What is you Github username?',
    //validate to ensure value is given
    validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your Github username.');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a valid email.');
        return false;
      }
    }
  },
{
    type: 'input',
    name: 'title',
    message: 'What will the title for your new Github repository?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please give your new Github repo a title.');
        return false;
      }
    }
    },
{
  type: 'input',
  name: 'description',
  message: 'please write a short description for your new Github repository?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please give a description for your new Github repo.');
      return false;
    }
  }
  },
//confirm whether or not there is a installation process first
{
  type: 'confirm',
  name: 'confirmInstall',
  message: 'Is there an installation process for this project?'
  },
{
  type: 'input',
  name: 'install',
  message: 'Please write a list of instructions for your installation process.',
  // only prompts this question if the user confirms that there is an install process.
  when: ({confirmInstall}) => {
    if (confirmInstall) {
      return true;
    } else {
      return false;
    }
  }
},
{ 
  type: 'confirm',
  name: 'confirmUsage',
  message: 'Would you like to offer up instructions for using your new application?'
},
{ 
  type: 'input',
  name: 'usageInstructions',
  message: 'Please list instructions for using your application. It is recommended to add descriptive images later as well.',
  when: ({ confirmUsage }) => {
    if (confirmUsage) {
      return true;
    } else {
      return false;
    }
  }
},
{ //checkbox that allows license choice
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your repo.',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0',
      'Mozilla Public License 2.0', 'the MIT License',
       'The Unlicense','N/A'],
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please select a license for your repo.');
        return false;
      }
    }
  },

{
  type: 'confirm',
  name: 'confirmContribute',
  message: 'Will other developers be able contribute to your repository?'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Please explain how other developers can contributions to your project.',
  when: ({ confirmContribute }) => {
    if (confirmContribute) {
      return true;
    } else {
      return false;
    }
  }
},
{
    type: 'input',
    name: 'test', 
    message: 'What command is used to run tests?',
    default: 'npm test'
},
{
  type: 'input',
  name: 'questions',
  message: 'Your github username and email will be already rendered. write a message to any developers that want to contact you.',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      return false;
    }
  }
}];

// TODO: Create a function to write README file
function writeToFile(data) {
    inquirer.prompt(data)
    .then(response => {
        fs.writeFile('README.md', genMarkdown(response), err =>{
            err?console.log(err):console.log(`README file written`);
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(questions)
}

// Function call to initialize app
init();
