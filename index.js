const inquire = require('inquirer');
const fs = require('fs');

function intoString(answers) {
    return `

    # ${answers.title}

    ## Description
    
    ${answers.description}
    
    ## Installation
    
    ${answers.installation}
    
    ## Usage
    
    ${answers.usage}
    
    ## Contributing
    
    ${answers.contributing}
    
    ## Tests
    
    ${answers.tests}
    
    ## License
    
    ${answers.license}
    
    ${makingBadge(answers.license)}
    
    ## Questions
    
    If you have any questions, feel free to reach out to me at ${answers.email} or visit my [GitHub profile] ${answers.github}
}`
}

function makingBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
}


inquire
    .prompt([
            {
            type: 'input',
            name: 'title',
            message: 'what is your project title',
             },
            {
              type: 'input',
              name: 'description',
              message: 'What is the description of your project?',
            },
            {
              type: 'input',
              name: 'installation',
              message: 'What are the installation instructions for your project?',
            },
            {
              type: 'input',
              name: 'usage',
              message: 'How do you use your project?',
            },
            {
              type: 'input',
              name: 'contributing',
              message: 'What are the contribution guidelines for your project?',
            },
            {
              type: 'input',
              name: 'tests',
              message: 'What are the test instructions for your project?',
            },
            {
              type: 'list',
              name: 'license',
              message: 'What are the test instructions for your project?',
              choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                name: 'Github',
                message: 'What is your Github username?',
              }, 
              {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
              },
])
    .then((answers) => {
       const result = intoString(answers);

       fs.writeFile('README.md', result, (err, data) => {
        if (err) throw err;
        // fs.unlink('README.md');
    });
});