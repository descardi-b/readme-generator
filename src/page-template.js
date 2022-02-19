function createPage(answers) {
    console.log(answers);
    const { title, description, installation, usage, contributing, test, licenses, github, link } = answers;

    function getBadge(licenses) {
        return `![GitHub license](https://img.shields.io/badge/${licenses}-blue.svg)`
    }
  
    return `
    # ${title}, ${getBadge(licenses)}

    ## Table of Contents

    * [Description] (#description)
    * [Installation Instructions] (#installation)
    * [Usage Instructions] (#usage)
    * [License] (#license)
    * [Contribution Guidelines] (#contributing)
    * [Testing Instructions] (#testing)

    ## Description
    ${description}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${licenses}

    ## Contributing
    ${contributing}

    ## Testing
    ${test}
    
    ### GitHub
    [${github}] (${link})
    `;
  };

module.exports = createPage;
