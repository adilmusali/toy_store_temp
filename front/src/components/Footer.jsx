import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lime-400">
      <div className="container">
        <div className="flex flex-col gap-[1.5rem] text-white py-[3rem]">
          <div className="flex justify-between items-center mb-[1.5rem]">
            <div>
              <h2 className="text-[1.3rem]">ToyStore</h2>
            </div>
            <div>
              <ul className="flex gap-[20px]">
                <li>
                  <a href="#">Home</a>
                </li>
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
            <div className="flex gap-[1rem]">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaPinterest />
              <FaYoutube />
            </div>
          </div>
          <hr />
          <div className="flex justify-between text-[1rem]">
            <div>
              <span>
                Created with love by <a href="#">Elastic Themes</a>
              </span>
            </div>
            <div className="flex gap-[1rem] text-[1rem]">
              <span>
                Powered by <a href="#">Webflow</a>
              </span>
              <span>
                <a href="#">Style Guide</a>
              </span>
              <span>
                <a href="#">Licensing</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
