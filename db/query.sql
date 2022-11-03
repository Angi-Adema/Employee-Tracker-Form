SELECT *
FROM role
JOIN department ON role.id = department.id;

SELECT *
FROM employee 
JOIN role ON employee.id = role.id;
