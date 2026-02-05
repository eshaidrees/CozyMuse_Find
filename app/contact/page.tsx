'use client'
import { motion } from 'framer-motion';
import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Contact Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
        > <form action="https://api.web3forms.com/submit" method="POST" className="text-left">
          <input type="hidden" name="access_key" value="814718bb-47d7-41bf-aa06-d10452d13958" />

          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required className="w-full p-3 mb-4 border rounded-lg" />

          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required className="w-full p-3 mb-4 border rounded-lg" />

          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required className="w-full p-3 mb-4 border rounded-lg h-32 resize-none" />

          <button type="submit" className="w-full px-4 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition duration-300">
            Send
          </button>
        </form>
        </motion.div>
      </div>
    </div>
  );
}