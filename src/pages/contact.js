import React from "react";
import styles from "../../styles/contact.module.scss";
import { useState } from 'react'

const Contact = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();
    let subject = setSubject("Email from - "+ fullname);
    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <div className={styles.container}>
      < form className={styles.main} >
        < div className={styles.inputGroup} >
          < label htmlFor='name'>Name</label>
          < input type='text' onChange={(e) => { setFullname(e.target.value) }} name='name' className={styles.inputField} />
        </div>
        < div className={styles.inputGroup} >
          < label htmlFor='email'>Email</label>
          < input type='email' onChange={(e) => { setEmail(e.target.value) }} name='email' className={styles.inputField} />
        </div>
        < div className={styles.inputGroup} >
          < label htmlFor='message'>Message</label>
          < input type='text' onChange={(e) => { setMessage(e.target.value) }} name='message' className={styles.inputField} />
        </div>
        < input type='submit' onClick={(e) => { handleSubmit(e) }} />
      </form >
    </div>
  );
};


export default Contact;
