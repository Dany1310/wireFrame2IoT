import { useState } from 'react'
import './App.css'
import LM from './fotos/LM555.jpg'
import Ultra from'./fotos/Ultrasonico.jpg'
import Rover from'./fotos/Xrover.jpg'
import Rasp from './fotos/rasp.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid">
      <h2>Equipo listas triplemente ligadas</h2>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gráficas</a>
        </li>
      </ul>

      <div className="">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={LM} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Ultra} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Rover} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Rasp} className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default App
