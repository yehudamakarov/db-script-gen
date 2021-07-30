db-script-gen
=============
[View on NPM](https://www.npmjs.com/package/db-script-gen)

Create script files for database versioning purposes.

![GitHub issues](https://img.shields.io/github/issues/yehudamakarov/db-script-gen?style=plastic)
![NPM](https://img.shields.io/npm/v/db-script-gen?style=plastic)
![License](https://img.shields.io/npm/l/db-script-gen?style=plastic)

## Example

![tutorial](https://media.giphy.com/media/zta9ip9ufHuDgbtfHj/giphy.gif)


## TOC
<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g db-script-gen
$ db-script-gen COMMAND
running command...
$ db-script-gen (-v|--version|version)
db-script-gen/0.5.4 darwin-x64 node-v14.17.3
$ db-script-gen --help [COMMAND]
USAGE
  $ db-script-gen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`db-script-gen config`](#db-script-gen-config)
* [`db-script-gen gen`](#db-script-gen-gen)
* [`db-script-gen help [COMMAND]`](#db-script-gen-help-command)

## `db-script-gen config`

handle your config file and its settings

```
USAGE
  $ db-script-gen config

OPTIONS
  -c, --check
  -h, --help   show CLI help
```

_See code: [src/commands/config.ts](https://github.com/yehudamakarov/db-script-gen/blob/v0.5.4/src/commands/config.ts)_

## `db-script-gen gen`

generate a file that will contain scripts for a target database

```
USAGE
  $ db-script-gen gen
```

_See code: [src/commands/gen.ts](https://github.com/yehudamakarov/db-script-gen/blob/v0.5.4/src/commands/gen.ts)_

## `db-script-gen help [COMMAND]`

display help for db-script-gen

```
USAGE
  $ db-script-gen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
