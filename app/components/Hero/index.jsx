// src/components/Hero/index.jsx
import styles from './Hero.module.scss';
import Image from 'next/image';
import HeroImage from "@/public/images/hero.jpeg"

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <h1>Premol Sul</h1>
                <p> Premolsul, Construa o Futuro com Soluções Inovadoras em Estruturas Pre moldadas </p>
                <button>Ver todos os serviços</button>
            </div>
        </section>
    );
}
