
  # SVG-Generator
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="126" height="20" role="img" aria-label="License: MIT License"><title>License: MIT License</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="126" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="75" height="20" fill="#007ec6"/><rect width="126" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="875" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="650">MIT License</text><text x="875" y="140" transform="scale(.1)" fill="#fff" textLength="650">MIT License</text></g></svg>
  
  ## Description
  This project utilizes javascript and node.js to deliver an app that can generate a simple .svg file. It command line accepts user input to generate text on the image, as well as simple shapes and colors. 

  Several examples of generated logos can be found in `/examples/`

  <!-- ## Table of Contents
- [SVG-Generator](#svg-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Questions?](#questions)
  - [License](#license) -->

  ## Installation
  Required to run: 
  `Node.js`
  
  NPM packages:
  `inquirer v8.2.4`
  `fs`
  Dev-dependency packages:
  `jest`

  The necessary packages are listed in package.json. with Node installed, simply run 
  `npm install`

  ## Usage
  To use the svg generator, clone the repository, navigate to the cloned directory and run
  `node index.js`

  You will then be presented with a series of questions. Type in an answer to the prompts to select from the shapes to be generated, the text generated on the shape, and the relative colors.

  The svg file will then be generated in `/generated/` with the filename you specified in the relevant prompt. If you leave it blank, the default name of `logo.svg` will be generated.
  

  Link to project repository: [https://github.com/jrapich/SVG-generator](https://github.com/jrapich/SVG-generator)

  ## Tests
  a simple test is written for jest in `/lib/shapes.test.js`
  first install jest with
  `npm install --only=dev `

  simple test can be run by running 
  `npm test` 
  jest will test the shape classes against themselves.

  ## Credits
  no other contributors

  ## Contributing
  How to contribute:
  Please reach out to me at jeremysr@protonmail.com or make a pull request at [https://github.com/jrapich/SVG-generator](https://github.com/jrapich/SVG-generator)

  ## Questions?
  Any further questions, comments, or bug reports, can be sent to me at jeremysr@protonmail.com
  https://www.github.com/jrapich

  ## License
  This project protected under MIT License.
  All rights reserved. See /LICENSE for more information.

  