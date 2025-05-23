"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: "1",
    title: "Annual General Meeting",
    description: "Join us for the annual general meeting to review our progress and plans.",
    startDate: new Date("2025-12-10T09:00:00"),
    endDate: new Date("2025-12-10T13:00:00"),
    location: "University Auditorium",
    type: "meeting"
  },
  {
    id: "2",
    title: "Financial Literacy Workshop",
    description: "Learn about personal finance, investments, and retirement planning.",
    startDate: new Date("2025-11-15T14:00:00"),
    endDate: new Date("2025-11-15T16:00:00"),
    location: "Faculty of Management Sciences",
    type: "workshop"
  },
  {
    id: "3",
    title: "Home Ownership Seminar",
    description: "Everything you need to know about the cooperative's housing program.",
    startDate: new Date("2025-11-22T10:00:00"),
    endDate: new Date("2025-11-22T12:00:00"),
    location: "Engineering Building, Room 305",
    type: "workshop"
  }
];

export function UpcomingEvents() {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "meeting": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "workshop": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "agm": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
        >
          <div>
            <h2 className="section-title mb-2">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">
              Stay connected with our community events and workshops.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0" variant="outline">
            <Link href="/events" className="flex items-center">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-3">
                    <Badge variant="outline" className={getBadgeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{format(event.startDate, "EEEE, MMMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {format(event.startDate, "h:mm a")} - {format(event.endDate, "h:mm a")}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="mt-4 w-full" variant="outline">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}