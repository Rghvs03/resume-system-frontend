import React from "react";
import {
  FiEdit3,
  FiSmartphone,
  FiAperture,
  FiZap,
  FiLayers,
} from "react-icons/fi";

const About = () => {
  return (
    <div className="bg-[#f7f6f3] min-h-screen flex flex-col items-center justify-center px-2 sm:px-0 py-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <div className="w-full flex justify-center mb-2">
          <svg
            width="200"
            height="120"
            viewBox="0 0 270 120"
            className="w-44 sm:w-60"
          >
            <rect
              x="10"
              y="20"
              rx="18"
              width="90"
              height="100"
              fill="#8e7f6d"
            />
            <rect
              x="60"
              y="10"
              rx="12"
              width="180"
              height="80"
              fill="#6e5e4a"
              opacity="0.22"
            />
            <circle cx="170" cy="60" r="32" fill="#8e7f6d" opacity="0.22" />
            <rect
              x="48"
              y="62"
              rx="6"
              width="140"
              height="18"
              fill="#fff"
              opacity="0.9"
            />
            <rect
              x="70"
              y="30"
              width="100"
              height="5"
              rx="2"
              fill="#fff"
              opacity="0.95"
            />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-[#6e5e4a] text-center tracking-tight">
          About Resume Builder 2025
        </h1>
        <p className="text-lg sm:text-xl font-medium text-[#8e7f6d] text-center max-w-lg mb-2">
          Design your story, share your vision.
          <br />
          <span className="font-semibold text-[#6e5e4a]">Stand out</span> in
          every job application.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow h-full">
            <FiEdit3 size={32} className="text-[#8e7f6d]" />
            <span>
              <span className="font-bold text-[#6e5e4a]">Edit Everything</span>
              <br />
              Tweak every section, see instant results.
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow h-full">
            <FiSmartphone size={32} className="text-[#8e7f6d]" />
            <span>
              <span className="font-bold text-[#6e5e4a]">Mobile-First</span>
              <br />
              Designed for phone & desktop.
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow h-full">
            <FiAperture size={32} className="text-[#8e7f6d]" />
            <span>
              <span className="font-bold text-[#6e5e4a]">Modern UI</span>
              <br />
              Minimal, crisp and on-brand.
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow h-full">
            <FiLayers size={32} className="text-[#8e7f6d]" />
            <span>
              <span className="font-bold text-[#6e5e4a]">
                Flexible Sections
              </span>
              <br />
              Skills, work, education—your way.
            </span>
          </div>
        </div>

        <p className="text-center text-[#8e7f6d] text-base sm:text-lg mt-7">
          Built with React and Tailwind CSS for the modern professional.
          <br />
          <span className="inline-flex gap-1 items-center text-[#6e5e4a] font-semibold">
            <FiZap /> Fast, smooth, future-ready.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
