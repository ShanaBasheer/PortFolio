import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = ({ id }) => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "ERP Management System",
      description: "Full-stack ERP with HR, Payroll, and Academic modules.",
      image: "🏢",
      technologies: ["ASP.NET", "C#", "SQL Server", "Oracle"],
      category: "erp",
      featured: true
    },
    {
      id: 2,
      title: "HR Recruitment Portal", 
      description: "Automated hiring workflows with job posting and candidate tracking.",
      image: "👥",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "Bootstrap"],
      category: "webapp",
      featured: true
    },
    {
      id: 3,
      title: "Fresh Items Online Ordering",
      description: "End-to-end ordering system with real-time inventory management.",
      image: "🛒",
      technologies: [".NET Core API", "React", "Oracle", "Barcode Scanner"],
      category: "ecommerce", 
      featured: true
    }
  ]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Simulate API loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, []);

  const filteredProjects = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(project => project.category === filter);

  if (loading) {
    return (
      <section id={id} className="projects">
        <div className="section-container">
          <div className="loading-spinner">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="projects">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Showcasing 7+ years of enterprise-level application development
        </motion.p>

        <div className="project-filters">
          {['all', 'erp', 'webapp', 'ecommerce'].map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : 
               category === 'erp' ? 'ERP Systems' :
               category === 'webapp' ? 'Web Apps' : 'E-Commerce'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {project.featured && <div className="featured-badge">Enterprise</div>}
              <div className="card-image">
                <span>{project.image}</span>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; // ⚠️ This line is IMPORTANT!