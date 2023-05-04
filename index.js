//packages requirered for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown.js');
// Array of questions for user input
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
//first confirms if there is an installation process
{
  type: 'confirm',
  name: 'confirmInstall',
  message: 'Will there be an installation process for your project?'
  },
{
  type: 'input',
  name: 'install',
  message: 'Please write a list of instructions for your installation process.',
  // this question is only prompted when the user confirms that there will be an installation process.
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
  message: 'Would you like to offer up instructions on how to use your new application?'
},
{ 
  type: 'input',
  name: 'usageInstructions',
  message: 'Please list the instructions on how to properly use your application. It is strongly recommended that to add a mock video or picture of your application later on.',
  when: ({ confirmUsage }) => {
    if (confirmUsage) {
      return true;
    } else {
      return false;
    }
  }
},
{ //Provides a list of licenses user can chose from
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
    message: 'If you have any commands that are used to test this application, please provide them here.',
    default: 'N/A'
},
{
  type: 'input',
  name: 'questions',
  message: 'Your Github username and email will be already rendered. write a message to any developers that want to contact you.',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      return false;
    }
  }
}];

// Function to write README file
function writeToFile(data) {
    inquirer.prompt(data)
    .then(response => {
        fs.writeFile('README.md', genMarkdown(response), err =>{
            err?console.log(err):console.log(`README file written`);
        })
    })
}

// function that initialize app
function init() {
    writeToFile(questions)
}

// calls init function
init();
