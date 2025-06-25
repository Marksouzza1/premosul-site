'use client';

import styles from "@/app/components/Serviços/Servico.module.scss";
import Image from "next/image";

export default function Servicos() {
    const cards = [
        {
            src: "/images/servico1.jpeg",
            alt: "Construção de galpão pré-moldado",
            title: "Galpões Industriais",
            description: "Eficiência e resistência para projetos de grande porte."
        },
        {
            src: "/images/servico2.png",
            alt: "Casas geminadas modernas",
            title: "Casas Geminadas",
            description: "Conforto, economia e aproveitamento inteligente do espaço urbano."
        },
        {
            src: "/images/servico3.jpeg",
            alt: "Soluções residenciais completas",
            title: "Projetos Personalizados",
            description: "Adaptamos nossos pré-moldados às suas necessidades."
        }
    ];

    return (
        <section
            id="servicos"
            className={styles.services}>
            <div className={styles.header}>
                <h2 className="title">
                    Soluções PremolSul para Você
                </h2>
                <p className="subtitle">
                    Na PremolSul, oferecemos soluções completas e eficientes para cada tipo de construção, garantindo que seu projeto seja entregue com qualidade e no prazo certo.
                </p>
            </div>
            <div className={styles.grid}>
                <div className={styles.cardImage}>
                    {cards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <Image
                                src={card.src}
                                alt={card.alt}
                                width={350}
                                height={250}
                                className={styles.image}
                            />
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
