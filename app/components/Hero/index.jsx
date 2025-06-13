// src/components/Hero/index.jsx
import styles from './Hero.module.scss';
export default function Hero() {
    return (
        <div className='container'>
            <section className={styles.hero}>
                <div className={styles.overlay}>
                    <h1>Premol Sul: Construção de Galpões Pré-Moldados, Sobrados e Geminados em Jaraguá do Sul</h1>
                    <p> Do planejamento à entrega, seu galpão, sobrado ou geminado com a excelência Premol Sul em Santa Catarina </p>
                </div>
            </section>
        </div>
    );
}
