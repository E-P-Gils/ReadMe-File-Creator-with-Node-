const fs = require('fs');
const inquirer = require('inquirer');

async function generateReadMe() {
  const readMeFile =
   await inquirer
      .prompt([
        {
          type: 'input',
          title: 'title',
          message: 'What is the project title?'
        },
        {
          type: 'input',
          title: 'description',
          message: 'Please enter a project description'
        },
        {
          type: 'input',
          title: 'installation',
          message: 'Please enter the project installation instructions.'
        },
        {
          type: 'input',
          title: 'usage',
          message: 'Please enter instructions for the users of the project.'
        },
        {
          type: 'input',
          title: 'contributing',
          message: 'Please enter any contributing guidelines for the project.'
        },
        {
          type: 'input',
          title: 'tests',
          message: 'Please enter any testing instructions for the project.'
        },

        {
          type: 'input',
          title: 'email',
          message: 'Please enter your email and any additional instructions to contact you.',
        },

        {
          type: 'input',
          title: 'github',
          message: 'Please enter your github username.',
        },

        {
          type:'input',
          title: 'license',
          message: 'Please enter a valid license for your project. If you are not sure which one you are using or do not have one, just enter MIT.'
        }
  ]);

  const readMeContents = `
  
  https://img.shields.io/badge/License-${readMeFile.license}-blue.svg

  # ${readMeFile.title}

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