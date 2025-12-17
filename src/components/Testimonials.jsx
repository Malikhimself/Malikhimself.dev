
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const ClientCard = ({ client }) => (
    <div className="w-[400px] flex-shrink-0 p-8 glass rounded-2xl mx-4 bg-card/50">
        <Quote className="text-primary mb-6" size={32} />
        <p className="text-lg text-card-foreground/80 leading-relaxed mb-8 italic">
            "{client.text}"
        </p>
        <div className="flex items-center gap-4">
            <img
                src={client.image}
                alt={client.name}
                className="w-12 h-12 rounded-full object-cover border border-border"
            />
            <div>
                <h4 className="font-bold text-card-foreground">{client.name}</h4>
                <p className="text-sm text-muted-foreground">{client.role} at {client.company}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const clients = [
        {
            name: "Sarah Jenkins",
            role: "Product Manager",
            company: "TechFlow",
            text: "Abdulmalik's attention to detail is unmatched. He took our complex requirements and turned them into a seamless, user-friendly interface that our customers love.",
            image: "/Images/brooke-cagle-oTweoxMKdkA-unsplash.jpg"
        },
        {
            name: "David Chen",
            role: "CEO",
            company: "StartUp Inc.",
            text: "Working with Abdulmalik was a game-changer for our brand. The website redesign exceeded our expectations and significantly improved our conversion rates.",
            image: "/Images/joshua-tsu-6LkwAXWgYO0-unsplash.jpg"
        },
        {
            name: "Amara Okeke",
            role: "Creative Director",
            company: "AfriStyle",
            text: "Professional, creative, and timely. Abdulmalik didn't just build a website; he crafted a digital experience that perfectly captures our brand identity.",
            image: "/Images/kahara-BFYMsJ1FPCc-unsplash.jpg"
        }
    ];

    return (
        <section className="bg-background py-24 overflow-hidden border-t border-border relative">
            <div className="container mx-auto px-6 mb-16 text-center">
                <span className="text-primary font-mono text-sm tracking-wider uppercase">Testimonials</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">Client Stories</h2>
            </div>

            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

            <div className="flex w-max animate-scroll">
                {[...clients, ...clients, ...clients].map((client, index) => (
                    <ClientCard key={index} client={client} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
