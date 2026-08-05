"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">
          Let's Connect
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          I am highly motivated to pursue an exchange opportunity in Data Science & AI, and I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <motion.a 
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            href="mailto:trungdao131105@gmail.com" 
            data-interactive
            className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group"
          >
            <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <div className="text-center w-full">
              <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Email</p>
              <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors break-all">
                trungdao131105@gmail.com
              </p>
            </div>
          </motion.a>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group"
          >
            <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Location</p>
              <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Ha Noi, Viet Nam
              </p>
            </div>
          </motion.div>

          <motion.a 
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            href="https://github.com/MilesDao" target="_blank" rel="noreferrer"
            data-interactive
            className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group"
          >
            <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <GithubIcon className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">GitHub</p>
              <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                @MilesDao
              </p>
            </div>
          </motion.a>

          <motion.a 
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            href="https://www.linkedin.com/in/milesdao/" target="_blank" rel="noreferrer"
            data-interactive
            className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group"
          >
            <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <LinkedinIcon className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">LinkedIn</p>
              <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Dao Chi Trung
              </p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
