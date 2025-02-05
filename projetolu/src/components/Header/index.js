'use client';
import Link from "next/link";
import styles from "./header.module.css"
import { useState } from "react";


export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header>
            {
                showMenu &&

                <nav>
                    <ul className={styles.li}>
                        
                        <li className={styles.hom}><Link href='/'><svg
                         width="45px" viewBox="0 0 24 24" 
                         fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 6H5.2C4.0799 6 3.51984 6 3.09202 6.21799C2.71569 6.40973 2.40973 6.71569 2.21799 7.09202C2 7.51984 2 8.0799 2 9.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V9.2C22 8.07989 22 7.51984 21.782 7.09202C21.5903 6.71569 21.2843 6.40973 20.908 6.21799C20.4802 6 19.9201 6 18.8 6H17M2 10H4M20 10H22M2 14H4M20 14H22M12 6V10M10 8H14M17 21V6.2C17 5.0799 17 4.51984 16.782 4.09202C16.5903 3.71569 16.2843 3.40973 15.908 3.21799C15.4802 3 14.9201 3 13.8 3H10.2C9.07989 3 8.51984 3 8.09202 3.21799C7.71569 3.40973 7.40973 3.71569 7.21799 4.09202C7 4.51984 7 5.0799 7 6.2V21H17ZM14 21V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V21H14Z" stroke="#fffafa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></li>
                        <li className={styles.li}>
                            <a href="#">Médicos</a>
                            <ul className={styles.subm}>
                                <li className={styles.Header_li}>
                                    <a href="/medico">Listar</a>
                                </li>
                                <li className={styles.Header_li}>
                                    <a href="#">Adicionar</a>
                                </li>
                                <li className={styles.Header_li}>
                                    <a href="#">Editar</a>
                                </li>
                                <li className={styles.Header_li}>
                                    <a href="#">Excluir</a>
                                </li>
                            </ul>
                        </li>
                    
                        
                        <li><Link href='/consulta'>Consulta</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
} 