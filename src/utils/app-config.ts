import * as fs from 'fs'
import {Command} from '@oclif/command'
import {MyConfig} from '../commands/gen'
import * as os from 'os'
import {configLocInvalidFix, getConfLoc, validateFileLoc} from './file-loc-helpers'

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

export const appConfig = (commandClass: Command) => {
	const confLoc = getConfLoc(commandClass);
	const isThere = validateFileLoc(confLoc)
	if (!isThere) {
		throw new Error(configLocInvalidFix(confLoc))
	}
	const conf = JSON.parse(
		fs
			.readFileSync(confLoc)
			.toString(),
	) as MyConfig
	validateConf(conf, confLoc)
	return conf
}
