import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            "glass rounded-3xl p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-primary/20 transition-colors bg-card/50",
            className
        )}
    >
        {children}
    </motion.div>
);

const About = () => {
    return (
        <section className="bg-background py-20 px-6" id="about">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-12"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Discover</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

                    {/* Bio Card - Large */}
                    <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 overflow-y-auto md:overflow-hidden md:row-span-2">
                        <div>
                            <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Code2 size={24} />
                            </span>
                            <h3 className="text-2xl font-bold text-foreground mb-4">The Developer</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                I'm <span className="text-foreground font-medium">Abdulmalik Bisiriyu</span>, a creative developer who bridges the gap between design and engineering.
                                I build immersive digital experiences that are not just functional, but memorable.
                                <br /><br />
                                Currently focused on React, Next.js, Framer Motion, and building accessible, high-performance web applications.
                            </p>
                        </div>
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                    </BentoCard>

                    {/* Image Card */}
                    <BentoCard className="md:col-span-1 lg:col-span-2 row-span-1 relative !p-0">
                        <img
                            src="/Images/Malik.himself 1.jpeg"
                            alt="Abdulmalik"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <p className="text-white font-mono text-sm">Lagos, Nigeria</p>
                        </div>
                    </BentoCard>

                    {/* Skills - Design */}
                    <BentoCard className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-violet-500/10 to-transparent" delay={0.1}>
                        <div className="h-full flex flex-col justify-center items-center text-center">
                            <Palette size={40} className="text-violet-400 mb-4" />
                            <h3 className="font-bold text-xl text-foreground">UI/UX Design</h3>
                            <p className="text-sm text-muted-foreground mt-2">Figma, Prototyping, Design Systems</p>
                        </div>
                    </BentoCard>

                    {/* Skills - Tech */}
                    <BentoCard className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-blue-500/10 to-transparent" delay={0.2}>
                        <div className="h-full flex flex-col justify-center items-center text-center">
                            <Globe size={40} className="text-blue-400 mb-4" />
                            <h3 className="font-bold text-xl text-foreground">Web Dev</h3>
                            <p className="text-sm text-muted-foreground mt-2">React, Tailwind, Next.js, Node.js</p>
                        </div>
                    </BentoCard>

                    {/* Contact Info */}
                    <BentoCard className="md:col-span-1 lg:col-span-2 flex-row items-center gap-6" delay={0.3}>
                        <div className="flex flex-col gap-4 w-full">
                            <h3 className="font-bold text-xl text-foreground mb-2">Get in Touch</h3>
                            <a href="mailto:malik.himself0@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/20">
                                <Mail size={20} />
                                <span>malik.himself0@gmail.com</span>
                            </a>
                            <a href="tel:+2349037983588" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/20">
                                <Phone size={20} />
                                <span>+234 903 798 3588</span>
                            </a>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
};

export default About;
