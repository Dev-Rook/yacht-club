import React from "react";
import Styles from "../Styles/Page-Section-Styles/MembershipForm.module.scss";

const MembershipForm = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <h1
          className={Styles.Title}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Membership Form
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
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className={Styles.Input}
            />
          </fieldset>
          <input
            type="Email"
            placeholder="Email"
            required
            className={Styles.Input}
          />
          <input
            type="Text"
            placeholder="Membership Type"
            required
            className={`${Styles.Input} ${Styles.Subject}`}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
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

export default MembershipForm;
