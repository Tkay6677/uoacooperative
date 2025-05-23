"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10 z-0"></div>
      
      <div className="container-custom mx-auto pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary"
            >
              Welcome to Your Cooperative Hub!
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl mb-8 text-foreground/80"
            >
              Supporting University of Africa staff with financial services, 
              travel solutions, and community building since 1995.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/auth/register">Join Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="University cooperative members"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Stats overlay */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] bg-background rounded-lg shadow-xl p-6"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">2,500+</p>
                  <p className="text-sm text-muted-foreground">Members</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">₦250M</p>
                  <p className="text-sm text-muted-foreground">Savings</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">25</p>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}