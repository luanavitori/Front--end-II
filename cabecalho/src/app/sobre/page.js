import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <main>
            <h1>Sobre</h1>
            <p className={styles.paragrafo}>Minha Segunda Página</p>
            <p id = {styles.paragrafoUnico}>Meu parágrafo especial</p>
        </main>
    )
}

