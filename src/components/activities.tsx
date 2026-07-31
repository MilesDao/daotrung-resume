"use client";

import { motion, Variants } from "framer-motion";
import { Award, Music, Heart } from "lucide-react";

const ACTIVITIES = [
  {
    category: "Academic & Competitions",
    icon: <Award className="w-6 h-6" />,
    items: [
      "Awarded Third Prize in the NYC Taxi Trip Hackathon Competition at UAI",
      "Received a Certificate of Excellence for outstanding performance in Youth Union activities (Academic Year 2024–2025)",
    ],
  },
  {
    category: "Arts & Performance",
    icon: <Music className="w-6 h-6" />,
    items: [
      "Won Second Prize in Shine Your Star 2025",
      "Performed at the Sota Gala night music show",
      "Member of M&M Not Chocobeans Music Club (since 2024)",
    ],
  },
  {
    category: "Other Activities",
    icon: <Heart className="w-6 h-6" />,
    items: [
      "Participated in 15km race at URACE 2024",
      "Participated in a relay running event 2025",
      "Participated in the blood donation campaign 'Ngày hồng USTH lần V'",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function Activities() {
  return (
    <section id="activities" className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-zinc-900 dark:text-zinc-50">
          Activities
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="font-bold text-2xl text-foreground tracking-tight leading-tight">{activity.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {activity.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex gap-3 text-muted-foreground text-base leading-relaxed font-light">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
