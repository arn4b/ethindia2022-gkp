import React, { useState } from 'react'
import Navbar from '../../components/Common/Navbar'
import { Formik, Field, Form } from 'formik';
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from '../../components/Common/PrimaryButton';

const SubletNFTs = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <Navbar />
            <h1>Sublet your Subscriptions as NFTs</h1>
            <Formik
                initialValues={{
                    name: '',
                    symbol: '',
                    total: '',
                    selectedDate: selectedDate,
                }}
                onSubmit = {
                    (values) => {
                        console.log(JSON.stringify(values, null, 2));
                    }
                }
            >
                <Form className='flex flex-col w-3/5'>
                <label htmlFor="name" className="p-2 mx-4">Name</label>
                <Field id="name" name="name" placeholder="Jane" className="p-2 rounded-md m-4" />

                <label htmlFor="symbol"  className="p-2 mx-4">Symbol</label>
                <Field id="symbol" name="symbol" placeholder="MATIC" className="p-2 rounded-md m-4"  />

                <label htmlFor="total"  className="p-2 mx-4">Total</label>
                <Field id="total" name="total" placeholder="00" className="p-2 rounded-md m-4"  />

                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} id="selectedDate" name="selectedDate" className="p-2 rounded-md m-4"/>
                
                <PrimaryButton
                    type="submit"
                    name="Submit"
                ></PrimaryButton>
            </Form>
            </Formik>
        </div>
    )
}
export default SubletNFTs;
