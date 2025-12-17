import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background pt-24 pb-12 px-6 border-t border-border" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight mb-8">
                            Let's Work <br /> Together.
                        </h2>
                        <a
                            href="mailto:malik.himself0@gmail.com"
                            className="text-2xl md:text-3xl text-muted-foreground hover:text-primary transition-colors border-b border-border pb-2 inline-flex items-center gap-4 hover:border-primary"
                        >
                            malik.himself0@gmail.com
                            <ArrowUpRight size={24} />
                        </a>
                    </div>

                    <div className="flex gap-16 md:gap-24">
                        <div>
                            <h4 className="font-mono text-sm text-foreground mb-6 uppercase tracking-wider">Socials</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter (X)</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dribbble</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-mono text-sm text-foreground mb-6 uppercase tracking-wider">Sitemap</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Work</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground border-t border-border pt-8">
                    <p>© 2025 Malik. All rights reserved.</p>
                    <p>Designed & Built with passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
