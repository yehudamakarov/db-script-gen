import * as fs from 'fs'
import {Command} from '@oclif/command'
import {MyConfig} from './commands/gen'
import * as path from 'path'

function validateConf(conf: MyConfig) {
  if (!conf.scriptsLocation) {
    throw new Error('There was no config found for |scriptsLocation| - please set it! Unless things are going nice without the config... in which case, we are all good here! :) Have a great day!')
  }
}

export const appConfig = (commandClass: Command) => {
  const conf = JSON.parse(
    fs
      .readFileSync(path.join(commandClass.config.configDir, 'config.json'))
      .toString(),
  ) as MyConfig
  validateConf(conf)
  return conf
}
