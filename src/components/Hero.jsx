import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20" id="hero">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-hero-pattern opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 border border-border bg-secondary/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-muted-foreground">Available for Freelance</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 tracking-tight leading-tight"
                    >
                        Crafting <span className="text-gradient-gold">Digital</span> <br />
                        Experiences
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I am <span className="text-foreground font-medium">Abdulmalik Bisiriyu</span>. A UI Designer and Frontend Developer obsessed with animations, clean code, and intuitive user interfaces.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#"
                            className="bg-secondary/50 border border-border hover:bg-secondary text-foreground font-medium px-8 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300"
                        >
                            Resume <Download size={20} />
                        </a>
                    </motion.div>

                    {/* Social Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-20 pt-10 border-t border-border flex flex-wrap justify-center gap-12"
                    >
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            <Github size={24} />
                            <div className="text-left">
                                <p className="text-sm font-mono">GITHUB</p>
                                <p className="text-xs text-muted-foreground">View Source</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            <Linkedin size={24} />
                            <div className="text-left">
                                <p className="text-sm font-mono">LINKEDIN</p>
                                <p className="text-xs text-muted-foreground">Connect</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
