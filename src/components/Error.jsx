const Error = ({text}) => {
	return (
		<div
			className='bg-red-100 border text-center border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative'
			role='alert'>
			<span className='block sm:inline'>{text}</span>
		</div>
	);
};

export default Error;
