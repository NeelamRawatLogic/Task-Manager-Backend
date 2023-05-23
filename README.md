# Task Management

This project is a task management application built with Node.js and Express.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/NeelamRawatLogic/Task-Manager-Backend.git`
2. Install the dependencies: `npm install`
3. Set up the database configuration in the `config/database.js` file.
4. Run the application: `npm start`

## Features

- Create tasks with a title and description.
- Update existing tasks.
- Delete tasks.
- Get a list of all tasks.

## Routes

The application provides the following routes:

- `GET /tasks`: Get a list of all tasks.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.

## Validators

The application uses validators for task input validation. The validators can be found in the `validators/tasks.js` file.

## Controllers

The application uses controllers to handle the different routes. The controllers can be found in the `controllers/tasks.js` file.

## Authors

- Neelam Rawat - [GitHub Profile](https://github.com/NeelamRawatLogic)

