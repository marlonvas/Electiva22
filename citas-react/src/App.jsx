
/**importar modulos */
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"



/*funcion creadora de la aplicacion */
function App() {
  
 /*estado de retorno constsante */

 
  return (
    /*etiqueta padre y el body de la pagina */
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
      <Formulario />
      <ListadoPaciente />

      </div>
      
      
    </div>
  )
}
/*export para importar el modulo a otras partes de la app */
export default App
