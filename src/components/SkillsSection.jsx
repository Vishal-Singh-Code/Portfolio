import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMysql, SiNextdotjs, SiDjango, SiPostman, SiRender, SiVercel, SiCloudinary } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skills = [
    { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
    { name: "CSS", icon: <FaCss3Alt />, category: "frontend" },
    { name: "JavaScript", icon: <FaJs />, category: "frontend" },
    { name: "React", icon: <FaReact />, category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },

    { name: "Python", icon: <FaPython />, category: "backend" },
    { name: "Django", icon: <SiDjango />, category: "backend" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend" },
    { name: "MySQL", icon: <SiMysql />, category: "backend" },

    { name: "Git/GitHub", icon: <FaGitAlt />, category: "tools" },
    { name: "VS Code", icon: <TbBrandVscode />, category: "tools" },
    { name: "Postman", icon: <SiPostman />, category: "tools" },
    { name: "Cloudinary", icon: <SiCloudinary />, category: "tools" },
    { name: "Render", icon: <SiRender />, category: "tools" },
    { name: "Vercel", icon: <SiVercel />, category: "tools" },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

function SkillsSection() {
    const [active, setActive] = useState("all");
    const filteredSkills = skills.filter((skill) => active === "all" || skill.category === active);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", active === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary')}
                            onClick={() => setActive(category)}>{category}</button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-md card-hover transition-all flex flex-col items-center justify-center text-center gap-3 ">
                            <div className="text-primary text-5xl">
                                {skill.icon}
                            </div>
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default SkillsSection;
