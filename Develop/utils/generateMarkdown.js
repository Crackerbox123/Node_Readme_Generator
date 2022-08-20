// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseSection = data.license[0];
  let yourLicense = ''
  if(licenseSection === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`
  } else if (licenseSection === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseSection === 'IBM') {
    yourLicense = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  } else if(licenseSection === 'Apache') {
    yourLicense = '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)'
  } else {
    yourLicense = '';
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink = data.license[0];
  let yourLink = '';
  if(licenseLink === 'MIT') {
    yourLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
  } else if (licenseLink === 'GPLv3') {
    yourLink = `<a href = "http://perso.crans.org/besson/LICENSE.html">License Link</a>`
  } else if (licenseLink === 'IBM') {
    yourLink = `<a href = "https://opensource.org/licenses/IPL-1.0">License Link</a>`
  } else if(licenseLink === 'Apache') {
    yourLink = `<a href = "https://opensource.org/licenses/Apache-2.0">License Link</a>`
  } else {
    yourLink = '';
  }
  return yourLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseSection = data.license[0];
  let yourSection = ''
  if(licenseSection === 'MIT') {
    yourSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`

  } else if(licenseSection === 'GPLv3') {
    yourSection = `<a href = "https://github.com/TheFox/GPLv3.mdl">GPLv3 Guide</a>`

  } else if(licenseSection === 'IBM') {
    yourSection = `<a href = "https://www.ibm.com/docs/en/spectrum-archive-ee/1.3.0.0?topic=reference-licensing-readme" </a>`

  }else if(licenseSection === 'Apache') {
    yourSection = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`

  } else {
    yourSection = 'N/A'
  }
  return yourSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  ## Title
  ${data.title}

  ## Badge: ${renderLicenseBadge(data)}
 
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Licenses:
1. Your Badge: ${renderLicenseBadge(data)}
2. Your Badge link: ${renderLicenseLink(data)}
3. Your Badge Readme: ${renderLicenseSection(data)}

  ## Credits:
  ${data.credits}
  

`;
}

module.exports = generateMarkdown;
