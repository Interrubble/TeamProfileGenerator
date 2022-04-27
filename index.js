// Create all const needed, Employee being imported through Manager, Engineer, and Intern
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = require('./util/generateHtml')
const fs = require('fs');
const { start } = require('repl');
// Create array to hold team members
const userTeam = [];
// Create function to initiate team building
function begin() {
    console.log('Welcome. Please tell us a bit about your team.');
    newManager();
}

begin();
// Create function to build desired team
function teamAdd(){
    inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do with your team?",
            choices: ['Add an engineer', 'Add an intern', 'Complete the team!'],
            name: "team"
        }
    ]).then(answers => {
        switch (answers.team) {
            case 'Add an engineer':
                newEngineer();
                break;
            case 'Add an intern':
                newIntern();
                break;
            default:
                writeHtml();
                break;
        }
    })
}

// Create function to create Manager role
function newManager(){
    console.log('Please provide information about the manager of the team.')
    inquirer.prompt([
        {
            type:"input",
            message:"What is the team manager's name?",
            name:"managerName"
        },{
            type:"input",
            message:"What is the manager's employee number?",
            name:"managerId"
        },{
            type:"input",
            message:"What's the manager's email address?",
            name:"managerEmail"
        },{
            type:"input",
            message:"What is the manager's office number?",
            name:"managerOffice"
        }
    ]).then(answers=>{
        managerName=answers.managerName;
        const manager = new Manager(managerName,answers.managerId,answers.managerEmail,answers.managerOffice);
        userTeam.push(manager);
        teamAdd();
    })
}

// Create function to add engineer team member
function newEngineer(){
    console.log('Please provide information of desired engineer team member.');
    inquirer.prompt([
        {
            type:"input",
            message:"What is the engineer's name?",
            name:"engineerName"
        },{
            type:"input",
            message:"What is the engineer's employee number?",
            name:"engineerId"
        },{
            type:"input",
            message:"What is the engineer's email address?",
            name:"engineerEmail"
        },{
            type:"input",
            message:"What is the engineer's github username?",
            name:"engineerGit"
        }
    ]).then(answers=>{
        engineerName=answers.engineerName;
        const engineer = new Engineer(engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGit);
        userTeam.push(engineer);
        teamAdd();
    })
}

function newIntern(){
    console.log("Please provide information on desired intern team member.");
    inquirer.prompt([
        {
            type:"input",
            message:"What is the name of the intern?",
            name:"internName"
        },{
            type:"input",
            message:"What is the intern's employee number?",
            name:"internId"
        },{
            type:"input",
            message:"What is the intern's email address?",
            name:"internEmail"
        },{
            type:"input",
            message:"What school does/did the intern attend?",
            name:"internSchool"
        }
    ]).then(answers=>{
        internName=answers.internName;
        internSchool=answers.internSchool;
        const intern = new Intern(internName,answers.internId,answers.internEmail,internSchool);
        userTeam.push(intern);
        teamAdd();
    })
}

// Create function to write HTML file with team information to display
function writeHtml(){
    team(userTeam);
    fs.writeFile('index.html',team(userTeam),(err)=>
        err? console.log(err) : console.log('Team form generated'))
}