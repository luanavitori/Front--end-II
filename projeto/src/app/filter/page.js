'use client'
import { useState } from "react"

export default function filter(){
    const nomes=[ 'Luana','Alini','Márcia','Luciano']
    const[busca,setbusca]= useState('')
    const nomesBusca=nomes.filter(nome=>(nome.startsWith(busca)))
    const nums= [1,2,2,3,4,5,6,7,8,9]
    const pares= nums.filter(num=> num %2 == 0)
    console.log(nums)
    console.log(pares)

    return(
        <div>
            <h1> filter/filtro</h1>
            <input type='text' onChange = {(ev)=> (setbusca(ev.target.value))}/>
            
            <ul>
                {nomesBusca.map((nome,i) =>(
                    <li key={i}>{i+1}- {nome}
                    </li>
                ))}
            </ul>
        </div>
    )
}