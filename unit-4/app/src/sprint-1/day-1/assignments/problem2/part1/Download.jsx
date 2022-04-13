import React from "react";

const stylesInBtn = {
  backgroundColor: "#b6973f",
  color: "white",
  fontWeight: "bold",
};
function Download() {
  return <button style={{ ...stylesInBtn }}>DOWNLOAD</button>;
}

export { Download };