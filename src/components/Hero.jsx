import React from "react";

function Hero() {
  return (
    <section className="hero bg-base-100 min-h-[65vh]" id="hero">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto">
        {/* Right: Image */}
        <img
          src="https://i.ibb.co/Ld3yZMyN/01782332944-Sazid.jpg"
          alt="Profile"
          className="max-w-sm rounded-lg shadow-2xl animate__animated animate__fadeInRight"
        />
        {/* Left: Name and Details */}
        <div className="animate__animated animate__fadeInLeft">
          <h1 className="text-5xl font-bold mb-2 animate__animated animate__fadeInDown">
            Hi, I'm <span className="text-primary">MD. SAZIDUR RAHMAN</span>
          </h1>
          <h2 className="text-2xl font-semibold text-primary mt-2 animate__animated animate__fadeInUp">
            Full Stack Developer
          </h2>
          <p className="py-6 text-base-content/80 max-w-xl">
            I started programming in high school, fascinated by how code can solve
            real-world problems. I enjoy building web applications, especially
            those that help people or automate tasks.
          </p>
          <div className="flex gap-4 flex-wrap mb-4">
            <a
              href="https://github.com/sazidur123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-info btn-sm animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-accent btn-sm animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              Twitter
            </a>
          </div>
          <a
            href="/resume.pdf" // Replace with your actual resume file path or link
            download
            className="btn btn-primary btn-md font-bold shadow-lg rounded-full px-8 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
          Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
