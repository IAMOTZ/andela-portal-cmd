#!/usr/bin/env node

var os = require('os');
var program = require('commander');
const { exec } = require('child_process');
const readline = require('readline');
var commandExistsSync = require('command-exists').sync;
const portals = require('./resource.json');
const pkg = require('./package.json');

const systemCommand = {
  Darwin: 'open',
  Linux: 'firefox',
  Windows_NT: 'start'
}

const systemType = os.type();

if (
  (systemType === 'Linux' && !commandExistsSync('firefox')) ||
  (systemType === 'Windows_NT' && !commandExistsSync('start')) ||
  (systemType === 'Darwin' && !commandExistsSync('open'))
) {
  console.log(`Sorry, "apl" can't work in this shell environment.`);
  process.exit();
}

const portalNames = Object.keys(portals).sort();

const listPortals = () => {
  portalNames.forEach((name) => {
    console.log(`=> ${name}: ${portals[name]}`);
  });
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

program
  .version(`${pkg.version}`, '-v, --version')
  .arguments('<portalName>')
  .action((portalName) => {
    portalName = portalName.toLocaleLowerCase();
    if (!portalNames.includes(`${portalName.toLocaleLowerCase()}`)) {
      console.log(`"${portalName}" is not a recognised portal.`);
      return process.exit();
    }
  
    console.log(`Opening ${portals[portalName]}`)
    exec(`${systemCommand[systemType]} ${portals[portalName]}`, (error) => {
      if (error) return console.error(`exec error: ${error}`);

      console.log('Done!!');
      process.exit();
    });
  });

program
  .option('-l, --list', 'list all portals', () => {
    const portalLength = portalNames.length;
    if (portalLength <= 20) return listPortals();

    rl.question(`Are you sure you want to view all ${portalNames.length} portals?(y/n) `, (answer) => {
      if (answer.toLowerCase() === 'y' || answer.toLocaleLowerCase === 'yes') {
        rl.close();
        listPortals();
      } else {
        rl.close();
      }
    });
  });

const optionsLength = process.argv.length;

if (optionsLength === 2) {
  program.help();
}

program.parse(process.argv);
