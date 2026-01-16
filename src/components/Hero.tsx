import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

const Hero = () => {
  const skills = [
    { name: 'HTML', icon: '🌐', color: 'bg-orange-100 text-orange-600' },
    { name: 'CSS', icon: '🎨', color: 'bg-blue-100 text-blue-600' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Python', icon: '🐍', color: 'bg-sky-100 text-sky-600' },
    { name: 'Java', icon: '☕', color: 'bg-red-100 text-red-600' },
    { name: 'DBMS', icon: '🗄️', color: 'bg-indigo-100 text-indigo-600' },
    { name: 'SQL', icon: '📊', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Big Data', icon: '📈', color: 'bg-green-100 text-green-600' },
    { name: 'Data Analytics', icon: '📉', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Final Year CSE Student
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-2">
              Aspiring Software Developer
            </h2>
            <h3 className="text-lg md:text-xl text-muted-foreground mb-8">
              AI/ML | Data Enthusiast
            </h3>

            {/* Social Links */}
            <div className="flex gap-4 mb-12">
              <a
                href="https://github.com/Akhila-Kurapati"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akhila-kurapati-4b20212a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profileImage}
                alt="Akhila Kurapati"
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h4 className="text-lg font-medium text-muted-foreground mb-6 text-center">My Skills</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`skill-badge ${skill.color}`}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
