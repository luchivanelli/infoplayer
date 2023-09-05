import img2 from '../images/pelota.png'
import '../styles/seccion2.css'

const Section2 = ()=> {
    return(
        <div className='section-2'>
            <div className='section-2-info'>
                <div className='section-2-title title1'>
                    <h3>What is Infoplayer?</h3>           
                </div>
                <div className='section-2-description description1'>
                    <p>Infoplayer searches for data on the world's best-known soccer players</p>
                </div>
                <div className='section-2-title title2'>
                    <h3>How Infoplayer works?</h3>           
                </div>
                <div className='section-2-description description2'>
                    <p>It is as simple as writing the name of the footballer in the search engine</p>
                </div>
            </div>

            <div className='section-2-search'>
                <img src={img2}/>
                <button><a href='#buscador'>Try it</a></button>
            </div>
        </div>
    )
}

export default Section2