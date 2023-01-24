import Pacientes from "./Pacientes"


function ListadoPaciente({pacientes,setpaciente}) {
  return (
   <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

    {pacientes && pacientes.length ? 
    <>
    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {' '}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes.map(indice=>
      <Pacientes
      key ={indice.id}
      indice = {indice}
      setpaciente ={setpaciente}
      />
      )}

    </>: 
    <>
    <h2 className="font-black text-3xl text-center">No se encontraron Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Comience agregando pacientes {' '}
        <span className="text-indigo-600 font-bold">Aqui apareceran</span>
      </p>
    </>}
      

      
      
   </div>
  )
}

export default ListadoPaciente