import { Command } from "./lib/command";

const rootCmd: Command = new Command('sample', 'shottHelp', 'longHelp');
const subCmd: Command = new Command('sub', 'short sub', 'long sub')

rootCmd.addCommand(subCmd)

rootCmd.run();