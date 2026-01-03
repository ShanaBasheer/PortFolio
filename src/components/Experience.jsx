import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ id }) => { 
  const experiences = [
    {
      id: 1,
      company: "Simple Logic IT, Qatar",
      position: "Software Developer",
      period: "2022 – 2023",
      location: "Safari Mall, Qatar",
      achievements: [
        "Designed and maintained ERP applications including HR, Employee Management, and Online Order modules",
        "Developed Fresh Items Online Ordering Module handling both frontend UI and backend order processing",
        "Improved application performance through optimized queries and structured API design",
        "Integrated DevExpress components and Crystal Reports for interactive dashboards",
        "Implemented auto-email notifications and real-time barcode scanning validation"
      ],
      technologies: ["ASP.NET MVC", ".NET Core API", "Oracle", "DevExpress", "Crystal Reports"],
      icon: "💼"
    },
    {
      id: 2,
      company: "Orison Software Specialist", 
      position: "Software Developer",
      period: "2018 – 2021",
      location: "Dubai Based (UAE Clients)",
      achievements: [
        "Designed and maintained ERP and Academic Management modules for UAE clients",
        "Led full-stack development of HR Recruitment Portal automating hiring workflows",
        "Built Academic/Online Learning ERP modules on web platform",
        "Enhanced system stability through clean code practices"
      ],
      technologies: ["ASP.NET", "C#", "SQL Server", "MVC", "Entity Framework"],
      icon: "🚀"
    },
    {
      id: 3,
      company: "Bluegen Solutions",
      position: "Software Engineer", 
      period: "2015 – 2017",
      location: "India",
      achievements: [
        "Built custom web portals, attendance systems, and business applications",
        "Collaborated with clients for requirement analysis and UI/UX improvements",
        "Developed internal tools for business process automation"
      ],
      technologies: ["VB.NET", "C#", "SQL Server", "Web Forms"],
      icon: "👨‍💻"
    }
  ];

  return (
     <section id={id} className="experience">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Journey
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          7+ years of transforming ideas into enterprise-level solutions
        </motion.p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="experience-header">
                <div className="company-icon">{exp.icon}</div>
                <div className="company-info">
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                  <div className="meta-info">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience-content">
                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul className="achievement-list">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        className="tech-tag"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Highlights */}
        <motion.div 
          className="career-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Career Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-number">7+</div>
              <div className="highlight-text">Years Experience</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">50+</div>
              <div className="highlight-text">Projects Delivered</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">15+</div>
              <div className="highlight-text">ERP Modules</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">5+</div>
              <div className="highlight-text">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;