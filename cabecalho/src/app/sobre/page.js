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
                height={400} />
        </div>
    )
}

export default function Listas() {
    const recita = ['abobrinhas', 'cebolas', 'pimentão verde', 'pimentão vermelho', 'alecrim', 'alho', 'louro', 'berinjelas', 'tomates', 'pimentão amarelo', 'azeite', 'manjericão', 'sal', 'molho de tomate']
    const receitaObj = [
        {
            id: 1,
            receita: 'abobrinhas',
        },
        {
            id: 2,
            receita: 'cebolas',
        },
        {
            id: 3,
            receita: 'pimentão verde',
        },
        {
            id: 4,
            receita: 'pimentão vermelho',
        },
        {
            id: 5,
            receita: 'alecrim',
        },
        {
            id: 6,
            receita: 'alho',
        },
        {
            id: 7,
            receita: 'louro',
        },

    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Listas</h1>
            <h2>Lista Comum</h2>
            <ul>
                {racas.map((raca, i) => (
                    <li key={i}>{i + 1} - {raca}</li>
                ))}
            </ul>
            <div>
                <h2>Lista de Objetos</h2>
                {racasObj.map((racasObj) => (
                    <div key={racasObj.id}>
                        <h3>{racasObj.id}</h3>
                        <p>{racasObj.raca}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

