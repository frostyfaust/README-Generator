// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "Apache 2.0 License"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "Boost Software License 1.0"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license == "Mozilla Public License 2.0"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }else if (license == "the MIT License"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == "The Unlicense"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else if(license == "N/A"){
    return `N/A`
  }
  else{
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "Apache 2.0 License"){
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == "Boost Software License 1.0"){
    return `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license == "Mozilla Public License 2.0"){
    return `https://opensource.org/licenses/MPL-2.0`
  }else if (license == "the MIT License"){
    return `https://opensource.org/licenses/MIT`
  } else if (license == "The Unlicense"){
    return `http://unlicense.org/`
  }
  else{
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${data.license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
    
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}
    
  ## Usage
  ${data.usageInstructions}
    
  ## License
  [${data.license}](${renderLicenseLink(data.license)})
  
    
  ## Contributing
  ${data.contribution}
  
  ## tests
  ${data.test}

  ## Questions

  Github username: [${data.username}](https://github.com/${data.username})
  email: ${data.email}

  ${data.questions}
  `;
}

module.exports = generateMarkdown;
