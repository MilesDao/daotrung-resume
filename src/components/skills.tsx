"use client";

import { motion, Variants } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "SQL", "Java"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Streamlit", "Langchain"],
  },
  {
    title: "Platforms & Tools",
    skills: ["Git", "MySQL", "Jupyter Notebook", "VS Code"],
  },
  {
    title: "Soft Skills",
    skills: ["Team Collaboration", "Communication", "Leadership", "Analytical & Critical Thinking", "Adaptability", "Self-learning", "Time Management"],
  },
  {
    title: "Languages",
    skills: ["English B2", "French A2 (Delf A2)"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-zinc-900 dark:text-zinc-50">
          Capabilities
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary/50 group"
            >
              <h3 className="font-bold text-2xl mb-6 text-foreground tracking-tight group-hover:text-primary transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
