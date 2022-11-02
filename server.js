//Import and require express, inquirer and mysql2.
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//DO I NEED TO HAVE THE PORT ABOVE OR LISTED IN THE CONNECTION FUNCTION BELOW???
// Connect to database.
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
);

//Connection error. IS THIS CORRECT? DO I NEED TO DO ANYTHING ELSE WITH THE INQUIRER PROMPT? 
connection.connect(function(err) {
    if (err) throw err;
    cli_prompt();
});

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

    if (err) throw err
};

//Function to view roles.
function viewAllRoles() {

    if (err) throw err
};

//Function to view all employees.
function viewAllEmployees() {

    if (err) throw err
};

//Function to view all employees by department.
function viewAllEmployeesByDepartment() {

    if (err) throw err
};

//Function to add a department.
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What department name would you like to add?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id number for the new department?'
        }
    ]).then(function(responses) {


        function(err) {
            if (err) throw err
        }
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


        function(err) {
            if (err) throw err
        }
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

        {
            firstName: responses.firstName,
            lastName: responses.lastName,
            roleID: 
            managerID:
        }
        function(err) {
            if (err) throw err
        }
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

        {
            lastName: responses.lastName,
            roleID:
        }
        function(err) {
            if (err) throw err
        }
    })
};


