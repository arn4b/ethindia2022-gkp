import React, { useState } from "react";
import Navbar from "../../components/Common/Navbar";
import { Formik, Field, Form } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from "../../components/Common/PrimaryButton";
import pushSoulBoundService from "../../middlewares/pushSoulBoundService";

import { useToast } from "@chakra-ui/react";

const SoulBound = () => {
  const toast = useToast();
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
            await pushSoulBoundService(values);
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
    </div>
  );
};
export default SoulBound;
