"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import imageLogo from "@/public/logoamanda.png";
import imageLogoInverted from "@/public/logoinvertida.png";

const ContactPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        alert("Formulário enviado!");
    };

    return (
        <div className="min-h-screen bg-gray-100">
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
                    {!isMenuOpen && (<ul className={`lg:flex space-x-8 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
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
                    </ul>)}
                </nav>
                {isMenuOpen && (
                    <div className="lg:hidden block bg-white shadow-md p-4">
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <a href="/" className="text-[#F092A1] hover:text-gray-900">
                                    INÍCIO
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
            <main className="p-6">
                <h1 className="text-3xl font-bold text-center mb-8 text-[#F092A1]">Contato</h1>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Formulário de Contato */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#F092A1] text-white font-bold rounded-md hover:bg-[#e07a9d]"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                    {/* Informações de Contato */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>
                        <p className="mb-4">
                            <strong>Endereço:</strong> R. Francisco Derosso, 5560.
                        </p>
                        <p className="mb-4">
                            <strong>Telefone:</strong> (41) 99111-9239
                        </p>
                        <p className="mb-4">
                            <strong>Email:</strong> contato@amandafrancheti.com
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://www.instagram.com/amanda_francheti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F092A1] hover:text-gray-700"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="https://wa.me/5541991119239?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F092A1] hover:text-gray-700"
                            >
                                <FaWhatsapp className="text-2xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/amanda.francheti.5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F092A1] hover:text-gray-700"
                            >
                                <FaFacebook className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-[#F092A1] py-8 flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-14 text-center">
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
                    <div className="flex justify-center space-x-4 mt-4 border-t border-white pt-4">
                        <p className="text-sm text-white">Todos os direitos Reservados Amanda Francheti</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;
