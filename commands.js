#!/usr/bin/env node

import {Command} from "commander";
import {addCustomer,findCustomer,removeCustomer,updateCustomer,listAllCustomer} from "./index.js";
import inquirer from "inquirer";
import chalk from "chalk";

const program = new Command();

const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer Email Address'
  }
];

program
  .version('1.0.0')
  .description('Client Management System')
  // .alias('v')
  .option('-v, -version', 'output the version number', () => {
    console.log(chalk.bgRed('Version 1.0.0'));
    process.exit(0);
  });


  // Add Command
program
  .command('add')
  .alias('a')
  .description(chalk.bgGreen('Add'))
  .action(()=>{
    inquirer.prompt(questions).then(answers =>addCustomer(answers) );
  });

  // Find Command
program
   .command('find <name>')
   .alias('f')
   .description('Find a customer')
   .action(name=> findCustomer(name));

   // Update Command
program
   .command('update <_id>')
   .alias('u')
   .description('Update a customer')
   .action(_id =>{
    inquirer.prompt(questions).then(answers=>updateCustomer(_id,answers))
   });

 //Remove Command

 program
   .command('remove <_id>')
   .alias('r')
   .description('Remove a customer')
   .action(_id => removeCustomer(_id)
);

  // List Command
  program
   .command('list')
   .alias('l')
   .description('List all customers')
   .action(() =>{
     listAllCustomer();
   })
program.parse(process.argv)