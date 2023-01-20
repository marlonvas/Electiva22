import { useState, useEffect } from "react";


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fingreso, setFingreso] = useState('');
  const [sintomas, setSintomas] = useState('');

  //Hook para capturar errores
  const[error, setError] = useState(false);

  //Limpiar o resetear el formulario cuando carga la página
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    //Validar formulario que no vaya con campos vacíos
  if([nombre, propietario, email, fingreso, sintomas].includes('')){
    
    setError(true);
    return;
  }

  setError(false);
  }

  
  

  return (
  <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h2 className="font-black text-3xl text-center">
      Seguimiento a Pacientes
    </h2>
    <p className="text-lg mt-5 text-center mb-10">
      Añade Pacientes{' '}
      <span className="text-indigo-600 font-bold">Administralos</span>
    </p>

    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
      {error && (
      <div className="bg-red-800 text-white 
      p-3 uppercase text-center font-bold 
      rounded-md">
        <p>
          Todos los campos son Obligatorios!
        </p>
      </div>)
      }
      <div className="mb-5">
        <label htmlFor="mascota" className="block text-gray-700 
        uppercase font-bold">Nombre Mascota:</label>

        <input id="mascota" type="text" className="border-2 
        w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
        placeholder="Nombre de la mascota"
        value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="propietario" 
        className="block text-gray-700 
        uppercase font-bold">Nombre del propietario:</label>

        <input id="propietario" type="text" 
        className="border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md"
          placeholder="Nombre del propietario"
          value={propietario} onChange={(e)=>setPropietario(e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="email" 
        className="block text-gray-700 
        uppercase font-bold">Email del propietario:</label>

        <input id="email" type="email" 
        className="border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md" 
         placeholder="Email Propietario"
         value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="fecha" 
        className="block text-gray-700 
        uppercase font-bold">Fecha de Ingreso:</label>

        <input id="fecha" type="date" 
        className="border-2 w-full p-2 mt-2
          rounded-md" 
          value={fingreso} onChange={(e)=>setFingreso(e.target.value)}
         />
      </div>

      <div className="mb-5">
        <label htmlFor="sintomas" 
        className="block text-gray-700 
        uppercase font-bold">Síntomas:</label>

        <textarea id="sintomas"  
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        placeholder="Describe los síntomas" 
        value={sintomas} onChange={(e)=>setSintomas(e.target.value)}
         />
      </div>

      <input type="submit" value="Agregar Mascota" 
      className="bg-indigo-600 w-full 
      p-3 text-white uppercase font-bold
       hover:bg-indigo-800 cursor-pointer transition-colors" />
    </form>

  </div>
    
  )
}

export default Formulario