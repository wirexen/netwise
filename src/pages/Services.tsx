import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Settings, 
  Layers, 
  Palette, 
  Shield,
  Wrench
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build powerful native and cross-platform mobile applications for iOS and Android. We use React Native, Flutter, and Swift/Kotlin to create apps that deliver exceptional user experiences and performance."
    },
    {
      icon: Globe,
      title: "Website & Web Application Development",
      description: "Custom web solutions built with modern frameworks like React, Next.js, and Node.js. From corporate websites to complex web applications, we deliver responsive, fast, and SEO-optimized solutions."
    },
    {
      icon: Cloud,
      title: "Cloud Software Development",
      description: "Design and deploy scalable cloud-native applications on AWS, Azure, or Google Cloud Platform. We handle everything from architecture design to implementation and optimization for maximum performance."
    },
    {
      icon: Settings,
      title: "DevOps & Infrastructure Automation",
      description: "Streamline your development workflow with CI/CD pipelines, containerization, and infrastructure as code. We use Docker, Kubernetes, Terraform, and modern DevOps tools to automate and optimize your deployment processes."
    },
    {
      icon: Layers,
      title: "API Integration",
      description: "Seamlessly integrate third-party services and build custom APIs. We develop RESTful and GraphQL APIs that connect your systems, automate workflows, and enable data exchange between platforms."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive, accessible, and visually appealing user interfaces. Our design process combines user research, wireframing, prototyping, and usability testing to ensure your software is both beautiful and functional."
    },
    {
      icon: Shield,
      title: "Software Security & Compliance",
      description: "Protect your applications with comprehensive security measures. We implement security best practices, conduct audits, and ensure compliance with industry standards like GDPR, HIPAA, and PCI DSS."
    },
    {
      icon: Wrench,
      title: "Software Maintenance & Support",
      description: "Keep your software running smoothly with ongoing maintenance and support. We provide bug fixes, performance optimization, security updates, and feature enhancements to ensure your systems stay current and reliable."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive software development services to power your digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Development Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured approach to delivering successful projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">Discovery & Planning</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business objectives, target users, and technical 
                  requirements. This phase includes stakeholder interviews, competitive analysis, 
                  and creating a detailed project roadmap.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">Design & Architecture</h3>
                <p className="text-muted-foreground">
                  Our designers create wireframes and prototypes while our architects define the 
                  technical architecture. We ensure the design is user-friendly and the 
                  architecture is scalable.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">Development & Testing</h3>
                <p className="text-muted-foreground">
                  Using agile methodologies, we build your software in iterative sprints. 
                  Continuous testing ensures quality at every stage, with regular demos to 
                  gather your feedback.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-foreground">Deployment & Support</h3>
                <p className="text-muted-foreground">
                  We handle deployment to your chosen environment and provide comprehensive 
                  documentation. Post-launch, we offer ongoing support, maintenance, and 
                  optimization services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Technologies We Use
              </h2>
              <p className="text-lg text-muted-foreground">
                Modern tools and frameworks for robust solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Frontend</h3>
                  <p className="text-xs text-muted-foreground">
                    React, Next.js, Vue.js, TypeScript, Tailwind CSS
                  </p>
                </div>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Backend</h3>
                  <p className="text-xs text-muted-foreground">
                    Node.js, Python, .NET, Java, PostgreSQL, MongoDB
                  </p>
                </div>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Mobile</h3>
                  <p className="text-xs text-muted-foreground">
                    React Native, Flutter, Swift, Kotlin
                  </p>
                </div>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Cloud</h3>
                  <p className="text-xs text-muted-foreground">
                    AWS, Azure, Google Cloud, Docker, Kubernetes
                  </p>
                </div>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">DevOps</h3>
                  <p className="text-xs text-muted-foreground">
                    CI/CD, Terraform, Jenkins, GitHub Actions
                  </p>
                </div>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">Testing</h3>
                  <p className="text-xs text-muted-foreground">
                    Jest, Cypress, Selenium, PyTest
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90">
              Let's discuss your project and how we can help bring it to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
