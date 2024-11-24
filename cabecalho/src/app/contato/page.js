import styles from "./contato.module.css";
import Image from "next/image";


export default function Contato() {
  return (
    <div>
      <h1 className={styles.h1}>Contato</h1>
      <Image
            className={styles.imagem}
            src="/image/Rato.jpg"
            alt="Imagem do Filme"
            width={400}
            height={400}/>
    
    </div>
  );
}





