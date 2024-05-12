// Function to render license badge
function renderLicenseBadge(license) {
  if (license) {
    // Return the license badge based on the license type
    return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// Function to render license link
function renderLicenseLink(license) {
  if (license) {
    // Return the license link based on the license type
    return `https://opensource.org/licenses/${license}`;
  } else {
    return '';
  }
}

// Function to render license section
function renderLicenseSection(license) {
  if (license) {
    // Return the license section with a link to the license
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return '';
  }
}

// Function to generate the README content based on user inputs
export default function generateMarkdown(answers) {
  // Call renderLicenseBadge and renderLicenseSection with the license from answers
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  // Include the license badge and section in the README template
  return `
${licenseBadge}

# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation <a name="installation"></a>
${answers.installation}

## Usage <a name="usage"></a>
${answers.usage}

## License <a name="license"></a>
${licenseSection}

## Contributing <a name="contributing"></a>
${answers.contributing}

## Tests <a name="tests"></a>
${answers.tests}

## Questions <a name="questions"></a>
For questions about this project, please reach out to [${answers.username}](https://github.com/${answers.username}) at ${answers.email}.
  `;
}
