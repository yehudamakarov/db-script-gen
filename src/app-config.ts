import * as fs from 'fs'
import { Command } from '@oclif/command'
import { MyConfig } from './commands/gen'
import * as path from 'path'
import * as os from 'os'
import chalk from "chalk";

function validateConf(conf: MyConfig, confLoc: string) {
	const plsCheck = os.EOL + 'please check out ' + confLoc
	const scriptLocationInvalid = 'The scriptsLocation config setting fails a check with fs.existsSync(). Please verify the location on disc. ' + plsCheck
	const settingMissing = 'There was no config found for |scriptsLocation| - please set it! Unless things are going nice without the config... in which case, we are all good here! :) Have a great day! ' + plsCheck;
	if (!conf.scriptsLocation) {

		throw new Error(settingMissing)
	}
	try {
		if (fs.existsSync(conf.scriptsLocation)) {
			return
		}
	} catch (e) {
		throw new Error(scriptLocationInvalid)
	}
	throw new Error(scriptLocationInvalid)
}

const validateConfLoc = (confLoc: string) => {
	const configLocInvalid = 'The config file\'s location is invalid. Please investigate the existence of ' + chalk.yellowBright(confLoc) + os.EOL + 'Or you may generate one by running the ' + chalk.bgBlackBright.redBright("config") + ' command.'
	try {
		if (fs.existsSync(confLoc)) {
			return
		}
	} catch (e) {
		throw new Error(configLocInvalid)
	}
	throw new Error(configLocInvalid)
};

export const appConfig = (commandClass: Command) => {
	const confLoc = path.join(commandClass.config.configDir, 'config.json');
	validateConfLoc(confLoc)
	const conf = JSON.parse(
		fs
			.readFileSync(confLoc)
			.toString(),
	) as MyConfig
	validateConf(conf, confLoc)
	return conf
}
