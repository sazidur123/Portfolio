import React from "react";

function About() {
  return (
    <section className="py-20 px-4 bg-base-100" id="about">
      <div className="max-w-3xl mx-auto rounded-3xl shadow-xl bg-white/80 backdrop-blur-md p-10 flex flex-col items-center animate__animated animate__fadeInUp">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 tracking-tight">About Me</h2>
        <p className="text-lg text-base-content/80 leading-relaxed mb-6">
          I started programming in high school, fascinated by how code can solve real-world problems. I enjoy building web applications, especially those that help people or automate tasks. Outside of coding, I love playing chess, hiking, and painting. My curiosity and passion for learning drive me to keep improving my skills and exploring new technologies.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="badge badge-primary badge-lg">Web Apps</span>
          <span className="badge badge-secondary badge-lg">Automation</span>
          <span className="badge badge-accent badge-lg">Chess</span>
          <span className="badge badge-info badge-lg">Hiking</span>
          <span className="badge badge-success badge-lg">Painting</span>
        </div>
      </div>
    </section>
  );
}

export default About;
