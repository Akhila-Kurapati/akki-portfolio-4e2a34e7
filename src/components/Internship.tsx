import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const internships = [
  {
    title: 'Java Full Stack Development Intern',
    company: 'Internship Program',
    duration: 'Completed',
    description: 'Gained hands on experience in full stack development using Java technologies. Worked on building web applications and managing databases. Enhanced skills in Spring Boot, frontend integration.',
    status: 'completed',
  },
  {
    title: 'AI/ML Internship',
    company: 'Edunet Foundation (Microsoft)',
    duration: 'Currently Pursuing',
    description: 'Currently undergoing an intensive AI/ML internship program by Edunet Foundation in partnership with Microsoft. Learning cutting-edge artificial intelligence and machine learning technologies.',
    status: 'ongoing',
  },
];

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Internship Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto mt-12 space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              {/* Status Badge */}
              <div className="absolute -top-3 right-6">
                <span className={`px-4 py-1 rounded-full text-xs font-medium ${
                  internship.status === 'ongoing' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {internship.status === 'ongoing' ? '🔄 Ongoing' : '✅ Completed'}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {internship.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">{internship.company}</p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span>{internship.duration}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
