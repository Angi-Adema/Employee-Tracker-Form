const connection = require('./connection')

class Queries{
    constructor(connection){
        this.connection = connection
    }

    getDepartments(){
        return this.connection.promise().query('select * from department;')
    }
    
    getRoles(){
        // presented with the job title, role id, the department that role belongs to, and the salary for that role
        return this.connection.promise().query('SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;')
    }

    getAllEmployee(){
        // presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, department name, salaries, and managers that the employees report to
        return this.connection.promise().query('select employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, " " ,manager.last_name) AS Manager from employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON manager.id = employee.manager_id')
    }

    createDepartment(department){
        return this.connection.promise().query('insert into department set ?', department)
    }
    createRole(role){
        return this.connection.promise().query('insert into role set ?', role)
    }
    createEmployee(employee){
        return this.connection.promise().query('insert into employee set ?', employee)
    }
    updateEmployeeRole(roleId, employeeId){
        return this.connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId])
    }
}

module.exports = new Queries(connection);