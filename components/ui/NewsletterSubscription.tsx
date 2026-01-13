"use client";

import { useState } from "react";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // TODO: Implement actual newsletter subscription API call
    // For now, just simulate a success message
    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-[#eaf1fe] via-[#faf9f9] to-[#d7e5f9] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 w-[95%] mx-auto">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-heading">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-base text-gray-600 font-body">
          Stay updated with our latest insights, tips, and industry news.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col  gap-3 mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3038cf] focus:border-transparent font-body text-gray-900"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-fit mx-auto px-6 py-3 bg-[#3038cf] text-white font-semibold rounded-xl hover:bg-[#3038cf] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-body whitespace-nowrap"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {message && (
          <p className="text-sm text-green-600 font-body mt-2">{message}</p>
        )}
      </div>
    </div>
  );
}

