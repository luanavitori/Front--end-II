'use client';
import Link from "next/link";
import styles from "./header.module.css"
import { useState } from "react";


export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header className={styles.header}>
    <nav className={styles.nav}>
        <ul className={styles.menu}>
            <li className={styles.item}>
                <a href="#" className={styles.link}>Médico</a>
                <ul className={styles.submenu}>
                    <li><a href="/medico" className={styles.submenuItem}>Listar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Adicionar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Editar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Excluir</a></li>
                </ul>
            </li>
            <li className={styles.item}>
                <a href="#" className={styles.link}>Paciente</a>
                <ul className={styles.submenu}>
                    <li><a href="#" className={styles.submenuItem}>Listar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Adicionar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Editar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Excluir</a></li>
                </ul>
            </li>
            <li className={styles.item}>
                <a href="#" className={styles.link}>Consulta</a>
                <ul className={styles.submenu}>
                    <li><a href="#" className={styles.submenuItem}>Listar Consultas</a></li>
                    <li><a href="#" className={styles.submenuItem}>Agendar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Reagendar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Cancelar</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
    )
} 