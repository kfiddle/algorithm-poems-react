import { useState, useEffect, useRef } from "react";

import useDetailSpeller from "../../hooks/useDetailSpeller";

import emailjs from "emailjs-com";

import styles from "./ContactFormPanel.module.css";

const userId = "user_ziX5oSLNJRahUxs9dz2xC";
const serviceId = "service_whc7i1l";
const templateId = "template_xhux42i";

const greeting = " Feel free to share as much, (or as little), information as you'd like here";

const defaultFormValues = { name: "", email: "", fone: "", message: "" };

const ContactFormPanel = () => {
  const [contactPanelPlace, setContactPanelPlace] = useState(100);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [inputPlaces, setInputPlaces] = useState({
    nameSpot: 100,
    emailSpot: -100,
    phoneSpot: 100,
  });

  const [contactInfoPlace, setMyContactInfoPlace] = useState(100);

  const [nameInput, setNameInput] = useState("");
  const [foneNumber, setfoneNumber] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [emptySubmission, setEmptySubmission] = useState(false);
  const [headerText, setHeaderText] = useState(greeting);

  const buttonText = useDetailSpeller(emptySubmission, "Nice try...", "Submit");

  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const message = useRef();

  useEffect(() => {
    setTimeout(() => {
      setContactPanelPlace(15);
    }, 50);

    setTimeout(() => {
      setInputPlaces({ nameSpot: 0, emailSpot: 0, phoneSpot: 0 });
    }, 300);

    setTimeout(() => {
      setMyContactInfoPlace(0);
    }, 500);
  }, []);

  const typedName = event => setNameInput(event.target.value);
  const typedEmail = event => setEmailInput(event.target.value);
  const typedMessage = event => setMessageInput(event.target.value);

  const formatNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 13) {
      return;
    }

    if (
      (event.target.value.length === 3 || event.target.value.length === 7) &&
      !isNaN(event.nativeEvent.data)
    ) {
      setfoneNumber((previous) => event.target.value + "-");
    } else {
      setfoneNumber((previous) => event.target.value);
    }
  };

  const submissionCheck = (event) => {
    setEmptySubmission(false);
  };

  const checkForDelete = (event) => {
    setEmptySubmission(false);
    if (
      event.code === "Backspace" &&
      foneNumber[foneNumber.length - 1] === "-"
    ) {
      setfoneNumber((previous) => previous.slice(0, -1));
    }
  };

  const submitInfo = () => {
    let contactInfo = {
      fullName: name.current.value,
      phoneNumber: phoneNumber.current.value,
      emailAddress: email.current.value,
      message: message.current.value,
    };

    let empty = true;

    for (let key in contactInfo) {
      if (contactInfo[key].length > 0) {
        empty = false;
      }
    }

    if (empty === true) {
      setEmptySubmission(true);
      return;
    }

    emailjs.send(serviceId, templateId, contactInfo, userId);

    setNameInput('');
    setEmailInput('');
    setfoneNumber("");
    setMessageInput('');

    setHeaderText('Thank you for reaching out!')
    
  };

  return (
    <div
      className={styles.contactBox}
      style={{ transform: `translateY(${contactPanelPlace}vh)` }}
    >
      <div className={styles.contactBoxHeader}>
        <h2>{headerText}</h2>
      </div>

      <div className={styles.inputsBox}>
        <input
          ref={name}
          className={styles.nameInput}
          placeholder={"Name"}
          style={{ transform: `translateX(${inputPlaces.nameSpot}vw)` }}
          onKeyDown={submissionCheck}
          onChange={typedName}
          value={nameInput}
        ></input>
        <input
          ref={email}
          className={styles.emailInput}
          placeholder={"Email"}
          style={{ transform: `translateX(${inputPlaces.emailSpot}vw)` }}
          onKeyDown={submissionCheck}
          onChange={typedEmail}
          value={emailInput}
        ></input>
        <input
          ref={phoneNumber}
          className={styles.phoneInput}
          placeholder={"Phone Number"}
          style={{ transform: `translateX(${inputPlaces.phoneSpot}vw)` }}
          onChange={formatNumber}
          onKeyDown={checkForDelete}
          value={foneNumber}
        ></input>
      </div>

      <textarea
        className={styles.messageInput}
        ref={message}
        onKeyDown={submissionCheck}
        onChange={typedMessage}
        value={messageInput}
      ></textarea>

      <button className={styles.submitButton} onClick={submitInfo}>
        <h2>{buttonText}</h2>
      </button>

      <div
        className={styles.myContactInfo}
        style={{ transform: `translateY(${contactInfoPlace}vh)` }}
      >
        <h2>Or simply write me at...</h2>
        <h1 className={styles.myEmail}>kenjsoftware@gmail.com</h1>
      </div>
    </div>
  );
};

export default ContactFormPanel;
