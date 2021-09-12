import ws from '../'
import http from 'http'
import { config } from './config'

let server = http.createServer()
let wss = new ws.WebSocketServer({server})

wss.on('connection', (ws, req) => {
	console.log('on connection')
	ws.on('message', msg => {
		console.log('received msg:', msg)
		if (msg.toString() == 'shutdown') {
			console.log('shuting down...')
			ws.close()
			wss.close()
			server.close()
		}
	})
})

server.listen(config.server_port, () => {
	console.log('listening on port', config.server_port)
})