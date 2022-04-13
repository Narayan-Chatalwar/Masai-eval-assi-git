import React from "react";

const stylesInBtn = {
  backgroundColor: "#ef9b28",
  color: "white",
  fontWeight: "bold",
};
function Login() {
  return <button style={{ ...stylesInBtn }}>LOGIN</button>;
}

export { Login };