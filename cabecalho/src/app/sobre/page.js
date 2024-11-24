import styles from "./sobre.module.css";
import Image from "next/image";

export default function Sobre() {
    return (
        <div>
            <h1 className={styles.ti}>Ratatouille</h1>
            <p className={styles.paragrafo}>Ratatouille é um filme estadunidense do gênero animação, sendo o oitavo longa-metragem do gênero produzido pela Pixar e lançado em 2007. Conta a história de Remy, um rato vivendo em Paris que sonha em se tornar um chef de cozinha. O filme foi dirigido por Brad Bird, que assumiu depois de Jan Pinkava em 2005, foi lançado nos EUA em 29 de junho de 2007 e foi lançado no Brasil em 6 de julho do mesmo ano.</p>
            <Image
            className={styles.imagem}
            src="/image/Ratatui.jpg"
            alt="Imagem do Filme"
            width={400}
            height={400}/>
        </div>
    )
}

