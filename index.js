#!/usr/bin/env node

import process from 'node:process'
import Cortadito from 'cortadito'
import sample from './application/controllers/sample.mjs'

const options = {
	listenPort: process.env.PORT // Mandatory
}

const app = new Cortadito()
await app.configure(options)
app.addRoute('/', sample)
app.addDefaultHandlers()
app.start()
