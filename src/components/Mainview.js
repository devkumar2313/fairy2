import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ["nothings"];
function Mainview() {
  let navigation = useNavigate();
  return (
    <div>
      <h1>You are at Main page</h1>
      <button
        onClick={() => {
          navigation("/detail");
        }}
      >
        view detail
      </button>
      <h1>{Products}</h1>
    </div>
  );
}
export default Mainview;
