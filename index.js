const inquirer = require("inquirer");
const fs = require("fs");

//inquirer.prompt code here

//inquirer must ask the following:
    //text to put inside the logo. text must be at least 3 characters
        //write logic to test if less than 3 characters
    //text color
        //must enter a color keyword or a hex color code
    //shape, either circle, triangle, or square
        //prompted in list form
    //the shape's color
    //specify a name of the SVG file, if left blank, generate default of logo.svg

//once all prompts fulfilled, generate shape into /generated/
    //call the relevant imported class from /lib/shapes.js
    //log to console "Generated logo.svg to /generated/"