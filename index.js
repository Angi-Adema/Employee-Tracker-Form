//Import and require inquirer and mysql2.
const inquirer = require('inquirer');
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
    db.getAllEmployees().then(([allEmployees]) => {
        console.log('------------------------------------------------------')
        console.log('Viewing All Employees');
        console.log('------------------------------------------------------')
        console.table(allEmployees)
    }).then(()=> startPrompt())
};

//Function to view all employees by department.
function viewAllEmployeesByDepartment() {
    db.getEmployeesByDepartment().then(([allEmployeesByDepartment]) => {
        console.log('------------------------------------------------------')
        console.log('Viewing All Employees By Department');
        console.log('------------------------------------------------------')
        console.table(allEmployeesByDepartment)
    }).then(()=> startPrompt())
};

//Function to add a department.
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What department name would you like to add?'
        }
    ]).then(function(response) {
        db.createDepartment(response).then(()=> startPrompt())

    })
};

//Function to add a role.
function addRole() {
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
        }
    ]).then(function(responses) {


    })
    
};

//Function to add an employee.
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter the employee first name: '
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Please enter the employee last name: '
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the new employee's title?",
            choices: []
        },
        {
            type: 'input',
            name: 'manager',
            message: "Who is the employee's manager?"
        }
    ]).then(function(responses) {

       
    })
};

//Function to update employee role.
function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'list',  //HOW TO ACCESS EMPLOYEES IN DATABASE?
            name: 'lastName',
            message: "What is the employee's last name?",
            choices: []
        },
        {
            type: 'input',
            name: 'title',
            message: "What is the employee's new title?"
        }
    ]).then(function(responses) {

        
    })
};


