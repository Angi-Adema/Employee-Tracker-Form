INSERT INTO department (name)
VALUES ('Sales'),
       ('Human Resources'),
       ('Legal'),
       ('IT');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 150000, 1),
       ('HR Generalist', 95000, 2),
       ('Attorney', 200000, 3),
       ('Engineer', 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Amy', 'Derry', 1, NULL),
       ('Jenn', 'Smith', 2, 1),
       ('Andy', 'Caroll', 3, NULL),
       ('Jon', 'Hewlett', 4, 3);