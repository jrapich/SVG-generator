const inquirer = require("inquirer");
const fs = require("fs");

const questions = {
    first: [
        {
            type:"input",
            name:"text",
            message:"Enter text to add to the logo. must be at least 3 characters:"
        }
    ],
    second: [
        {
            type:"input",
            name:"textColor",
            message:"Enter the desired shape color. Color hex codes are also accepted:"
        },
        {
            type:"list",
            name:"shape",
            message:"",
            choices: ["Circle", "Square", "Triangle"]
        },
        {
            type:"input",
            name:"shapeColor",
            message:"Enter the desired shape color. Color hex codes are also accepted:"
        },
        {
            type:"input",
            name:"fileName",
            message:"Enter the desired .svg file name. If left blank, the default name of logo.svg will be used:"
        }
    ]
}

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