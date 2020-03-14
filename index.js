const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")


function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your manager's name?",
                name: "userName"
            },
            {
                type: "input",
                message: "What is your manager's ID number?",
                name: "idNumber"
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "email"
            },
            {
                type: "checkbox",
                message: "What type of team member would you like to add?",
                name: "choices",
                choices: ["Engineer", "Intern", "I don't want to add anymore team members."]
            },
        ]);
}
promptUser();

// {
//     type: "input",
//         message: "What is your engineer's name?",
//             name: "userName"
// },
// {
//     type: "input",
//         message: "What is your engineer's ID number?",
//             name: "idNumber"
// },
// {
//     type: "input",
//         message: "What is your engineer's email?",
//             name: "email"
// },
// {
//     type: "input",
//         message: "What is your engineer's Git Hub user name?",
//             name: "ghUserName"
// },
// {
//     type: "checkbox",
//         message: "What type of team member would you like to add?",
//             name: "choices",
//                 choices: ["Engineer", "Intern", "I don't want to add anymore team members."]
// },