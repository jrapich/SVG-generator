//import required npm packages
const inquirer = require("inquirer");
const fs = require("fs");
//import necessary tools from the /lib/ folder
const generateShape = require("./lib/shapes");
const ShapeObj = require("./lib/shapeobj");

//object containing 2 arrays that we will pass to inquirer for questions to ask the user
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
            message:"Enter the desired text color. Color hex codes are also accepted:"
        },
        {
            type:"list",
            name:"shape",
            message:"Choose a shape to be generated:",
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


//initialize app
function init () {
    let chars;
    let nameOfFile = "logo";
    let properties;
    inquirer.prompt(questions.first).then((answers) => {
        (answers.text.length >= 3) ? chars = answers.text : chars = false;

        //if the user entered text 3 chars or longer, ask the next set of questions. otherwise, return an error
        (chars) ? 
        inquirer.prompt(questions.second).then((answers) => {
            let {textColor, shape, shapeColor, fileName} = answers;
            if (fileName) {
                nameOfFile = fileName;
            }
            if (shape === "Triangle") {
                shape = "polygon";
            }
            //this object contains all the parameters the user just passed, and we will use this for whatever shape necesssary to generate
            properties = new ShapeObj(chars, textColor, shape, shapeColor, nameOfFile);
            
            //generate the logo with the user specified shape
            if (properties.shape === "Circle") {
                let svgData = new generateShape.Circle(properties);
                svgData = svgData.render(svgData.circle);
                fs.writeFile(`./generated/${nameOfFile}.svg`, svgData, () => {
                    console.log(`Generated ${properties.fileName}.svg to /generated/`);
                })
            } else if (properties.shape === "Square") {
                let svgData = new generateShape.Square(properties);
                svgData = svgData.render(svgData.square);
                fs.writeFile(`./generated/${nameOfFile}.svg`, svgData, () => {
                    console.log(`Generated ${properties.fileName}.svg to /generated/`);
                })
            } else {
                let svgData = new generateShape.Triangle(properties);
                svgData = svgData.render(svgData.triangle);
                fs.writeFile(`./generated/${nameOfFile}.svg`, svgData, () => {
                    console.log(`Generated ${properties.fileName}.svg to /generated/`);
                })
            }
        }) 
        : console.log("ERROR: please enter 3 or more characters");
    })
}

init();