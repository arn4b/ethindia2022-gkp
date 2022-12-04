import React, { useState } from 'react'
import Navbar from '../../components/Common/Navbar'
import { Formik, Field, Form } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from '../../components/Common/PrimaryButton';
import { useToast } from '@chakra-ui/react';
import Modal from '../../components/Common/Modal';
import QRCode from "react-qr-code";

import pushDirectToContract from '../../middlewares/pushDirectToContract'
import SecondaryButton from '../../components/Common/SecondaryButton';

const D2C = () => {
    const toast = useToast();
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <Navbar />
            <div className="bg-black flex justify-center items-center text-white">
            <div className="w-2/5 rounded-lg p-4 m-16" style={{"border":"4px rgb(107 33 168) solid"}}>
            <h1 className="text-4xl font-fragile text-white m-4 flex">Direct to Contract</h1>
                <Formik
                    initialValues={{
                        name: '',
                    }}
                    onSubmit = {
                        async (values) => {
                            console.log(JSON.stringify(values, null, 2));
                            toast({
                                title: `Contract Called Successfully`,
                                position: "top-right",
                                isClosable: true,
                                duration: 5000,
                                status: "success",
                            });
                            try {
                                await pushDirectToContract(values.name);
                                toast({
                                    title: `Name sent to Contract Successfully!`,
                                    position: "top-right",
                                    isClosable: true,
                                    duration: 5000,
                                    status: "success",
                                });
                            } catch (error) {
                                toast({
                                    title: `${error}`,
                                    position: "top-right",
                                    isClosable: true,
                                    duration: 5000,
                                    status: "error",
                                });
                            }

                        }
                    }
                >
                    <Form className="flex flex-col justify-center items-left">
                        <label htmlFor="name" className="p-2 text-white font-fragile text-2xl">Name</label>
                        <Field id="name" name="name" placeholder="Jane" className="p-2 rounded-md my-1 w-full text-xl" />
                        
                        <PrimaryButton
                            type="submit"
                            name="Submit"
                        ></PrimaryButton>
                    </Form>
                </Formik>
                </div>
            </div>
        </div>
    )
}
export default D2C;
