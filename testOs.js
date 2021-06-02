const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    
        console.log(`${name}, is a citizen`);
        rl.close();
});

// Exo : en utilisant les méthodes du module OS (https://nodejs.org/dist/latest-v16.x/docs/api/os.html), afficher une phrase qui dit 
// "la machine possède X% de RAM disponible"