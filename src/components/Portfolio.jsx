// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Portfolio = () => {
//   const [portfolioItems, setPortfolioItems] = useState([]);
//   const [filter, setFilter] = useState('all');
//   const [loading, setLoading] = useState(true);

//   // Modern portfolio data - നിങ്ങളുടെ projects ഇവിടെ add ചെയ്യുക
//   const portfolioData = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with React frontend and .NET Core API. Features user authentication, payment integration, and admin dashboard.",
//       image: "🛒",
//       technologies: ["React", ".NET Core", "SQL Server", "Stripe", "Azure"],
//       category: "fullstack",
//       liveUrl: "https://demo-ecommerce.com",
//       githubUrl: "https://github.com/yourusername/ecommerce",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description: "Collaborative task management application with real-time updates, drag-drop functionality, and team collaboration features.",
//       image: "✅",
//       technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
//       category: "webapp",
//       liveUrl: "https://taskapp.demo.com",
//       githubUrl: "https://github.com/yourusername/taskapp",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Weather Dashboard",
//       description: "Real-time weather monitoring dashboard with analytics, charts, and location-based forecasts using external APIs.",
//       image: "🌤️",
//       technologies: ["React", "Chart.js", "Weather API", "CSS3", "Netlify"],
//       category: "dashboard",
//       liveUrl: "https://weather-dash.demo.com",
//       githubUrl: "https://github.com/yourusername/weather-dash",
//       featured: false
//     },
//     {
//       id: 4,
//       title: "Portfolio Website",
//       description: "Modern responsive portfolio website built with React and .NET Core, featuring smooth animations and contact form.",
//       image: "💼",
//       technologies: ["React", ".NET Core", "Framer Motion", "CSS3", "Vercel"],
//       category: "website",
//       liveUrl: "https://yourportfolio.com",
//       githubUrl: "https://github.com/yourusername/portfolio",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "Social Media Analytics",
//       description: "Analytics dashboard for social media metrics with data visualization, reporting, and insights generation.",
//       image: "📊",
//       technologies: ["React", "Python", "D3.js", "FastAPI", "PostgreSQL"],
//       category: "dashboard",
//       liveUrl: "https://analytics.demo.com",
//       githubUrl: "https://github.com/yourusername/analytics",
//       featured: true
//     },
//     {
//       id: 6,
//       title: "Mobile Fitness App",
//       description: "Cross-platform mobile application for fitness tracking with workout plans, progress tracking, and social features.",
//       image: "🏃‍♂️",
//       technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
//       category: "mobile",
//       liveUrl: "https://fitnessapp.com",
//       githubUrl: "https://github.com/yourusername/fitness-app",
//       featured: false
//     }
//   ];

//   useEffect(() => {
//     // Simulate API call
//     setTimeout(() => {
//       if (filter === 'all') {
//         setPortfolioItems(portfolioData);
//       } else {
//         setPortfolioItems(portfolioData.filter(item => item.category === filter));
//       }
//       setLoading(false);
//     }, 500);
//   }, [filter]);

//   const categories = [
//     { id: 'all', name: 'All Projects' },
//     { id: 'fullstack', name: 'Full Stack' },
//     { id: 'webapp', name: 'Web Apps' },
//     { id: 'dashboard', name: 'Dashboards' },
//     { id: 'mobile', name: 'Mobile' },
//     { id: 'website', name: 'Websites' }
//   ];

//   if (loading) {
//     return (
//       <section id="portfolio" className="portfolio">
//         <div className="section-container">
//           <div className="loading-spinner">Loading projects...</div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="portfolio" className="portfolio">
//       <div className="section-container">
//         <motion.h2 
//           className="section-title"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           My Projects
//         </motion.h2>
        
//         <motion.p 
//           className="section-subtitle"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           Here are some of my recent works that showcase my skills and experience
//         </motion.p>

//         {/* Filter Buttons */}
//         <motion.div 
//           className="portfolio-filters"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           {categories.map(category => (
//             <button
//               key={category.id}
//               className={`filter-btn ${filter === category.id ? 'active' : ''}`}
//               onClick={() => setFilter(category.id)}
//             >
//               {category.name}
//             </button>
//           ))}
//         </motion.div>

//         {/* Featured Projects */}
//         <div className="featured-section">
//           <h3 className="featured-title">Featured Projects</h3>
//           <div className="portfolio-grid">
//             {portfolioItems
//               .filter(item => item.featured)
//               .map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   className="portfolio-card featured-card"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="card-image">
//                     <span>{item.image}</span>
//                     <div className="featured-badge">Featured</div>
//                   </div>
//                   <div className="card-content">
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                     <div className="tech-stack">
//                       {item.technologies.map((tech, techIndex) => (
//                         <span key={techIndex} className="tech-tag">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="card-links">
//                       <a href={item.liveUrl} className="card-link" target="_blank" rel="noopener noreferrer">
//                         <span>🌐</span> Live Demo
//                       </a>
//                       <a href={item.githubUrl} className="card-link" target="_blank" rel="noopener noreferrer">
//                         <span>💻</span> GitHub
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         </div>

//         {/* All Projects */}
//         <div className="all-projects-section">
//           <h3 className="section-subtitle">All Projects</h3>
//           <div className="portfolio-grid">
//             {portfolioItems
//               .filter(item => !item.featured)
//               .map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   className="portfolio-card"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="card-image">
//                     <span>{item.image}</span>
//                   </div>
//                   <div className="card-content">
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                     <div className="tech-stack">
//                       {item.technologies.map((tech, techIndex) => (
//                         <span key={techIndex} className="tech-tag">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="card-links">
//                       <a href={item.liveUrl} className="card-link" target="_blank" rel="noopener noreferrer">
//                         <span>🌐</span> Live Demo
//                       </a>
//                       <a href={item.githubUrl} className="card-link" target="_blank" rel="noopener noreferrer">
//                         <span>💻</span> GitHub
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <motion.div 
//           className="portfolio-cta"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3>Like what you see?</h3>
//           <p>Let's work together on your next project!</p>
//           <motion.a
//             href="#contact"
//             className="cta-button primary"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get In Touch
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioService } from '../services/api';

const Portfolio = ({ id }) => { 
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        setLoading(true);
        const response = await portfolioService.getPortfolioItems();
        setPortfolioItems(response.data);
      } catch (err) {
        console.error('Error fetching portfolio items:', err);
        setError('Failed to load projects');
        // Fallback to mock data if API fails
        setPortfolioItems(getMockData());
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  // Mock data fallback
  const getMockData = () => [
    {
      id: 1,
      title: "ERP Management System",
      description: "Full-stack ERP with HR, Payroll, and Academic modules.",
      image: "🏢",
      technologies: ["ASP.NET", "C#", "SQL Server", "Oracle"],
      category: "erp",
      featured: true
    },
    // ... other projects
  ];

  if (loading) {
    return (
      <section id={id} className="portfolio">
        <div className="section-container">
          <div className="loading-spinner">Loading projects from API...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="portfolio" className="portfolio">
        <div className="section-container">
          <div className="error-message">{error}</div>
        </div>
      </section>
    );
  }

  // ... rest of your component
};