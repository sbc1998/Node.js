import readline from "readline";

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//for storing task
const todos= [];

//Display the main menu
function showMenu() {
    console.log('Welcome to Task Manager:');
    console.log('1: Add a task:');
    console.log('2: View tasks:');
    console.log('3: Exit');
    rl.question("Choose the option:", handleInput);
};

//handle input
const handleInput= (option) => {
    if(option == '1') {
        rl.question('Enter the task:', (task) => {
           todos.push(task); 
           console.log('Task added:', task);
           showMenu();
        })
    }
    else if(option == '2') {
        console.log('\nYour tasks:');
        if(todos.length===0) {
            console.log('No task available');
        }
        else {
            todos.forEach((item, index) => {
                console.log(`${index+1}: ${item}`);
            });
        }
    }
    else if(option == '3') {
        console.log('Exiting...');
        console.log('Goodbye!');
        rl.close();
    }
    else {
        console.log('Invalid option');
        showMenu();
    }
};

//call main menu
showMenu();
