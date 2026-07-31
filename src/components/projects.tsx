"use client";

import { motion, Variants } from "framer-motion";

const PROJECTS = [
  {
    title: "USTH Chatbot – Agentic RAG System",
    description: "An AI question-answering system for USTH students that provides answers strictly grounded in internal PDF documents. Designed and implemented a full RAG pipeline to reduce hallucinations.",
    link: "https://github.com/MilesDao/USTH_chatbot_Rag",
    tags: ["RAG", "Python", "NLP"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Facebook Chatbot RAG",
    description: "A Retrieval-Augmented Generation chatbot integrated with Facebook Messenger for contextual conversations using a custom knowledge base.",
    link: "https://github.com/MilesDao/facebook-chatbot-rag",
    tags: ["Chatbot", "API Integration", "RAG"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Face Recognition Attendance System",
    description: "An automated face recognition attendance system utilizing K-Nearest Neighbors (KNN) and Support Vector Machines (SVM).",
    link: "https://github.com/MilesDao/Face-Recognition-Attendance-System-KNN-SVM",
    tags: ["Computer Vision", "KNN", "SVM"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Vietnam Traffic Signs Classification",
    description: "Implementation of a classification model specifically tailored for identifying Vietnam traffic signs.",
    link: "https://github.com/MilesDao/Vietnam-traffic-signs-classification",
    tags: ["Computer Vision", "Classification"],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "U-Pose-3D SAM3D",
    description: "A 3D pose estimation project leveraging SAM3D for accurate human pose tracking and 3D reconstruction.",
    link: "https://github.com/MilesDao/U-pose-3d-sam3d/tree/main",
    tags: ["3D Pose Estimation", "SAM3D", "Tracking"],
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hateco AI Chatbot",
    description: "An AI chatbot plugin developed specifically tailored for HATECO's ecosystem.",
    link: "https://github.com/MilesDao/Hateco-ai-chatbot",
    tags: ["Chatbot", "Plugin", "AI"],
    image: "https://images.unsplash.com/photo-1531297172868-522fcbce0229?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "THPT 2026 Data Analysis",
    description: "Conducted comprehensive data analysis and visualization on the 2026 THPT national high school examination dataset.",
    link: "https://github.com/MilesDao/thpt-2026-analysis",
    tags: ["Data Analysis", "Visualization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Biodiversity",
    description: "Project focused on analyzing and exploring biodiversity data.",
    link: "https://github.com/MilesDao/Biodiversity.git",
    tags: ["Data Analysis", "Exploration"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop"
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

const githubCursor = `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.5.1-.3.6-1.7-.1-3.5 0 0-1.2-.4-3.9 1.5a13.8 13.8 0 0 0-7 0C3.7 1.7 2.5 2.1 2.5 2.1c-.8 1.8-.3 3.2-.1 3.5-1 1-1.5 2.1-1.5 3.5 0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4' /%3E%3C/svg%3E") 14 14, pointer`;

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800 relative bg-zinc-50 dark:bg-zinc-950/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Projects
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col h-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300 group"
            >
              {/* Image with Custom Github Cursor Link */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-full h-48 sm:h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-800 block"
                style={{ cursor: githubCursor }}
                title={`View ${project.title} on GitHub`}
              >
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-300" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Title with Custom Github Cursor Link */}
                <div className="mb-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                    style={{ cursor: githubCursor }}
                    title={`View ${project.title} on GitHub`}
                  >
                    <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </a>
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
