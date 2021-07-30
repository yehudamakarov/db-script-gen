import * as fs from 'fs'
import {Command} from '@oclif/command'
import {MyConfig} from './commands/gen'
import * as path from 'path'
import * as os from 'os'

function validateConf(conf: MyConfig, confLoc: string) {
  const plsCheck = os.EOL + 'please check out ' + confLoc
  if (!conf.scriptsLocation) {
    throw new Error('There was no config found for |scriptsLocation| - please set it! Unless things are going nice without the config... in which case, we are all good here! :) Have a great day! ' + plsCheck)
  }
  if (!fs.existsSync(conf.scriptsLocation)) {
    throw new Error('The scriptsLocation config setting fails a check with fs.existsSync(). Please verify the location on disc. ' + plsCheck)
  }
}

export const appConfig = (commandClass: Command) => {
  let confLoc = path.join(commandClass.config.configDir, 'config.json')
  const conf = JSON.parse(
    fs
      .readFileSync(confLoc)
      .toString(),
  ) as MyConfig
  validateConf(conf, confLoc)
  return conf
}
