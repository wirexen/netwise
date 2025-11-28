import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Settings, 
  Layers, 
  Palette, 
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Home = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications built with modern frameworks for iOS and Android."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications and websites designed for performance, scalability, and user experience."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for AWS, Azure, and Google Cloud Platform."
    },
    {
      icon: Settings,
      title: "DevOps & Infrastructure",
      description: "Automated CI/CD pipelines, infrastructure as code, and container orchestration solutions."
    },
    {
      icon: Layers,
      title: "API Integration",
      description: "Seamless integration of third-party APIs and development of custom RESTful and GraphQL APIs."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality and accessibility."
    }
  ];

  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We deliver robust, well-tested solutions that stand the test of time."
    },
    {
      title: "Transparent Communication",
      description: "Clear, honest communication throughout every stage of development."
    },
    {
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects within agreed timeframes."
    },
    {
      title: "Long-term Support",
      description: "Ongoing maintenance and support to ensure your software stays current."
    }
  ];

  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "We work on a wide range of software projects including web applications, mobile apps, cloud solutions, and enterprise systems. Our expertise spans multiple industries including healthcare, finance, e-commerce, and education."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A simple web application might take 4-6 weeks, while a complex enterprise system could take 3-6 months. We provide detailed timeline estimates during the planning phase."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to keep your software running smoothly."
    },
    {
      question: "How do you ensure the security of our software?",
      answer: "Security is built into every stage of development. We follow industry best practices including secure coding standards, regular security audits, penetration testing, and compliance with relevant regulations like GDPR and HIPAA."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroWorkspace} 
            alt="Software Development Workspace" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Custom Software Solutions That Scale With Your Business
            </h1>
            <p className="text-xl text-muted-foreground">
              Engineering reliable, future-ready digital systems for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  About Netwise Digital
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in Rivers State, Nigeria, we've grown from a small team of developers 
                    into a comprehensive software solutions provider serving clients locally and internationally.
                  </p>
                  <p>
                    Our approach combines deep technical expertise with a genuine understanding of business 
                    challenges. We don't just write code—we build partnerships and deliver solutions that 
                    create measurable value for your organization.
                  </p>
                  <p>
                    From startups to established enterprises, we've helped companies across various industries 
                    modernize their technology stack, streamline operations, and achieve their digital transformation goals.
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                <img 
                  src={heroWorkspace} 
                  alt="Our Development Process" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in software development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-primary">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Netwise Digital transformed our outdated system into a modern, efficient platform. 
                  Their technical expertise and commitment to quality exceeded our expectations."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CTO, TechFlow Solutions</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-primary">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "The team's ability to understand our business needs and translate them into a 
                  scalable mobile app was impressive. Highly recommend their services."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Michael Okafor</p>
                  <p className="text-sm text-muted-foreground">CEO, FinanceHub Africa</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-primary">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Outstanding work on our cloud migration. The process was smooth, on time, 
                  and our system performance has improved significantly."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Grace Adebiyi</p>
                  <p className="text-sm text-muted-foreground">Operations Director, HealthCare Plus</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/faq">View All FAQs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg opacity-90">
              Let's discuss how we can help transform your ideas into powerful software solutions.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
