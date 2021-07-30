db-script-gen
=============

Create script files for database versioning purposes.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/db-script-gen.svg)](https://npmjs.org/package/db-script-gen)
[![Downloads/week](https://img.shields.io/npm/dw/db-script-gen.svg)](https://npmjs.org/package/db-script-gen)
[![License](https://img.shields.io/npm/l/db-script-gen.svg)](https://github.com/yehudamakarov/db-script-gen/blob/master/package.json)

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
db-script-gen/0.1.0 darwin-x64 node-v14.17.3
$ db-script-gen --help [COMMAND]
USAGE
  $ db-script-gen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`db-script-gen gen`](#db-script-gen-gen)
* [`db-script-gen help [COMMAND]`](#db-script-gen-help-command)

## `db-script-gen gen`

generate a file that will contain scripts for a target database

```
USAGE
  $ db-script-gen gen
```

_See code: [src/commands/gen.ts](https://github.com/yehudamakarov/db-script-gen/blob/v0.1.0/src/commands/gen.ts)_

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
