import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState("");
  const params = useParams()

  const getData = async() => {
    const res = await axios.get(`http://localhost:8080/toys/${params.id}`)
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return <div>
    <img src={data.image} alt="" />
    <h2>{data.price}</h2>
  </div>;
};

export default Details;
