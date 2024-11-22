import styles from "./contato.module.css";

export default function Contato() {
    return (
        <main>
            <h1 className={styles.cont}>Contato</h1>
            <p className={styles.paragrafo}>Minha Terceira Página</p>
            <p id = {styles.paragrafoUnico}>Meu parágrafo especial</p>
        </main>
    )
}