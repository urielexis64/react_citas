const Paciente = ({paciente, setPaciente, deletePaciente}) => {
	const {id, nombreMascota, nombrePropietario, email, fechaAlta, sintomas} = paciente;

	const handleDelete = () => {
		const response = confirm("¿Estas seguro de eliminar este paciente?");
		if (response) {
			deletePaciente(id);
		}
	};

	return (
		<div className='mx-5 my-8 px-5 shadow-md bg-white py-10 rounded-xl'>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Nombre: {""}
				<span className='font-normal normal-case'>{nombreMascota}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Propietario: {""}
				<span className='font-normal normal-case'>{nombrePropietario}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Correo: {""}
				<span className='font-normal normal-case'>{email}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Fecha de alta: {""}
				<span className='font-normal normal-case'>{fechaAlta}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Síntomas: {""}
				<span className='font-normal normal-case'>{sintomas}</span>
			</p>
			<div className='flex justify-between mt-10'>
				<button
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase py-2 px-10 rounded-lg'
					onClick={() => setPaciente(paciente)}>
					Editar
				</button>
				<button
					onClick={handleDelete}
					className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-lg'>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Paciente;
