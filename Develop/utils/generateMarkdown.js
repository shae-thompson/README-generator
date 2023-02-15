// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ##Licence

  ##Description
  ${data.decrip}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ##Installation
  To install the necessary dependencies, run the following command:
  '${data.depen}'

  ##Usage
  
  ##License
  This project is licensed under the ${data.license}

  ##Contributing
  If you wish to contribute to the project please email me at ${data.email}

  ##Tests
  To run tests run the following command:
  '${data.email}

  ##Questions
  If you ahve any questions please email me at ${data.email}.
  Otherwise you can see my other work on my Github profite at <a href="https://github.com/${data.username}"></a>
`
};

module.exports = generateMarkdown;
