import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cars } from "../types/Cars";
import apiClient from "../api/api";

function Profile() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState<Cars | null>(null);

  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState(Number());

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await apiClient.get(`/cars/${id}`);
        setCar(response.data);
        setModel(response.data.model);
        setBrand(response.data.brand);
        setYear(response.data.year);
      } catch (err: any) {
        alert(err.message || "Error while fetching specific car");
      }
    };
    fetchCar();
  }, []);

  const deleteCar = async () => {
    const confirmDelete = window.confirm("Biztosan törlöd?");
    if (!confirmDelete) return;

    try {
      await apiClient.delete(`/cars/${id}`);
      alert("Kocsi törölve");
      navigate("/cars");
    } catch (err: any) {
      alert(err.message || "Error while deleting car");
    }
  };

  const updateCar = async () => {
    try{
      const updatedCar = {
        model: model,
        brand: brand,
        year: year
      } as Cars;
      
      await apiClient.put(`/cars/${id}`, updatedCar);
      alert("Frissitett");
      window.location.reload();
    } catch (err:any)
     {
      alert("Hiba");
     }
  }
  

  return (
    <div>
      <h1>Kocsi</h1>
      <h2>{id}</h2>

      {car ? (
        <div>
          <p>Model: {car.model}</p>
          <p>Márka: {car.brand}</p>
          <p>Évjárat: {car.year}</p>
        </div>
      ) : (
        <p>Nincs ilyen autó.</p>
      )}

      <button onClick={deleteCar}>Törlés</button>

      <h1>Változtasd!</h1>
      <div>
        <input
          type="text"
          placeholder="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <br />

        <button onClick={updateCar}>Update</button>
      </div>
    </div>
  );
}

export default Profile;
