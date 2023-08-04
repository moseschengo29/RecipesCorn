import React from "react";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  function addData(data) {
    fetch("http://localhost:3000/contact-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: crypto.randomUUID(),
      fullName,
      email,
      number,
      message,
    };

    addData(userData);

    setFullName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="contact-form">
      <h1>
        Contact <span>Us</span>
      </h1>
      <input
        type="text"
        name="name"
        id=""
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        id=""
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="example@gmail.com"
      />
      <input
        type="phone"
        name="phone"
        id=""
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        placeholder="+254 700 000 000"
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Type message here..."
      />
      <button type="submit">Send</button>
      {/* <p>
        {data.name}, {data.email}, {data.phone}, {data.message}
      </p> */}
    </form>
  );
};

export default ContactForm;
