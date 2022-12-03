import React, { useState } from 'react'
import Navbar from '../../components/Common/Navbar'
import { Formik, Field, Form } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from '../../components/Common/PrimaryButton';

const D2C = () => {
    return (
        <div>
            <Navbar />
            <h1>Direct 2 Contract</h1>
            <Formik
                initialValues={{
                    name: '',
                    symbol: '',
                }}
                onSubmit = {
                    (values) => {
                        console.log(JSON.stringify(values, null, 2));
                    }
                }
            >
                <Form className='flex flex-col justify-center items-center'>
                    <label htmlFor="name" className="p-2 mx-4">Name</label>
                    <Field id="name" name="name" placeholder="Jane" className="p-2 rounded-md m-4" />

                    <label htmlFor="symbol"  className="p-2 mx-4">Symbol</label>
                    <Field id="symbol" name="symbol" placeholder="MATIC" className="p-2 rounded-md m-4"  />
                    
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
