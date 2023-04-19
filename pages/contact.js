import React from "react";
import Head from "next/head";
import Container from "./components/Container";
import Form from "./components/Form";

const ContactMe = () => {
  return (
    <Container>
      <Head>
        <title>Agustina - Contáctame</title>
      </Head>
      <div className="grid grid-cols-2 gap-4">
        <Form />
      </div>
      
      
    </Container>
  );
};

export default ContactMe;
