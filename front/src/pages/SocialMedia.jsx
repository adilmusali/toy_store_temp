import React from "react";

const SocialMedia = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container">
        <div className="flex flex-col gap-[70px] py-[100px] items-center">
          <div className="flex flex-col text-center">
            <span className="text-lime-500 text-[14px]">@ElasticThemes</span>
            <h2 className="text-[35px]">We're on Instagram!</h2>
          </div>
          <div className="flex flex-col gap-[70px] text-center">
            <div className="flex gap-3">
              <img className="w-[180px] cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-md rounded-[20px]" src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" />
              <img className="w-[180px] cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-md rounded-[20px]" src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" />
              <img className="w-[180px] cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-md rounded-[20px]" src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" />
              <img className="w-[180px] cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-md rounded-[20px]" src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" />
              <img className="w-[180px] cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-md rounded-[20px]" src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" />
              <img className="w-[180px] cursor-pointer transform hover:scale-105 transition duration-300 hover:drop-shadow-md rounded-[20px]" src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" />
            </div>
            <div><button className="bg-lime-500 px-5 py-3 text-white rounded-[20px] transform hover:scale-105 transition duration-300">See More Photos</button></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
