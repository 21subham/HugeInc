import React from "react";

const WeBelieve = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center text-left bg-black px-6 md:px-20 text-white">
      <h1 className="text-[10vw] font-bold leading-none tracking-tight">
        We Believe —
      </h1>

      <div className="mt-16 md:mt-32 flex flex-col md:flex-row items-end justify-between gap-10 w-full">
        <div className="max-w-md text-4xl leading-snug font-light   text-right ml-auto">
          <p className="mb-6 text-left font-bold">
            The future will be defined by intelligent interactions between
            brands and users.
          </p>
          <p className="text-left font-bold">
            This next wave of experience will be anticipatory, personalized and
            conversational.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeBelieve;
