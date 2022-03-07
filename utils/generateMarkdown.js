

function generateLicense(license) {

    let licenseResponse  = {}
    switch(license) {
        
        case "Apache License 2.0":
            licenseResponse.image = "![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
            licenseResponse.url = "https://opensource.org/licenses/Apache-2.0"
        case "GNU GPLv2":
            licenseResponse.image = "![GNU GPLv2](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
            licenseResponse.url = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
        case "GNU GPLv3":
            licenseResponse.image = "![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
            licenseResponse.url = "https://www.gnu.org/licenses/gpl-3.0"
        case "MIT License":
            licenseResponse.image = "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)"
            licenseResponse.url = "https://opensource.org/licenses/MIT"
        case "ISC License":
            licenseResponse.image = "![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)"
            licenseResponse.url = "https://opensource.org/licenses/ISC"
    }

    return licenseResponse
}

function generateMarkdown(response) {

    licenseInfo = generateLicense(response.license)

  return `# ${response.Title}

  # Table of Contents
  -[description](#Description)
  -[installation](#Installation)
  -[usage](#Usage)
  -[contributing](#Contributing)
  -[test](#Test)
  -[questions](#Questions)
  -[license](#License)
  
  
      
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
  
  ## Questions 
  ${response.questions}

  ## License 
  ${licenseInfo.image} ${licenseInfo.url}

        
`;
}

module.exports = generateMarkdown;





