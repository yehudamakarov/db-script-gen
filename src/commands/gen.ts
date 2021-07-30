import {Command, flags} from '@oclif/command'
import {appConfig} from '../app-config'
import * as inquirer from 'inquirer'

export interface MyConfig {
  scriptsLocation: string
}

export default class Gen extends Command {
  static description = 'generate a file that will contain scripts for a target database'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const ac = appConfig(this)

    const responses = await inquirer.prompt([{
      name: 'ticket',
      message: 'What ticket are you working on?',
      type: 'input',
    }, {
      name: 'type of script',
      message: 'What type of script do you need to create?',
      type: 'list',
      choices: [
        {name: 'add a table'}, {name: 'alter a table'}, {name: 'misc'}],
    }, {
      name: 'description',
      message: 'Additional description?',
      type: 'input',
    }, {
      name: 'confirm',
      message: 'Please confirm your choices',
      type: 'confirm',
    }])

    console.log(ac.scriptsLocation)
    console.table(responses)
  }
}
