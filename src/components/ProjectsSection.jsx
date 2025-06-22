import { ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    title: "Aniplex",
    description: "An interactive anime database website inspired by IMDb, built with Django. Users can explore, search, and view detailed info about their favorite anime series and movies — all in a clean, responsive interface.",
    img: '/projects/project1.png',
    tags: ["HTML", "CSS", "Django"],
    demoUrl: "#",
    githubRepo: "https://github.com/Vishal-Singh-Code/Aniverse",
  },
  {
    id: 2,
    title: "CoolCuts",
    description: "CoolCuts is a modern salon booking web application with a dynamic React frontend and Django backend. It allows users to explore services, view availability, and book appointments seamlessly through a clean, responsive interface.",
    img: "/projects/project2.png",
    tags: ["React", "Django", "PostgreSQL", "Render"],
    demoUrl: "https://cool-mucd.onrender.com/",
    githubRepo: "https://github.com/Vishal-Singh-Code/CoolCuts",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A fully responsive personal portfolio built with React.js and Tailwind CSS. It showcases my projects, tech stack, and contact info with clean UI, dark/light mode, and smooth animations.",
    img: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "Vercel"],
    demoUrl: "#",
    githubRepo: "https://github.com/Vishal-Singh-Code/Portfolio",
  },
];

function ProjectsSection() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
    AOS.refresh();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of full-stack and frontend projects built with modern tech stacks.
        </p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project.id} className={cn(
              "flex flex-col md:flex-row items-center gap-10",
              index % 2 === 1 && "md:flex-row-reverse"
            )}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      GitHub <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/vishal-singh-code"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
