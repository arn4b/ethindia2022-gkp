import React, { useState } from 'react'
import Navbar from '../../components/Common/Navbar'
import { Formik, Field, Form } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from '../../components/Common/PrimaryButton';

const SoulBound = () => {

    return (
        <div>
            <Navbar />
            <h1>Soul Bound Tokens</h1>
            <Formik
                initialValues={{
                    name: '',
                    symbol: '',
                    limit: '',
                    price: '',
                }}
                onSubmit = {
                    (values) => {
                        console.log(JSON.stringify(values, null, 2));
                    }
                }
            >
                <Form className='flex flex-col justify-center items-center'>
                    <label htmlFor="name" className="p-2">Name</label>
                    <Field id="name" name="name" placeholder="Jane" className="p-2 rounded-md my-1" />

                    <label htmlFor="symbol"  className="p-2">Symbol</label>
                    <Field id="symbol" name="symbol" placeholder="MATIC" className="p-2 rounded-md my-1"  />

                    <label htmlFor="limit"  className="p-2">Limit</label>
                    <Field id="limit" name="limit" type="number" placeholder="00" className="p-2 rounded-md my-1"  />

                    <label htmlFor="price"  className="p-2">Price</label>
                    <Field id="price" name="price" type="number" placeholder="00" className="p-2 rounded-md my-1"  />
                    
                    <PrimaryButton
                        type="submit"
                        name="Submit"
                    ></PrimaryButton>
                </Form>
            </Formik>
        </div>
    )
}
export default SoulBound;
