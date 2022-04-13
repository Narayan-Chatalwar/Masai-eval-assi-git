import React from "react";
import styles from "./CombinedButtons.module.css";
const AllButtons = () => {
  return (
    <>
      <h1>Problem-2 Part-2</h1>
      <div id={styles.button_container}>
        <button className={styles.joinNow}>JOIN US</button>
        <button className={styles.search}>LOGIN</button>
        <button className={styles.settings}>SEARCH</button>
        <button className={styles.help}>HOME</button>
        <button className={styles.login}>SETTINGS</button>
        <button className={styles.home}>CONTACT US</button>
        <button className={styles.contactUs}>HELP</button>
        <button className={styles.download}>DOWNLOAD</button>
      </div>
    </>
  );
};
export { AllButtons };