"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const Newsletter = ({ title = "Get the Best Finds Weekly", subtitle = "Get the best Amazon fashion and home finds weekly.", className = "" }: NewsletterProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll send the best finds to ${email}`);
    setEmail("");
  };

  return (
    <div className={`bg-amber-50 rounded-2xl p-8 md:p-12 ${className}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{subtitle}</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          />
          <Button type="submit" variant="cozy-primary" size="lg">
            Send Me the Finds
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;