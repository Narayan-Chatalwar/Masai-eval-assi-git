import React from "react";

const stylesInBtn = {
  backgroundColor: "#e35c93",
  color: "white",
  fontWeight: "bold",
};
function Home() {
  return <button style={{ ...stylesInBtn }}>HOME</button>;
}

export { Home };