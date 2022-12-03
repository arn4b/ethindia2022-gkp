import React, { useState } from "react";
import Navbar from "../../components/Common/Navbar";
import { Formik, Field, Form } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from "../../components/Common/PrimaryButton";
import pushSoulBoundService from "../../middlewares/pushSoulBoundService";
import getGlobalIds from "../../middlewares/getGlobalIds";
import Modal from '../../components/Common/Modal';
import QRCode from "react-qr-code";

import { useToast } from "@chakra-ui/react";
import SecondaryButton from '../../components/Common/SecondaryButton';
import pushIdToSoulBoundKey from "../../middlewares/pushIdToSoulBoundKey";

const SoulBound = () => {
    const toast = useToast();
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="bg-black">
        <Navbar />
        <h1>Soul Bound Tokens</h1>
        <Formik
            initialValues={{
                name: "",
                symbol: "",
                limit: "",
                price: "",
            }}
            onSubmit={async (values) => {
            console.log(values.duration * 86400);
            toast({
                title: `Check your metamask for transaction`,
                position: "top-right",
                isClosable: true,
                duration: 5000,
                status: "success",
            });
            try {
                toast({
                    title: `Calling all contracts...`,
                    position: "top-right",
                    isClosable: true,
                    duration: 50000,
                    status: "info",
                });
                const result = await pushSoulBoundService(values);
                toast({
                    title: `pushSoulBoundService Called Successfully`,
                    position: "top-right",
                    isClosable: true,
                    duration: 5000,
                    status: "success",
                });

                const returnedGlobalId = await getGlobalIds();

                toast({
                    title: `getGlobalIds Called Successfully`,
                    position: "top-right",
                    isClosable: true,
                    duration: 5000,
                    status: "success",
                });

                const finalResult = await pushIdToSoulBoundKey(returnedGlobalId - 1);
                localStorage.setItem('contractAddress', finalResult);
                console.log(finalResult);
                setOpenModal(true)
            } catch (err) {
                console.log(err.message);
                toast({
                    title: `Contract Called Failed`,
                    position: "top-right",
                    isClosable: true,
                    duration: 5000,
                    status: "error",
                });
            }
            }}
        >
            <Form className="flex flex-col justify-center items-center">
            <label htmlFor="name" className="p-2 text-white">
                Name
            </label>
            <Field
                id="name"
                name="name"
                placeholder="Jane"
                className="p-2 rounded-md my-1"
            />

            <label htmlFor="symbol" className="p-2 text-white">
                Symbol
            </label>
            <Field
                id="symbol"
                name="symbol"
                placeholder="MATIC"
                className="p-2 rounded-md my-1"
            />

            <label htmlFor="limit" className="p-2 text-white">
                Limit
            </label>
            <Field
                id="limit"
                name="limit"
                type="number"
                placeholder="00"
                className="p-2 rounded-md my-1"
            />

            <label htmlFor="price" className="p-2 text-white">
                Price
            </label>
            <Field
                id="price"
                name="price"
                type="number"
                placeholder="00"
                className="p-2 rounded-md my-1"
            />

            <PrimaryButton type="submit" name="Submit"></PrimaryButton>
            </Form>
        </Formik>

        <Modal
            isModalOpen={openModal}
            toggleModal={(newBool) => {
                setOpenModal(newBool);
            }}
        >
            <div className='p-8 flex flex-col justify-center items-center bg-violet-700 rounded-xl'>
                <div className='text-xl font-bold pb-4'>Heres your QR Code to Mint the NFT</div>
                <QRCode value={`${window.location.hostname}/qr?contractAddress=${localStorage.getItem('contractAddress')}`} className="rounded-lg m-4" />
                <a href={`${window.location.hostname}/qr?contractAddress=${localStorage.getItem('contractAddress')}`} >
                    <div className='bg-white text-purple-800 rounded-md p-4'>{window.location.hostname}/qr?contractAddress={localStorage.getItem('contractAddress')}</div>
                </a>
                <SecondaryButton name="Close" onClick={() => setOpenModal(false)} ></SecondaryButton>
            </div>
        </Modal>
        </div>
    );
};
export default SoulBound;
