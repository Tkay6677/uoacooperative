"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The cooperative has been instrumental in helping me secure a home loan. The process was transparent and the rates were better than commercial banks.",
    name: "Dr. Chioma Okafor",
    position: "Associate Professor, Faculty of Science",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "I've been using the staff bus booking service for two years now. It's reliable, affordable, and has made my daily commute stress-free.",
    name: "Mr. Adebayo Johnson",
    position: "Administrative Officer, Registry",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The marketplace feature allowed me to sell my farm produce directly to colleagues. It's a wonderful platform that fosters community spirit.",
    name: "Mrs. Amina Ibrahim",
    position: "Senior Lecturer, Faculty of Agriculture",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "As a new staff member, the cooperative helped me set up emergency savings. Their financial workshops improved my money management skills.",
    name: "Mr. Emmanuel Obi",
    position: "Assistant Lecturer, Faculty of Engineering",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

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
          <h2 className="section-title">What Our Members Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from university staff who have benefited from our cooperative services.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop View (2 testimonials side by side) */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {[0, 1].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: offset === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="mb-4 text-secondary">
                        <Quote size={32} />
                      </div>
                      <p className="italic text-foreground mb-6 flex-1">"{testimonials[index].quote}"</p>
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonials[index].name}</p>
                          <p className="text-sm text-muted-foreground">{testimonials[index].position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile View (single testimonial) */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-secondary">
                    <Quote size={32} />
                  </div>
                  <p className="italic text-foreground mb-6">"{testimonials[currentIndex].quote}"</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}