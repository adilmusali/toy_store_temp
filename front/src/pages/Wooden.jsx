import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";


const Wooden = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/toys");
    setData(res.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/toys/${id}`);
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container">
        <div className="flex flex-col gap-[30px] pt-[130px] pb-[150px]">
          <div className="flex justify-between items-center">
            <h2 className="text-[28px]">Wooden Toys</h2>
            <span className="capitalize flex items-center gap-2">see all toys <AiOutlineArrowRight/></span>
          </div>
          <div className="flex">
            <div className="h-[1px] w-[15%] bg-lime-600"></div>
            <div className="h-[1px] w-[85%] bg-gray-300"></div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            {data
            .slice(4,8)
            .map((d) => {
              return (
                <div
                  className="flex flex-col w-[300px] gap-3 border p-[50px] transform hover:scale-105 
                  transition duration-300 hover:shadow-lg text-center rounded-[20px] bg-white"
                  key={d._id}
                >
                  <img src={d.image} alt="" />
                  <h3>{d.name}</h3>
                  <div><span className="text-white text-[12px] bg-lime-500 px-4 py-1 rounded-[20px]">$ {d.price}.00 USD</span></div>
                  <button
                    className="bg-red-500 text-white"
                    onClick={() => deleteData(d._id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wooden;
