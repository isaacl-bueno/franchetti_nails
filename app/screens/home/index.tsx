"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImageCarousel } from "./CarouselSpacing/ImageCarousel";

import amandaFrancheti from "@/public/amanda.jpg";
import imageBackground from "@/public/fundo.jpg";
import imageLogo from "@/public/logoamanda.png";
import Carrousel1 from "@/public/imagem1.jpg";
import Carrousel2 from "@/public/carrosel 2.png";
import Carrousel3 from "@/public/imagem 3.jpg";



const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderImage = () => (
    <Image
      src={amandaFrancheti}
      alt="Amanda Francheti"
      className="w-full h-full max-w-xs rounded-[50%] shadow-md"
    />
  );

  const renderLogo = () => (
    <Image
      src={imageLogo}
      alt="Logo"
      className="w-[180px] h-[60px] max-w-xs "
    />
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md w-full">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          {renderLogo()}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#F092A2"
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
          {!isMenuOpen && (
            <ul className={`lg:flex space-x-8 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
              <li>
                <a href="#inicio" className="text-[#F092A1] hover:text-gray-900">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#F092A1] hover:text-gray-900">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-[#F092A1] hover:text-gray-900">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#F092A1] hover:text-gray-900">
                  Contato
                </a>
              </li>
            </ul>
          )}
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden block bg-white shadow-md p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#inicio" className="text-[#F092A1] hover:text-gray-900">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#F092A1] hover:text-gray-900">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-[#F092A1] hover:text-gray-900">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#F092A1] hover:text-gray-900">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main
      
        className="flex-grow flex flex-col items-center justify-center p-24 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${imageBackground.src})`, backgroundSize: 'cover', backgroundPosition: 'center',height: '60vh' }}
      >
        <h1 className="text-1xl mb-4 text-white">
          Fibra de vidro | Acrílico moldado | Pasta acrílica | Unhas em gel | Esmaltação em gel
        </h1>
        <Button variant={"outline"} className="px-6 py-3 bg-transparent text-white rounded-lg hover:bg-blue-700">
          Entrar em contato
        </Button>
      </main>

      <section className="bg-white">
        <div className="mx-auto text-center">
          <div className="hidden lg:flex space-x-4">
            <div className="flex-1">
              <Image
                src={Carrousel1}
                alt="Amanda Francheti"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <Image
                src={Carrousel2}
                alt="Amanda Francheti"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <Image
                src={Carrousel3}
                alt="Amanda Francheti"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:hidden">
            <ImageCarousel />
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            {renderImage()}
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl text-[#F092A1] font-bold mb-6 mt-6">Amanda Francheti</h2>
            <p className="text-lg text-gray-700">
            Sonhadora, guerreira, determinada e apaixonada pelo design de unhas! Eu sou Amanda Francheti,
             especialista em alongamento de unhas com as melhores técnicas do mercado: acrílico moldado,
              pasta acrílica, fibra de vidro, manicure russa, esmaltação em gel e muito mais!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
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

      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl text-[#F092A1] font-bold mb-6">Contatos</h2>
          <p className="text-lg text-gray-700">Contato e informações adicionais.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
