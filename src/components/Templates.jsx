import React from "react";
import { useNavigate } from "react-router";

const resumeTemplates = [
  {
    id: 1,
    image: "/templates/classic-white.png",
    title: "Classic White",
    desc: "A timeless, minimalist design for all professions.",
  },
  {
    id: 2,
    image: "/templates/modern-green.png",
    title: "Modern Green",
    desc: "Refreshingly modern layout with green highlights.",
  },
  {
    id: 3,
    image: "/templates/elegant-beige.png",
    title: "Elegant Beige",
    desc: "Soft, warm tones for a premium look.",
  },
  {
    id: 4,
    image: "/templates/professional-navy.png",
    title: "Professional Navy",
    desc: "Formal design with strong navy accents.",
  },
  {
    id: 5,
    image: "/templates/sleek-gray.png",
    title: "Sleek Gray",
    desc: "Contemporary gray palette for tech and creative.",
  },
];

const cardWidth = "w-[260px] sm:w-[330px]";
const cardHeight = "h-[390px] sm:h-[480px]";

const Templates = () => {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#f7f6f3] flex font-sans">
      {/* Sidebar */}
      <aside className="hidden md:flex w-[230px] min-h-screen bg-[#eee8de] px-4 pt-8 pb-6 flex-col border-r border-gray-200">
        <div>
          <div className="text-2xl font-extrabold tracking-wide text-[#8e7f6d] mb-8 px-2">
            FlexiRésumé
          </div>
          <nav className="flex flex-col space-y-2">
            <button className="w-full text-left px-3 py-3 rounded-lg text-[#524d46] font-bold bg-white shadow-sm">
              Resume
            </button>
            <button className="w-full text-left px-3 py-3 rounded-lg text-[#8e7f6d] font-bold hover:bg-white transition">
              Cover Letter
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 px-4 sm:px-10 py-8">
        <h2 className="text-3xl font-extrabold text-[#524d46] mb-10">
          Resume Templates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {/* New Resume Card */}
          <div
            className={`${cardWidth} ${cardHeight} border-2 border-dashed border-[#8e7f6d] bg-[#f7f6f3] rounded-xl flex flex-col items-center justify-center
            cursor-pointer transition hover:border-[#524d46] group`}
            onClick={() => navigate("/editor")}
          >
            <span className="text-4xl font-bold text-[#8e7f6d] group-hover:text-[#524d46] transition">
              +
            </span>
            <span className="mt-2 text-lg font-semibold text-[#8e7f6d] group-hover:text-[#524d46] transition">
              New resume
            </span>
          </div>

          {/* Template Cards */}
          {resumeTemplates.map((tpl) => (
            <div
              key={tpl.id}
              className={`relative bg-white ${cardWidth} ${cardHeight} rounded-xl shadow-xl border border-gray-200 flex flex-col items-center transition hover:shadow-2xl cursor-pointer overflow-hidden group`}
              onClick={() => alert(`Selected template: ${tpl.title}`)}
            >
              <img
                src={tpl.image}
                alt={tpl.title}
                className="w-full h-[78%] object-cover rounded-t-xl"
                draggable="false"
              />
              <div className="p-4 pt-3 flex-1 flex flex-col items-center justify-center text-center">
                <h3 className="font-bold text-[#524d46] mb-2 text-lg">
                  {tpl.title}
                </h3>
                <p className="text-sm text-[#8e7f6d]">{tpl.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Templates;
