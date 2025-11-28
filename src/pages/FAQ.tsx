import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What types of projects do you work on?",
          answer: "We work on a wide range of software projects including web applications, mobile apps, cloud solutions, and enterprise systems. Our expertise spans multiple industries including healthcare, finance, e-commerce, education, and more. Whether you need a simple website or a complex distributed system, we have the experience to deliver."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary based on scope and complexity. A simple web application might take 4-6 weeks, a mobile app 8-12 weeks, while a complex enterprise system could take 3-6 months or more. During our initial consultation, we'll provide a detailed timeline estimate based on your specific requirements and priorities."
        },
        {
          question: "How do you handle project communication?",
          answer: "We believe in transparent, regular communication. You'll have a dedicated project manager who provides weekly progress updates, schedules bi-weekly demo sessions, and is available for questions via email, phone, or video call. We use project management tools to keep you informed of progress at all times."
        }
      ]
    },
    {
      category: "Development Process",
      questions: [
        {
          question: "What is your development methodology?",
          answer: "We use Agile development methodologies, specifically Scrum, which allows for flexibility and iterative progress. Projects are broken into 2-week sprints with regular reviews and adjustments. This approach ensures you can see progress continuously and provide feedback that shapes the final product."
        },
        {
          question: "Can I make changes during development?",
          answer: "Yes, our Agile approach accommodates changes. While we plan thoroughly upfront, we understand that requirements can evolve. Changes are evaluated for their impact on timeline and budget, and we work with you to prioritize and implement them efficiently."
        },
        {
          question: "How do you ensure code quality?",
          answer: "Quality is maintained through multiple practices: peer code reviews, automated testing (unit, integration, and end-to-end tests), continuous integration, static code analysis, and adherence to coding standards. Every feature goes through rigorous testing before deployment."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What technologies do you specialize in?",
          answer: "Our technology stack includes React, Next.js, and Vue.js for frontend; Node.js, Python, and .NET for backend; React Native and Flutter for mobile; and AWS, Azure, and Google Cloud for cloud infrastructure. We select technologies based on project requirements, not trends."
        },
        {
          question: "Do you work with existing codebases?",
          answer: "Yes, we frequently work with existing systems. We can audit your current codebase, identify issues, implement improvements, add new features, or help migrate to modern technologies. We also provide refactoring services to improve code quality and maintainability."
        },
        {
          question: "How do you handle data migration?",
          answer: "Data migration is handled carefully with a multi-step process: analyzing existing data structure, planning the migration strategy, creating migration scripts, testing in a staging environment, and executing during scheduled downtime with rollback capability. We ensure data integrity throughout."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How do you ensure the security of our software?",
          answer: "Security is integrated at every development stage. We follow OWASP guidelines, implement secure coding practices, conduct regular security audits and penetration testing, use encryption for sensitive data, implement proper authentication and authorization, and stay updated on security vulnerabilities."
        },
        {
          question: "Can you help with compliance requirements?",
          answer: "Yes, we have experience with various compliance standards including GDPR, HIPAA, PCI DSS, and SOC 2. We can help design systems that meet these requirements, implement necessary controls, prepare documentation, and work with your compliance team to ensure all regulations are met."
        }
      ]
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "How do you structure pricing?",
          answer: "We offer both fixed-price and time-and-materials pricing models. Fixed-price works well for clearly defined projects, while time-and-materials suits projects with evolving requirements. After understanding your needs, we provide a detailed proposal with transparent pricing and payment schedules."
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer: "Yes, we offer comprehensive maintenance packages that include bug fixes, security updates, performance optimization, feature enhancements, and 24/7 emergency support. We also provide SLA-backed support agreements for mission-critical applications."
        },
        {
          question: "What happens after project completion?",
          answer: "After launch, we provide a warranty period (typically 30-90 days) for bug fixes. We also offer training for your team, complete documentation, and can continue with ongoing support and maintenance. The code and all deliverables are fully transferred to you."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services, processes, and policies
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`item-${categoryIndex}-${questionIndex}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Can't find the answer you're looking for? Get in touch with our team.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
