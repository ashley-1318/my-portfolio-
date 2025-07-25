import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap, Cpu } from 'lucide-react';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "text-primary",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-secondary",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      color: "text-accent",
      skills: [
        { name: "Three.js", level: 75 },
        { name: "WebGL", level: 70 },
        { name: "PWA", level: 80 },
        { name: "WebRTC", level: 65 },
        { name: "WebSockets", level: 85 },
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-primary-glow",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS", level: 65 },
        { name: "Android", level: 65 },
        { name: "Expo", level: 85 },
      ]
    },
    {
      icon: Zap,
      title: "DevOps & Tools",
      color: "text-secondary-glow",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Git", level: 95 },
        { name: "Jest", level: 90 },
      ]
    },
    {
      icon: Cpu,
      title: "Emerging Tech",
      color: "text-accent-glow",
      skills: [
        { name: "AI/ML", level: 70 },
        { name: "Blockchain", level: 60 },
        { name: "IoT", level: 55 },
        { name: "AR/VR", level: 65 },
        { name: "Edge Computing", level: 60 },
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                className="interactive-card p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <Icon className={`${category.color} mr-3`} size={32} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-primary rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold gradient-text mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              5+
            </motion.div>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold gradient-text mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              50+
            </motion.div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold gradient-text mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              30+
            </motion.div>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold gradient-text mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              100%
            </motion.div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;