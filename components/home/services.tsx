"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  index: number;
}

function ServiceCard({ title, description, imageSrc, link, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <Button asChild variant="secondary" size="sm" className="group">
          <Link href={link}>
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export function Services() {
  const services = [
    {
      title: "Savings & Investments",
      description: "Grow your wealth with our competitive savings plans and investment opportunities.",
      imageSrc: "https://images.pexels.com/photos/929288/pexels-photo-929288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services/savings"
    },
    {
      title: "Loan Services",
      description: "Access emergency, housing, car, and personal loans with low interest rates.",
      imageSrc: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services/loans"
    },
    {
      title: "Staff Bus Booking",
      description: "Book your seat on university staff buses conveniently and securely.",
      imageSrc: "https://images.pexels.com/photos/6858673/pexels-photo-6858673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/travel"
    },
    {
      title: "Marketplace",
      description: "Buy, sell, or exchange goods and services within our trusted community.",
      imageSrc: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/marketplace"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Our Core Services</h2>
          <p className="text-lg text-muted-foreground">
            Explore the range of services designed to enhance your financial well-being and quality of life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}