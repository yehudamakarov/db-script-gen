import { Command } from '@oclif/command'
import { appConfig } from '../utils/app-config'
import * as inquirer from 'inquirer'
import * as path from 'path'
import * as fs from 'fs'
import cli from 'cli-ux'
import * as os from 'os'
import { getRandomMessage, getRandomNumber } from '../utils/messages'
import chalk from 'chalk'
import { sleep } from '../utils/sleep'
import { getTimestamp } from '../utils/ts'

export interface MyConfig {
	scriptsLocation: string
}

export interface Answers {
	ticket: string,
	description: string,
	typeOfScript: string,
	confirm: boolean
}

export default class Gen extends Command {
	static description = 'generate a file that will contain scripts for a target database'

	async run() {
		cli.action.start('checking config')
		await sleep(1000)
		const ac = appConfig(this)
		cli.action.stop()

		const responses = await inquirer.prompt<Answers>([{
			name: 'ticket',
			message: 'What ticket are you working on?',
			type: 'input',
		}, {
			name: 'typeOfScript',
			message: 'What type of script do you need to create?',
			type: 'list',
			choices: [
				{
					name: 'add a table',
					value: 'add.table',
				}, {
					name: 'alter a table',
					value: 'alter.table',
				}, {
					name: 'misc',
					value: 'misc',
				}],
		}, {
			name: 'description',
			message: 'Additional description?',
			type: 'input',
		}, {
			name: 'confirm',
			message: 'Please confirm your choices',
			type: 'confirm',
		}])

		if (!responses.confirm) {
			cli.log(chalk.yellowBright("We will... not generate this script for you."))
			return
		}

		await Gen.generateScript(responses, ac);
	}

	private static async generateScript(responses: any, ac: MyConfig) {
		cli.action.start(getRandomMessage())
		const fn = Gen.getFileName(responses)
		fs.writeFileSync(path.join(ac.scriptsLocation, fn), '-- ' + responses.ticket + os.EOL)
		await sleep(getRandomNumber(5, 2) * 1000)
		cli.action.stop('phew.')
		cli.log(chalk.greenBright('Done! created: ' + fn))
	}

	private static getFileName(responses: any) {
		const dateString = getTimestamp()
		let fn = 'V' + dateString + '__'
		if (responses.ticket.indexOf('-') == -1) {
			cli.warn('Make sure your ticket name is correct, it didn\'t have a hyphen in it. They usually do.')
		}
		fn += responses.ticket ? responses.ticket : 'no-ticket'

		fn += '---'
		fn += responses.typeOfScript
		if (responses.description) {
			fn += '---'
			fn += responses.description.replace(/\s+/g, '-').toLowerCase()
		}
		fn += '.sql'
		return fn
	}
}
