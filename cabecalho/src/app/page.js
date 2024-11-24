//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  const nome = 'Luana'
  return (
    <div>
      <h1 className={styles.h1}>Bem Vindo ao Ratatouille</h1>
      <Image 
      className={styles.imagem} 
      src="/image/Rata.jpg" 
      alt="Imagem do Filme" 
      width={600} 
      height={400} />
      <p>Autor: {nome}</p>
    </div>
  );
}
