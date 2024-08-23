"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImageCarousel } from "./CarouselSpacing/ImageCarousel";
import { AvaliationsCarousel } from "./CarouselSpacing/AvaliationsCarousel";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import amandaFrancheti from "@/public/amanda.jpg";
import imageLogo from "@/public/logoamanda.png";
import Carrousel1 from "@/public/imagem1.jpg";
import Carrousel2 from "@/public/imagem2.png";
import Carrousel3 from "@/public/imagem3.jpg";
import imageLogoInverted from "@/public/logoinvertida.png";


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

  const renderLogoInverted = () => (
    <Image
      src={imageLogoInverted}
      alt="Logo"
      className="w-[200px] h-[85px] max-w-xs "
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
                  INÍCIO
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#F092A1] hover:text-gray-900">
                  SERVIÇOS
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-[#F092A1] hover:text-gray-900">
                  GALERIA
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#F092A1] hover:text-gray-900">
                  CONTATO
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
                  INÍCIO
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#F092A1] hover:text-gray-900">
                  SERVIÇOS
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-[#F092A1] hover:text-gray-900">
                  GALERIA
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#F092A1] hover:text-gray-900">
                  CONTATO
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main

        className="flex-grow flex flex-col items-center justify-center p-24 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundColor: '#F092A2',
          height: '60vh'
        }}
      >
        <h1 className="text-1xl mb-4 text-white">
          Fibra de vidro | Acrílico moldado | Pasta acrílica | Unhas em gel | Esmaltação em gel
        </h1>
        <Button
          variant={"outline"}
          className="px-6 py-3 bg-transparent text-white border-white rounded-lg hover:bg-white hover:text-[#F092A2]"
          onClick={() => window.open("https://wa.me/5541991119239?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!", "_blank")}
        >
          Entrar em contato
        </Button>

      </main>

      <section className="bg-gray-100">
        <div className="mx-auto text-center">
          <div className="hidden lg:flex space-x-4">
            <div className="flex-1">
              <Image
                src={Carrousel1}
                alt="Amanda Francheti"
                className="w-full h-full object-cover mt-4"
              />
            </div>
            <div className="flex-1">
              <Image
                src={Carrousel2}
                alt="Amanda Francheti"
                className="w-full h-full object-cover mt-4"
              />
            </div>
            <div className="flex-1">
              <Image
                src={Carrousel3}
                alt="Amanda Francheti"
                className="w-full h-full object-cover mt-4"
              />
            </div>
          </div>

          <div className="lg:hidden">
            <ImageCarousel />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl text-[#F092A1] font-bold mb-6">GALERIA</h2>
          <p className="text-lg text-gray-700">
            Confira nossa galeria de fotos.
          </p>
          <Button variant={"outline"} className="px-6 py-3 bg-transparent text-[#F092A1] border-[#F092A1] rounded-lg hover:bg-[#F092A1] hover:text-white">
            Ver album
          </Button>
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
        <div className="max-w-7xl mx-auto content-center text-center">
          <h2 className="text-3xl text-[#F092A1] font-bold mb-6">AVALIAÇÕES</h2>
        </div>
        <div className="w-full flex justify-center text-center">
          <AvaliationsCarousel />
        </div>
      </section>

      <footer className="bg-[#F092A1] py-8 flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-14 text-center">
        <div className="w-full lg:w-auto">
          <h2 className="text-2xl text-white font-bold mb-2">ENDEREÇO</h2>
          <p className="text-sm text-white">R. Francisco Derosso, 5560.</p>
          <p className="text-sm text-white">(41) 99111-9239</p>
          <div className="flex justify-center space-x-4 mt-4 border-t border-white pt-4">
            <p className="text-sm text-white">Todos os direitos Reservados Amanda Francheti</p>
          </div>
        </div>

        <div className="w-full lg:w-auto flex flex-col items-center ">
          {renderLogoInverted()}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.instagram.com/amanda_francheti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram className="text-white text-4xl" />
            </a>
            <a
              href="https://wa.me/5541991119239?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaWhatsapp className="text-white text-4xl" />
            </a>
            <a
              href="https://www.facebook.com/amanda.francheti.5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebook className="text-white text-4xl" />
            </a>
          </div>
        </div>


        <div className="w-full lg:w-auto">
          <h2 className="text-2xl text-white font-bold mb-2">HORÁRIOS</h2>
          <p className="text-sm text-white">Ter-Sab: 09:00 - 18:00</p>
          <p className="text-sm text-white">Dom-Seg: Fechado</p>
          <div className="flex justify-center space-x-4 mt-4 border-t border-white pt-4">
            <p className="text-sm text-white">
              Desenvolvido e planejado por{" "}
              <a
                href="https://www.linkedin.com/in/isaac-leandro-bueno-ab4bbb18b/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Isaac Leandro Bueno
              </a>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default HomePage;
