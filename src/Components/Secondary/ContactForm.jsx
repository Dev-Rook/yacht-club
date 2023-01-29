import React, { useState } from "react";
import Styles from "../../Styles/Componet-Styles/ContactForm.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={Styles.Section}>
      <form className={Styles.Form}>
        <div className={Styles.InputGroup}>
          <input
            type="text"
            className={Styles.Input}
            placeholder={"Name"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            className={Styles.Input}
            placeholder={"Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="test"
          className={Styles.Input}
          placeholder={"Subject"}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          required
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder={"Message"}
          className={Styles.Input}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        ></textarea>
      </form>
      <button className={Styles.SubmitButton} type={"Submit"}>Submit</button>
    </div>
  );
};

export default ContactForm;
