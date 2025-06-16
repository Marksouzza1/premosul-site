// src/app/components/Hero/index.jsx
import styles from './Hero.module.scss';
import Image from 'next/image';
import buildingImage from '@/public/images/hero.webp';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    Construindo o <br /> Futuro com <span className={styles.highlight}>Pré-Moldados</span>
                </h1>
                <p>
                    Especialistas em construção de casas geminadas e estruturas pré-moldadas. Qualidade, agilidade e economia para seu projeto.
                </p>
                <div className={styles.buttons}>
                    <a href="#contato" className={styles.primaryButton}>Solicitar Orçamento</a>
                    <a href="#projetos" className={styles.secondaryButton}>Ver Projetos</a>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={buildingImage}
                    alt="Projeto em construção"
                    className={styles.image}
                    placeholder="blur"
                />
            </div>
        </section>
    );
}
