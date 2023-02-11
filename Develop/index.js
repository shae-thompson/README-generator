// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name:'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name:'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name:'project',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name:'descrip',
            message: 'Write a brief description of your project:',
        },
        {
            type: 'list',
            name:'licence',
            message: 'What kind of licence would you liek your project to have?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name:'depen',
            message: 'What command should be run to intall dependancies?',
            default: 'npm i',
        },
        {
            type: 'input',
            name:'test',
            message: 'What command should be run to run tests?',
            default: 'npm test',
        },
        {
            type: 'input',
            name:'use',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name:'contribute',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
};

const generateReadme = ({github, email, project, descrip, licence, depen, test, use, contribute}) =>
'# ${project} '

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
