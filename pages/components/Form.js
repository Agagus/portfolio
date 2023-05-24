import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  console.log(email, name, message);

  let stateButton = true;

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let checkEmail = emailRegex.test(email);

  if (name !== "" && message !== "" && checkEmail) stateButton = false;
  console.log(stateButton);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      email,
      name,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Tu mensaje fue enviado con éxito");
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <form className="p-8 px-16">
      <div className="relative z-0 w-full mb-6 group">
        <div className="grid md:w-5/6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              value={email}
              className="font-mono block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-orange-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-200 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              htmlFor="floating_email"
              className="font-mono peer-focus:font-medium absolute text-sm text-amber-100 opacity-50 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ingresá tu mail
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              value={name}
              className="font-mono block my-4 py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-orange-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label
              htmlFor="floating_first_name"
              className="my-4 font-mono peer-focus:font-medium absolute text-sm text-amber-100 opacity-50 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              type="text"
              name="the_message"
              id="the_message"
              value={message}
              className="my-4 font-mono block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-orange-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-200 peer"
              placeholder=" "
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label
              htmlFor="the_message"
              className="my-4 font-mono peer-focus:font-medium absolute text-sm text-amber-100 opacity-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Dejame un mensaje
            </label>
          </div>
        </div>
      </div>
      <button
        disabled={stateButton}
        type="submit"
        className="border border-yellow-900 rounded-md hover:bg-yellow-900 hover:bg-opacity-10 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-30 disabled:hover:cursor-default"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
