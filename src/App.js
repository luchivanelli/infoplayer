import axios from "axios";
import { useEffect, useState } from "react";
import DatosJugador from "./components/DatosJugador";
import Buscador from "./components/Buscador";
import Header from "./components/Header";
import Seccion1 from "./components/Seccion1";
import Section2 from "./components/Section2";
import './styles/index.css'

function App() {
  const [value, setValue] = useState([''])
  const [player, setPlayer] = useState([''])
  const [datos, setDatos] = useState([])
  

  useEffect(()=> {
    axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`).then((result)=>{
      setDatos(result.data)
    })
  }, [player])


  const buscar = (value)=> {
    setPlayer(value.split(' ').join('%20'))
    console.log(datos.player)
  }

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <Seccion1 />
      <Section2 />

      {/* Buscador / Form */}
      <Buscador value={value} setValue={setValue} buscar={buscar} />

      {/* Datos del player */}
      {player[0] !== '' ? <DatosJugador datos={datos.player} /> : null}
    </div>
  );
}

export default App;
