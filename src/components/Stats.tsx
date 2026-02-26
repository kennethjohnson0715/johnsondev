import { motion } from "motion/react";
import { Users, Star, CheckCircle, Award } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "20+",
    label: "Happy Clients",
    description: "Delivering excellence to businesses across Phoenix and beyond."
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "100%",
    label: "Satisfaction Rate",
    description: "Committed to exceeding expectations with every project."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    value: "50+",
    label: "Projects Delivered",
    description: "Successful launches ranging from local shops to complex platforms."
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "5+",
    label: "Years Experience",
    description: "Deep expertise in modern web technologies and design trends."
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-zinc-900/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-zinc-200 mb-3">{stat.label}</div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
