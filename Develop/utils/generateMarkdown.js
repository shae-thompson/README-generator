// A function that returns a license badge based on which license is chosen
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  else return ''
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.descrip}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation

  To install the necessary dependencies, run the following command:
  
      ${data.depen}

  ## Usage
  
  ${data.use}

  ## License
  
  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contribute}    

  If you wish to contribute to the project please email me at ${data.email}

  ## Tests
  To run tests run the following command:

      ${data.test}

  ## Questions
  
  If you have any questions please email me at <${data.email}>

  Otherwise, you can see my other work on my Github profile at *[${data.github}](https://github.com/${data.github})*
`
};

module.exports = generateMarkdown;
