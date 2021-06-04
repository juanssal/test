const cliColor = require("cli-color");

const nombre = Math.round(Math.random() * 100);

const coloredRandom = () => {
  if (nombre < 50) {
    console.log(cliColor.green(nombre));
  } else {
    console.log(cliColor.red(nombre));
  }
};

coloredRandom();
