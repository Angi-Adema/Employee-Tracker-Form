# Employee-Tracker-Form

## Description

This application was developed to allow a user to come into the employee database and review departments, view roles, view all employees, add a department, add a role, add a new employee and update any employee data in one convenient place. When the user logs into the system they are prompted to indicate what they would like to do. They can then select the task they would like to perform and are prompted further in order to provide the system needed information in order to accomplish the task. When finished, the user can exit the system.

[Employee Tracker Form Demo Video](https://drive.google.com/file/d/1rkD14TKL_jJtDpDus0uc_WVDzqpxyUeG/view)

[GitHub Link](https://github.com/Angi-Adema/Employee-Tracker-Form)

![Employee Tracker Form Sample](./assets/EmployeeTrackerSS.png)

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Technologies

Node.js / Express.js
Inquirer Package 
MySQL / MySQL2

## Run Application

1. npm i
2. node index.js (answer question prompts)
3. exit
