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
        return this.connection.promise().query('select * from role;')
    }

    // presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, department name, salaries, and managers that the employees report to

    createDepartment(department){
        return this.connection.promise().query('insert into department set ?', department)
    }
}

module.exports = new Queries(connection)