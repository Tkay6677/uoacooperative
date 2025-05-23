"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, MapPin, Bus, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  route: z.string({
    required_error: "Please select a route",
  }),
  date: z.date({
    required_error: "Please select a date",
  }),
  seatNumber: z.string({
    required_error: "Please select a seat number",
  }),
});

const routes = [
  {
    id: "route1",
    name: "Main Campus to Staff Quarters",
    startLocation: "Main Campus",
    endLocation: "Staff Quarters",
    departureTime: "7:30 AM",
    arrivalTime: "8:00 AM",
    daysOfOperation: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    fare: 200,
    totalSeats: 30,
  },
  {
    id: "route2",
    name: "Staff Quarters to Main Campus",
    startLocation: "Staff Quarters",
    endLocation: "Main Campus",
    departureTime: "5:00 PM",
    arrivalTime: "5:30 PM",
    daysOfOperation: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    fare: 200,
    totalSeats: 30,
  },
  {
    id: "route3",
    name: "Main Campus to Downtown",
    startLocation: "Main Campus",
    endLocation: "Downtown",
    departureTime: "4:30 PM",
    arrivalTime: "5:15 PM",
    daysOfOperation: ["Monday", "Wednesday", "Friday"],
    fare: 300,
    totalSeats: 25,
  },
];

export default function TravelPage() {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);
  const [bookingComplete, setBookingComplete] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      route: "",
      seatNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here would be where you'd submit to your backend
    setBookingComplete(true);
  }

  const handleRouteChange = (routeId: string) => {
    const route = routes.find((r) => r.id === routeId);
    if (route) {
      setSelectedRoute(route);
    }
  };

  if (bookingComplete) {
    return (
      <div className="container-custom mx-auto py-32 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Your bus seat has been reserved successfully. Check your email for details.
          </p>
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <div className="text-left space-y-4">
              <div className="flex items-start">
                <Bus className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">{selectedRoute.name}</div>
                  <div className="text-sm text-muted-foreground">{form.getValues().date ? format(form.getValues().date, "EEEE, MMMM d, yyyy") : ""}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Departure Time</div>
                  <div className="text-sm text-muted-foreground">{selectedRoute.departureTime}</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Pickup Location</div>
                  <div className="text-sm text-muted-foreground">{selectedRoute.startLocation}</div>
                </div>
              </div>
            </div>
          </div>
          <Button onClick={() => setBookingComplete(false)}>Book Another Trip</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container-custom mx-auto py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Staff Bus Booking</h1>
        <p className="text-lg text-muted-foreground">
          Book your seat on university staff buses with ease. Choose your route, select a date, and reserve your seat.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-5"
        >
          <Card>
            <CardHeader>
              <CardTitle>Available Routes</CardTitle>
              <CardDescription>Select a route to view details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {routes.map((route) => (
                <div
                  key={route.id}
                  className={cn(
                    "border rounded-lg p-4 cursor-pointer transition-colors",
                    selectedRoute.id === route.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                  onClick={() => handleRouteChange(route.id)}
                >
                  <div className="font-medium">{route.name}</div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {route.departureTime}
                    </div>
                    <div>₦{route.fare}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Route Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Pickup</div>
                  <div className="text-muted-foreground">{selectedRoute.startLocation}</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Dropoff</div>
                  <div className="text-muted-foreground">{selectedRoute.endLocation}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Departure Time</div>
                  <div className="text-muted-foreground">{selectedRoute.departureTime}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Arrival Time</div>
                  <div className="text-muted-foreground">{selectedRoute.arrivalTime}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Bus className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Operating Days</div>
                  <div className="text-muted-foreground">{selectedRoute.daysOfOperation.join(", ")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-7"
        >
          <Card>
            <CardHeader>
              <CardTitle>Book Your Seat</CardTitle>
              <CardDescription>
                Fill out the form below to reserve your seat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="route"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Route</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            handleRouteChange(value);
                          }}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a route" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {routes.map((route) => (
                              <SelectItem key={route.id} value={route.id}>
                                {route.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select your preferred route
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Travel Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => {
                                // Disable past dates
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                
                                // Disable days that aren't in the daysOfOperation array
                                const dayName = format(date, 'EEEE');
                                return date < today || !selectedRoute.daysOfOperation.includes(dayName);
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Choose a date for your travel (only available on operating days)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="seatNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Seat Number</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a seat" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[...Array(selectedRoute.totalSeats)].map((_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                Seat {i + 1}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose your preferred seat number
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Booking Summary</div>
                    <div className="flex justify-between mb-2">
                      <span>Route Fare</span>
                      <span>₦{selectedRoute.fare}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Booking Fee</span>
                      <span>₦50</span>
                    </div>
                    <div className="border-t pt-2 mt-2 font-medium flex justify-between">
                      <span>Total</span>
                      <span>₦{selectedRoute.fare + 50}</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">Complete Booking</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}