import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import officeExterior from "@/assets/office-exterior.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative software solutions that drive growth and efficiency."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every line of code we write."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships with our clients."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    }
  ];

  const team = [
    { 
      name: "Chukwudi Okonkwo", 
      role: "Lead Software Engineer",
      image: teamMember1,
      bio: "Full-stack development specialist with 8+ years building scalable web applications"
    },
    { 
      name: "Amaka Nwosu", 
      role: "Senior Backend Developer",
      image: teamMember2,
      bio: "Cloud architecture expert focused on microservices and distributed systems"
    },
    { 
      name: "Emeka Adebayo", 
      role: "UI/UX Designer",
      image: teamMember3,
      bio: "Creative designer passionate about user-centered design and accessibility"
    },
    { 
      name: "David Oluwaseun", 
      role: "Project Manager",
      image: teamMember4,
      bio: "Agile delivery specialist ensuring projects stay on track and exceed expectations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={officeExterior} 
            alt="Netwise Digital Office" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About Netwise Digital
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a team of passionate developers, designers, and problem-solvers 
              dedicated to building software that makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between business needs and technology 
                solutions, Netwise Digital has grown into a trusted partner for companies 
                seeking reliable software development services.
              </p>
              <p>
                Based in Rivers State, Nigeria, we serve clients locally and internationally, 
                delivering solutions that combine global best practices with local expertise. 
                Our team brings together diverse skills and experiences to tackle complex 
                challenges across various industries.
              </p>
              <p>
                What started as a small development team has evolved into a comprehensive 
                software solutions provider, offering everything from mobile apps to enterprise 
                cloud systems. Through it all, our commitment to quality and client success 
                remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Technical Excellence</h3>
                <p className="text-muted-foreground">
                  Our team stays current with the latest technologies and best practices, 
                  ensuring your software is built with modern, maintainable code.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Business Understanding</h3>
                <p className="text-muted-foreground">
                  We don't just write code – we understand business objectives and build 
                  solutions that deliver measurable value.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Agile Approach</h3>
                <p className="text-muted-foreground">
                  Flexible, iterative development ensures you can adapt to changing 
                  requirements and see progress throughout the project.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Comprehensive Support</h3>
                <p className="text-muted-foreground">
                  From initial consultation through deployment and beyond, we're with you 
                  every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experts across multiple disciplines working together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-3">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Work Together
            </h2>
            <p className="text-lg opacity-90">
              Ready to bring your software project to life? Get in touch with our team.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
