const fs = require('fs');
const inquirer = require('inquirer');

async function generateReadMe() {
  const readMeFile =
    inquirer
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
      ]);
  const readMeContents = `
  # ${readMeFile.title}

  ## Description 

  ${readMeFile.descripion}

  ## Installation 

  ${readMeFile.installation}

  ## Usage

  ${readMeFile.usage}

  ##Tests

  ${readMeFile.tests}
  `; 

  const callback = function (err) {
    err ? console.error(err) : console.log('Commit logged!')
  }
  fs.writeFile("readme.md", readMeContents, callback)
}

generateReadMe();