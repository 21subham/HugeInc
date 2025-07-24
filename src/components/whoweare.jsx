import React from "react";

const WhoWeAre = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-start bg-white px-6 md:px-20 text-black">
      <h1 className="text-[10vw] font-bold leading-none tracking-tight">
        Who we are —
      </h1>

      <div className="mt-16 md:mt-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 w-full">
        {/* Image */}
        <div className="bg-[#f4f9fe] p-8">
          <img
            src="/mcd.png"
            alt="Logo"
            className="w-[100px] h-auto object-contain"
          />
        </div>

        {/* Text content */}
        <div className="max-w-md text-2xl leading-snug font-light">
          <p className="mb-6">We are a design and tech company.</p>
          <p>We create innovative products and experiences.</p>
          <p>
            We drive growth and productivity for the world’s most ambitious
            brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
