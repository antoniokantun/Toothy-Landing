"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BiLogoFacebook, BiLogoTiktok, BiLogoInstagram, BiMenu, BiX } from "react-icons/bi";

const NAV_LINKS = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Tratamientos', href: '/tratamientos' },
    { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='w-full py-6 fixed top-0 z-50 bg-toothy-100'>
            <nav className='w-full flex items-center justify-between relative'>
                <Link href="/" className="shrink-0 pl-4 xl:pl-14">
                    <Image src="/images/logo-toothy.png" alt="Toothy clinical dental" width={120}
                        height={40} className='object-contain w-auto h-auto' priority />
                </Link>
                <ul className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full shadow-lg py-8 gap-8 z-50 bg-toothy-100 md:flex md:flex-row md:static md:w-auto md:bg-transparent md:shadow-none md:py-0 md:gap-6 lg:gap-16 md:ml-8 items-center flex-1 md:justify-start justify-center`}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="font-medium hover:text-toothy-500 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex gap-4 shrink-0 pr-4 xl:pr-14">
                    <SocialIconLink href="https://facebook.com" icon={<BiLogoFacebook size={20} />} />
                    <SocialIconLink href="https://tiktok.com" icon={<BiLogoTiktok size={20} />} />
                    <SocialIconLink href="https://instagram.com" icon={<BiLogoInstagram size={20} />} />
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-toothy-500 mr-4"
                >
                    {isOpen ? <BiX size={30} /> : <BiMenu size={30} />}
                </button>
            </nav>
        </header>
    );
}

function SocialIconLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-toothy-400 rounded-full flex items-center justify-center text-toothy-500 hover:bg-toothy-400 hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    )
}