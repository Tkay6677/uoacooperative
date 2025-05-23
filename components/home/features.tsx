"use client";

import { motion } from "framer-motion";
import { CreditCard, Bus, ShoppingCart, Calendar, PiggyBank, Home, BarChart4, Heart } from "lucide-react";

const features = [
  {
    title: "Savings Plans",
    description: "Grow your wealth with our competitive savings plans tailored for university staff.",
    icon: <PiggyBank className="h-10 w-10 text-primary" />,
  },
  {
    title: "Loan Services",
    description: "Access emergency, housing, car, and personal loans with low interest rates.",
    icon: <CreditCard className="h-10 w-10 text-primary" />,
  },
  {
    title: "Staff Bus Booking",
    description: "Book your seat on university staff buses conveniently and securely.",
    icon: <Bus className="h-10 w-10 text-primary" />,
  },
  {
    title: "Marketplace",
    description: "Buy, sell, or exchange goods and services within our trusted community.",
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
  },
  {
    title: "Housing Programs",
    description: "Access affordable housing schemes and mortgage options for staff.",
    icon: <Home className="h-10 w-10 text-primary" />,
  },
  {
    title: "Investment Opportunities",
    description: "Participate in group investments with higher returns and lower risks.",
    icon: <BarChart4 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Events & Workshops",
    description: "Stay connected with community events, meetings, and financial workshops.",
    icon: <Calendar className="h-10 w-10 text-primary" />,
  },
  {
    title: "Welfare Programs",
    description: "Benefit from health insurance, funeral assistance, and retirement planning.",
    icon: <Heart className="h-10 w-10 text-primary" />,
  },
];

export function Features() {
  return (
    <section className="py-20 bg-muted">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Empowering Our Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Discover the wide range of services designed to improve the financial well-being and quality of life for University of Africa staff members.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}