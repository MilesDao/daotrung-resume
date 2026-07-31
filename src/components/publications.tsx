"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

const PUBLICATIONS = [
  {
    title: "Development of a Beam Structural Analysis Tool for University Teaching",
    journal: "Construction Journal",
    link: "https://tapchixaydung.vn/phat-trien-cong-cu-phan-tich-ket-cau-dam-ho-tro-giang-day-dai-hoc--20201224000039829.html",
    description: [
      "Research on developing a beam structural analysis tool using MATLAB GUI, published in the Construction Journal.",
      "Developed an intuitive tool to support teaching Mechanics of Materials and Structural Mechanics.",
      "Optimized displacement calculation and internal force diagram plotting, with results validated against SAP2000."
    ],
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function Publications() {
  return (
    <section id="publications" className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-zinc-900 dark:text-zinc-50">
          Publications
        </motion.h2>
        
        <div className="space-y-8">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="relative p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-2">
                        {pub.journal}
                      </p>
                    </div>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors whitespace-nowrap shrink-0"
                    >
                      Read Paper
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <ul className="space-y-3 mt-4">
                    {pub.description.map((item, i) => (
                      <li key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base flex items-start">
                        <span className="text-blue-500 mr-3 mt-1.5 text-lg">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
