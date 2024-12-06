'use client';
import Link from "next/link";
import styles from "./header.module.css"
import { useState } from "react";


export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header>
            <button onClick={()=>setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu &&

                <nav>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/sobre'>Sobre</Link></li>
                        <li><Link href='/contato'>Contato</Link></li>
                        <li><Link href='/listas'>Listas</Link></li>
                        <li><Link href='/props'>Props</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
} 