'use client'
import styles from "@/app/components/Header/Header.module.scss";
import Logo from "@/public/images/Logo-Premolsul.png"
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1023) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                </div>
                <Image className={styles.logoText}
                    src={Logo}
                    width={200}
                    alt="Logo premolsul"
                />
            </div>

            <button
                className={styles.hamburger}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu"
            >☰</button>
            <div className={`${styles.navContainer} ${isMenuOpen ? styles.showMenu : ''}`}>
                <nav className={styles.nav}>
                    <a href="#servicos" onClick={handleNavLinkClick}>Serviços</a>
                    <a href="#projetos" onClick={handleNavLinkClick}>Projetos</a> 
                    <a href="#contato" onClick={handleNavLinkClick}>Contato</a>
                </nav>
                <a
                    href="https://wa.me/5547996490392"
                    className="quoteButton"
                    target="blank_">
                    <span>Faça um orçamento</span>
                </a>
            </div>
        </header>
    );
}
