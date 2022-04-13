import React from "react";

const stylesInBtn = {
  backgroundColor: "#7baebf",
  color: "white",
  fontWeight: "bold",
};
function Settings() {
  return <button style={{ ...stylesInBtn }}>SETTINGS</button>;
}

export { Settings };