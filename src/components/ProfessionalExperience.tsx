import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface p_exp {
  id: string;
  position?: string;
  company?: string;
  start_date?: string;
  end_date?: string;
  country?: string;
  state?: string;
  address?: string;
  job_description?: string;
  skills?: Array<string>;
  symbol?: string;
}

export const ProfessionalExperience = () => {
  const [professional_experience, setProfessionalExperience] = useState<p_exp[]>([
    {
      id: "1",
      position: "Software Engineer",
      company: "Tech Corp",
      start_date: "Jan 2022",
      end_date: "Present",
      job_description:
        "Developed and maintained scalable web applications using React and TypeScript. Led a team of developers to implement new features, optimize performance, and improve user experience.",
      skills: ["React", "TypeScript", "Redux", "Node.js"],
      symbol: "+",
    },
    {
      id: "2",
      position: "Frontend Developer",
      company: "Web Solutions",
      start_date: "Jan 2020",
      end_date: "Dec 2021",
      job_description:
        "Designed and implemented responsive UI components using JavaScript, CSS, and Tailwind. Collaborated with designers to create modern and accessible web pages.",
      skills: ["JavaScript", "CSS", "Tailwind", "UI/UX"],
      symbol: "+",
    },
  ]);

  const handleExpandFunction = (index: number) => {
    setProfessionalExperience((prevExperience) =>
      prevExperience.map((exp, i) =>
        i === index ? { ...exp, symbol: exp.symbol === "-" ? "+" : "-" } : exp
      )
    );
  };

  // Reference for scroll animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <div className="p-6">
      {/* Title Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-semibold text-4xl text-center mb-6"
      >
        Professional Experience
      </motion.h1>

      <div ref={sectionRef}>
        {professional_experience.map((exp, index) => (
          <motion.section
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="my-4 rounded-lg shadow-sm shadow-amber-50 p-4"
          >
            <section className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{exp.position}</span>
                <span className="text-gray-500"> @ {exp.company}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600">{exp.start_date} - {exp.end_date}</span>
                <span
                  className="cursor-pointer mx-4 font-bold text-2xl transition-transform duration-300"
                  onClick={() => handleExpandFunction(index)}
                >
                  {exp.symbol}
                </span>
              </div>
            </section>

            {/* Expandable job description */}
            <AnimatePresence>
              {exp.symbol === "-" && (
                <motion.section
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-gray-400">
                   <section>
                    <span>{exp?.country}</span><span>{exp?.state+"   "+exp?.address}</span>
                   </section>
                  <section>{exp.job_description}</section>
                  <section className="flex flex-wrap">
                    {exp?.skills?.map((skill)=>
                    <span className="my-4 rounded-lg shadow-sm shadow-amber-50 p-2 px-4 mx-4">{skill}</span>)}
                  </section>
                  </p>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.section>
        ))}
      </div>
    </div>
  );
};
