'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const AOS = require('aos');
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);
    return (
        <>
            <header className="header-area">
                <div className="container">
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <Link href="/" className="logo">
                            <Image src={logo} alt="Logo" />
                        </Link>

                        <nav className={`navbar ${isActive ? 'active' : ''}`}>
                            <ul className="menu">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="About">About</Link></li>
                                <li><Link href="/Works">Works</Link></li>
                                <li><Link href="/Contact">Contact</Link></li>
                            </ul>
                            <Link href="/Contact" className="theme-btn">Let&apos;s talk</Link>
                        </nav>

                        <Link href="/Contact" className="theme-btn">Let&apos;s talk</Link>

                        <div className="show-menu" onClick={() => setIsActive(!isActive)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;