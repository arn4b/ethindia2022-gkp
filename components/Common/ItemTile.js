import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import store from "../../redux/slice";
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
import { Formik, Field, Form } from "formik";
import PrimaryButton from "./PrimaryButton";
import pushRentalService from "../../middlewares/pushRentalService";

const ItemTile = (props) => {
  const { img, name, symbol, date, price } = props;
	let smartAccount = useSelector((store) => store.secretAdress);
	const [openModal, setOpenModal] = useState(false);

  console.log(props);

	return (
		<div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-10">
			<img
				className="rounded-t-lg"
				src={img}
				alt="product image"
			/>
			<div className="px-5 pb-5 pt-5">
				<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{/* Bored Ape */}
          {name}
				</h5>
				<h6 className="tracking-tight text-gray-900 dark:text-white font-light ">
          {symbol}
				</h6>
				<div className="flex">
					<p className="font-semibold text-white">Expires on :&nbsp;</p>
					<p> {date}</p>
				</div>
				<div className="flex items-center justify-between mt-2">
					<img src="/images/polygon-matic-icon.svg" className="w-8" />
					<span
						className="text-3xl font-bold text-gray-900 dark:text-white"
						style={{ marginLeft: -160 }}
					>
						{price}
					</span>
					{props.isRent && (
						<div
							className="text-white bg-purple-1000 font-medium rounded-lg text-md px-5 py-2.5 text-center cursor-pointer"
							onClick={() => {
								setOpenModal(true);
							}}
						>
							Rent
						</div>
					)}
				</div>

				<Modal
					isModalOpen={openModal}
					toggleModal={(newBool) => {
						setOpenModal(newBool);
					}}
				>
					<div className="bg-black rounded-2xl py-10 px-10">
						<Formik
							initialValues={{
								name: "",
								symbol: "",
								limit: 0,
							}}
							onSubmit={(values) => {
								console.log(values);
								pushRentalService({ ...values, smartAccount });
							}}
						>
							<Form className="flex flex-col w-3/5 items-center justify-center">
								<label htmlFor="name" className="p-2">
									Name
								</label>
								<Field
									id="name"
									name="name"
									placeholder="Jane"
									className="p-2 rounded-md my-4"
								/>

								<label htmlFor="symbol" className="p-2">
									Symbol
								</label>
								<Field
									id="symbol"
									name="symbol"
									placeholder="MATIC"
									className="p-2 rounded-md my-4"
								/>

								<label htmlFor="limit" className="p-2">
									Total
								</label>
								<Field
									id="limit"
									name="limit"
									placeholder="00"
									className="p-2 rounded-md my-4"
								/>

								<PrimaryButton
									type="submit"
									name="Submit"
								></PrimaryButton>
							</Form>
						</Formik>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default ItemTile;
