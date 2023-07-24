const inquire = require('inquirer');

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
            
    ]