import Command from './lib/command'

export default class RootCommand extends Command {
  constructor(name, help){
    super({name, help})
  }
}