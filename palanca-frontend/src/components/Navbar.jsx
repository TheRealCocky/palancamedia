import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      const nome = localStorage.getItem("nome");
  
      setIsLoggedIn(!!token);  // Atualiza o estado com base no token
      setUsername(nome || '');  // Atualiza o nome do usuário
    };
  
    checkAuth();
  
    // Escuta o evento 'authChanged' para atualizar o estado
    window.addEventListener('authChanged', checkAuth);
  
    // Remove o listener quando o componente for desmontado
    return () => window.removeEventListener('authChanged', checkAuth);
  }, []);
  

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-orange-500 text-white px-4 py-3 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-50">PalancaMedia</h1>

        <button className="md:hidden" onClick={toggleMenu} aria-label="Abrir menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`absolute md:static top-full left-0 w-full md:w-auto bg-orange-500 md:bg-transparent flex flex-col md:flex-row md:items-center md:space-x-6 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'} md:flex justify-center md:justify-start`}>
          <li className="w-full">
            <Link to="/" className="block px-4 py-2 text-center hover:bg-orange-600 rounded-md w-full">Início</Link>
          </li>
          <li className="w-full">
            <Link to="/pribiblioteca" className="block px-4 py-2 text-center hover:bg-orange-600 rounded-md w-full">Biblioteca</Link>
          </li>
          <li className="w-full">
  <Link to="/primeeting" className="block px-4 py-2 text-center hover:bg-orange-600 rounded-md w-full">Meeting</Link>
</li>
<li className="w-full">
  <Link to="/news" className="block px-4 py-2 text-center hover:bg-orange-600 rounded-md w-full">News</Link>
</li>

          {isLoggedIn && (
            <li className="w-full">
              <Link to="/myself" className="block px-4 py-2 text-center hover:bg-orange-600 rounded-md w-full">
                Perfil
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li className="w-full">
              <Link to="/login" className="block px-4 py-2 text-center hover:bg-orange-600 rounded-md w-full">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}










