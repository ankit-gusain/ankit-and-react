import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./Data";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./components/Spinner";

export default function App() {

	const [courses, setCourses] = useState(null);
	const [loading, setLoading] = useState(true);

	async function fetchData() {
		setLoading(true);
		try {
			let response = await fetch(apiUrl);
			let output = response.json();

			setCourses(output.data);
		}
		catch (error) {
			console.error("ye there is error", error);
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, [])

	return (
		<>
			<div>
				<Navbar></Navbar>
			</div>

			<div>
				<Filter filterData={filterData} ></Filter>
			</div>

			<div>
				{
					loading ? (<Spinner />) : (<Cards />)
				}
			</div>
		</>
	)
}

