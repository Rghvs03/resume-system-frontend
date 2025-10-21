import React, { useState } from "react";

const defaultResume = {
  heading: {
    name: "Your Name",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    align: "left",
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
  projects: [],
};

// Section order keys
const defaultSectionOrder = [
  "experience",
  "education",
  "skills"
];

const alignmentMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

const Editor = () => {
  const [resume, setResume] = useState(defaultResume);
  // Controls the order of main fields in preview
  const [sectionOrder, setSectionOrder] = useState(defaultSectionOrder);

  // Heading
  const handleHeadingChange = (field, value) =>
    setResume((prev) => ({
      ...prev,
      heading: { ...prev.heading, [field]: value },
    }));

  const handleSectionChange = (sec, value) =>
    setResume((prev) => ({ ...prev, [sec]: value }));

  // Experience
  const addExperience = () =>
    handleSectionChange("experience", [
      ...resume.experience,
      { jobTitle: "", company: "", location: "", start: "", end: "", bullets: [""] },
    ]);
  const updateExperience = (idx, field, value) => {
    const newExp = [...resume.experience];
    newExp[idx][field] = value;
    handleSectionChange("experience", newExp);
  };
  const removeExperience = (idx) => {
    const newExp = [...resume.experience];
    newExp.splice(idx, 1);
    handleSectionChange("experience", newExp);
  };

  // Skills
  const addSkill = () => handleSectionChange("skills", [...resume.skills, ""]);
  const updateSkill = (idx, value) => {
    const newSkills = [...resume.skills];
    newSkills[idx] = value;
    handleSectionChange("skills", newSkills);
  };
  const removeSkill = (idx) => {
    const newSkills = [...resume.skills];
    newSkills.splice(idx, 1);
    handleSectionChange("skills", newSkills);
  };

  // Education
  const addEducation = () =>
    handleSectionChange("education", [
      ...resume.education,
      { degree: "", school: "", location: "", start: "", end: "", details: "" },
    ]);
  const updateEducation = (idx, field, value) => {
    const newEdu = [...resume.education];
    newEdu[idx][field] = value;
    handleSectionChange("education", newEdu);
  };
  const removeEducation = (idx) => {
    const newEdu = [...resume.education];
    newEdu.splice(idx, 1);
    handleSectionChange("education", newEdu);
  };

  // Reorder fields (move up/down)
  const moveSection = (section, dir) => {
    const idx = sectionOrder.indexOf(section);
    let newOrder = [...sectionOrder];
    if (dir === "up" && idx > 0) {
      [newOrder[idx], newOrder[idx - 1]] = [newOrder[idx - 1], newOrder[idx]];
    }
    if (dir === "down" && idx < newOrder.length - 1) {
      [newOrder[idx], newOrder[idx + 1]] = [newOrder[idx + 1], newOrder[idx]];
    }
    setSectionOrder(newOrder);
  };

  return (
    <div className="min-h-screen flex bg-[#f7f6f3]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-[220px] bg-[#eee8de] px-4 pt-10 border-r border-gray-200 font-semibold">
        <div className="text-2xl text-[#8e7f6d] font-extrabold mb-8 tracking-wide">
          FlexiRésumé
        </div>
        <nav className="flex flex-col text-[#524d46] gap-2">
          <button className="py-3 px-4 text-left bg-white shadow rounded-lg mb-2">
            Heading
          </button>
          <button className="py-3 px-4 text-left hover:bg-white rounded-lg mb-2">
            Summary
          </button>
          <button className="py-3 px-4 text-left hover:bg-white rounded-lg mb-2">
            Experience
          </button>
          <button className="py-3 px-4 text-left hover:bg-white rounded-lg mb-2">
            Education
          </button>
          <button className="py-3 px-4 text-left hover:bg-white rounded-lg mb-2">
            Skills
          </button>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Editor Panel */}
        <section className="md:w-1/2 w-full p-6 space-y-7">
          {/* Heading Editor */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#524d46] mb-2">Resume Heading</h2>
            <div className="flex gap-4 mb-2">
              {["left", "center", "right"].map((align) => (
                <button
                  key={align}
                  className={`px-3 py-1 rounded border shadow-sm font-semibold ${
                    resume.heading.align === align
                      ? "bg-[#8e7f6d] text-white"
                      : "bg-white text-[#524d46]"
                  } transition`}
                  onClick={() => handleHeadingChange("align", align)}
                >
                  {align.charAt(0).toUpperCase() + align.slice(1)}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={resume.heading.name}
              placeholder="Full Name"
              onChange={(e) => handleHeadingChange("name", e.target.value)}
              className="w-full p-3 mb-2 border rounded bg-white shadow"
            />
            <input
              type="text"
              value={resume.heading.title}
              placeholder="Job Title"
              onChange={(e) => handleHeadingChange("title", e.target.value)}
              className="w-full p-3 mb-2 border rounded bg-white"
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <input
                type="email"
                value={resume.heading.email}
                placeholder="Email"
                onChange={(e) => handleHeadingChange("email", e.target.value)}
                className="flex-1 p-3 border rounded bg-white"
              />
              <input
                type="text"
                value={resume.heading.phone}
                placeholder="Phone"
                onChange={(e) => handleHeadingChange("phone", e.target.value)}
                className="flex-1 p-3 border rounded bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 mt-2">
              <input
                type="text"
                value={resume.heading.location}
                placeholder="Location"
                onChange={(e) =>
                  handleHeadingChange("location", e.target.value)
                }
                className="flex-1 p-3 border rounded bg-white"
              />
              <input
                type="text"
                value={resume.heading.linkedin}
                placeholder="LinkedIn"
                onChange={(e) =>
                  handleHeadingChange("linkedin", e.target.value)
                }
                className="flex-1 p-3 border rounded bg-white"
              />
            </div>
          </div>
          {/* Summary Editor */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#524d46] mb-2">
              Professional Summary
            </h2>
            <textarea
              rows={4}
              value={resume.summary}
              onChange={(e) => handleSectionChange("summary", e.target.value)}
              placeholder="Write a compelling professional summary..."
              className="w-full bg-white border rounded-lg p-4 shadow focus:outline-none"
            />
          </div>
          {/* -- Reorderable Editors for Experience, Education, Skills -- */}
          {sectionOrder.map((sec, sIdx) => (
            <div className="mb-8" key={sec}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-[#524d46] capitalize">{sec}</h2>
                  {/* Move Up/Down Buttons */}
                  <button
                    className="text-xs px-2 py-1 rounded bg-[#e9e2d8] text-[#8e7f6d] font-bold hover:bg-[#d3c7bb] transition"
                    disabled={sIdx === 0}
                    onClick={() => moveSection(sec, "up")}
                  >
                    ↑
                  </button>
                  <button
                    className="text-xs px-2 py-1 rounded bg-[#e9e2d8] text-[#8e7f6d] font-bold hover:bg-[#d3c7bb] transition"
                    disabled={sIdx === sectionOrder.length - 1}
                    onClick={() => moveSection(sec, "down")}
                  >
                    ↓
                  </button>
                </div>
                {/* Add Buttons Per Section */}
                {sec === "experience" && (
                  <button
                    className="bg-[#8e7f6d] text-white px-4 py-2 rounded-full font-semibold"
                    onClick={addExperience}
                  >
                    + Add
                  </button>
                )}
                {sec === "education" && (
                  <button
                    className="bg-[#8e7f6d] text-white px-4 py-2 rounded-full font-semibold"
                    onClick={addEducation}
                  >
                    + Add
                  </button>
                )}
                {sec === "skills" && (
                  <button
                    className="bg-[#8e7f6d] text-white px-4 py-2 rounded-full font-semibold"
                    onClick={addSkill}
                  >
                    + Add
                  </button>
                )}
              </div>
              {sec === "experience" &&
                <div className="space-y-6">
                  {resume.experience.map((exp, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white shadow">
                      <div className="flex flex-col sm:flex-row gap-2 mb-2">
                        <input
                          type="text"
                          value={exp.jobTitle}
                          onChange={e => updateExperience(idx, "jobTitle", e.target.value)}
                          placeholder="Job Title"
                          className="flex-1 p-2 border rounded bg-white"
                        />
                        <input
                          type="text"
                          value={exp.company}
                          onChange={e => updateExperience(idx, "company", e.target.value)}
                          placeholder="Company"
                          className="flex-1 p-2 border rounded bg-white"
                        />
                      </div>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={exp.location}
                          onChange={e => updateExperience(idx, "location", e.target.value)}
                          placeholder="Location"
                          className="flex-1 p-2 border rounded bg-white"
                        />
                        <input
                          type="text"
                          value={exp.start}
                          onChange={e => updateExperience(idx, "start", e.target.value)}
                          placeholder="Start"
                          className="w-28 p-2 border rounded bg-white"
                        />
                        <input
                          type="text"
                          value={exp.end}
                          onChange={e => updateExperience(idx, "end", e.target.value)}
                          placeholder="End"
                          className="w-28 p-2 border rounded bg-white"
                        />
                      </div>
                      <div>
                        {exp.bullets.map((b, bIdx) => (
                          <input
                            key={bIdx}
                            value={b}
                            onChange={e => {
                              const updated = [...exp.bullets];
                              updated[bIdx] = e.target.value;
                              updateExperience(idx, "bullets", updated);
                            }}
                            placeholder="Achievement or responsibility..."
                            className="w-full p-2 mb-2 border rounded bg-white"
                          />
                        ))}
                        <div className="flex gap-2 mt-1">
                          <button
                            onClick={() => updateExperience(idx, "bullets", [...exp.bullets, ""])}
                            className="text-xs bg-[#8e7f6d] text-white px-2 py-1 rounded"
                          >
                            + Bullet
                          </button>
                          {exp.bullets.length > 1 && (
                            <button
                              onClick={() => updateExperience(idx, "bullets", exp.bullets.slice(0, -1))}
                              className="text-xs bg-red-100 text-red-900 px-2 py-1 rounded"
                            >
                              Remove Bullet
                            </button>
                          )}
                        </div>
                      </div>
                      <button
                        className="mt-3 text-xs text-red-600 hover:underline"
                        onClick={() => removeExperience(idx)}
                      >
                        Remove Experience
                      </button>
                    </div>
                  ))}
                </div>
              }
              {sec === "education" &&
                <div className="space-y-6">
                  {resume.education.map((edu, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white shadow">
                      <div className="flex flex-col sm:flex-row gap-2 mb-2">
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={e => updateEducation(idx, "degree", e.target.value)}
                          placeholder="Degree"
                          className="flex-1 p-2 border rounded bg-white"
                        />
                        <input
                          type="text"
                          value={edu.school}
                          onChange={e => updateEducation(idx, "school", e.target.value)}
                          placeholder="School"
                          className="flex-1 p-2 border rounded bg-white"
                        />
                      </div>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={edu.location}
                          onChange={e => updateEducation(idx, "location", e.target.value)}
                          placeholder="Location"
                          className="flex-1 p-2 border rounded bg-white"
                        />
                        <input
                          type="text"
                          value={edu.start}
                          onChange={e => updateEducation(idx, "start", e.target.value)}
                          placeholder="Start"
                          className="w-28 p-2 border rounded bg-white"
                        />
                        <input
                          type="text"
                          value={edu.end}
                          onChange={e => updateEducation(idx, "end", e.target.value)}
                          placeholder="End"
                          className="w-28 p-2 border rounded bg-white"
                        />
                      </div>
                      <textarea
                        value={edu.details}
                        onChange={e => updateEducation(idx, "details", e.target.value)}
                        placeholder="Details, honors, activities…"
                        className="w-full p-2 border rounded bg-white"
                      />
                      <button
                        className="mt-3 text-xs text-red-600 hover:underline"
                        onClick={() => removeEducation(idx)}
                      >
                        Remove Education
                      </button>
                    </div>
                  ))}
                </div>
              }
              {sec === "skills" &&
                <div className="flex flex-wrap gap-3">
                  {resume.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white shadow border border-gray-200 px-3 py-2 rounded-full"
                    >
                      <input
                        value={skill}
                        onChange={e => updateSkill(idx, e.target.value)}
                        className="bg-transparent outline-none text-[#524d46] font-semibold"
                      />
                      <button
                        onClick={() => removeSkill(idx)}
                        className="text-sm text-red-400 hover:text-red-600"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              }
            </div>
          ))}
        </section>

        {/* Live Resume Preview */}
        <aside className="md:w-1/2 w-full px-4 py-8 flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#eee8de] w-[340px] sm:w-[440px] md:w-[470px] max-w-full min-h-[620px] px-7 py-7 flex flex-col gap-5">
            {/* Heading Preview */}
            <div
              className={`flex flex-col ${alignmentMap[resume.heading.align]}`}
            >
              <span className="text-3xl font-bold text-[#524d46]">
                {resume.heading.name}
              </span>
              <span className="text-lg mt-1 font-semibold text-[#8e7f6d]">
                {resume.heading.title}
              </span>
              <div className="text-[15px] text-[#816f53] mt-3 flex gap-3 flex-wrap">
                {resume.heading.email && <span>{resume.heading.email}</span>}
                {resume.heading.phone && <span>{resume.heading.phone}</span>}
                {resume.heading.location && (
                  <span>{resume.heading.location}</span>
                )}
                {resume.heading.linkedin && (
                  <span>{resume.heading.linkedin}</span>
                )}
              </div>
            </div>
            {/* Summary */}
            {resume.summary && (
              <div>
                <h3 className="text-base uppercase tracking-wide text-[#8e7f6d] mb-1 font-bold">
                  Summary
                </h3>
                <div className="text-[15px] text-[#524d46] whitespace-pre-line">
                  {resume.summary}
                </div>
              </div>
            )}
            {/* Render Preview Sections in Live Order */}
            {sectionOrder.map(sec => (
              <React.Fragment key={sec}>
                {sec === "experience" && resume.experience.length > 0 && (
                  <div>
                    <h3 className="text-base uppercase tracking-wide text-[#8e7f6d] mb-1 font-bold">
                      Experience
                    </h3>
                    <div className="flex flex-col gap-3">
                      {resume.experience.map((exp, idx) => (
                        <div key={idx}>
                          <div className="flex flex-col sm:flex-row gap-2 font-semibold">
                            <span>{exp.jobTitle}</span>
                            {exp.company && (
                              <span className="text-[#8e7f6d]">
                                @ {exp.company}
                              </span>
                            )}
                            <span className="ml-auto text-sm">
                              {exp.start} - {exp.end}
                            </span>
                          </div>
                          <div className="text-sm text-[#82685d]">
                            {exp.location}
                          </div>
                          <ul className="ml-5 list-disc text-sm text-[#705849]">
                            {exp.bullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {sec === "education" && resume.education.length > 0 && (
                  <div>
                    <h3 className="text-base uppercase tracking-wide text-[#8e7f6d] mb-1 font-bold">
                      Education
                    </h3>
                    <div className="flex flex-col gap-3">
                      {resume.education.map((edu, idx) => (
                        <div key={idx}>
                          <div className="flex flex-col sm:flex-row gap-2 font-semibold">
                            <span>{edu.degree}</span>
                            {edu.school && <span className="text-[#8e7f6d]">@ {edu.school}</span>}
                            <span className="ml-auto text-sm">{edu.start} - {edu.end}</span>
                          </div>
                          <div className="text-sm text-[#82685d]">{edu.location}</div>
                          {edu.details && <div className="text-sm text-[#705849]">{edu.details}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {sec === "skills" && resume.skills.length > 0 && (
                  <div>
                    <h3 className="text-base uppercase tracking-wide text-[#8e7f6d] mb-1 font-bold">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {resume.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="bg-[#f2ede9] border border-[#e4dbd2] px-4 py-1 rounded-full text-[#524d46] font-semibold text-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Editor;
