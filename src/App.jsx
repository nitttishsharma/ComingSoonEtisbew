import React from 'react';
import GeometricBackground from './components/GeometricBackground';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const App = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#020b12] text-white font-sans">
            {/* Background */}
            <GeometricBackground />

            {/* Content Overlay */}
            <main className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-300"
                        animate={{ backgroundPosition: ["0%", "200%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: "200% auto" }}
                    >
                        Website Coming Soon
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-lg md:text-xl text-teal-100/70 mb-12 max-w-xl mx-auto leading-relaxed"
                    >
                        We're building something extraordinary. A new digital experience is on its way. Stay tuned for the unveiling.
                    </motion.p>

                    {/* Footer info - Integrated into main flow */}
                    <motion.footer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-12 flex flex-col items-center gap-6"
                    >
                        <div className="flex gap-6">
                            <SocialIcon icon={<Twitter size={20} />} href="#" />
                            <SocialIcon icon={<Linkedin size={20} />} href="#" />
                            <SocialIcon icon={<Mail size={20} />} href="mailto:etisbew.interactive@gmail.com" />
                        </div>
                        <p className="text-teal-100/40 text-sm tracking-widest uppercase">
                            © 2025 Etisbew Interactive. All rights reserved.
                        </p>
                    </motion.footer>
                </motion.div>
            </main>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020b12] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020b12] to-transparent pointer-events-none" />
        </div>
    );
};

const SocialIcon = ({ icon, href }) => (
    <motion.a
        href={href}
        whileHover={{ y: -3, color: "#4fd1c5" }}
        className="text-teal-100/50 transition-colors duration-300"
    >
        {icon}
    </motion.a>
);

export default App;
