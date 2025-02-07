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
                        
                        <li className={styles.hom}><Link href='/'><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22" stroke="#ffffff" stroke-width="1.5"></path> <path d="M21 22V8.5C21 7.09554 21 6.39331 20.6629 5.88886C20.517 5.67048 20.3295 5.48298 20.1111 5.33706C19.6067 5 18.9045 5 17.5 5" stroke="#ffffff" stroke-width="1.5"></path> <path d="M3 22V8.5C3 7.09554 3 6.39331 3.33706 5.88886C3.48298 5.67048 3.67048 5.48298 3.88886 5.33706C4.39331 5 5.09554 5 6.5 5" stroke="#ffffff" stroke-width="1.5"></path> <path d="M12 22V19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 12H14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.5 11H7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.5 14H7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 11H18.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 14H18.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.5 8H7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 8H18.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 15H14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 9V5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 7L10 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></li>
                        <li className={styles.li}>
                            <a href="/medico">Médicos</a>
                                <ul className={styles.med}>
                                    <li>
                                        <a className={styles.subm} href="/medico">Listar</a>
                                    </li>
                                    <li>
                                        <a className={styles.subm} href="#">Adicionar</a>
                                    </li>
                                    <li>
                                        <a className={styles.subm} href="#">Editar</a>
                                    </li>
                                    <li>
                                        <a className={styles.subm} href="#">Excluir</a>
                                    </li>
                            </ul>
                        </li>
                    
                        
                        <li><Link href='/consulta'>Consulta</Link></li>
                        <li><Link href='/paciente'>Pacientes</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
} 