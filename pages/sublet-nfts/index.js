import React, { useState } from "react";
import Navbar from "../../components/Common/Navbar";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from "../../components/Common/PrimaryButton";
import pushRentalService from "../../middlewares/pushRentalService";
import { useToast } from "@chakra-ui/react";

const SubletNFTs = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const toast = useToast();
  return (
    <div className="bg-black text-white">
      <Navbar />
      <h1>Sublet your Subscriptions as NFTs</h1>
      <Formik
        initialValues={{
          name: "",
          symbol: "",
          limit: "",
          price: "",
          duration: "",
        }}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values, null, 2));
          console.log(values.duration * 86400);
          toast({
            title: `Check your metamask for transaction`,
            position: "top-right",
            isClosable: true,
            duration: 5000,
            status: "success",
          });
          try {
            await pushRentalService(values);
            toast({
              title: `Contract Called Successfully`,
              position: "top-right",
              isClosable: true,
              duration: 5000,
              status: "success",
            });
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
        <Form className="flex flex-col w-3/5">
          <label htmlFor="name" className="p-2 mx-4">
            Name
          </label>
          <Field
            id="name"
            name="name"
            placeholder="Jane"
            className="p-2 rounded-md m-4 text-black"
          />

          <label htmlFor="symbol" className="p-2 mx-4">
            Symbol
          </label>
          <Field
            id="symbol"
            name="symbol"
            placeholder="MATIC"
            className="p-2 rounded-md m-4 text-black"
          />

          <label htmlFor="limit" className="p-2 mx-4">
            Limit
          </label>
          <Field
            id="limit"
            name="limit"
            type="number"
            placeholder="00"
            className="p-2 rounded-md m-4 text-black"
          />

          <label htmlFor="price" className="p-2 mx-4">
            Price
          </label>
          <Field
            id="price"
            name="price"
            type="number"
            placeholder="00"
            className="p-2 rounded-md m-4 text-black"
          />

          <label htmlFor="duration" className="p-2 mx-4">
            Duration
          </label>
          <Field
            id="duration"
            name="duration"
            type="number"
            placeholder="00"
            className="p-2 rounded-md m-4 text-black"
          />

          <PrimaryButton type="submit" name="Submit"></PrimaryButton>
        </Form>
      </Formik>
    </div>
  );
};
export default SubletNFTs;
