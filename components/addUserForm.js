import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Bug from "./bug";

const formReducer = (state, event) => {
	return {
		...state,
		[event.target.name]: event.target.value,
	};
};

const AddUserForm = () => {
	const [formData, setFormData] = useReducer(formReducer, {});

	const HandleSubmit = (event) => {
		event.preventDefault();
		// if (Object.keys(formData).length === 0)
		// return <Bug message={"Don not allowed to submit empty data"} />;
		console.log(formData);
	};

	if (Object.keys(formData).length > 0) return <Bug message={"Error"} />;

	return (
		<form className='grid lg:grid-cols-2 w-4/6 gap-4' onSubmit={HandleSubmit}>
			<div className='input-type'>
				<input
					type='text'
					name='first-name'
					onChange={setFormData}
					className='border w-full px-5 py-3 focus:outline:none rounded-md'
					placeholder='First Name'
				/>
			</div>
			<div className='input-type'>
				<input
					type='text'
					name='last-name'
					onChange={setFormData}
					className='border w-full px-5 py-3 focus:outline:none rounded-md'
					placeholder='Last Name'
				/>
			</div>
			<div className='input-type'>
				<input
					type='text'
					name='email'
					onChange={setFormData}
					className='border w-full px-5 py-3 focus:outline:none rounded-md'
					placeholder='Email'
				/>
			</div>
			<div className='input-type'>
				<input
					type='text'
					name='salary'
					onChange={setFormData}
					className='border w-full px-5 py-3 focus:outline:none rounded-md'
					placeholder='Salary '
				/>
			</div>
			<div className='input-type'>
				<input
					type='date'
					name='date'
					onChange={setFormData}
					className='border px-5 py-3 focus:outline-none rounded-md'
				/>
			</div>

			<div className='flex gap-10 items-center'>
				<div className='form-check'>
					<input
						type='radio'
						name='status'
						value='Active'
						onChange={setFormData}
						id='radioDefault1'
						className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 checked:bg-green-500 check:border-gray-500 focus:outline:none transition duration-200 mt-1 alight-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointers'
					/>
					<label htmlFor='radioDefault1' className='inline-block text-gray-800'>
						Active
					</label>
				</div>
				<div className='form-check'>
					<input
						type='radio'
						name='status'
						value='Inactive'
						onChange={setFormData}
						id='radioDefault2'
						className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 checked:bg-green-500 check:border-gray-500 focus:outline:none transition duration-200 mt-1 alight-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointers'
					/>
					<label htmlFor='radioDefault2' className='inline-block text-gray-800'>
						Inactive
					</label>
				</div>
			</div>

			<button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
				Add{" "}
				<span className='px-1'>
					<BiPlus size={24} />
				</span>
			</button>
		</form>
	);
};

export default AddUserForm;
