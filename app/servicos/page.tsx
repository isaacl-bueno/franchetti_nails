"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import imageLogo from "@/public/logoamanda.png";
import imageLogoInverted from "@/public/logoinvertida.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import service1Image from "@/public/service1.jpg";
// import service2Image from "@/public/service2.jpg";
// import service3Image from "@/public/service3.jpg";

const ServicesPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

            <main className="flex-grow p-8 bg-gray-100">
                <section className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-[#F092A1] mb-4">Nossos Serviços</h1>
                    <p className="text-lg text-gray-700">
                        Descubra os serviços excepcionais que oferecemos para atender suas necessidades. Cada serviço é cuidadosamente elaborado para garantir a máxima qualidade e satisfação.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        {/* <Image src={service1Image} alt="Serviço 1" className="w-full h-40 object-cover rounded-t-lg" /> */}
                        <h2 className="text-xl font-bold text-[#F092A1] mt-4">Serviço 1</h2>
                        <p className="text-gray-700 mt-2">
                            Descrição do Serviço 1. Explique o que é oferecido e quais são os benefícios para o cliente.
                        </p>
                        <Button variant={"outline"} className="mt-4" onClick={() => {/* Handle click */ }}>Saiba mais</Button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        {/* <Image src={service2Image} alt="Serviço 2" className="w-full h-40 object-cover rounded-t-lg" /> */}
                        <h2 className="text-xl font-bold text-[#F092A1] mt-4">Serviço 2</h2>
                        <p className="text-gray-700 mt-2">
                            Descrição do Serviço 2. Detalhes sobre o que é oferecido e seus benefícios.
                        </p>
                        <Button variant={"outline"} className="mt-4" onClick={() => {/* Handle click */ }}>Saiba mais</Button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        {/* <Image src={service3Image} alt="Serviço 3" className="w-full h-40 object-cover rounded-t-lg" /> */}
                        <h2 className="text-xl font-bold text-[#F092A1] mt-4">Serviço 3</h2>
                        <p className="text-gray-700 mt-2">
                            Descrição do Serviço 3. Explique o serviço e os benefícios para o cliente.
                        </p>
                        <Button variant={"outline"} className="mt-4" onClick={() => {/* Handle click */ }}>Saiba mais</Button>
                    </div>
                </section>

                <section className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-[#F092A1] mb-6">Perguntas Frequentes</h2>
                    <div className="text-left max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-800">Como posso solicitar um serviço?</h3>
                        <p className="text-gray-700 mt-2">
                            Você pode entrar em contato conosco através do botão de contato ou solicitar um orçamento diretamente no site.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-4">Qual é o tempo de espera para começar um serviço?</h3>
                        <p className="text-gray-700 mt-2">
                            O tempo de espera pode variar dependendo da demanda. Normalmente, entramos em contato em até 48 horas para confirmar detalhes.
                        </p>
                    </div>
                </section>

                <section className="text-center">
                    <Button
                        variant={"outline"}
                        className="px-6 py-3 bg-transparent text-[#F092A1] border-[#F092A1] rounded-lg hover:bg-[#F092A1] hover:text-white"
                        onClick={() => {/* Handle contact click */ }}
                    >
                        Entre em Contato
                    </Button>
                </section>
            </main>

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

export default ServicesPage;
