import React, { useState } from "react";

const projects = [
	{
		id: 1,
		name: "Car Rental System",
		images: [
			"https://i.ibb.co/RGJJzZmk/Screenshot-from-2025-06-29-02-02-56.png",
			"https://i.ibb.co/gFLW7Y7x/Screenshot-from-2025-06-29-02-03-05.png",
			"https://i.ibb.co/kkq8Jzc/Screenshot-from-2025-06-29-02-03-58.png",
		],
		stack: "React, Node.js, MongoDB",
		description:
			"A web platform for booking, managing, and tracking car rentals with real-time availability.",
		live: "https://carrentalsystema11.netlify.app/",
		github: "https://github.com/sazidur123/Car-Rental-System",
		challenges: "Managing booking and payment conflicts.",
		improvements: "Add mobile app and loyalty program.",
	},
	{
		id: 2,
		name: "Plant Care Tracker",
		images: [
			"https://i.ibb.co/rRP9ccZY/Screenshot-from-2025-06-29-02-23-41.png",
			"https://i.ibb.co/gMvkghSB/Screenshot-from-2025-06-29-02-24-01.png",
			"https://i.ibb.co/8LLv2tVB/Screenshot-from-2025-06-29-02-24-14.png",
		],
		stack: "React Native, Firebase",
		description:
			"A Web app to help users track watering, fertilizing, and sunlight needs for their plants.",
		live: "https://plantcarea10.netlify.app/",
		github: "https://github.com/sazidur123/Plant-Care-Tracker",
		challenges: "Implementing push notifications and offline support.",
		improvements: "Add plant disease detection and community features.",
	},
	{
		id: 3,
		name: "Auction Gallery",
		images: [
			"https://i.ibb.co/C56bQWFb/Screenshot-from-2025-06-29-01-58-45.png",
			"https://i.ibb.co/JFGNDBJC/Screenshot-from-2025-06-29-01-58-55.png",
			"https://i.ibb.co/d4nc7cJ0/Screenshot-from-2025-06-29-01-59-14.png",
		],
		stack: "React, Express, PostgreSQL",
		description:
			"An online platform for listing, bidding, and managing art auctions in real time.",
		live: "https://auction-gallery-seven.netlify.app/",
		github: "https://github.com/sazidur123/Auction-Gallery",
		challenges: "Real-time bidding and secure user authentication.",
		improvements: "Add live video auctions and artist profiles.",
	},
];

// Simple image slider component
function ImageSlider({ images }) {
	const [idx, setIdx] = useState(0);
	const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
	const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
	return (
		<div className="relative w-full">
			<img
				src={images[idx]}
				alt=""
				className="w-full h-56 object-cover rounded-l-xl"
			/>
			{images.length > 1 && (
				<>
					<button
						className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-xs btn-circle bg-white/80"
						onClick={prev}
						aria-label="Previous"
					>
						‹
					</button>
					<button
						className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-xs btn-circle bg-white/80"
						onClick={next}
						aria-label="Next"
					>
						›
					</button>
				</>
			)}
			<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
				{images.map((_, i) => (
					<span
						key={i}
						className={`inline-block w-2 h-2 rounded-full ${
							i === idx ? "bg-primary" : "bg-base-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
}

function ProjectModal({ project, open, onClose }) {
	const [imgIdx, setImgIdx] = useState(0);

	React.useEffect(() => {
		setImgIdx(0);
	}, [project]);

	if (!open || !project) return null;
	const prev = () =>
		setImgIdx((i) => (i === 0 ? project.images.length - 1 : i - 1));
	const next = () =>
		setImgIdx((i) => (i === project.images.length - 1 ? 0 : i + 1));
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="bg-base-100 rounded-xl shadow-xl max-w-lg w-full p-6 relative animate__animated animate__fadeInDown">
				<button
					className="btn btn-sm btn-circle absolute right-4 top-4"
					onClick={onClose}
				>
					✕
				</button>
				<h3 className="text-2xl font-bold mb-2">{project.name}</h3>
				<div className="relative w-full mb-4 rounded-lg overflow-hidden">
					<img
						src={project.images[imgIdx]}
						alt={project.name}
						className="w-full h-48 object-cover"
					/>
					{project.images.length > 1 && (
						<>
							<button
								className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-xs btn-circle bg-white/80"
								onClick={prev}
								aria-label="Previous"
							>
								‹
							</button>
							<button
								className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-xs btn-circle bg-white/80"
								onClick={next}
								aria-label="Next"
							>
								›
							</button>
						</>
					)}
					<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
						{project.images.map((_, i) => (
							<span
								key={i}
								className={`inline-block w-2 h-2 rounded-full ${
									i === imgIdx ? "bg-primary" : "bg-base-300"
								}`}
							/>
						))}
					</div>
				</div>
				<p className="mb-2">
					<span className="font-semibold">Stack:</span> {project.stack}
				</p>
				<p className="mb-2">{project.description}</p>
				<div className="flex gap-3 mb-2">
					<a
						href={project.live}
						className="btn btn-outline btn-primary btn-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						Live Demo
					</a>
					<a
						href={project.github}
						className="btn btn-outline btn-secondary btn-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Code
					</a>
				</div>
				<p className="mb-2">
					<span className="font-semibold">Challenges:</span>{" "}
					{project.challenges}
				</p>
				<p className="mb-2">
					<span className="font-semibold">Improvements:</span>{" "}
					{project.improvements}
				</p>
			</div>
		</div>
	);
}

function Projects() {
	const [modalProject, setModalProject] = useState(null);

	return (
		<section className="py-16 px-4 bg-base-100" id="projects">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold  text-blue-700 mb-10">My Projects</h2>
				<div className="flex flex-col gap-10">
					{projects.map((proj, idx) => (
						<div
							key={proj.id}
							className={`flex flex-col md:flex-row ${
								idx % 2 === 1 ? "md:flex-row-reverse" : ""
							} bg-base-100 shadow-xl border border-base-300 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-200`}
						>
							{/* Left: Image Slider */}
							<div className="md:w-1/2 w-full flex items-center justify-center bg-base-300">
								<ImageSlider images={proj.images} />
							</div>
							{/* Right: Details */}
							<div className="md:w-1/2 w-full flex flex-col justify-center items-start p-6 text-left">
								<h3 className="text-2xl font-bold mb-2">{proj.name}</h3>
								<p className="text-base-content/70 mb-2">
									{proj.description}
								</p>
								<button
									className="btn btn-primary btn-sm mt-2"
									onClick={() => setModalProject(proj)}
								>
									View Details
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<ProjectModal
				project={modalProject}
				open={!!modalProject}
				onClose={() => setModalProject(null)}
			/>
		</section>
	);
}

export default Projects;
