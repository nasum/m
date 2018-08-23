export class Command {
  name: string
  help: string
  func: Function

  constructor(name: string, help: string, func: Function) {
    this.name = name
    this.help = help
    this.func = func
  }

  run(): void {
    this.func()
    this.printHelp()
  }

  printHelp(): void {
    console.log(`Usage: ${this.name}`)
    console.log(`Description: ${this.help}`)
  }
}

export default {
  Command
}