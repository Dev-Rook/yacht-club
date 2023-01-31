import React, { useState } from "react";
import Styles from "../../Styles/Componet-Styles/ContactForm.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1
          className={Styles.Title}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact Us
        </h1>

        <p
          className={Styles.Description}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          If you are interested in becoming a member, then please complete and
          submit the form below.
        </p>

        <form action="" className={Styles.Form}>
          <fieldset className={Styles.Name__Eamil}>
            <input
              type="text"
              placeholder="First Name"
              required
              className={Styles.Input}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          <input
            type="Email"
            placeholder="Email"
            required
            className={Styles.Input}
          />
          </fieldset>
          <input
            type="Text"
            placeholder="Subject"
            required
            className={`${Styles.Input} ${Styles.Subject}`}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message?"
            required
            className={`${Styles.Input} ${Styles.Message}`}
          ></textarea>

          <button type={"submit"} className={Styles.Submit_Button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
