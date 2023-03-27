const fs = require('fs'); 
const inquirer = require('inquirer');

const readMeFile = 
    inquirer
        .prompt([
            {
            type: 'input',
            title: 'Title',
            message: 'What is the project title?'
            },
            {
            type: 'input',
            title: 'Description',
            message: 'Please enter a project description'
            },
            {
            type: 'input',
            title: 'Installation',
            message: 'Please enter the project installation instructions.'
            },
            {
            type: 'input',
            title: 'Usage',
            message: 'Please enter instructions for the users of the project.'
            },
            {
            type: 'input',
            title: 'Contributing',
            message: 'Please enter any contributing guidelines for the project.'
            },
            {
            type: 'input',
            title: 'Tests',
            message: 'Please enter any testing instructions for the project.'
            },
        ])
const callback = function(err){
  err ? console.error(err) : console.log('Commit logged!')
}
fs.writeFile("readme.md", readMeFile, callback)