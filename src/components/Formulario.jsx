import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
	const [nombreMascota, setNombreMascota] = useState("");
	const [nombrePropietario, setNombrePropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fechaAlta, setFechaAlta] = useState("");
	const [sintomas, setSintomas] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length !== 0) {
			setNombreMascota(paciente.nombreMascota);
			setNombrePropietario(paciente.nombrePropietario);
			setEmail(paciente.email);
			setFechaAlta(paciente.fechaAlta);
			setSintomas(paciente.sintomas);
		} else {
			setNombreMascota("");
			setNombrePropietario("");
			setEmail("");
			setFechaAlta("");
			setSintomas("");
		}
	}, [paciente]);

	const generateId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);
		return random + fecha;
	};

	const reset = () => {
		setNombreMascota("");
		setNombrePropietario("");
		setEmail("");
		setFechaAlta("");
		setSintomas("");
		setError(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			nombreMascota.trim() === "" ||
			nombrePropietario.trim() === "" ||
			email.trim() === "" ||
			fechaAlta.trim() === "" ||
			sintomas.trim() === ""
		) {
			setError(true);
			return;
		}

		const objPaciente = {
			nombreMascota,
			nombrePropietario,
			email,
			fechaAlta,
			sintomas,
		};

		if (paciente.id) {
			objPaciente.id = paciente.id;
			const pacientesFiltrados = pacientes.map((pacienteState) =>
				pacienteState.id === paciente.id ? objPaciente : pacienteState
			);
			setPacientes(pacientesFiltrados);
			setPaciente({});
		} else {
			objPaciente.id = generateId();
			setPacientes((prevPacientes) => [...prevPacientes, objPaciente]);
		}

		reset();
	};

	return (
		<div className='md:w-1/2 lg:w-2/5 mx-5'>
			<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
			<p className='text-lg mt-5 text-center mb-10'>
				Agregar pacientes y {""}
				<span className='text-indigo-600 font-bold'>Administrarlos</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
				{error && <Error text='Todos los campos son obligatorios' />}
				<div className='mb-5'>
					<label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
						Nombre Mascota
					</label>
					<input
						value={nombreMascota}
						onChange={(e) => setNombreMascota(e.target.value)}
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
						value={nombrePropietario}
						onChange={(e) => setNombrePropietario(e.target.value)}
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={fechaAlta}
						onChange={(e) => setFechaAlta(e.target.value)}
						type='date'
						className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
						Síntomas
					</label>
					<textarea
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
						className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
						id='sintomas'
						placeholder='Describe los sintomas'
					/>
				</div>
				<input
					type='submit'
					value={paciente.id ? "Actualizar paciente" : "Agregar paciente"}
					className='bg-indigo-600 w-full text-white p-3 uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors'
				/>
			</form>
		</div>
	);
};

export default Formulario;
