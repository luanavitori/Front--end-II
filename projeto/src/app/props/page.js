import Card from '@/components/Card';


export default function Props() {
    const dogs = [
        {
            id: 1,
            nome: 'Perigo',
            raca: 'Vira-lata',
            peso: 1.5,
            cor: 'Branca'
        },
        {
            id: 2,
            nome: 'Luna',
            raca: 'Pit-bull',
            peso: 35,
            cor: 'Preta'
        },
        {
            id: 3,
            nome: 'Mel',
            raca: 'Pug',
            peso: 8,
            cor: 'Marrom'
        }

    ]
    return (
        <div>
            <h1>Props</h1>
            <div>
                {dogs.map((dog) => (
                    <Card 
                    key={dog.id}
                    nome={dog.nome}
                    raca={dog.raca}
                    peso={dog.peso}
                    cor={dog.cor}
                    />
                ))}
            </div>
        </div>
   
    )
}