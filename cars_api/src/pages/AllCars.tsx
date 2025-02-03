import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cars } from "../types/Cars";
import apiClient from "../api/api";

function AllCars() {

    const navigate = useNavigate();

    const [cars, setCars] = useState<Cars[]>([]);

    useEffect(() => {
        const fetchCars = async () =>{
            try{
                const response = await apiClient.get("/cars");
                setCars(response.data);
            } catch (err: any)
            {
                alert(err.message || "Cars Fetch failed");
            }
        };
        fetchCars();
    }, []);

    const ViewClick = (id: number) =>{
        navigate(`/cars/${id}`);
    }

    const PostClick = () =>{
        navigate("/post")
    }

    return (
        <div>
            <h1>Autók:</h1>
            <table>
                <tbody>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Márka</th>
                    <th>Évjárat</th>
                    {cars.map((car) =>(
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.model}</td>
                            <td>{car.brand}</td>
                            <td>{car.year}</td>
                            <td>
                                <button onClick={() => ViewClick(car.id)}>
                                    Megtekintés
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={PostClick}>
                                    Kocsi hozzáadása
                                </button>
        </div>
    );
}

export default AllCars;