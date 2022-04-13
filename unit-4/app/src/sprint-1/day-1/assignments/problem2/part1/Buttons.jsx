import React from "react";
import { ContactUs } from "./ContactUs";
import { Download } from "./Download";
import { Help } from "./Help";
import { Home } from "./Home";
import { JoinUs } from "./JoinUs";
import { Login } from "./Login";
import { Search } from "./Search";
import { Settings } from "./Settings";
import styles from "./Buttons.module.css";

const Combined = () => {
  return (
    <>
      <div>
        <h1>Problem-2 Part-1</h1>
        <div id={styles.buttons_container}>
          <JoinUs />
          <Login />
          <Search />
          <Home />
          <Settings />
          <ContactUs />
          <Help />
          <Download />
        </div>
      </div>
    </>
  );
};
export { Combined };