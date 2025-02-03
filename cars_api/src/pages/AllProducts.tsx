import React, { useEffect, useState } from "react";
import { Termek } from "../types/Product";
import apiClient from "../api/api";
import "../css/styles.css";

const AllProducts = () => {
  const [termek, setTermek] = useState<Array<Termek>>();

  useEffect(() => {
    apiClient
      .get("/termekek")
      .then((res) => {
        setTermek(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Összes termék</h1>

      <table>
        <tbody>
          <th>Név</th>
          <th>Ár</th>
          <th>Kategória</th>
          <th>Készlet</th>
          <th>Leírás</th>
          {termek?.map((product) => (
            <tr key={product.id}>
              <td>{product.nev}</td>
              <td>{product.ar} Ft</td>
              <td>{product.kategoria.nev}</td>
              <td>{product.keszlet}</td>
              <td>{product.leiras}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
