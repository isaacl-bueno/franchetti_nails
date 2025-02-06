"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import imageLogo from "@/public/logoamanda.png";
import imageLogoInverted from "@/public/logoinvertida.png";
import AlongamentoFibradeVidro from "@/public/AlongamentoFibradeVidro.jpg";
import BanhoDeGel from "@/public/BanhoDeGel.jpg";
import EsmaltacaoEmGel from "@/public/EsmaltaçãoEmGel.jpg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ServicesPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const renderLogo = () => (
        <Image
            src={imageLogo}
            alt="Logo"
            className="w-[180px] h-[60px] max-w-xs"
        />
    );

    const renderLogoInverted = () => (
        <Image
            src={imageLogoInverted}
            alt="Logo"
            className="w-[200px] h-[85px] max-w-xs"
        />
    );

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-md w-full">
                <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                    {renderLogo()}
                    <div className="lg:hidden">
                        <a
                            href="https://wa.me/5541991119239?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300"
                        >
                            <FaWhatsapp className="text-white text-4xl" />
                        </a>
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
                </nav>
                {isMenuOpen && (
                    <div className="lg:hidden block bg-white shadow-md p-4">
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <a href="/" className="text-[#F092A1] hover:text-gray-900">
                                    INÍCIO
                                </a>
                            </li>
                            <li>
                                <a href="/servicos" className="text-[#F092A1] hover:text-gray-900">
                                    SERVIÇOS
                                </a>
                            </li>
                            <li>
                                <a href="/galeria" className="text-[#F092A1] hover:text-gray-900">
                                    GALERIA
                                </a>
                            </li>
                            <li>
                                <a href="/contato" className="text-[#F092A1] hover:text-gray-900">
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
                </section>

                <section className="flex flex-wrap max-w-7xl mx-auto mb-12">
                    <div className="lg:w-1/2 w-full p-4">
                        <Image
                            src={AlongamentoFibradeVidro}
                            alt="Alongamento Fibra de Vidro"
                            className="w-full lg:h-[400px] h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full p-4">
                        <h2 className="text-xl font-bold text-[#F092A1]">Alongamento Fibra de Vidro</h2>
                        <p className="text-gray-700 mt-2 text-lg">
                        É uma técnica utilizada com filamentos de fibra de vidro que são moldados sobre a unha natural. Diferente da unha de gel, que o molde pronto e desenhado é a principal vertente para alongar as unhas, no alongamento com unhas de fibra de vidro o processo é diferente. Os filamentos de vidro são fixados com um gel nas unhas, moldados com o próprio formato da unha da cliente e finalizadas na cabine de luz UV led. O alongamento com fibra de vidro é conhecido por deixar as unhas com um aspecto mais natural comparado às outras técnicas de alongamento de unhas.
                        </p>
                        <h2 className="text-xl mt-4 font-bold text-[#F092A1]">Manutenção Fibra de Vidro</h2>
                        <p className="text-gray-700 mt-2 text-lg">
                        Na Manutenção de Unhas de Fibra de Vidro, é Retirado a Camada Superficial do Gel, Correção de Imperfeições e Reposição de Fibra de Vidro Quando necessário. Depois é Feita Uma Nova Camada de Gel, Cobrindo as Áreas Crescimento das Unhas Naturais e Renovando o Alongamento das Unhas no Período Recomendado.
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full p-4">
                        <Image
                            src={BanhoDeGel}
                            alt="Banho De Gel"
                            className="w-full lg:h-[400px] h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full p-4">
                        <h2 className="text-xl font-bold text-[#F092A1]">Banho De Gel</h2>
                        <p className="text-gray-700 mt-2 text-lg">
                        O banho de gel trata-se de um procedimento de blindagem realizado nas unhas, através de um gel fortalecedor. O mesmo material usado no processo de alongar as unhas. Esse gel cria uma barreira fortalecedora que protege as unhas e favorece o crescimento delas desde o momento da aplicação.
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full p-4">
                        <Image
                            src={EsmaltacaoEmGel}
                            alt="Esmaltação em Gel"
                            className="w-full lg:h-[400px] h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full p-4">
                        <h2 className="text-xl font-bold text-[#F092A1]">Esmaltação Em Gel</h2>
                        <p className="text-gray-700 mt-2 text-lg">
                        A principal diferença entre a esmaltação em gel e a esmaltação comum é a durabilidade. Os convencionais possuem duração de, aproximadamente, sete dias nas unhas. Ainda sim, há a possibilidade de descascar mais cedo, dependendo das tarefas do seu dia a dia. Enquanto a esmaltação em gel tem uma durabilidade de 15 a 25 dias, tirando a praticidade de sair seca da cabine e não descascar com facilidade.
                        </p>
                    </div>
                </section>

                <section className="text-center">
                    <Button
                        variant={"outline"}
                        className="px-6 py-3 bg-transparent text-[#F092A1] border-[#F092A1] rounded-lg hover:bg-[#F092A1] hover:text-white"
                    >
                        Entre em Contato
                    </Button>
                </section>
            </main>

            <footer className="bg-[#F092A1] py-8 flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-14 text-center">
                <div className="w-full lg:w-auto flex flex-col items-center">
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
                    <div className="flex justify-center space-x-4 mt-4 border-t border-white pt-4">
                        <p className="text-sm text-white">Todos os direitos Reservados Amanda Francheti</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ServicesPage;
