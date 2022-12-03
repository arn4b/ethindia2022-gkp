import React, { useState } from 'react'
import Navbar from '../../components/Common/Navbar'
import { Formik, Field, Form } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from '../../components/Common/PrimaryButton';
import { useToast } from '@chakra-ui/react'

import pushDirectToContract from '../../middlewares/pushDirectToContract'

const D2C = () => {
    const toast = useToast();

    return (
        <div className='bg-black text-white'>
            <Navbar />
            <h1>Direct 2 Contract</h1>
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
                <Form className='flex flex-col justify-center items-center'>
                    <label htmlFor="name" className="p-2 mx-4">Name</label>
                    <Field id="name" name="name" placeholder="Jane" className="p-2 rounded-md m-4" />
                    
                    <PrimaryButton
                        type="submit"
                        name="Submit"
                    ></PrimaryButton>
                </Form>
            </Formik>
        </div>
    )
}
export default D2C;
