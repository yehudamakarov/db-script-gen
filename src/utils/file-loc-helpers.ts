import {Command} from '@oclif/command'
import * as path from 'path'
import chalk from 'chalk'
import * as os from 'os'
import * as fs from 'fs'

export function getConfLoc(commandClass: Command) {
  return path.join(commandClass.config.configDir, 'config.json')
}

export const configLocInvalid = (confLoc: string) => 'The config file\'s location is invalid. Please investigate the existence of ' + chalk.yellowBright(confLoc)
export const configLocInvalidFix = (confLoc: string) => 'The config file\'s location is invalid. Please investigate the existence of ' + chalk.yellowBright(confLoc) + os.EOL + 'Or you may generate one by running the ' + chalk.bgBlackBright.redBright('config') + ' command.'

export const validateFileLoc = (fileLoc: string) => {
  try {
    if (fs.existsSync(fileLoc)) {
      return true
    }
  } catch (e) {
    return false
  }
  return false
}
