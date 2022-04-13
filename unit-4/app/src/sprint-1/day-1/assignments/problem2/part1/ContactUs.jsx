import React from "react";

const contactUs = {
  backgroundColor: "#e45044",
  color: "white",
  fontWeight: "bold",
};

function ContactUs() {
  return <button style={{ ...contactUs }}>CONTACT US</button>;
}

export { ContactUs };