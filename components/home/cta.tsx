"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Affordable loans with competitive interest rates",
  "Convenient staff bus booking system",
  "Community marketplace for goods and services",
  "Financial education and planning workshops",
  "Access to group investments and welfare programs"
];

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Cooperative Community Today
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Become a member of the University of Africa Workers Multi-Purpose Cooperative Society and enjoy exclusive benefits designed for university staff.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="bg-secondary rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg text-foreground"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Ready to Get Started?
            </h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-center text-muted-foreground">
                Join over 2,500 university staff already benefiting from our cooperative services.
              </p>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary mb-2">₦500</div>
                <p className="text-sm text-muted-foreground">One-time registration fee</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-primary">
                <Link href="/auth/register">Register Now</Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already a member? <Link href="/auth/signin" className="text-primary font-medium hover:underline">Sign in here</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}