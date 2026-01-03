
// src/services/api.js
// Mock data service - No API calls needed

// Mock portfolio data
const mockPortfolioData = [
  {
    id: 1,
    title: "ERP Management System",
    description: "Full-stack ERP with HR, Payroll, and Academic modules for enterprise clients.",
    image: "🏢",
    technologies: ["ASP.NET", "C#", "SQL Server", "Oracle", "DevExpress"],
    category: "erp",
    featured: true
  },
  {
    id: 2,
    title: "HR Recruitment Portal",
    description: "Automated hiring workflows with job posting, candidate screening, and tracking system.",
    image: "👥",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "Bootstrap", "Entity Framework"],
    category: "webapp",
    featured: true
  },
  {
    id: 3,
    title: "Fresh Items Online Ordering",
    description: "End-to-end ordering system for fresh items with real-time inventory and barcode integration.",
    image: "🛒",
    technologies: [".NET Core API", "React", "Oracle", "Barcode Scanner", "REST API"],
    category: "ecommerce",
    featured: true
  },
  {
    id: 4,
    title: "Virtual PTM System",
    description: "Web-based parent-teacher meeting scheduling with automated notifications.",
    image: "🎓",
    technologies: ["ASP.NET", "C#", "SQL Server", "Email API", "Calendar Integration"],
    category: "webapp",
    featured: false
  },
  {
    id: 5,
    title: "Academic Management System",
    description: "Comprehensive academic platform for online learning and student management.",
    image: "📚",
    technologies: ["ASP.NET MVC", "Entity Framework", "JavaScript", "Bootstrap", "Chart.js"],
    category: "erp",
    featured: false
  },
  {
    id: 6,
    title: "React Dashboard",
    description: "Interactive React-based dashboard for real-time analytics and data visualization.",
    image: "📊",
    technologies: ["React", ".NET Core API", "Chart.js", "CSS3", "Axios"],
    category: "dashboard",
    featured: false
  }
];

// Simulate API delay
const simulateDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const portfolioService = {
  getPortfolioItems: async () => {
    await simulateDelay(); // Simulate network delay
    return { data: mockPortfolioData };
  },

  submitContactForm: async (formData) => {
    await simulateDelay(); // Simulate network delay
    console.log('📧 Contact Form Submitted:', formData);
    
    // Return success response
    return { 
      data: { 
        message: '✅ Thank you! Your message has been received.',
        success: true,
        timestamp: new Date().toISOString()
      } 
    };
  },

  testConnection: async () => {
    await simulateDelay(300);
    return { 
      data: { 
        connected: true, 
        message: 'Mock API service is working',
        projectsCount: mockPortfolioData.length
      } 
    };
  }
};

// Remove axios export if not used elsewhere
// export default api;




// import axios from 'axios';

// const API_BASE_URL = 'https://localhost:7001'; // No /api at the end!


// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export const portfolioService = {
//   getPortfolioItems: () => api.get('/api/portfolio/items'), // Full path
//   submitContactForm: (formData) => api.post('/api/portfolio/contact', formData),
//   testConnection: () => api.get('/api/portfolio/items')
// };
// export default api;