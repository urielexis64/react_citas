import React from "react";

const Formulario = () => {
	return (
		<div className='md:w-1/2 lg:w-2/5'>
			<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
			<p className='text-lg mt-5 text-center mb-10'>
				Agregar pacientes y {""}
				<span className='text-indigo-600 font-bold'>Administrarlos</span>
			</p>
			<form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
				<div className='mb-5'>
					<label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
						Nombre Mascota
					</label>
					<input
						id='mascota'
						type='text'
						placeholder='Nombre de la mascota'
						className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='propietario'
						className='block text-gray-700 uppercase font-bold'>
						Propietario
					</label>
					<input
						id='propietario'
						type='text'
						placeholder='Nombre del propietario'
						className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
						Email
					</label>
					<input
						id='email'
						type='email'
						placeholder='Email'
						className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
						Alta
					</label>
					<input
						id='alta'
						type='date'
						className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
						Alta
					</label>
					<textarea
						className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
						id='sintomas'
						placeholder='Describe los sintomas'
					/>
				</div>
				<input
					type='submit'
					value={"Agregar paciente"}
					className='bg-indigo-600 w-full text-white p-3 uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors'
				/>
			</form>
		</div>
	);
};

export default Formulario;
