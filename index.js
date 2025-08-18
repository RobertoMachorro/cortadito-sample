#!/usr/bin/env node

import {env} from 'node:process'
import Cortadito from 'cortadito'
// Controllers
import sample from './application/controllers/sample.mjs'

const options = {
	listenPort: env.PORT, // Mandatory
	sessionRedisUrl: env.REDIS_URL, // Optional
	sessionSecret: env.SESSION_SECRET, // Optional
}

const app = new Cortadito()
await app.configure(options)
app.addRoute('/', sample)
app.addDefaultHandlers()
app.start()
