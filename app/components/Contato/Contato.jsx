import styles from "@/app/components/Contato/Contato.module.scss"
export default function Contato() {
    return (
        <div 
        id="contato"
        className={styles.Container}>
            <h4 className="title" >Pronto pra iniciar seu projeto?</h4>
            <a className={styles.Button}
                href="https://wa.me/5547996490392"
                target="blank_">
                <span>Faça um orçamento</span>
            </a>
        </div >
    )
}