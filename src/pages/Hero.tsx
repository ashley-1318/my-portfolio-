import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '@/components/effects/ParticlesBackground';
import AnimatedBackground from '@/components/effects/AnimatedBackground';
import FloatingIcons from '@/components/three/FloatingIcons';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <AnimatedBackground />
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Creative</span>
              <br />
              <span className="text-foreground">Developer</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building exceptional digital experiences with cutting-edge technology and innovative design.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild className="group relative overflow-hidden">
                <Link to="/contact" className="flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="group">
                <Link to="/resume" className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex space-x-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                <span>Available for freelance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                <span>Open to opportunities</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D Scene */}
          <motion.div
            className="h-96 lg:h-[500px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-10 blur-3xl" />
            <div className="relative z-10 h-full rounded-2xl overflow-hidden border border-card-border bg-card/50 backdrop-blur-sm">
              <FloatingIcons />
            </div>
          </motion.div>
        </div>
        
        {/* About Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="interactive-card p-8 text-left"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-primary">Passion for Innovation</h3>
              <p className="text-muted-foreground">
                I thrive on creating cutting-edge solutions that push the boundaries of what's possible in web development.
              </p>
            </motion.div>
            
            <motion.div
              className="interactive-card p-8 text-left"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Creative Problem Solving</h3>
              <p className="text-muted-foreground">
                Every challenge is an opportunity to innovate. I approach problems with creativity and analytical thinking.
              </p>
            </motion.div>
            
            <motion.div
              className="interactive-card p-8 text-left"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-accent">Performance Focused</h3>
              <p className="text-muted-foreground">
                I believe in building fast, accessible, and user-friendly applications that deliver exceptional experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </div>
  );
};

export default Hero;