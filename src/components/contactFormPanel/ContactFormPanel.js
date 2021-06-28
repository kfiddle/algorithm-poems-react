import { useState, useEffect, useRef } from "react";

import styles from "./ContactFormPanel.module.css";

const ContactFormPanel = () => {
  const [contactPanelPlace, setContactPanelPlace] = useState(100);
  const [inputPlaces, setInputPlaces] = useState({
    nameSpot: 100,
    emailSpot: -100,
    phoneSpot: 100,
  });
  const [contactInfoPlace, setMyContactInfoPlace] = useState(100);

  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const message = useRef();

  useEffect(() => {
    setTimeout(() => {
      setContactPanelPlace(20);
    }, 50);

    setTimeout(() => {
      setInputPlaces({ nameSpot: 0, emailSpot: 0, phoneSpot: 0 });
    }, 300);

    setTimeout(() => {
      setMyContactInfoPlace(0);
    }, 500);
  }, []);

  const submitInfo = () => {
      let contactInfo = {
        fullName: name.current.value,
        phoneNumber: phoneNumber.current.value,
        emailAddress: email.current.value,
        message: message.current.value,
      };

      console.log(contactInfo)
  
      fetch("https://agile-basin-20718.herokuapp.com/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactInfo),
      });
  
    }



  

  return (
    <div
      className={styles.contactBox}
      style={{ transform: `translateY(${contactPanelPlace}vh)` }}
    >
      <div className={styles.contactBoxHeader}>
        <h2>Feel free to share as much information as you'd like here</h2>
      </div>

      <div className={styles.inputsBox}>
        <input
          ref={name}
          className={styles.nameInput}
          placeholder={"Name"}
          style={{ transform: `translateX(${inputPlaces.nameSpot}vw)` }}
        ></input>
        <input
          ref={email}
          className={styles.emailInput}
          placeholder={"Email"}
          style={{ transform: `translateX(${inputPlaces.emailSpot}vw)` }}
        ></input>
        <input
          ref={phoneNumber}
          className={styles.phoneInput}
          placeholder={"Phone Number"}
          style={{ transform: `translateX(${inputPlaces.phoneSpot}vw)` }}
        ></input>
      </div>

      <textarea className={styles.messageInput} ref={message}></textarea>

      <button className={styles.submitButton} onClick={submitInfo}>
        <h2>Submit</h2>
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
