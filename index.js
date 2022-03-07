// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
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
            message: 'Were there other members in the project? How did they contribute?' 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How did you check to see if the application was working? What tests did you run?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Where there any questions about the project after completion?'
        },
        {   
            type: 'list',
            name: 'license',
            message: 'Choose a license from the list',
            choices: ['Apache License 2.0', 'GNU GPLv2', 'GNU GPLv3', 'MIT License', 'ISC License']
        },

    ]);

}
    



  

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Success!')
//     )

//     .then((data) => {
//         const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
//     });
// }
// TODO: Create a function to initialize app
function init() {
    questions()
    .then((response) => { fs.writeFileSync("README.md", generateMarkdown(response))})
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
