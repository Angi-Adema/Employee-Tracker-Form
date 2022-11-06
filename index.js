//Import and require inquirer and mysql2.
const inquirer = require('inquirer');
const { connection } = require('./db');
require('console.table')
const db = require('./db')

startPrompt()

//Initial system question function and switch statement for selection.
function startPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'View All Employees by Department',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ]
        }
    ]).then(function(responses) {
        switch (responses.action) {
            case 'View All Departments':
                viewAllDepartments();
            break;
            case 'View All Roles':
                viewAllRoles();
            break;
            case 'View All Employees':
                viewAllEmployees();
            break;
            case 'View All Employees by Department':
                viewAllEmployeesByDepartment();
            break;
            case 'Add Department':
                addDepartment();
            break;
            case 'Add Role':
                addRole();
            break;
            case 'Add Employee':
                addEmployee();
            break;
            case 'Update Employee Role':
                updateEmployeeRole();
            break;
            case 'Exit':
                console.log('Good Bye!');
                connection.end();
            break;
        }
    })
};

//Funtion to view departments.
function viewAllDepartments() {
    db.getDepartments().then(([depts]) => {
        console.log('------------------------------------------------------')
        console.log('Viewing Departments');
        console.log('------------------------------------------------------')
        console.table(depts)
    }).then(()=> startPrompt())
};

//Function to view roles.
function viewAllRoles() {
    db.getRoles().then(([roles]) => {
        console.log('------------------------------------------------------')
        console.log('Viewing Roles');
        console.log('------------------------------------------------------')
        console.table(roles)
    }).then(()=> startPrompt())
};

//Function to view all employees.
function viewAllEmployees() {
    db.getAllEmployee().then(([allEmployees]) => {
        console.log('------------------------------------------------------')
        console.log('Viewing All Employees');
        console.log('------------------------------------------------------')
        console.table(allEmployees)
    }).then(()=> startPrompt())
};

// //Function to view all employees by department.
// function viewAllEmployeesByDepartment() {
//     db.query("SELECT employees.firstName AS first_name, employees.lastName AS last_name, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id ORDER BY department_id;");
//     db.getEmployeesByDepartment().then(([allEmployeesByDepartment]) => {
//         console.log('------------------------------------------------------')
//         console.log('Viewing All Employees By Department');
//         console.log('------------------------------------------------------')
//         console.table(allEmployeesByDepartment)
//     }).then(()=> startPrompt())
// };

//Function to add a department.
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What department name would you like to add?'
        }
    ]).then(function(response) {
        db.createDepartment(response).then(() => startPrompt())
    })
};

//Function to add a role.
function addRole() {
db.getDepartments().then(([depts]) => {
    const departmentChoices = depts.map((({id, name}) => ({
        name: name,
        value: id
    })));


    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What department does this role belong?',
            choices: departmentChoices
    
        }
    ]).then(function(responses) {
        db.createRole(responses).then(() => startPrompt())
    })
})  
};

//Function to add an employee.
function addEmployee() {
db.getRoles().then(([roles]) => {
    const selectRole = roles.map((({id, name}) => ({
        Name: name,
        value: id
    })));
    


    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter the employee first name: '
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please enter the employee last name: '
        },
        {
            type: 'list',
            name: 'role_id',
            message: "What is the new employee's title?",
            choices: selectRole()
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "Who is the employee's manager?",
            choices: selectManager()
        }
    ]).then(function(responses) {
        db.createEmployee(responses).then(() => startPrompt())
    })
})
}


// //Function to update employee role.
// function updateEmployeeRole() {
//     db.query("SELECT employee.last_name, role.title FROM employee JOIN role ON employee.roleID = role.id;",
//     (res) => {
    
//     inquirer.prompt([
//         {
//             type: 'list',  //HOW TO ACCESS EMPLOYEES IN DATABASE?
//             name: 'lastName',
//             choices: function () {
//                 let lastName = [];
//                 for (let i = 0; i < res.length; i++) {
//                     lastName.push(res[i].lastName);
//                 }
//                 return lastName;
//             },
//             message: "What is the employee's last name?",

//         },
//         {
//             type: 'input',
//             name: 'title',
//             message: "What is the employee's new title?",
//             choices: selectTitle
//         },
//     ]).then(function(responses) {
//         let roleId = selectRole().indexOf(responses.role) + 1
//         db.query("UPDATE employee SET role_id=? WHERE id =?",
//         {
//             lastName: responses.lastName,
//             roleID: roleId
//         },
//         )
        
//     })
// }


