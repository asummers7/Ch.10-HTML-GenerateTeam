const inquirer = require('inquirer');
//import writeFIle
const questions = {
    employee: [ {
        type: 'list',
        name: 'employeeType',
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
function newEmployee () {
    inquirer.prompt(questions.employee).then(function(responses){
        let {employeeType} = responses
        if (employeeType === 'none') {
            return //callwriteFile(teamList) 
        }
        inquirer.prompt(questions[employeeType])
        .then(function(responses) {
            const employee = new `${employeeType}`(responses); 
            console.log('employee :>> ', employee);
        })
        //teamlist.push(new Manager())
    })
}

newEmployee()