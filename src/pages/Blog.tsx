import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search } from "lucide-react";
import blogCloud from "@/assets/blog-cloud.jpg";
import blogMobile from "@/assets/blog-mobile.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Microservices with Docker and Kubernetes",
      excerpt: "Learn how to architect and deploy microservices that can handle millions of requests using containerization.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "DevOps",
      image: blogCloud
    },
    {
      title: "Modern Frontend Development: React vs Vue vs Angular in 2024",
      excerpt: "A comprehensive comparison of the leading frontend frameworks to help you choose the right tool for your project.",
      date: "2024-03-10",
      readTime: "10 min read",
      category: "Web Development",
      image: blogMobile
    },
    {
      title: "Securing Your APIs: Best Practices and Common Pitfalls",
      excerpt: "Essential security practices every developer should implement when building RESTful and GraphQL APIs.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Security",
      image: blogCloud
    },
    {
      title: "Cloud Migration Strategy: Moving from On-Premise to AWS",
      excerpt: "A step-by-step guide to planning and executing a successful cloud migration without disrupting your business.",
      date: "2024-02-28",
      readTime: "12 min read",
      category: "Cloud",
      image: blogCloud
    },
    {
      title: "Mobile App Performance Optimization Techniques",
      excerpt: "Proven strategies to improve load times, reduce battery drain, and enhance user experience in mobile applications.",
      date: "2024-02-20",
      readTime: "7 min read",
      category: "Mobile Development",
      image: blogMobile
    },
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we write, test, and maintain code.",
      date: "2024-02-15",
      readTime: "9 min read",
      category: "AI & ML",
      image: blogCloud
    }
  ];

  const categories = [
    "All Posts",
    "Web Development",
    "Mobile Development",
    "Cloud",
    "DevOps",
    "Security",
    "AI & ML"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest in software development, best practices, and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Search */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="link" className="px-0 w-fit">
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the latest articles and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
