import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [value, setValue] = useState("");
  let navigation = useNavigate();
  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
      ></input>
      <button
        onClick={() => {
          Axios.post("http://localhost:3001/Create", { Value: value }).then(
            () => {
              console.log("success");
            }
          );
          setTimeout(() => {
            Axios.get("http://localhost:3001/get").then((response) => {
              console.log(response.data);
            });
          }, 7000);
        }}
      >
        post
      </button>

      <h1>{value}</h1>
    </div>
  );
}
export default Home;
