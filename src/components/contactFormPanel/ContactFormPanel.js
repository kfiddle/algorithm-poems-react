
import { useState, useEffect } from 'react';

import styles from './ContactFormPanel.module.css';

const ContactFormPanel = () => {
const [contactPanelPlace, setContactPanelPlace] = useState(100);
const [inputPlaces, setInputPlaces] = useState({nameSpot: 100, emailSpot: -100, phoneSpot: 100})


useEffect(()=> {
    setTimeout(()=> {
        setContactPanelPlace(20);
    }, 50);

setTimeout(() => {
    setInputPlaces({nameSpot: 0, emailSpot: 0, phoneSpot: 0})
}, 300)


}, [])


return (<div className={styles.contactBox} style={{transform: `translateY(${contactPanelPlace}vh)`}}>
    <div className={styles.contactBoxHeader}>
        <h2>Feel free to share as much information as you'd like here</h2>
    </div>

    <div className={styles.inputsBox}>
        <input className={styles.nameInput} placeholder={'Name'} style={{transform: `translateX(${inputPlaces.nameSpot}vw)`}}></input>
        <input className={styles.emailInput} placeholder={'Email'} style={{transform: `translateX(${inputPlaces.emailSpot}vw)`}}></input>
        <input className={styles.phoneInput} placeholder={'Phone Number'} style={{transform: `translateX(${inputPlaces.phoneSpot}vw)`}}></input>
    </div>


</div>)



};

export default ContactFormPanel;