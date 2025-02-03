export default function sample(controller) {
	controller.get('/', async (request, response) => {
		const hi = await Promise.resolve('Hi! I ran async.')
		response.send(hi)
	})

	controller.get('/fail', async (request, response) => { // eslint-disable-line no-unused-vars
		await Promise.reject(new Error('REJECTED!'))
	})

	controller.get('/denied', async (request, response) => {
		response.status(403).send('Not here')
	})

	controller.get('/set', (request, response) => {
		request.session.timestamp = Date.now()
		response.json({session: request.session})
	})

	controller.get('/get', (request, response) => {
		response.json({session: request.session})
	})
}
