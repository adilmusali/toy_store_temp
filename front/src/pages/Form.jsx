import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
const Form = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container">
        <div className="bg-white rounded-[20px] flex justify-between p-[50px] shadow">
          <div className="flex gap-3 max-w-[450px] items-center">
            <div>
              <FaTelegramPlane className="bg-lime-500 p-3 mx-auto text-[60px] rounded-full text-white" />
            </div>
            <div className="text-[30px]">
              Subscribe to our newsletter & get{" "}
              <span className="text-lime-500">10% discount!</span>
            </div>
          </div>
          <form className="flex gap-2 items-center">
            <div><input type="text" placeholder="Enter your email address" className="border-2 w-[400px] px-5 py-3 rounded-[20px] bg-gray-100"/></div>
            <button type="submit" className="bg-lime-500 text-white px-5 py-3 rounded-[20px] 
            hover:shadow-lg transform hover:scale-105 transition duration-300">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
