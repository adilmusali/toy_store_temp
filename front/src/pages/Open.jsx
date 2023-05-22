import React from "react";

const Open = () => {
  return (
    <section>
      <div
        className='bg-center bg-no-repeat bg-cover h-[580px] flex justify-center items-center
    bg-[url("https://assets.website-files.com/5badda2935e11303a89a461e/5baddd4835e113c6299a48f5_li-tzuni-507346-unsplash.jpg")]'
      >
        <div className="flex flex-col gap-3 px-[60px] py-[50px] bg-white text-center max-w-[550px] rounded-[20px]">
          <div>
            <span className="text-[0.9rem] text-lime-500">
              Say Hello to ToyStore!
            </span>
          </div>
          <div>
            <h2 className="text-[40px]">Free Ecommerce Template for Webflow</h2>
          </div>
          <div>
            <button
              className="text-[16px] text-white bg-lime-500 rounded-[2rem] px-5 py-2
            transform hover:scale-105 transition duration-400 hover:shadow-xl"
            >
              Open Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Open;
