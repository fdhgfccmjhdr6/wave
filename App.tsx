import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { cn } from './lib/utils'
import { 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Award,
  TrendingUp,
  Target,
  Calendar,
  FileText,
  Code,
  Rocket,
  Home,
  Briefcase,
  CreditCard
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'
import { BackgroundPaths } from './components/ui/background-paths'
import { GlowingEffect } from './components/ui/glowing-effect'
import { GlowCard } from './components/ui/spotlight-card'
import RadialOrbitalTimeline from './components/ui/radial-orbital-timeline'
import { Footer } from './components/ui/footer-section'
import { LocationMap } from './components/ui/expand-map'
import { NavBar } from './components/ui/tubelight-navbar'
import { TypewriterTestimonials } from './components/ui/typewriter-testimonial'
import { Pricing, PricingPlan } from './components/ui/pricing'
import FAQs from './components/ui/text-reveal-faqs'
import Login from './components/ui/login-1'

interface NavItem {
  label: string
  href: string
}

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

const DigitalAgencyLanding: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  const tubelightItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: Zap },
    { name: 'Work', url: '#work', icon: Briefcase },
    { name: 'Team', url: '#team', icon: Users },
    { name: 'Pricing', url: '#pricing', icon: CreditCard },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Leading creative vision with 10+ years of experience',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Full-stack expert specializing in modern web technologies',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Watson',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Crafting intuitive experiences that users love',
      social: { linkedin: '#', twitter: '#' }
    }
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: 'Ocean Wave Analytics',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description: 'Real-time data visualization platform'
    },
    {
      id: 2,
      title: 'Tidal Commerce',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Modern shopping experience'
    },
    {
      id: 3,
      title: 'Aqua Brand',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      description: 'Complete brand identity redesign'
    },
    {
      id: 4,
      title: 'Wave Mobile',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      description: 'iOS & Android fitness tracker'
    }
  ]

  const typewriterTestimonials = [
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      text: 'Working with this team transformed our digital presence. Their attention to detail and creative solutions exceeded our expectations.',
      name: 'David Park',
      jobtitle: 'CEO, TechFlow Inc',
    },
    {
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      text: 'The results speak for themselves. Our conversion rate increased by 150% within the first month of launch.',
      name: 'Lisa Anderson',
      jobtitle: 'Marketing Director, GrowthLabs',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      text: 'Professional, responsive, and incredibly talented. They brought our vision to life better than we imagined.',
      name: 'James Wilson',
      jobtitle: 'Founder, StartupHub',
    },
    {
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      text: 'An absolute pleasure to work with. They understood our brand voice immediately and translated it into a stunning design.',
      name: 'Sarah Miller',
      jobtitle: 'Brand Manager, Luxe',
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      text: 'Technical expertise matched with creative brilliance. The platform they built for us handles millions of requests seamlessly.',
      name: 'Michael Chang',
      jobtitle: 'CTO, ScaleUp',
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      text: 'They did not just build a website; they built a revenue-generating machine. Highly recommended for any serious business.',
      name: 'Jessica Lee',
      jobtitle: 'VP Sales, Apex',
    }
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "STARTER",
      price: "2999",
      yearlyPrice: "2399",
      period: "per month",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "Basic SEO Setup",
        "3 Months Support",
        "5 Page Website"
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Start Project",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "PROFESSIONAL",
      price: "5999",
      yearlyPrice: "4799",
      period: "per month",
      features: [
        "Everything in Starter",
        "Advanced SEO & Analytics",
        "E-Commerce Integration",
        "6 Months Support",
        "Up to 15 Pages",
        "Content Management System",
        "Priority Support"
      ],
      description: "Ideal for growing teams and businesses",
      buttonText: "Get Started",
      href: "#contact",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      price: "9999",
      yearlyPrice: "7999",
      period: "per month",
      features: [
        "Everything in Professional",
        "Custom Custom Integrations",
        "Dedicated Account Manager",
        "12 Months Support",
        "Unlimited Pages",
        "Priority Development",
        "Custom Contracts",
        "SLA Agreement"
      ],
      description: "For large organizations with specific needs",
      buttonText: "Contact Sales",
      href: "#contact",
      isPopular: false,
    },
  ];

  const processTimelineData = [
    {
      id: 1,
      title: "Discovery",
      date: "Phase 1",
      content: "We dive deep into your business goals, target audience, and market landscape to build a solid foundation.",
      category: "Planning",
      icon: Calendar,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Strategy",
      date: "Phase 2",
      content: "Developing a comprehensive roadmap and digital strategy tailored to your specific objectives.",
      category: "Strategy",
      icon: MapPin,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "Design",
      date: "Phase 3",
      content: "Crafting intuitive, stunning interfaces that align with your brand identity and user needs.",
      category: "Design",
      icon: FileText,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 75,
    },
    {
      id: 4,
      title: "Development",
      date: "Phase 4",
      content: "Turning designs into robust, scalable code using the latest web technologies.",
      category: "Development",
      icon: Code,
      relatedIds: [3, 5],
      status: "pending" as const,
      energy: 50,
    },
    {
      id: 5,
      title: "Launch",
      date: "Phase 5",
      content: "Deploying your solution to the world with rigorous testing and optimization.",
      category: "Release",
      icon: Rocket,
      relatedIds: [4],
      status: "pending" as const,
      energy: 25,
    },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth scroll logic similar to navbar
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 overflow-hidden relative">
      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60]"
            >
                <Login onClose={() => setShowLogin(false)} />
            </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header (Logo, Mobile Menu Trigger) */}
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-lg h-16"
      >
        <div className="container mx-auto px-4 md:px-6 h-full">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                WaveStudio
              </span>
            </div>

            {/* Desktop Nav removed to avoid duplication with dock */}

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowLogin(true)} className="hidden md:inline-flex text-orange-500 hover:text-orange-400 hover:bg-neutral-900">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0">
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-neutral-400 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-16 left-0 right-0 border-b border-neutral-800 bg-black/95 backdrop-blur-lg overflow-hidden z-[60] shadow-2xl"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-lg font-medium text-neutral-300 hover:bg-neutral-800 hover:text-orange-500 rounded-lg transition-colors flex items-center justify-between group"
                    onClick={(e) => handleScrollToSection(e, item.href)}
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
                <div className="pt-4 border-t border-neutral-800 mt-2">
                   <Button variant="ghost" size="lg" onClick={() => {setShowLogin(true); setMobileMenuOpen(false);}} className="w-full justify-start text-orange-500 hover:text-orange-400 hover:bg-neutral-900">
                      Sign In
                   </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating Navbar (Desktop only, positioned at bottom) */}
      <NavBar 
        items={tubelightItems} 
        className="fixed bottom-6 top-auto left-1/2 -translate-x-1/2 z-50 hidden md:flex" 
      />

      {/* Hero Section */}
      <section id="home">
        <BackgroundPaths title="WaveStudio Digital Agency" />
      </section>

      {/* Proof Section */}
      <section className="py-16 px-4 md:px-6 bg-neutral-900/50 backdrop-blur-sm border-y border-neutral-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Happy Clients', value: '200+' },
              { icon: Award, label: 'Projects Completed', value: '350+' },
              { icon: TrendingUp, label: 'Success Rate', value: '98%' },
              { icon: Target, label: 'Years Experience', value: '10+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 mb-3 border border-neutral-700">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-900/20 text-orange-500 border-orange-900/50">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Web Development',
                description: 'Lightning-fast, responsive websites built with modern technologies'
              },
              {
                icon: Target,
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces that users love to interact with'
              },
              {
                icon: TrendingUp,
                title: 'Digital Marketing',
                description: 'Strategic campaigns that drive growth and engagement'
              },
              {
                icon: Shield,
                title: 'Brand Identity',
                description: 'Memorable brands that stand out in the digital ocean'
              },
              {
                icon: Users,
                title: 'Consulting',
                description: 'Expert guidance to navigate your digital transformation'
              },
              {
                icon: Award,
                title: 'Support & Maintenance',
                description: 'Ongoing care to keep your digital presence running smoothly'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="relative h-full rounded-[1.25rem] border border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3 bg-neutral-900/20">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-start gap-6 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6 shadow-sm md:p-6">
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
                          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                          transition={{ 
                              delay: index * 0.1 + 0.2, 
                              type: "spring",
                              stiffness: 200,
                              damping: 10
                          }}
                          viewport={{ once: true }}
                          className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-orange-900/30 transition-colors"
                        >
                            <feature.icon className="w-6 h-6 text-orange-500" />
                        </motion.div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-neutral-100">{feature.title}</h3>
                            <p className="text-neutral-400">{feature.description}</p>
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full bg-black">
          <div className="container mx-auto px-4 md:px-6 pt-20 pb-10 text-center">
            <Badge className="mb-4 bg-orange-900/20 text-orange-500 border-orange-900/50">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              A proven methodology to bring your vision to life
            </p>
          </div>
          <div className="h-[80vh] w-full relative">
             <RadialOrbitalTimeline timelineData={processTimelineData} />
          </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-6 bg-neutral-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-900/20 text-orange-500 border-orange-900/50">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Our Recent Work
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Dive into our portfolio of successful projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg border border-neutral-800 hover:border-orange-800/50 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-2 bg-orange-600 text-white border-0">{project.category}</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-neutral-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-900/20 text-orange-500 border-orange-900/50">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Meet the Crew
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Talented individuals passionate about digital excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-neutral-800 hover:border-orange-800 transition-all hover:shadow-lg hover:shadow-orange-900/20 bg-neutral-900/50 backdrop-blur-sm">
                  <div className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-neutral-100">{member.name}</CardTitle>
                    <CardDescription className="text-orange-500 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400 mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-900 text-neutral-400 hover:text-orange-500 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-900 text-neutral-400 hover:text-orange-500 transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-900 text-neutral-400 hover:text-orange-500 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-6 bg-neutral-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-900/20 text-orange-500 border-orange-900/50">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Hover over the team members to hear their stories
            </p>
          </motion.div>

          <TypewriterTestimonials testimonials={typewriterTestimonials} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 md:px-6">
        <Pricing 
          plans={pricingPlans} 
          title="Choose Your Plan"
          description="Flexible pricing for businesses of all sizes"
        />
      </section>

      {/* FAQ Section */}
      <FAQs />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-900/20 text-orange-500 border-orange-900/50">Contact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Let's Make Waves Together
            </h2>
            <p className="text-xl text-neutral-400">
              Ready to start your project? Get in touch with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neutral-100">Get in Touch</CardTitle>
                  <CardDescription className="text-neutral-400">We'd love to hear from you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-200">Email</div>
                      <div className="text-neutral-400">hello@wavestudio.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-200">Phone</div>
                      <div className="text-neutral-400">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-200">Office</div>
                      <LocationMap 
                        location="Bhubaneswar, IN" 
                        coordinates="20.2961° N, 85.8245° E" 
                        className="mt-2 w-full max-w-[240px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neutral-100">Send a Message</CardTitle>
                  <CardDescription className="text-neutral-400">Fill out the form below</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" className="bg-black border-neutral-800 focus:border-orange-500 text-neutral-100 placeholder:text-neutral-500" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" className="bg-black border-neutral-800 focus:border-orange-500 text-neutral-100 placeholder:text-neutral-500" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" rows={4} className="bg-black border-neutral-800 focus:border-orange-500 text-neutral-100 placeholder:text-neutral-500" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DigitalAgencyLanding