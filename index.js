const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')
const { generateCards, writeFile } = require('./src/generateEmployee');
//import writeFIle
const questions = {
    employee: [ {
        type: 'list',
        name: 'status',
        message: 'Which type of Employee would you like to add?',
        choices: [
            'Manager', 'Engineer', 'Intern', 'none'
        ]
    }],
    Manager: [{
        type:'input', 
        name: 'name', 
        message: 'What is your name?'
    },{
        type: 'input', 
        name: 'id',
        message: 'What is your id number?'
    },{
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?'
    },{
        type: 'input', 
        name: 'officeNumber', 
        message: 'What is your office number?'
    }],
    Engineer: [{
        type:'input', 
        name: 'name', 
        message: 'What is your name?'
    },{
        type: 'input', 
        name: 'id',
        message: 'What is your id number?'
    },{
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?'
    },{
        type: 'input', 
        name: 'github', 
        message: 'What is your GitHub username?'
    }],
    Intern: [{
        type:'input', 
        name: 'name', 
        message: 'What is your name?'
    },{
        type: 'input', 
        name: 'id',
        message: 'What is your id number?'
    },{
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?'
    },{
        type: 'input', 
        name: 'school', 
        message: 'What University do you attend?'
    }]
}
const teamList = []

function employee () {
    return questions.employee; 
}
function manager() {
    return inquirer.prompt(questions.Manager).then(function(responses){
        const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
        teamList.push(manager.managerHTML());
        loopedArray();
    })
}
function intern() {
    return inquirer.prompt(questions.Intern).then(function(responses){
        const intern = new Intern(responses.name, responses.id, responses.email, responses.officeNumber);
        teamList.push(intern.internHTML());
        loopedArray();
    })
}
function engineer() {
    return inquirer.prompt(questions.Engineer).then(function(responses){
        const engineer = new Engineer(responses.name, responses.id, responses.email, responses.github);
        teamList.push(engineer.engineerHTML());
        loopedArray();
    })
}

function loopedArray() {
    inquirer.prompt(employee()).then(function(responses){
        switch(responses.status) {
            case 'Manager':
                manager();
                break;
            case 'Engineer':
                engineer();
                break;
            case 'Intern':
                intern();
                break;  
            case 'none':
                let layout = generateCards(teamList);
                writeFile(layout);
                break;
        }
    });
}

inquirer.prompt(employee()).then(function(responses){
    switch(responses.status) {
        case 'Manager':
            manager();
            break;
        case 'Engineer':
            engineer();
            break;
        case 'Intern':
            intern();
            break;  
        case 'none':
            let joined = teamList.join('')
            let layout = generateCards(joined);
            writeFile(layout);
            break;
    }
});


