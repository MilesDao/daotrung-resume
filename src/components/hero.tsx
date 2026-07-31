"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ParticlesBackground } from "@/components/particles";

export function Hero() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);

  const fullText1 = "Hello World! My name is";
  const fullText2 = "Dao Chi Trung";

  useEffect(() => {
    let current1 = 0;
    let current2 = 0;

    const typeLine2 = () => {
      const timer2 = setInterval(() => {
        if (current2 < fullText2.length) {
          setText2(fullText2.slice(0, current2 + 1));
          current2++;
        } else {
          clearInterval(timer2);
          setTimeout(() => setShowSubtitle(true), 300);
        }
      }, 70);
      return () => clearInterval(timer2);
    };

    const timer1 = setInterval(() => {
      if (current1 < fullText1.length) {
        setText1(fullText1.slice(0, current1 + 1));
        current1++;
      } else {
        clearInterval(timer1);
        setTimeout(typeLine2, 100);
      }
    }, 70);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-20 md:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <ParticlesBackground />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-10 relative z-10 w-full flex flex-col items-center text-center container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 shadow-sm uppercase tracking-wider">
              WELCOME TO MY SPACE
            </span>
          </motion.div>

          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-zinc-900 dark:text-zinc-50 flex flex-col items-center min-h-[140px] md:min-h-[200px]">
            <div className="flex items-center">
              <span>{text1}</span>
              {text2.length === 0 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="inline-block w-[4px] h-[1em] ml-2 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"
                />
              )}
            </div>

            {(text1.length === fullText1.length) && (
              <div className="flex items-center">
                <span>{text2}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="inline-block w-[4px] h-[1em] ml-2 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"
                />
              </div>
            )}
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtitle ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="text-2xl text-zinc-600 dark:text-zinc-400 font-normal tracking-tight sm:text-3xl mt-4"
          >
            Data Science & AI Undergraduate
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-8 w-full"
        >
          <a
            href="#contact"
            data-interactive
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 transition-all hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="/Dao_Chi_Trung_CV.pdf"
            target="_blank"
            data-interactive
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-50 dark:bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:scale-105"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>

          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com/MilesDao" target="_blank" rel="noreferrer" aria-label="GitHub" data-interactive className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all hover:scale-110 shadow-sm">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/milesdao/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-interactive className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all hover:scale-110 shadow-sm">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
