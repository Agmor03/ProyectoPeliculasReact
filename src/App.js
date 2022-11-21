
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Pelicula from './components/Pelicula';
import peliculas from './json/peliculas.json';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <header>
            <img src="./archivos/pexels-dmitry-demidov-3921045.jpg" alt="Logo" />
            <h1>CINEMA DREAMS</h1>
          </header>
          {peliculas.map(peli =>
            <Pelicula
              img={peli.img}
              titulo={peli.titulo}
              descripcion={peli.descripcion}
              duracion={peli.duracion}
              reparto={peli.reaparto}
              puntuacion={peli.puntuacion}
            ></Pelicula>)}
        </Row>
      </Container>
    </div>
  );
}

export default App;
