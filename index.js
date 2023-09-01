const inquirer = require("inquirer");
const fs = require("fs");
const generateShape = require("./lib/shapes");

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

function ShapeObj (chars, textColor, shape, shapeColor, fileName) {
    this.text=chars;
    this.textColor=textColor;
    this.shape=shape;
    this.shapeColor=shapeColor;
    this.fileName=fileName;
}

//once all prompts fulfilled, generate shape into /generated/
    //call the relevant imported class from /lib/shapes.js
    //log to console "Generated logo.svg to /generated/"

//initialize app
function init () {
    let chars;
    let nameOfFile = "logo";
    let properties;
    inquirer.prompt(questions.first).then((answers) => {
        (answers.text.length >= 3) ? chars = answers.text : chars = false;
        (chars) ? 
        inquirer.prompt(questions.second).then((answers) => {
            const {textColor, shape, shapeColor, fileName} = answers;
            if (fileName) {
                nameOfFile = fileName;
            }
            if (shape === "Triangle") {
                shape = "polygon";
            }
            properties = new ShapeObj(chars, textColor, shape, shapeColor, nameOfFile);
            
            if (properties.shape === "Circle") {
                const svgData = new generateShape.Circle(properties);
                svgData = svgData.render(svgData.circle);
                fs.writeFile(`${nameOfFile}.svg`, svgData, () => {
                    console.log(`Generated ${properties.fileName}.svg to /generated/`);
                })
            } else if (properties.shape === "Square") {
                const svgData = new generateShape.Square(properties);
                svgData = svgData.render(svgData.square);
                fs.writeFile(`${nameOfFile}.svg`, svgData, () => {
                    console.log(`Generated ${properties.fileName}.svg to /generated/`);
                })
            } else {
                const svgData = new generateShape.Triangle(properties);
                svgData = svgData.render(svgData.triangle);
                fs.writeFile(`${nameOfFile}.svg`, svgData, () => {
                    console.log(`Generated ${properties.fileName}.svg to /generated/`);
                })
            }
        }) 
        : console.log("ERROR: please enter 3 or more characters");
    })
}

init();