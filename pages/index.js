import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Form from "../components/form";
import Table from "../components/table";
import { useState } from "react";

export default function Home() {
	const [visible, setVisible] = useState(false);

	const handle = () => {
		setVisible(!visible);
	};

	return (
		<section>
			<Head>
				<title>CRUD Application</title>
				<meta name='description' content='The CRUD application' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='py-5'>
				<h1 className='text-xl md:text-5xl text-center font-bold py-10'>
					Employee Management
				</h1>

				<div className='container mx-auto flex justify-between py-5 border-5'>
					<div className='left flex gap-3'>
						<button
							className='flex bg-indigo-500 text-white px-4 py-3 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'
							onClick={handle}>
							Add Employee{" "}
							<span className='px-1'>
								<BiUserPlus size={25} />
							</span>
						</button>
					</div>
				</div>

				{/* collapse form */}
				<div className='container mx-auto py-5'>{visible && <Form />}</div>

				{/* table */}
				<div className='container mx-auto'>
					<Table />
				</div>
			</main>
		</section>
	);
}
