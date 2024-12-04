export default function Listas() {
    const racas = ['Vira-lata', 'Pit-bul', 'Pug', 'Shitzu', 'Labrador']
    const racasObj = [
        {
            id: 1,
            raca: 'Vira-lata',
        },
        {
            id: 2,
            raca: 'Pit-bul',
        },
        {
            id: 3,
            raca: 'Pug',
        },
        {
            id: 4,
            raca: 'Shitzu',
        },
        {
            id: 5,
            raca: 'Labrador',
        }
    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Listas</h1>
            <h2>Lista Comum</h2>
            <ul>
                {racas.map((raca, i) => (
                    <li key={i}>{i + 1} - {raca}</li>
                ))}
            </ul>
            <div>
                <h2>Lista de Objetos</h2>
                {racasObj.map((racasObj) => (
                    <div key={racasObj.id}>
                        <h3>{racasObj.id}</h3>
                        <p>{racasObj.raca}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}