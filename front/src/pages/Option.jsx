import React from "react";

const Option = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container">
        <div className="flex justify-center gap-[30px] pt-[150px] text-white">
          <div className="flex gap-[1rem] relative bg-yellow-500 w-[600px] h-[200px] justify-between rounded-[20px]">
            <div className="absolute w-[250px] left-0 -top-[50px]">
              <img
                src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[1rem] absolute right-[100px] top-14">
              <h2 className="text-[30px]">Stuffed Animals</h2>
              <div>
                <button className="text-black bg-white rounded-[20px] px-5 py-2 text-[1rem] hover:shadow-lg transform hover:scale-105 transition duration-400">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] relative bg-pink-600 w-[600px] h-[200px] justify-between rounded-[20px]">
            <div className="absolute w-[250px] right-0 -top-[50px]">
              <img
                src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[1rem] absolute left-[100px] top-14">
              <h2 className="text-[30px]">Wooden Toys</h2>
              <div>
                <button className="text-black bg-white rounded-[20px] px-5 py-2 text-[1rem] hover:shadow-lg transform hover:scale-105 transition duration-400">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option;
