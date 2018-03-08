'use strict'

const { test } = require('ava')
const fs = require('fs')
const path = require('path')

const getMP3Duration = require('.')

const fixturesPath = path.join(__dirname, `fixtures`)
const vbrPath = path.join(fixturesPath, 'vbr.mp3')
const cbrPath = path.join(fixturesPath, 'cbr.mp3')
const vbr = fs.readFileSync(vbrPath)
const cbr = fs.readFileSync(cbrPath)

test('vbr duration', async (t) => {
  const duration = getMP3Duration(vbr)
  t.deepEqual(duration, 285727)
})

test('cbr duration', async (t) => {
  const duration = getMP3Duration(cbr)
  t.deepEqual(duration, 285780)
})
