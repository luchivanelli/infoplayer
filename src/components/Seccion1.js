import img from '../images/nene1.png'
import '../styles/seccion1.css'
import { Container, Row, Col } from 'react-bootstrap'

const Seccion1 = ()=> {
    return (
        <Container className='container seccion-oscura'>
            <Row className='section-1-row'>
                <Col sm={6} xs={12} className='section-1-col'>
                    <h2 className='subtitle'>Find information about your favorite soccer players</h2>
                    <button className='button'><a href='#buscador'>Search now!</a></button>
                    <p>Infoplayer © 2023 by Luciana Vanelli</p>
                </Col>
                <Col sm={6} xs={12} className='section-1-col'>
                    <img src={img} className='image'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Seccion1