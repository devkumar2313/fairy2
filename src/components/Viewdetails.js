import React from "react";
import { useNavigate } from "react-router-dom";
function Viewdetails() {
  let navigation = useNavigate();
  return (
    <div>
      <h1>You are at view</h1>
      <button
        onClick={() => {
          navigation("/");
        }}
      >
        Go back to home
      </button>
    </div>
  );
}
export default Viewdetails;
