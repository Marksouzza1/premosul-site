import styles from "@/app/components/Footer/Footer.module.scss"
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Contato: (47) 99999-9999</p>
            <p>Email: premolsul.contato@gmail.com</p>
            <p>© {new Date().getFullYear()} Premosul - Todos os direitos reservados.</p>
        </footer>
    )
}