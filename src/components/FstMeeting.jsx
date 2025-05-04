import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Link } from 'react-router-dom';
import Icon from '../imagens/icon1-meeting.jpg';

function FstMeeting() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Conectado ao Socket.io!');
    });

    newSocket.on('meetingStarted', (data) => {
      alert(data.message);
    });

    return () => {
      newSocket.close();
      console.log('Desconectado do Socket.io');
    };
  }, []);

  const startMeeting = () => {
    if (socket) {
      console.log('Iniciando reunião...');
      socket.emit('startMeeting', (response) => {
        if (response.success) {
          console.log('Reunião iniciada com sucesso');
        } else {
          console.log('Falha ao iniciar a reunião:', response.message);
        }
      });
    } else {
      console.log('Socket não está conectado');
    }
  };

  return (
      <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${Icon})` }}
      >
        <div className="flex justify-center items-center h-full bg-black bg-opacity-60 px-4">
          <div className="text-center text-white max-w-lg w-full">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-50">
              Primeira Reunião
            </h1>
            <p className="text-sm sm:text-base mb-6">
              Bem-vindo à nossa primeira reunião! Vamos discutir os próximos passos do projeto.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                  onClick={startMeeting}
                  className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Iniciar Reunião
              </button>
              <Link
                  to="/meeting"
                  className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition text-center"
              >
                Agendar
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FstMeeting;
