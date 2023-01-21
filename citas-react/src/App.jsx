
/*importar modulos*/
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"
import { useState } from "react"

/*Funcion creadora de la aplicación */ 
function App() {

  const [pacientes,setPacientes] = useState([])
  
  return (
    /*Etiqueta padre y el body de la página*/
    <div className="container mx-auto mt-20"> 
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes = {pacientes}
          setPacientes ={setPacientes}
        />
        <ListadoPaciente 
          pacientes = {pacientes}
        />
      </div>
    </div>
  )
}
/*Export para importar el módulo a otras partes de la app*/
export default App
