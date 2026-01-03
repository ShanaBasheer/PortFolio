// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = () => {
//   const skillCategories = [
//     {
//       category: "Backend & Frameworks",
//       skills: ["C#", "ASP.NET Core", "ASP.NET MVC", "Entity Framework", "VB.NET", "REST APIs", "LINQ"]
//     },
//     {
//       category: "Frontend Technologies", 
//       skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Ajax"]
//     },
//     {
//       category: "Database",
//       skills: ["SQL Server", "Oracle", "Database Design", "Query Optimization"]
//     },
//     {
//       category: "Tools & Platforms",
//       skills: ["Git", "DevExpress", "SAP Crystal Reports", "Visual Studio", "VS Code"]
//     }
//   ];

//   return (
//     <section id="skills" className="skills">
//       <div className="section-container">
//         <motion.h2 
//           className="section-title"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Technical Skills
//         </motion.h2>

//         <div className="skills-grid">
//           {skillCategories.map((category, index) => (
//             <motion.div 
//               key={category.category}
//               className="skill-category"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <h3>{category.category}</h3>
//               <div className="skills-list">
//                 {category.skills.map((skill, idx) => (
//                   <motion.span 
//                     key={idx}
//                     className="skill-item"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ id }) => { 
  const skillCategories = [
    {
      category: "Backend & Frameworks",
      skills: ["C#", "ASP.NET Core", "ASP.NET MVC", "Entity Framework", "VB.NET", "REST APIs", "LINQ"]
    },
    {
      category: "Frontend Technologies", 
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Ajax"]
    },
    {
      category: "Database",
      skills: ["SQL Server", "Oracle", "Database Design", "Query Optimization"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "DevExpress", "SAP Crystal Reports", "Visual Studio", "VS Code"]
    }
  ];

  return (
    <section id={id} className="skills">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Full-stack development expertise with 7+ years of enterprise experience
        </motion.p>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.category}
              className="skill-category-compact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{category.category}</h3>
              <div className="skills-list-compact">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item-compact">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;