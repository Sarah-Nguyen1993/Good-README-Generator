// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${data.license}-green)
## Description 
${data.description}
## Table of Contents 
### [Description](#Description)
### [Installtion](#installtion)
### [Usage](#Usage)
### [Credits](#Credits)
### [Contributing](#Contributing)
### [Test](#Test)
### [Questions](#Questions)
## Installtion
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## Contributing
${data.contributing}
## Test
${data.test}
## Questions
${data.questions}  \n
My GitHub profile: https://github.com/${data.github} \n
If you have any further questions, please contact me here: <${data.email}>
## License
${data.license}          
`;
}

module.exports = generateMarkdown;
