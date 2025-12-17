import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '../lib/utils';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
    >
        {/* Image / Preview */}
        <div className="aspect-video bg-muted relative overflow-hidden">
            {/* Image Handling */}
            {project.image ? (
                <>
                    <div className="absolute inset-0 bg-secondary animate-pulse group-hover:animate-none group-hover:scale-105 transition-transform duration-700 z-0"></div>
                    <img
                        src={project.image.replace('public', '')}
                        alt={project.name}
                        className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                        <a href={project.link} className="bg-primary text-black font-semibold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            View Project
                        </a>
                    </div>
                </>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="font-display font-bold text-6xl opacity-20">0{index + 1}</span>
                </div>
            )}
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="text-primary text-xs font-mono mb-2 block">FEATURED PROJECT</span>
                    <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                </div>
                <div className="flex gap-2">
                    {/* Assuming GitHub link is same as project link for now, or user can add a separate github field later */}
                    <a href={project.link} className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-black transition-colors">
                        <Github size={18} />
                    </a>
                    <a href={project.link} className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-black transition-colors">
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4">
                {project.description}
            </p>

            <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary/30 rounded text-xs text-muted-foreground">{tech}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            index: 1,
            name: "Luxe E-commerce",
            description: "A premium e-commerce experience built with modern web technologies, featuring seamless navigation and secure payments.",
            image: "/Images/Luxe ecommerce.png",
            technologies: ["Next.js", "Tailwind"],
            link: "https://luxe-mu.vercel.app/"
        },
        {
            index: 2,
            name: "Sherry's Place",
            description: "An online store for kitchen cookware and gifts, integrating Paystack for payments and a custom admin dashboard.",
            image: "/Images/Sherry's Place.png",
            technologies: ["Next.js", "Tailwind", "Paystack"],
            link: "https://sherrys-place.vercel.app/"
        },
        {
            index: 3,
            name: "Portfolio V1",
            description: "The previous iteration of my personal portfolio, showcasing my growth and early experiments in web design.",
            image: "/Images/3.jpg", // Keeping original placeholder if not changed by user, but path structure updated
            technologies: ["React", "Tailwind", "Framer"],
            link: "#"
        }
    ];

    return (
        <section className="bg-background py-24 px-6 border-t border-border" id="projects">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">Selected Works</h2>
                    </div>
                    {/* View All Projects Button */}
                    <a
                        href="https://github.com/Malikhimself" // Linking to GitHub Profile
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 border-b border-border pb-1 hover:border-primary transition-colors cursor-pointer"
                    >
                        View All Projects <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((item, index) => (
                        <ProjectCard key={index} project={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
