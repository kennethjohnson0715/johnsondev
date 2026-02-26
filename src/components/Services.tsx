import { motion } from "motion/react";
import { Layout, Smartphone, ShoppingCart, Search } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Custom Web Design",
    description: "Tailor-made designs that reflect your brand identity and engage your audience."
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    description: "Websites that look and work perfectly on desktops, tablets, and mobile devices."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Robust online stores built to convert visitors into loyal customers."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in best practices to help your site rank higher in search results."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Comprehensive web solutions designed to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.2)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
