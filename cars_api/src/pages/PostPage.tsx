import React, { useState } from "react";
import apiClient from "../api/api";
import { Cars } from "../types/Cars";

function PostPage() {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState(Number());

  const car = {
    model: model,
    brand: brand,
    year: year,
  } as Cars;

  const submit = () => {
    apiClient
      .post("/cars", car)
      .then((response) => {
        switch (response.status) {
          case 201:
            console.log("car created");
            break;
          case 400:
            console.log("Bad Request");
            break;
          default:
            console.log("Unknown error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
      window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kocsi hozzáadása</h1>

        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
        />
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand"
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          placeholder="Year"
        />
        <br />
        <button onClick={submit}>Post</button>
      </header>
    </div>
  );
}

export default PostPage;
