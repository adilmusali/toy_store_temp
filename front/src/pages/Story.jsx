import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Story = () => {
  return (
    <section>
      <div
        className='h-[500px] bg-center bg-cover bg-fixed bg-no-repeat flex justify-center items-center
      bg-[url("https://assets.website-files.com/5badda2935e11303a89a461e/5baf3d57ace69c149bb331b8_tim-gouw-165547-unsplash.jpg")]'
      >
        <div className="flex flex-col gap-[10px] text-center text-white max-w-[700px]">
          <span className="capitalize text-[14px]">about the shop</span>
          <h2 className="capitalize text-[40px]">watch our story</h2>
          <p className="text-[14px]">
            There is no magic formula to write perfect ad copy. It is based on a
            number of factors, including ad placement, demographic, even the
            consumer’s mood.
          </p>
          <div className="mx-auto mt-[30px]"><BsFillPlayFill className="p-2 text-white transform hover:scale-105 transition duration-400 text-[70px] bg-lime-500 rounded-full"/></div>
        </div>
      </div>
    </section>
  );
};

export default Story;
