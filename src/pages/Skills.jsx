import React from "react";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Linux", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Postman", category: "Tools" },
];

function Skills() {
  return (
    <section className="py-16 px-4 bg-base-100" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-blue-700 font-bold text-center  mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="card bg-white shadow-md border border-base-200 rounded-xl flex flex-col items-center py-6 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-lg font-semibold text-blue-700">{skill.name}</span>
              <span className="badge badge-outline badge-sm mt-2">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
