export class Command {
  name: string
  shortHelp: string
  longHelp: string
  func: Function
  commands: Command[]

  constructor(name: string, shortHelp: string, longHelp: string, func?: Function) {
    if (func == undefined) func = this.defaultFunc
    this.name = name
    this.shortHelp = shortHelp
    this.longHelp = longHelp
    this.func = func
    this.commands = []
  }

  run(): void {
    this.func()
  }

  printHelp(): void {
    console.log(`Usage: ${this.name}`)
    console.log(`Description: ${this.shortHelp}`)
  }

  printShortHelp(): void {
    console.log(`${this.name} : ${this.shortHelp}`)
  }

  defaultFunc(): void {
    console.log('Available Commands: ')
    this.commands.forEach(func => {
      func.printShortHelp()
    });
  }

  addCommand(...commands: Command[]): void {
    this.commands = commands
  }
}

export default {
  Command
}