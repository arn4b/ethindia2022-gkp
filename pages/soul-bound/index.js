import React from "react";
import Navbar from "../../components/Common/Navbar";
import ItemTile from "../../components/Common/ItemTile";
import { Formik, Field, Form } from "formik";

const SoulBound = () => (
	<div>
		<Navbar />
		<h1>Sign Up</h1>
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
			}}
			onSubmit={async (values) => {
				console.log(JSON.stringify(values, null, 2));
			}}
		>
			<Form>
				<label htmlFor="firstName">First Name</label>
				<Field id="firstName" name="firstName" placeholder="Jane" />

				<label htmlFor="lastName">Last Name</label>
				<Field id="lastName" name="lastName" placeholder="Doe" />

				<label htmlFor="email">Email</label>
				<Field
					id="email"
					name="email"
					placeholder="jane@acme.com"
					type="email"
				/>
				<button type="submit">Submit</button>
			</Form>
		</Formik>
		<ItemTile />
	</div>
);

export default SoulBound;
