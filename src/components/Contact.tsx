import { motion } from "motion/react";
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Submission Failed:', {
          status: response.status,
          statusText: response.statusText,
          details: errorData
        });
        setStatus('error');
      }
    } catch (error) {
      console.error('Network or Server Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Ready to take your online presence to the next level? Get in touch with me today to discuss your project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Phone</p>
                  <a href="tel:8136904391" className="text-xl font-semibold hover:text-indigo-400 transition-colors">
                    (813) 690-4391
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Email</p>
                  <a href="mailto:kenneth.j.dev@gmail.com" className="text-xl font-semibold hover:text-indigo-400 transition-colors">
                    kenneth.j.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-xl font-semibold">
                    Phoenix, AZ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-white/5"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-zinc-400 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                  <textarea 
                    required
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again later.</p>
                )}

                <motion.button 
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
