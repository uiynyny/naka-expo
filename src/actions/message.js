import { SERVER_ROOT, TOPIC } from './urls';
import { io } from 'socket.io-client';

const socket = io(SERVER_ROOT + TOPIC);
socket.on('connect')
export const sendMessage = async (message) => {
  socket.emit('message',message);
};
