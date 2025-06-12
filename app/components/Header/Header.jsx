import styles from "@/app/components/Header/Header.module.scss";
import Logo from "@/public/images/Logo-Premolsul.png"
import Image from "next/image";
export default function Header() {
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
            <div className={styles.navContainer}>
                <nav className={styles.nav}>
                    <a href="#">Serviços</a>
                    <a href="#">Projetos</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Contato</a>
                </nav>
                <button className={styles.quoteButton}>
                    <span>Faça um orçamento</span>
                </button>
            </div>
        </header>
    );
}
