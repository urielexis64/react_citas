import {useEffect, useState} from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		const listado = localStorage.getItem("pacientes");
		if (listado) {
			setPacientes(JSON.parse(listado));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("pacientes", JSON.stringify(pacientes));
	}, [pacientes]);

	const deletePaciente = (id) => {
		const filteredPacientes = pacientes.filter((paciente) => paciente.id !== id);
		setPacientes(filteredPacientes);
	};

	return (
		<div className='container mx-auto mt-20'>
			<Header />
			<div className='mt-12 md:flex '>
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					deletePaciente={deletePaciente}
				/>
			</div>
		</div>
	);
}

export default App;
