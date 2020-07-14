const readline = require('readline-sync');

function greeting(name){
    console.log('hello '+ name);
}

function processUserInput(callback) {
    var name = readline.question("What is your name?");
    callback(name)
}

processUserInput(greeting)
// https://stackoverflow.com/questions/40980475/using-node-jss-prompt-for-user-input
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function