import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes}) => {
	return (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
			<h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
			<p className='text-xl mt-5 mb-10 text-center'>
				Administra tus {""}
				<span className='text-indigo-600 font-bold'>pacientes y citas</span>
			</p>

			{pacientes.length === 0 ? (
				<p className='text-center text-gray-500'>No hay pacientes</p>
			) : (
				pacientes.map((paciente) => <Paciente key={paciente.id} paciente={paciente} />)
			)}
		</div>
	);
};

export default ListadoPacientes;
