INSERT INTO department (id, department_name)
VALUES (1, "Sales"),
       (2, "Human Resources"),
       (3, "Legal"),
       (4, "IT");

INSERT INTO employee_role (id, title, salary, department_id)
VALUES (1, "Sales Manager", 150000, 1),
       (2, "HR Generalist", 95000, 2),
       (3, "Attorney", 200000, 3),
       (4, "Engineer", 120000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, Amy, Derry, 1, 6),
       (2, Jenn, Smith, 2, 5),
       (3, Andy, Caroll, 3, null),
       (4, Jon, Hewlett, 4, 7);