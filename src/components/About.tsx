import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-bg.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl rotate-3"></div>
              <img
                src={aboutImage}
                alt="About Akhila"
                className="relative w-full max-w-md rounded-2xl shadow-xl object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground">
              Hello! I am a <span className="font-semibold text-primary">Final Year B.Tech Computer Science Engineering</span> student 
              and an aspiring <span className="font-semibold text-primary">Full Stack Developer</span> with interest in AI/ML.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              I love coding, learning new technologies, and creating simple, beautiful, and user-friendly web applications.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              I am a cute coder with big dreams, always excited to grow and explore more in the tech world.
            </p>
            
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
