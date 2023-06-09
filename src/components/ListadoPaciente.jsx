import Pacientes from "./Pacientes"
 
const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
      <h2 className="font-black text-center text-3xl">ListadoPaciente</h2>
      <p className="text-lg text-center mt-5 mb-6">
       Administra tus {''}
       <span className="text-indigo-700 font-bold " >Pacientes y Citas</span>
      </p>

      {pacientes.map( (paciente ) =>(
          <Pacientes 
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
        )
      ) 
      }
        </>
        
      ) : (
      <>
      <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
      <p className="text-lg text-center mt-5 mb-6">
       Agrega nuevos pacientes {''}
       <span className="text-indigo-700 font-bold " >y apareceran en este lugar</span>
      </p>      
      
      
      </> 
      
      
      )}




      

    
    </div>
  )
}

export default ListadoPaciente