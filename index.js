const fs = require('fs');
const inquirer = require('inquirer');

async function generateReadMe() {
  const readMeFile =
   await inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the project title?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a project description'
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Please enter the project installation instructions.'
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Please enter instructions for the users of the project.'
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Please enter any contributing guidelines for the project.'
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Please enter any testing instructions for the project.'
        },

        {
          type: 'input',
          name: 'email',
          message: 'Please enter your email and any additional instructions to contact you.',
        },

        {
          type: 'input',
          name: 'github',
          message: 'Please enter your github username.',
        },

        {
          type:'input',
          name: 'license',
          message: 'Please enter a valid license for your project. If you are not sure which one you are using or do not have one, just enter MIT.'
        }
  ]);

  const readMeContents = `
  
  https://img.shields.io/badge/License-${readMeFile.license}-blue.svg

  # ${readMeFile.title}

  ## Table of Contents 
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Tests](#tests)
  5. [Questions](#questions)

  ## Description 

  ${readMeFile.description}

  ## Installation 

  ${readMeFile.installation}

  ## Usage

  ${readMeFile.usage}

  ##Tests

  ${readMeFile.tests}

  ##Questions 

  ${readMeFile.email}
  Github Profile Link: https://github.com/${readMeFile.github}
  `; 

  const callback = function (err) {
    err ? console.error(err) : console.log('Commit logged!')
  }
  fs.writeFile("readme.md", readMeContents, callback)
}

generateReadMe();

