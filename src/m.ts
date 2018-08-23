import { Command } from "./lib/command";

const rootCmd: Command = new Command('sample', 'helphelp', function(){ console.log('run!') });

rootCmd.run();