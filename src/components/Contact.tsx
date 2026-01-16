import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Akhila-Kurapati',
      icon: Github,
      color: 'hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akhila-kurapati-4b20212a4/',
      icon: Linkedin,
      color: 'hover:bg-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl shadow-md hover:text-primary-foreground transition-all duration-300 ${link.color}`}
              >
                <link.icon size={24} />
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Akhila Kurapati
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
