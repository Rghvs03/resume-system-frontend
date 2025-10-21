import React from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <div className="max-h-screen bg-[#f7f6f3] font-sans flex flex-col">
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-12 sm:pb-24 gap-10 sm:gap-12 w-full">
        {/* LEFT SECTION */}
        <div className="flex-1 w-full md:w-1/2 order-1 md:order-none flex flex-col items-start">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug text-gray-900 mb-4 sm:mb-6 order-1 md:order-none">
            Design a{" "}
            <span className="text-[#8e7f6d] animate-pulse text-shadow-lg text-shadow-[#523c22]">
              Professional CV
            </span>{" "}
            in Minutes
          </h1>

          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-7 max-w-xl order-2 md:order-none">
            Flexible, modern templates. Instant preview &amp; download. No
            signup, no hidden fees—your modern résumé, your way.
          </p>

          {/* CTA BUTTON — shows right after heading in mobile */}
          <button
            onClick={() => navigate("/templates")}
            className="inline-block bg-[#8e7f6d] drop-shadow-lg drop-shadow-[#6e5e4a] hover:bg-[#524d46] text-white font-semibold text-base sm:text-lg py-2 sm:py-3 px-5 sm:px-8 rounded-full shadow transition mb-8 sm:mb-0 order-2 md:order-none"
          >
            Get Started &mdash; It’s Free
          </button>
        </div>

        {/* IMAGE SECTION — comes last in mobile */}
        <div className="flex-1 w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 order-3 md:order-none">
          <div className="relative w-[180px] xs:w-[210px] sm:w-[230px] md:w-[360px] h-[230px] xs:h-[260px] sm:h-[330px] md:h-[480px]">
            <div className="absolute z-10 left-0 top-0 w-full h-full">
              <img
                src="/templates/classic-white.png"
                alt="Resume Example 1"
                className="rounded-2xl object-cover w-full h-full border-2 border-white shadow-xl"
                draggable="false"
              />
            </div>
            <div className="absolute left-7 top-10 w-full h-full opacity-80 z-0">
              <img
                src="/templates/modern-green.png"
                alt="Resume Example 2"
                className="rounded-2xl object-cover w-full h-full border-2 border-[#EFEFEF] shadow"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
