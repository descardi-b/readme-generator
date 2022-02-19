const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions for your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information for your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter your contribution guidelines.',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter your contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter your test instructions.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What is your project licensed under?',
            choices: ['PublicDomain', 'Permissive', 'LGPL', 'Copyleft'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the link to your GitHub profile.',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub profile link!');
                    return false;
                }
            }
        }
    ])
        .then(function (answer) {
            return answer;
        });
}

promptUser()
    .then(answer => {
        const readmePage = generatePage(answer);
        fs.writeFile('./README.md', readmePage, err => {
            if (err) throw new Error(err);
        });
    });