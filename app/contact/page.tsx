'use client'
import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FCFAFA] py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <span className="text-accent-blush text-sm font-bold uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-accent-blush/5 border border-accent-blush/10">Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-text mb-8 tracking-tight"
          >
            Say <span className="text-accent-blush italic">Hello</span> 🤍
          </motion.h1>
          <div className="w-24 h-1 bg-accent-blush/30 mx-auto mb-8"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-500 font-light italic max-w-2xl mx-auto leading-relaxed"
          >
            Have a question or a recommendation? We&apos;d love to hear from you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[3rem] shadow-elegant border border-gray-50 p-10 md:p-16 relative overflow-hidden"
        > 
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blush/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8 relative z-10">
            <input type="hidden" name="access_key" value="814718bb-47d7-41bf-aa06-d10452d13958" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="block text-xs font-bold text-stone-text uppercase tracking-[0.2em]">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required className="w-full p-5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent-blush focus:bg-white outline-none transition-all placeholder:text-gray-400 font-light" />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="block text-xs font-bold text-stone-text uppercase tracking-[0.2em]">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required className="w-full p-5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent-blush focus:bg-white outline-none transition-all placeholder:text-gray-400 font-light" />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="block text-xs font-bold text-stone-text uppercase tracking-[0.2em]">Message</label>
              <textarea id="message" name="message" placeholder="What can we help you with?" required className="w-full p-5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent-blush focus:bg-white outline-none transition-all placeholder:text-gray-400 font-light h-48 resize-none" />
            </div>

            <Button type="submit" className="w-full h-20 rounded-2xl bg-pink-50 hover:bg-accent-blush text-black font-bold uppercase tracking-widest transition-all duration-300 shadow-elegant hover:shadow-hover hover:scale-[1.02] active:scale-[0.98]">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}