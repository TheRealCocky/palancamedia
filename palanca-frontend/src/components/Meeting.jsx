import React from 'react';
import { Link } from 'react-router-dom';

function Meeting() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center mt-10 text-gray-800">
          Agende sua Reunião
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-6 text-center max-w-md">
          Aqui você pode agendar uma reunião para discutir temas importantes.
        </p>

        <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="meetingTitle" className="block text-base font-semibold mb-2">
                Título da Reunião
              </label>
              <input
                  type="text"
                  id="meetingTitle"
                  placeholder="Digite o título da reunião"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="meetingDescription" className="block text-base font-semibold mb-2">
                Descrição
              </label>
              <textarea
                  id="meetingDescription"
                  placeholder="Descreva os pontos da reunião"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="meetingDate" className="block text-base font-semibold mb-2">
                Data e Hora
              </label>
              <input
                  type="datetime-local"
                  id="meetingDate"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white text-base rounded-lg hover:bg-orange-600 transition"
            >
              Agendar Reunião
            </button>

            <Link to="/primeeting">
              <button
                  type="button"
                  className="w-full py-3 mt-3 bg-red-500 text-white text-base rounded-lg hover:bg-red-600 transition"
              >
                Cancelar
              </button>
            </Link>
          </form>
        </div>
      </div>
  );
}

export default Meeting;

