'use client';
import Link from "next/link";
import styles from "./Header.module.css"
import { useState } from "react";
import Image from "next/image";



export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header>
            <button onClick={() => setShowMenu(!showMenu)}>
                <Image className={styles.rat}
                    src="/Menu.png"
                    alt="Ícone do menu"
                    width={30}
                    height={30}

                />
            </button>
            {

                showMenu &&

                <nav>
                    <ul className={styles.li}>
                        <img className={styles.me}
                            src="/Ratatuiico.png"
                            alt="menu"
                            width={75}
                            height={40}
                        />
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/sobre'>Sobre</Link></li>
                        <li><Link href='/contato'>Contato</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
} 