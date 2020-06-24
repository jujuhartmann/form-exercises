import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const [user, setUser] = useState({
    gender: "",
    firstname: "",
    lastname: "",
    email: "",
    accepted_toc: "",
  });

  return (
    <main>
      <h1>Ich bin ein random Kontaktformular</h1>
      <StyledContactForm onSubmit={handleSubmit}>
        <label htmlFor="gender">Geschlecht </label>
        <select
          id="gender"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Hint
          </option>
          <option name="gender" value="weiblich">
            weiblich
          </option>
          <option name="gender" value="männlich">
            männlich
          </option>
          <option name="gender" value="divers">
            divers
          </option>
          <option name="gender" value="none of your business">
            none of your business
          </option>
        </select>
        <label htmlFor="firstname">Vorname</label>
        <input
          id="firstname"
          name="firstname"
          value={user.firstname}
          onChange={handleChange}
          required
          type="text"
          placeholder="Ihr werter Name"
        />
        <label htmlFor="lastname">Nachname</label>
        <input
          id="lastname"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
          required
          type="text"
          placeholder="Ihr Nachname"
        />
        <label htmlFor="lastname">Ihre E-Mail-Adresse</label>
        <input
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          type="text"
          placeholder=""
        />
        <label htmlFor="lastname">Hiermit kaufe ich die Waschmaschine.</label>
        <input
          id="accepted_toc"
          name="accepted_toc"
          value={user.accepted_toc}
          onChange={handleChange}
          required
          type="checkbox"
          placeholder=""
          checked
        />
      </StyledContactForm>
    </main>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    setUser({
      gender: "",
      firstname: "",
      lastname: "",
      email: "",
      accepted_TOC: "",
    });
  }
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
}

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
