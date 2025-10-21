import React, { useState } from "react";
import {
  FiUser,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiFileText,
  FiPlus,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const sectionConfig = [
  { key: "profile", icon: <FiUser />, label: "Profile" },
  { key: "skills", icon: <FiAward />, label: "Skills" },
  { key: "experience", icon: <FiBriefcase />, label: "Experience" },
  { key: "education", icon: <FiBookOpen />, label: "Education" },
  { key: "projects", icon: <FiFileText />, label: "Projects" },
];

const defaultResume = {
  profile: {
    name: "Your Name",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    avatar: "",
  },
  skills: [],
  experience: [],
  education: [],
  projects: [],
};

export default function Editor() {
  const [resume, setResume] = useState(defaultResume);
  const [open, setOpen] = useState("profile");
  const [showAdd, setShowAdd] = useState(false);

  
  const handleProfileChange = (field, value) =>
    setResume((r) => ({ ...r, profile: { ...r.profile, [field]: value } }));

  
  const addSkill = () =>
    setResume((r) => ({ ...r, skills: [...r.skills, ""] }));
  const updateSkill = (idx, value) =>
    setResume((r) => {
      const next = [...r.skills];
      next[idx] = value;
      return { ...r, skills: next };
    });
  const removeSkill = (idx) =>
    setResume((r) => ({ ...r, skills: r.skills.filter((_, i) => i !== idx) }));

  const addExperience = () =>
    setResume((r) => ({
      ...r,
      experience: [
        ...r.experience,
        { jobTitle: "", company: "", start: "", end: "", desc: "" },
      ],
    }));
  const updateExperience = (idx, field, val) =>
    setResume((r) => {
      const next = [...r.experience];
      next[idx][field] = val;
      return { ...r, experience: next };
    });
  const removeExperience = (idx) =>
    setResume((r) => ({
      ...r,
      experience: r.experience.filter((_, i) => i !== idx),
    }));

  const addEducation = () =>
    setResume((r) => ({
      ...r,
      education: [
        ...r.education,
        { degree: "", school: "", start: "", end: "", desc: "" },
      ],
    }));
  const updateEducation = (idx, field, val) =>
    setResume((r) => {
      const next = [...r.education];
      next[idx][field] = val;
      return { ...r, education: next };
    });
  const removeEducation = (idx) =>
    setResume((r) => ({
      ...r,
      education: r.education.filter((_, i) => i !== idx),
    }));

  const addProject = () =>
    setResume((r) => ({
      ...r,
      projects: [...r.projects, { title: "", link: "", desc: "" }],
    }));
  const updateProject = (idx, field, val) =>
    setResume((r) => {
      const next = [...r.projects];
      next[idx][field] = val;
      return { ...r, projects: next };
    });
  const removeProject = (idx) =>
    setResume((r) => ({
      ...r,
      projects: r.projects.filter((_, i) => i !== idx),
    }));

  const sectionAdders = [
    { key: "skills", label: "Skill", fn: addSkill },
    { key: "experience", label: "Experience", fn: addExperience },
    { key: "education", label: "Education", fn: addEducation },
    { key: "projects", label: "Project", fn: addProject },
  ];

  return (
    <div className="bg-[#f7f6f3] min-h-screen w-full flex flex-col md:flex-row">
      <aside className="md:w-1/2 w-full max-w-2xl px-2 md:px-7 flex flex-col bg-transparent pb-6 pt-2 md:py-10 gap-2">
        <div className="flex flex-col gap-2">
          {sectionConfig.map((sec) => (
            <div key={sec.key} className="w-full">
              <button
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl font-bold text-lg shadow bg-white transition-all
                ${
                  open === sec.key
                    ? "ring-2 ring-[#8e7f6d] shadow-lg"
                    : "hover:bg-[#f3efe8]"
                }`}
                onClick={() => setOpen(open === sec.key ? "" : sec.key)}
                style={{ color: open === sec.key ? "#8e7f6d" : "#6e5e4a" }}
              >
                <span className="text-2xl">{sec.icon}</span>
                <span className="flex-1">{sec.label}</span>
                <span>
                  {open === sec.key ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {open === sec.key && (
                <div className="bg-white border-t rounded-b-2xl px-4 pb-4 pt-3 shadow -mt-2">
                  {sec.key === "profile" && (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={resume.profile.name}
                        onChange={(e) =>
                          handleProfileChange("name", e.target.value)
                        }
                        placeholder="Full Name"
                        className="block w-full p-2 rounded border border-gray-200 font-bold text-lg"
                      />
                      <input
                        type="text"
                        value={resume.profile.title}
                        onChange={(e) =>
                          handleProfileChange("title", e.target.value)
                        }
                        placeholder="Job Title"
                        className="block w-full p-2 rounded border border-gray-200"
                      />
                      <input
                        type="email"
                        value={resume.profile.email}
                        onChange={(e) =>
                          handleProfileChange("email", e.target.value)
                        }
                        placeholder="Email"
                        className="block w-full p-2 rounded border border-gray-200"
                      />
                      <input
                        type="text"
                        value={resume.profile.phone}
                        onChange={(e) =>
                          handleProfileChange("phone", e.target.value)
                        }
                        placeholder="Phone"
                        className="block w-full p-2 rounded border border-gray-200"
                      />
                      <input
                        type="text"
                        value={resume.profile.location}
                        onChange={(e) =>
                          handleProfileChange("location", e.target.value)
                        }
                        placeholder="Location"
                        className="block w-full p-2 rounded border border-gray-200"
                      />
                      <input
                        type="text"
                        value={resume.profile.linkedin}
                        onChange={(e) =>
                          handleProfileChange("linkedin", e.target.value)
                        }
                        placeholder="LinkedIn"
                        className="block w-full p-2 rounded border border-gray-200"
                      />
                    </div>
                  )}
                  {sec.key === "skills" && (
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-3 mb-1">
                        {resume.skills.map((skill, idx) => (
                          <div
                            key={idx}
                            className="flex items-center bg-[#f7f6f3] rounded-full border py-1 px-3 gap-2"
                          >
                            <input
                              value={skill}
                              onChange={(e) => updateSkill(idx, e.target.value)}
                              className="bg-transparent outline-none"
                            />
                            <button
                              onClick={() => removeSkill(idx)}
                              className="text-[#8e7f6d] pl-1 font-bold"
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        className="bg-[#8e7f6d] hover:bg-[#6e5e4a] px-5 py-1.5 rounded-full text-white font-bold"
                        onClick={addSkill}
                      >
                        + Add Skill
                      </button>
                    </div>
                  )}
                  {sec.key === "experience" && (
                    <div className="space-y-6">
                      {resume.experience.map((exp, idx) => (
                        <div
                          key={idx}
                          className="bg-[#f7f6f3] py-2 px-3 rounded-xl shadow"
                        >
                          <input
                            value={exp.jobTitle}
                            onChange={(e) =>
                              updateExperience(idx, "jobTitle", e.target.value)
                            }
                            placeholder="Job Title"
                            className="w-full border p-2 rounded my-1"
                          />
                          <input
                            value={exp.company}
                            onChange={(e) =>
                              updateExperience(idx, "company", e.target.value)
                            }
                            placeholder="Company"
                            className="w-full border p-2 rounded my-1"
                          />
                          <div className="flex gap-2">
                            <input
                              value={exp.start}
                              onChange={(e) =>
                                updateExperience(idx, "start", e.target.value)
                              }
                              placeholder="Start"
                              className="w-1/2 border p-2 rounded my-1"
                            />
                            <input
                              value={exp.end}
                              onChange={(e) =>
                                updateExperience(idx, "end", e.target.value)
                              }
                              placeholder="End"
                              className="w-1/2 border p-2 rounded my-1"
                            />
                          </div>
                          <textarea
                            value={exp.desc}
                            onChange={(e) =>
                              updateExperience(idx, "desc", e.target.value)
                            }
                            placeholder="Describe your role..."
                            className="w-full p-2 border rounded my-1"
                          />
                          <button
                            className="mt-2 text-xs text-[#8e7f6d] hover:text-[#6e5e4a] hover:underline"
                            onClick={() => removeExperience(idx)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        className="bg-[#8e7f6d] hover:bg-[#6e5e4a] px-5 py-1.5 rounded-full text-white font-bold"
                        onClick={addExperience}
                      >
                        + Add Experience
                      </button>
                    </div>
                  )}
                  {sec.key === "education" && (
                    <div className="space-y-6">
                      {resume.education.map((edu, idx) => (
                        <div
                          key={idx}
                          className="bg-[#f7f6f3] py-2 px-3 rounded-xl shadow"
                        >
                          <input
                            value={edu.degree}
                            onChange={(e) =>
                              updateEducation(idx, "degree", e.target.value)
                            }
                            placeholder="Degree"
                            className="w-full border p-2 rounded my-1"
                          />
                          <input
                            value={edu.school}
                            onChange={(e) =>
                              updateEducation(idx, "school", e.target.value)
                            }
                            placeholder="School"
                            className="w-full border p-2 rounded my-1"
                          />
                          <div className="flex gap-2">
                            <input
                              value={edu.start}
                              onChange={(e) =>
                                updateEducation(idx, "start", e.target.value)
                              }
                              placeholder="Start"
                              className="w-1/2 border p-2 rounded my-1"
                            />
                            <input
                              value={edu.end}
                              onChange={(e) =>
                                updateEducation(idx, "end", e.target.value)
                              }
                              placeholder="End"
                              className="w-1/2 border p-2 rounded my-1"
                            />
                          </div>
                          <textarea
                            value={edu.desc}
                            onChange={(e) =>
                              updateEducation(idx, "desc", e.target.value)
                            }
                            placeholder="Describe your studies..."
                            className="w-full p-2 border rounded my-1"
                          />
                          <button
                            className="mt-2 text-xs text-[#8e7f6d] hover:text-[#6e5e4a] hover:underline"
                            onClick={() => removeEducation(idx)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        className="bg-[#8e7f6d] hover:bg-[#6e5e4a] px-5 py-1.5 rounded-full text-white font-bold"
                        onClick={addEducation}
                      >
                        + Add Education
                      </button>
                    </div>
                  )}
                  {sec.key === "projects" && (
                    <div className="space-y-6">
                      {resume.projects.map((proj, idx) => (
                        <div
                          key={idx}
                          className="bg-[#f7f6f3] py-2 px-3 rounded-xl shadow"
                        >
                          <input
                            value={proj.title}
                            onChange={(e) =>
                              updateProject(idx, "title", e.target.value)
                            }
                            placeholder="Project Title"
                            className="w-full border p-2 rounded my-1"
                          />
                          <input
                            value={proj.link}
                            onChange={(e) =>
                              updateProject(idx, "link", e.target.value)
                            }
                            placeholder="Link (optional)"
                            className="w-full border p-2 rounded my-1"
                          />
                          <textarea
                            value={proj.desc}
                            onChange={(e) =>
                              updateProject(idx, "desc", e.target.value)
                            }
                            placeholder="Project description..."
                            className="w-full p-2 border rounded my-1"
                          />
                          <button
                            className="mt-2 text-xs text-[#8e7f6d] hover:text-[#6e5e4a] hover:underline"
                            onClick={() => removeProject(idx)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        className="bg-[#8e7f6d] hover:bg-[#6e5e4a] px-5 py-1.5 rounded-full text-white font-bold"
                        onClick={addProject}
                      >
                        + Add Project
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative mt-6 w-full">
          <button
            className="w-full rounded-2xl py-4 font-bold text-lg flex gap-2 justify-center items-center shadow-lg bg-[#8e7f6d] text-white hover:bg-[#6e5e4a] transition"
            onClick={() => setShowAdd(!showAdd)}
            aria-expanded={showAdd}
          >
            <FiPlus className="text-xl" /> Add Content
          </button>
          {showAdd && (
            <div className="absolute left-0 right-0 mt-2 z-50 bg-white rounded-xl border shadow-lg flex flex-col gap-2 p-3">
              {sectionAdders.map((sa) => (
                <button
                  key={sa.key}
                  onClick={() => {
                    sa.fn();
                    setShowAdd(false);
                  }}
                  className="w-full px-3 py-3 rounded-lg text-base text-[#6e5e4a] hover:bg-[#f3efe8] transition flex items-center gap-2"
                >
                  + {sa.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>

      <div className="flex-1 flex justify-center items-start md:py-10 px-2 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 w-full max-w-[700px] min-h-[85vh] py-8 px-3 sm:px-6 md:px-10">
          <div className="flex items-center gap-6 mb-7 flex-wrap">
            {resume.profile.avatar && (
              <img
                src={resume.profile.avatar}
                alt="avatar"
                className="h-16 w-16 rounded-full object-cover"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#6e5e4a" }}>
                {resume.profile.name}
              </h1>
              <h2 className="text-xl" style={{ color: "#8e7f6d" }}>
                {resume.profile.title}
              </h2>
              <div
                className="flex flex-wrap gap-x-4 gap-y-1 text-base mt-1"
                style={{ color: "#6e5e4a" }}
              >
                {resume.profile.email && <span>{resume.profile.email}</span>}
                {resume.profile.phone && <span>{resume.profile.phone}</span>}
                {resume.profile.location && (
                  <span>{resume.profile.location}</span>
                )}
                {resume.profile.linkedin && (
                  <span>{resume.profile.linkedin}</span>
                )}
              </div>
            </div>
          </div>
          {/* Other sections */}
          {resume.skills.length > 0 && (
            <div className="my-5">
              <h3
                className="font-bold uppercase text-sm mb-2"
                style={{ color: "#8e7f6d" }}
              >
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-[#f7f6f3] rounded-full px-4 py-1 font-semibold text-sm"
                    style={{ color: "#6e5e4a" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          {resume.experience.length > 0 && (
            <div className="my-6">
              <h3
                className="font-bold uppercase text-sm mb-2"
                style={{ color: "#8e7f6d" }}
              >
                Experience
              </h3>
              {resume.experience.map((exp, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex flex-col sm:flex-row gap-2 font-bold">
                    <span>{exp.jobTitle}</span>
                    <span style={{ color: "#8e7f6d" }}>@ {exp.company}</span>
                    <span
                      className="ml-auto text-sm font-medium"
                      style={{ color: "#6e5e4a" }}
                    >
                      {exp.start} - {exp.end}
                    </span>
                  </div>
                  <div className="ml-1 text-xs" style={{ color: "#6e5e4a" }}>
                    {exp.desc}
                  </div>
                </div>
              ))}
            </div>
          )}
          {resume.education.length > 0 && (
            <div className="my-6">
              <h3
                className="font-bold uppercase text-sm mb-2"
                style={{ color: "#8e7f6d" }}
              >
                Education
              </h3>
              {resume.education.map((edu, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex flex-col sm:flex-row gap-2 font-bold">
                    <span>{edu.degree}</span>
                    <span style={{ color: "#8e7f6d" }}>@ {edu.school}</span>
                    <span
                      className="ml-auto text-sm font-medium"
                      style={{ color: "#6e5e4a" }}
                    >
                      {edu.start} - {edu.end}
                    </span>
                  </div>
                  <div className="ml-1 text-xs" style={{ color: "#6e5e4a" }}>
                    {edu.desc}
                  </div>
                </div>
              ))}
            </div>
          )}
          {resume.projects.length > 0 && (
            <div className="my-6">
              <h3
                className="font-bold uppercase text-sm mb-2"
                style={{ color: "#8e7f6d" }}
              >
                Projects
              </h3>
              {resume.projects.map((p, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex flex-col sm:flex-row gap-2 font-bold">
                    <span>{p.title}</span>
                    {p.link && (
                      <span className="underline" style={{ color: "#8e7f6d" }}>
                        {p.link}
                      </span>
                    )}
                  </div>
                  <div className="ml-1 text-xs" style={{ color: "#6e5e4a" }}>
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
