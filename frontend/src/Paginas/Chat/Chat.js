import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import { LiMensaje, UlMensajes } from './ui-components';
import Principal from '../../Componentes/Principal';

const socket = io('http://localhost:3000');

function Chat() {

  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {

    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) => {
      setMensajes(mensajes => [...mensajes, data]);
    });

    return () => {
      socket.off('connect');
      socket.off('chat_message');
    }

  }, []);

  const enviarMensaje = () => {
    socket.emit('chat_message', {
      usuario: socket.id,
      mensaje: nuevoMensaje
    });
  }

  return (
    <div>
      <div>
      <Principal/>
      </div>
      <h2 className='titulo'>{isConnected ? 'CONECTADO' : 'NO ESTAS CONECTADO'}</h2>
      <div className='chat'>
      <UlMensajes>
        {mensajes.map(mensaje => (
          <LiMensaje>{mensaje.usuario}: {mensaje.mensaje}</LiMensaje>
        ))}
      </UlMensajes>
      <input className='mensaje' type="text" onChange={e => setNuevoMensaje(e.target.value)}/>
      <button onClick={enviarMensaje} className='enviar'>
      <img src={require('../../IMG/Enviar.png')}/>
      </button>
    </div>
    </div>
  );
}

export default Chat;
