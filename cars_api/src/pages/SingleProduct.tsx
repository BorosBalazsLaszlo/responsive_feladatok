import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Termek } from "../types/Product";
import apiClient from "../api/api";
import "../css/styles.css";

const SingleProduct = () => {
  const { id } = useParams();

  const [termek, setTermek] = useState<Termek>();

  useEffect(() => {
    apiClient
      .get(`/termekek/${id}`)
      .then((res) => {
        setTermek(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  /*  const defaultProduct = {
    nev: "",
    ar: 0,
    kategoria:{
      nev: "",
    },
    keszlet: 0,
    leiras: "",
  } as Termek; */

  return (
    <div>
      <h1>Egy termék</h1>

      <div>
        <table>
          <tbody>
            <th>Név</th>
            <th>Ár</th>
            <th>Kategória</th>
            <th>Készlet</th>
            <th>Leírás</th>
            <tr key={termek?.id}>
              <td>{termek?.nev}</td>
              <td>{termek?.ar} Ft</td>
              <td>{termek?.kategoria.nev}</td>
              <td>{termek?.keszlet}</td>
              <td>{termek?.leiras}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleProduct;
