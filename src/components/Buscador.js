import '../styles/buscador.css'

const Buscador = ({value, setValue, buscar})=> {
    return (
        <div className='buscador' id='buscador'>
            <label>Player's name:</label>
            <div className='buscador-input'>
                <input type="text" placeholder='Name and last name' value={value} onChange={(e)=> setValue(e.target.value)}/>
                <button type="submit" onClick={()=> value[0] !== '' ? buscar(value) : alert('Complete el campo')}>Search</button>
            </div>
        </div>
    )
}

export default Buscador