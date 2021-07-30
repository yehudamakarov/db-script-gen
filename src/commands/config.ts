import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import {configLocInvalid, getConfLoc, validateFileLoc} from '../utils/file-loc-helpers'
import chalk from 'chalk'
import {sleep} from '../utils/sleep'
import * as fs from 'fs'
import * as os from 'os'
import {appConfig} from '../utils/app-config'

export default class Config extends Command {
  static description = 'handle your config file and its settings'

  static flags = {
    help: flags.help({char: 'h'}),
    check: flags.boolean({char: 'c'}),
  }

  async run() {
    const {flags} = this.parse(Config)

    if (flags.check) {
      const ac = appConfig(this)
      cli.log('If ' + chalk.yellow(ac.scriptsLocation) + ' is the right place for your scripts, then... you might be good.')
      return
    }

    // print desired location
    const desiredLoc = getConfLoc(this)
    cli.action.start('Inspecting ' + chalk.yellow(desiredLoc))
    await sleep(500)
    const isThere = validateFileLoc(desiredLoc)
    cli.action.stop()
    // alert / add if empty
    if (!isThere) {
      cli.warn(configLocInvalid(desiredLoc))
      const add = await cli.confirm('Want to add config?')
      if (add) {
        cli.action.start('Adding your config...')
        await sleep(1500)
        let loc = await cli.prompt('Where are your scripts to be generated, oh noble one?')
        loc = loc.toString().replace(/\\/g, '\\\\')
        if (validateFileLoc(loc)) {
          fs.writeFileSync(desiredLoc, `{${os.EOL}  "scriptsLocation": "${loc ? loc : 'need specification'}"${os.EOL}}`)
          cli.action.stop(chalk.green('Added ' + desiredLoc))
        } else {
          cli.action.stop(chalk.red('There is a problem with ') + chalk.yellow(loc) + os.EOL + 'Please check it out.')
        }
      } else {
        cli.warn('You should probably add config, but hey, you do you.')
      }
    } else {
      cli.log(chalk.green('Config is present. Good job. You did it. Amazing. You can now continue procrastinating.'))
    }
    // print success when there
    cli.log(chalk.green(os.EOL + 'You should be good!'))
  }
}
