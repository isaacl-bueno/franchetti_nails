"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md w-full">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Francheti</div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {/* Ícone de Menu (Hamburger) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul className={`lg:flex space-x-8 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
            <li>
              <a href="#inicio" className="text-gray-700 hover:text-gray-900">
                Início
              </a>
            </li>
            <li>
              <a href="#servicos" className="text-gray-700 hover:text-gray-900">
                Serviços
              </a>
            </li>
            <li>
              <a href="#galeria" className="text-gray-700 hover:text-gray-900">
                Galeria
              </a>
            </li>
            <li>
              <a href="#contato" className="text-gray-700 hover:text-gray-900">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        {/* Menu expansivo para mobile */}
        {isMenuOpen && (
          <div className="lg:hidden block bg-white shadow-md p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#inicio" className="text-gray-700 hover:text-gray-900">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-700 hover:text-gray-900">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-700 hover:text-gray-900">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-700 hover:text-gray-900">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main id="inicio" className="flex-grow flex flex-col items-center justify-center p-24 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Fibra de vidro | Acrílico moldado | Pasta acrílica | Unhas em gel | Esmaltação em gel</h1>
        <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Entrar em contato
        </Button>
      </main>

      <section id="servicos" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">ALONGAMENTO DE UNHAS</h2>
          <p className="text-lg text-gray-700">
            Sua autoconfiança é nossa medida de sucesso, e a nossa prioridade
            é garantir que isso aconteça. É nossa paixão realçar sua beleza.
            Trabalhamos com alongamento de fibra de vidro, acrílico moldado,
            unhas de gel, pasta acrílica, banho em gel, esmaltação em gel e
            manutenção de unhas.
          </p>
        </div>
      </section>

      <section id="servicos" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">exemplos</h2>
        </div>
      </section>

      <section id="about" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src="/amanda.jpg"
              alt="Amanda Francheti"
              className="w-full h-full max-w-xs rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-6">Amanda Francheti</h2>
            <p className="text-lg text-gray-700">
              Sua autoconfiança é nossa medida de sucesso, e a nossa prioridade
              é garantir que isso aconteça. É nossa paixão realçar sua beleza.
              Trabalhamos com alongamento de fibra de vidro, acrílico moldado,
              unhas de gel, pasta acrílica, banho em gel, esmaltação em gel e
              manutenção de unhas.
            </p>
          </div>
        </div>
      </section>

      <section id="galeria" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Galeria</h2>
          <p className="text-lg text-gray-700">
            Confira nossa galeria de fotos.
          </p>
          <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Ver fotos.
          </Button>
        </div>
      </section>

      <section id="galeria" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Depoimentos</h2>
          <p className="text-lg text-gray-700">
            Confira nossa galeria de fotos.
          </p>
          <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Ver fotos.
          </Button>
        </div>
      </section>

      <footer id="contato" className="bg-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-lg text-gray-700">Contato e informações adicionais.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
