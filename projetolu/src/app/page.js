//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  const nome = 'Luana'
  return (
    <div>
      <h1 className={styles.h1}>Bem Vindo a Clínica Médica Bem Estar</h1>
      <p className={styles.p}>Na nossa clínica, sua saúde está em boas mãos. Agende hoje mesmo a sua consulta!</p>

    </div>
  );
}

