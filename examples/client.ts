import WebSocket from '../'
import { config } from './config';

let ws = new WebSocket('ws://localhost:'+config.server_port)
ws.on('open', () => {
	console.log('on open')
	ws.send('shutdown')
})