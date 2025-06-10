import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Let's discuss how we can work together to optimize your infrastructure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            
            
            {[
              { icon: Mail, text: "aanandu97@gmail.com", href: "aanandu97@gmail.com" },
              { icon: Phone, text: "+91 9633320138", href: "tel:+91 9633320138" },
              { icon: MapPin, text: "Trivandrum,Kerala,India", href: "#" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center group p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="ml-4 text-gray-300 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </a>
            ))}
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-all duration-300"
              ></textarea>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group">
              <span>Send Message</span>
              <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form> 
        </div>
      </div>
    </section>
  );
}