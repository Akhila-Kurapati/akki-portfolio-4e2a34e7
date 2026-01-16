import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import employeeProject from '@/assets/employee-project.png';
import iceCreamProject from '@/assets/ice-cream-project.png';

const projects = [
  {
    title: 'Employee Management System',
    description: 'A comprehensive employee management application featuring complete CRUD (Create, Read, Update, Delete) operations. Built to streamline HR processes and manage employee data efficiently with a user-friendly interface.',
    image: employeeProject,
    github: 'https://github.com/Akhila-Kurapati/employee_management_system',
    tags: ['CRUD Operations', 'Database', 'Web App'],
  },
  {
    title: 'Ice Cream Website',
    description: 'A beautiful and responsive ice cream shop website showcasing various flavors and products. Features an attractive UI design with smooth animations and an intuitive navigation experience.',
    image: iceCreamProject,
    github: 'https://github.com/Akhila-Kurapati/ice-cream-website',
    tags: ['Frontend', 'UI/UX', 'Responsive'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          My Projects
        </motion.h2>

        <div className="space-y-16 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn w-fit"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
