// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
${data.description}
## Table of Contents 
${data.table}
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
${data.questions}
## License
${data.license}          
`;
}

module.exports = generateMarkdown;
