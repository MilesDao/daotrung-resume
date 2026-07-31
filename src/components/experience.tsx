"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    title: "High School Student",
    organization: "Dai Mo High School",
    location: "Ha Noi, Viet Nam",
    date: "2020 – 2023",
    type: "education",
    description: [
      "GPA: 8.3/10"
    ],
  },
  {
    title: "BSc Data Science",
    organization: "University of Science and Technology of Ha Noi",
    location: "Ha Noi, Viet Nam",
    date: "Sept 2023 – present",
    type: "education",
    description: [
      "GPA: 16.76/20 (1st year), 17.75/20 (2nd year).",
      "USTH Merit Scholarship 2023–2024: A4 (40% of Tuition Fees).",
      "USTH Merit Scholarship 2024–2025: A2 (80% of Tuition Fees)."
    ],
  },
  {
    title: "AI Research Intern",
    organization: "CMC ATI",
    location: "Ha Noi, Viet Nam",
    date: "Mar 2026 – June 2026",
    type: "work",
    description: [
      "Develop and optimize computer vision models for real-world applications.",
      "Work on pose estimation tasks."
    ],
  },
  {
    title: "Club President",
    organization: "USTH Artificial Intelligence Club",
    location: "Ha Noi, Viet Nam",
    date: "July 2026 – present",
    type: "work",
    description: [
      "Led the professional team in organizing AI-focused activities and technical workshops.",
      "Mentored members on AI/ML concepts and project development."
    ],
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-zinc-900 dark:text-zinc-50">
          Journey
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-card text-primary shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform hover:scale-125 duration-300">
                {exp.type === "education" ? <GraduationCap className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-4">
                  <h3 className="font-bold text-2xl text-foreground tracking-tight">{exp.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </span>
                </div>
                <div className="text-xl font-medium text-foreground/80 mb-6">{exp.organization}</div>
                <ul className="space-y-3 text-base text-muted-foreground list-none">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-2 block h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
