import React from "react";

const stylesInBtn = {
  backgroundColor: "#689e3f",
  color: "white",
  fontWeight: "bold",
};
function Search() {
  return <button style={{ ...stylesInBtn }}>SEARCH</button>;
}

export { Search };