import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-white z-50">
      <div className="container">
          <div className="flex justify-between py-[20px] items-center">
            <div className="flex gap-[50px] items-center">
              <div>
                <h1 className="text-[25px]">ToyStore</h1>
              </div>
              <div>
                <ul className="flex gap-[30px]">
                  <li>
                    <a href="#">Catalog</a>
                  </li>
                  <li>
                    <a href="#">Delivery</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <a>Cart</a>
              <AiOutlineShoppingCart className="text-[1.5rem]" />
              <div className="bg-lime-400 text-white px-2 rounded-full">0</div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
