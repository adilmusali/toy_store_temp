import React from "react";

const Available = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container">
        <div className="flex flex-col gap-[100px] items-center py-[130px]">
          <div className="flex flex-col text-center max-w-[600px]">
            <span className="text-lime-500">Made for Webflow</span>
            <h2 className="text-[40px]">
              Simple & Colorful Ecommerce Template for Your Business
            </h2>
          </div>
          <div className="flex gap-[200px] items-center">
            <div className="flex flex-col max-w-[500px] gap-[30px]">
              <h2 className="text-[40px]">Available for FREE!</h2>
              <div className="h-[1px] w-[100px] bg-lime-500"></div>
              <p className="text-gray-500">
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action. There is no magic formula to write perfect ad
                copy
              </p>
              <div><button className="uppercase px-5 py-2 bg-lime-500 text-[18px] transform hover:scale-105 transition duration-300 hover:shadow-lg text-white rounded-[20px]">get it now!</button></div>
            </div>
            <div>
                <img className="rounded-[20px] w-full" src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Available;
