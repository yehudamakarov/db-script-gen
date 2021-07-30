import {Command, flags} from '@oclif/command'
import {appConfig} from '../app-config'

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
    const {args, flags} = this.parse(Gen)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/yehudamakarov/code/db-script-gen/src/commands/gen.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    console.log(ac.scriptsLocation)
  }
}
