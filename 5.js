// Greeting promise

function greet(name) {
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
    });
}

greet("Jawed").then((message) => console.log(message));