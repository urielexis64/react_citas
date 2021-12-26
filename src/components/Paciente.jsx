const Paciente = ({paciente}) => {
	const {nombreMascota, nombrePropietario, email, fechaAlta, sintomas} = paciente;

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
		</div>
	);
};

export default Paciente;
