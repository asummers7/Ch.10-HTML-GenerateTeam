const { default: ListPrompt } = require("inquirer/lib/prompts/list");
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
    manager: [],
    engineer: [],
    intern: []
}

const teamList = []
function newEmployee () {
    inquirer.prompt(questions.employee).then(function(responses){
        if (responses.employeeType === 'none') {
            return //callwriteFile(teamList) 
        }
        //inquire.prompt([])
        //teamlist.push(new Manager())
    })
}