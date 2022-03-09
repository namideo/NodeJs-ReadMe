

function generateLicense(license) {

    let licenseResponse  = {}
    switch(license) {
        
        case "Apache License 2.0":
            licenseResponse.image = "![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
            licenseResponse.url = "https://opensource.org/licenses/Apache-2.0"
            break;
        case "GNU GPLv2":
            licenseResponse.image = "![GNU GPLv2](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
            licenseResponse.url = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
            break;
        case "GNU GPLv3":
            licenseResponse.image = "![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
            licenseResponse.url = "https://www.gnu.org/licenses/gpl-3.0"
            break;
        case "MIT License":
            licenseResponse.image = "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)"
            licenseResponse.url = "https://opensource.org/licenses/MIT"
            break;
        case "ISC License":
            licenseResponse.image = "![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)"
            licenseResponse.url = "https://opensource.org/licenses/ISC"
            break;
    }

    return licenseResponse
}

function generateMarkdown(response) {

    licenseInfo = generateLicense(response.license)

  return `# ${response.Title}

  ## Table of Contents
  
  * [Description](#description)

  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#github)
  
  * [License](#license)
  
      
  ## Description 
  ${response.description}
      
  ## Installation 
  ${response.installation}
  
  ## Usage 
  ${response.usage}
  
  ## Contributing 
  ${response.contributing}
  
  ## Test 
  ${response.tests}

  ---
    
  ## Questions 

  For any additional questions feel free to reach out through either my GitHub or email. 

  GitHub: ${response.github}
  

  Email: ${response.email}

  ---

  ## License 
  ${licenseInfo.image} 
  ${licenseInfo.url}
        
`;
}

module.exports = generateMarkdown;





