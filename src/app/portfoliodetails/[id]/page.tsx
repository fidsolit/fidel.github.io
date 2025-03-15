"use client";

import { motion } from "framer-motion";
import { ArrowLeft,ExternalLink, Github, Layout, Monitor, Package } from "lucide-react";
// import { ArrowLeft, ExternalLink, Github, Layout, Monitor, Package } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const projects = [
  {
    id: "1",
    title: "Global Impact",
    description: "HTML CSS JAVASCRIPT REACT JS PHP with FACEBOOK API AND GOOGLE API",
    fullDescription: "A comprehensive platform designed to create global impact through technology. This project showcases the integration of multiple APIs and modern web technologies to deliver a seamless user experience.",
    img: "gisupport home.png",
    link: "https://gisupport.org",
    technologies: ["React.js", "PHP", "Facebook API", "Google API", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Social media integration",
      "Real-time data synchronization",
      "Responsive design",
      "Cross-platform compatibility",
      "Advanced authentication system"
    ],
    challenges: "One of the main challenges was integrating multiple third-party APIs while maintaining optimal performance and ensuring seamless data flow between different services.",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    ]
  },
  {
    id: "2",
    title: "KAKKA DAIRY BAR",
    description: "HTML CSS JAVASCRIPT REACT JS PHP with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
    fullDescription: "A modern e-commerce platform for a dairy products business, featuring an intuitive interface and seamless ordering system.",
    img: "KAKA.png",
    link: "https://kakkadairybar.000webhostapp.com/",
    technologies: ["React.js", "PHP", "Tailwind CSS", "shadcn/ui", "Daisy UI", "Facebook API", "Google API"],
    features: [
      "Online ordering system",
      "Product catalog",
      "User authentication",
      "Shopping cart",
      "Payment integration"
    ],
    challenges: "Creating a responsive and user-friendly interface while managing complex state and data flow across the application.",
    screenshots: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2370&auto=format&fit=crop"
    ]
  },
  {
    id: "3",
    title: "Outsourcingcx",
    description: "HTML CSS JAVASCRIPT NEXT JS with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
    fullDescription: "A next-generation outsourcing platform built with Next.js, offering seamless connectivity between businesses and service providers.",
    img: "outsourcingcx.png",
    link: "https://outsourcingcx.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Daisy UI", "Facebook API", "Google API"],
    features: [
      "Real-time messaging",
      "Project management",
      "Service provider matching",
      "Analytics dashboard",
      "Automated workflows"
    ],
    challenges: "Implementing real-time features and ensuring smooth communication between different parts of the application while maintaining high performance.",
    screenshots: [
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2370&auto=format&fit=crop"
    ]
  },
  {
    id: "4",
    title: "Global Impact sourcing",
    description: "HTML CSS JAVASCRIPT NEXT JS with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
    fullDescription: "A next-generation outsourcing platform built with Next.js, offering seamless connectivity between businesses and service providers.",
    img: "outsourcingcx.png",
    link: "https://globalimpactsourcing.com/",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Daisy UI", "Facebook API", "Google API"],
    features: [
      "Real-time messaging",
      "Project management",
      "Service provider matching",
      "Analytics dashboard",
      "Automated workflows"
    ],
    challenges: "Implementing real-time features and ensuring smooth communication between different parts of the application while maintaining high performance.",
    screenshots: [
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2370&auto=format&fit=crop"
    ]
  }
  
];

export default function PortfolioDetails() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <Link href="/about" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96">
            <img
              src={project.screenshots[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-8">
            {/* Project Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <Package className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenges & Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Screenshots */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Monitor className="w-5 h-5 mr-2" />
                View Live Site
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}