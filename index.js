const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = () => {
    return inquire.prompt([

        {
            type: 'input',
            name: 'Title',
            message: 'Enter a title for your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What were the steps to completing and uploading your project?'
        },
        {   type: 'input',
            name: 'usage',
            message: 'Please provide a simulation of your project in use.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others make contributions to this project?' 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How did you check to see if the application was working? What tests did you run?'
        },
        {   
            type: 'list',
            name: 'license',
            message: 'Choose a license from the list',
            choices: ['Apache License 2.0', 'GNU GPLv2', 'GNU GPLv3', 'MIT License', 'ISC License']
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username?',     
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address?', 
        },
    ]);

}
    
function init() {
    questions()
    .then((response) => { fs.writeFileSync("README.md", generateMarkdown(response))})
    .catch((err) => console.error(err));
};

init();
