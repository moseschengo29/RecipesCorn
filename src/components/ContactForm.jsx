import React from "react";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [data, setData] = useState({ name: "", phone: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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
        onChange={handleChange}
        value={data.name}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        id=""
        onChange={handleChange}
        value={data.email}
        placeholder="example@gmail.com"
      />
      <input
        type="phone"
        name="phone"
        id=""
        onChange={handleChange}
        value={data.phone}
        placeholder="+254 700 000 000"
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        onChange={handleChange}
        value={data.message}
        placeholder="Type here..."
      />
      <button type="submit">Send</button>
      <p>
        {data.name}, {data.email}, {data.phone}, {data.message}
      </p>
    </form>
  );
};

export default ContactForm;
