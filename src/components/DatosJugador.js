import '../styles/datosjugador.css'

const DatosJugador = ({datos})=> {
    const cerrarModal = ()=> {
        const boton = document.querySelector('.datos')
        boton.classList.add('hidden')
    }

    if (datos == null) {
        return (<p className='datos-error'>Player not found. Please try again</p>)
    } else {
        console.log(datos[0])
        const {dateBorn, strPosition, strBirthLocation, strDescriptionEN, strHeight, strInstagram, strPlayer, strSide, strTeam, strTwitter, strWeight} = datos[0]
        return (
            <div className='datos'>
                <div className='datos-info'>
                    <button className='boton-cerrar' onClick={(e)=> cerrarModal(e)}>X</button>
                    <h2 className='datos-name'>{strPlayer}</h2>
                    <p className='datos-description'>{strDescriptionEN}</p>
                    <ul className='datos-lista'>
                        <li>Date of birth: <b>{dateBorn}</b></li>
                        <li>Place of birth: <b>{strBirthLocation}</b></li>
                        <li>Team: <b>{strTeam}</b></li>
                        <li>Position: <b>{strPosition}</b></li>
                        <li>Dominant leg: <b>{strSide}</b></li>
                        <li>Height: <b>{strHeight}</b></li>
                        <li>Weight: <b>{strWeight}</b></li>
                        <li translate='no'>Twitter: <a href={`https://${strTwitter}`} target='_blank'><b>{strTwitter}</b></a></li>
                        <li translate='no'>Instagram: <a href={`https://${strInstagram}`} target='_blank'><b>{strInstagram}</b></a></li>
                    </ul>
                    <p className='datos-precaucion'>The API may contain incorrect data</p>
                </div>
            </div>
        )
    }
}

export default DatosJugador