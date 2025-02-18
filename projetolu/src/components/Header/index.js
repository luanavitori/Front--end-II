'use client';
import Link from "next/link";
import styles from "./header.module.css"
import { useState } from "react";
import Image from "next/image";


export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header className={styles.header}>
    <nav className={styles.nav}>
        <ul className={styles.menu}>
            <li className={styles.item}>
                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/></svg></a>
            </li>
            <li className={styles.item}>
                <a href="/medico" className={styles.link}>Médico</a>
                <ul className={styles.submenu}>
                    <li><a href="/medico/listar" className={styles.submenuItem}>Listar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Adicionar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Editar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Excluir</a></li>
                </ul>
            </li>
            <li className={styles.item}>
                <a href="#" className={styles.link}>Paciente</a>
                <ul className={styles.submenu}>
                    <li><a href="/paciente/listar" className={styles.submenuItem}>Listar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Adicionar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Editar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Excluir</a></li>
                </ul>
            </li>
            <li className={styles.item}>
                <a href="#" className={styles.link}>Consulta</a>
                <ul className={styles.submenu}>
                    <li><a href="/consulta/listar" className={styles.submenuItem}>Listar Consultas</a></li>
                    <li><a href="/consulta/agendar" className={styles.submenuItem}>Agendar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Reagendar</a></li>
                    <li><a href="#" className={styles.submenuItem}>Cancelar</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
    )
} 