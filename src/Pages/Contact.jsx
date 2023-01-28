import React from 'react'
import Styles from "../Styles/Page-Styles/Contact.module.scss"

import ContactForm from '../Components/Secondary/ContactForm'

const Contact = () => {
  return (
    <div className={Styles.Page}>
      <div className={Styles.Page_Head}>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Header_Image} />
      </div>   

      <ContactForm />
    </div>
  )
}

export default Contact