"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "../components/modal";
import Carrousel1 from "@/public/imagem1.jpg";
import Carrousel2 from "@/public/imagem2.png";
import Carrousel3 from "@/public/imagem3.jpg";
import imageLogo from "@/public/logoamanda.png";
import imageLogoInverted from "@/public/logoinvertida.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const images = [
    { src: Carrousel1, width: 800, height: 600 },
    { src: Carrousel2, width: 800, height: 600 },
    { src: Carrousel3, width: 800, height: 600 }
];

const GalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<typeof Carrousel1 | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const openModal = (image: typeof Carrousel1) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
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
                <h1 className="text-3xl font-bold text-center mb-8 text-[#F092A1]">Galeria</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative cursor-pointer">
                            <Image
                                src={image.src}
                                alt={`Galeria ${index}`}
                                width={image.width}
                                height={image.height}
                                className="w-full h-auto object-cover rounded-lg"
                                onClick={() => openModal(image.src)}
                            />
                        </div>
                    ))}
                </div>
                {isModalOpen && (
                    <Modal onClose={closeModal}>
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt="Imagem em destaque"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                        )}
                    </Modal>
                )}
                <div className="flex justify-center mt-8">
                    <Button
                        variant={"outline"}
                        className="px-6 py-3 bg-transparent text-[#F092A1] border-[#F092A1] rounded-lg hover:bg-[#F092A1] hover:text-white"
                        onClick={() => window.open("https://www.instagram.com/amanda_francheti", "_blank")}
                    >
                        Ver mais
                    </Button>
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

export default GalleryPage;
