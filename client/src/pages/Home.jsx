import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-sceen bg-slate-300">
      <div className="">
        <h1 className="flex p-20  text-[60px] font-bold -tracking-[.07em] font-mono  ">
          National Healthcare provider Registry
        </h1>
        <div className="flex px-20 justify-center ">
          <div className=" p-12 m-4 bg-stone-300 rounded-[50px] shadow-lg">
            <h3 className="text-[20px] font-serif flex">Healthcare</h3>
            <h1 className="text-[50px] font-serif">Professional Registary</h1>
            <p className="text-">
              Healthcare professional registration Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam iusto cumque impedit
              quibusdam nulla, illo maxime natus veniam deleniti earum facere.
              Placeat, veritatis voluptatibus omnis ut tempora officia eaque
              libero!
            </p>
            <a className="text-orange-800  font-semibold" href="">
              Read more
            </a>
          </div>
          <div className=" p-12 m-4 bg-stone-300 rounded-[50px] shadow-lg">
            <h3 className="text-[20px] font-serif flex">Health</h3>
            <h1 className="text-[50px] font-serif">Facility Registary</h1>
            <p className="text-">
              Healthcare professional registration Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam iusto cumque impedit
              quibusdam nulla, illo maxime natus veniam deleniti earum facere.
              Placeat, veritatis voluptatibus omnis ut tempora officia eaque
              libero!
            </p>
            <a className="text-orange-800  font-semibold" href="">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
