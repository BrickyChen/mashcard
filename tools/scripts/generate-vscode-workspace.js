#!/usr/bin/env node
/**
 * @file Generate a VSCode workspace file from available yarn workspace projects.
 */
const { spawnSync } = require('child_process')
const { readFileSync, writeFileSync, existsSync } = require('fs')

const out = spawnSync('yarn', ['workspaces', 'list'])
const matches = out.stdout.toString().matchAll(/YN0000: (.+\/.+)/gm)

const workspaceFile = 'workspace.code-workspace'
const result = existsSync(workspaceFile) ? JSON.parse(readFileSync(workspaceFile, 'utf8')) : {}
result.folders = [
  { name: '/', path: '.' },
  ...Array.from(matches).map(match => ({
    name: match[1],
    path: match[1]
  }))
]

result.settings ??= {}
result.settings['jest.disabledWorkspaceFolders'] = result.folders
  .filter(folder => !existsSync(`${folder.path}/jest.config.js`))
  .map(folder => folder.name)
writeFileSync(workspaceFile, JSON.stringify(result, null, 2))