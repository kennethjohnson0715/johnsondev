import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "G & S Auto Care",
    category: "Automotive Services",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    description: "A professional service platform for G & S Auto Care in Phoenix, featuring service listings and customer engagement.",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://gandsautocarephoenix.vercel.app/"
  },
  {
    title: "CB Auto Repair",
    category: "Automotive Services",
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800",
    description: "Custom web presence for CB Auto Repair in Phoenix, optimizing local search and service accessibility.",
    tags: ["Next.js", "Modern UI", "SEO"],
    link: "https://cbautorepairphxarizona.vercel.app/"
  },
  {
    title: "FreeFlow Health",
    category: "Healthcare & Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive health and wellness platform focused on patient care and streamlined health services.",
    tags: ["Healthcare", "UX Design", "Platform"],
    link: "https://www.freeflow.health/"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of my recent projects delivering impact and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-medium text-indigo-400 mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            Contact me to see more work <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
