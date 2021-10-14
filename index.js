const inquirer = require("inquirer");
const fs = require("fs");

// ask questions

inquirer
  .prompt([
    {
      type: "prompt",
      name: "projectTitle",
      message: "What is your project's title:",
    },
    {
      type: "prompt",
      name: "projectDescription",
      message: "What is your project's description:",
    },
    {
      type: "prompt",
      name: "installInstructions",
      message: "What are the installation steps:",
    },
    {
      type: "prompt",
      name: "usage",
      message: "What is the URL for the deployed app:",
    },
    {
      type: "list",
      name: "license",
      message: "What license do you want to use for your project:",
      choices: [
        "MIT",
        "Mozilla Public License 2.0",
        "IBM Public License Version 1.0",
        "The Unlicense",
      ],
    },
    {
      type: "prompt",
      name: "contribute",
      message: "What is the github URL for your project:",
    },
    {
      type: "prompt",
      name: "tests",
      message: "What are the test instructions:",
      default: "There are no tests",
    },
    {
      type: "prompt",
      name: "githubUser",
      message: "What is your github username:",
    },
    {
      type: "prompt",
      name: "email",
      message: "What is your email address:",
    },
  ])

// deconstruct 

  .then(
    ({
      projectTitle,
      projectDescription,
      installInstructions,
      usage,
      license,
      contribute,
      tests,
      githubUser,
      email,
    }) => {
      
      let licenseImage;

// create link to license graphic based on what was selected

      switch (license) {
        case "MIT":
          licenseImage =
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
        case "Mozilla Public License 2.0":
          licenseImage =
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          break;
        case "IBM Public License Version 1.0":
          licenseImage =
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
          break;
        case "The Unlicense":
          licenseImage =
            "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
          break;
        default:
          licenseImage = "";
          break;
      }

// build markup

      const markUp = `

# ${projectTitle}

${licenseImage}

## Description

>
> ${projectDescription}
>

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation

>
> ${installInstructions}
>

### Usage

>
> [${usage}](${usage})
>

### License

>
> ${license}
>

### Contributing

>
> [${contribute}](${contribute})
>

### Test Instructions

>
> ${tests}
>

### Questions

>
>Github: [${githubUser}](https://www.github.com/${githubUser})
>
>Email: [${email}](mailto:${email})
>

`;

// write file

      fs.writeFile("RemoveMe-README.md", markUp, (err) =>
        err ? console.log(err) : console.log("Your custom README is saved as RemoveMe-README.md. Please remove RemoveMe- before deploying.")
      );
    }
  );
