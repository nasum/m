export default abstract class Command {
  name: string
  help: string

  constructor({name, help}) {
    this.name = name
    this.help = help
  }

  run(): void {
    this.printHelp()
  }

  printHelp(): void {
    console.log(`Usage: ${this.name}`)
    console.log(`Description: ${this.help}`)
  }
}