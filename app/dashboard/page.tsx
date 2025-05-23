"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  DollarSign, 
  Users, 
  Building, 
  Car, 
  Calendar, 
  Bus, 
  ShoppingCart, 
  PiggyBank, 
  Heart, 
  PlusCircle,
  Clock11
} from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";

// Mock data for demonstration
const savingsData = [
  { month: "Jan", amount: 15000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 15000 },
  { month: "Apr", amount: 15000 },
  { month: "May", amount: 15000 },
  { month: "Jun", amount: 20000 },
  { month: "Jul", amount: 20000 },
  { month: "Aug", amount: 20000 },
  { month: "Sep", amount: 20000 },
  { month: "Oct", amount: 20000 },
  { month: "Nov", amount: 20000 },
  { month: "Dec", amount: 0 },
];

const activeLoans = [
  {
    id: "1",
    type: "Emergency",
    amount: 100000,
    balance: 75000,
    monthlyPayment: 8333,
    nextPaymentDate: "2025-12-15",
  },
  {
    id: "2",
    type: "Car",
    amount: 1500000,
    balance: 1200000,
    monthlyPayment: 41666,
    nextPaymentDate: "2025-12-20",
  },
];

const upcomingBusBookings = [
  {
    id: "1",
    route: "Main Campus to Staff Quarters",
    date: "2025-11-25",
    time: "5:00 PM",
    seatNumber: "12",
  },
  {
    id: "2",
    route: "Staff Quarters to Main Campus",
    date: "2025-11-26",
    time: "7:30 AM",
    seatNumber: "8",
  },
];

const marketplaceItems = [
  {
    id: "1",
    title: "Laptop Bag",
    price: 5000,
    status: "active",
    date: "2025-11-15",
  },
  {
    id: "2",
    title: "Rice (25kg)",
    price: 30000,
    status: "active",
    date: "2025-11-18",
  },
];

export default function DashboardPage() {
  const [tabsValue, setTabsValue] = useState("overview");

  return (
    <div className="container-custom mx-auto py-32">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-primary">Member Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Adebayo Johnson</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex mt-4 md:mt-0 space-x-2"
        >
          <Button variant="outline">
            <PlusCircle className="mr-2 h-4 w-4" />
            Apply for Loan
          </Button>
          <Button>
            <PiggyBank className="mr-2 h-4 w-4" />
            Top-up Savings
          </Button>
        </motion.div>
      </div>

      <Tabs value={tabsValue} onValueChange={setTabsValue} className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="loans">Loans</TabsTrigger>
          <TabsTrigger value="travel">Travel</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                  <PiggyBank className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₦195,000</div>
                  <p className="text-xs text-muted-foreground">
                    +₦20,000 from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Loan Balance</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₦1,275,000</div>
                  <p className="text-xs text-muted-foreground">
                    For 2 active loans
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₦49,999</div>
                  <p className="text-xs text-muted-foreground">
                    Due on December 15, 2025
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Welfare Benefits</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3 Active</div>
                  <p className="text-xs text-muted-foreground">
                    Health, Life, and Retirement
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Savings Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Monthly Contributions</CardTitle>
                <CardDescription>
                  Your savings contributions over the past 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={savingsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`₦${value}`, 'Amount']}
                        labelFormatter={(label) => `Month: ${label}`}
                      />
                      <Bar dataKey="amount" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activities & Upcoming Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    Your recent transactions and activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Monthly Contribution</p>
                        <p className="text-xs text-muted-foreground">November 10, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">₦20,000</p>
                        <p className="text-xs text-green-500">Success</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <Bus className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Bus Booking</p>
                        <p className="text-xs text-muted-foreground">November 8, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">₦250</p>
                        <p className="text-xs text-green-500">Success</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <CreditCard className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Loan Repayment</p>
                        <p className="text-xs text-muted-foreground">November 5, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">₦49,999</p>
                        <p className="text-xs text-green-500">Success</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-primary/10 p-2">
                        <ShoppingCart className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Marketplace Purchase</p>
                        <p className="text-xs text-muted-foreground">November 1, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">₦15,000</p>
                        <p className="text-xs text-green-500">Success</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>
                    Cooperative events and important dates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 rounded-md bg-primary/10 p-2 text-center min-w-[50px]">
                        <p className="text-xs font-medium text-primary">DEC</p>
                        <p className="text-lg font-bold text-primary">10</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Annual General Meeting</p>
                        <p className="text-xs text-muted-foreground mb-1">9:00 AM - 1:00 PM</p>
                        <p className="text-xs text-muted-foreground">University Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 rounded-md bg-primary/10 p-2 text-center min-w-[50px]">
                        <p className="text-xs font-medium text-primary">NOV</p>
                        <p className="text-lg font-bold text-primary">15</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Financial Literacy Workshop</p>
                        <p className="text-xs text-muted-foreground mb-1">2:00 PM - 4:00 PM</p>
                        <p className="text-xs text-muted-foreground">Faculty of Management Sciences</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 rounded-md bg-primary/10 p-2 text-center min-w-[50px]">
                        <p className="text-xs font-medium text-primary">NOV</p>
                        <p className="text-lg font-bold text-primary">22</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Home Ownership Seminar</p>
                        <p className="text-xs text-muted-foreground mb-1">10:00 AM - 12:00 PM</p>
                        <p className="text-xs text-muted-foreground">Engineering Building, Room 305</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="/events">View All Events</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="savings" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Savings History</CardTitle>
                <CardDescription>
                  Your contributions over the past 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={savingsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`₦${value}`, 'Amount']}
                        labelFormatter={(label) => `Month: ${label}`}
                      />
                      <Bar dataKey="amount" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Savings Summary</CardTitle>
                <CardDescription>
                  Your current savings status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Total Savings</span>
                    <span className="text-sm font-medium">₦195,000</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    78% of your annual target (₦250,000)
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-4">Contribution Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Regular Savings</span>
                      <span>₦165,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Special Savings</span>
                      <span>₦30,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Dividends</span>
                      <span>₦0</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button>Top-up</Button>
                  <Button variant="outline">Withdraw</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="loans" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Loan Types</CardTitle>
                <CardDescription>
                  Available loan options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/80 transition-colors">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-medium">Emergency</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Quick access loans for urgent needs with simplified approval process.
                  </p>
                </div>
                
                <div className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/80 transition-colors">
                  <div className="flex items-center mb-2">
                    <Building className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-medium">Housing</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Long-term loans for home purchase, building or renovation.
                  </p>
                </div>
                
                <div className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/80 transition-colors">
                  <div className="flex items-center mb-2">
                    <Car className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-medium">Car</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Medium-term loans for vehicle purchase with competitive rates.
                  </p>
                </div>
                
                <div className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/80 transition-colors">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-medium">Personal</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Flexible loans for personal projects and general purposes.
                  </p>
                </div>
                
                <Button className="w-full">Apply for Loan</Button>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Active Loans</CardTitle>
                <CardDescription>
                  Your current loan obligations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activeLoans.map((loan) => (
                    <div key={loan.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="font-medium">{loan.type} Loan</span>
                          <p className="text-sm text-muted-foreground">
                            Total: ₦{loan.amount.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full",
                            loan.type === "Emergency" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          )}>
                            Active
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Outstanding Balance</span>
                          <span className="font-medium">₦{loan.balance.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Monthly Payment</span>
                          <span>₦{loan.monthlyPayment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Next Payment Date</span>
                          <span>{loan.nextPaymentDate}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm mb-1">Repayment Progress</div>
                        <Progress value={(1 - (loan.balance / loan.amount)) * 100} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {Math.round((1 - (loan.balance / loan.amount)) * 100)}% paid off
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="travel" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>
                  Your scheduled bus trips
                </CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingBusBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBusBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="mr-4 rounded-md bg-primary/10 p-2 text-center min-w-[50px]">
                            <Bus className="h-5 w-5 mx-auto text-primary mb-1" />
                            <p className="text-xs font-medium text-primary">Seat</p>
                            <p className="text-lg font-bold text-primary">{booking.seatNumber}</p>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{booking.route}</p>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Clock11 className="h-4 w-4 mr-1" />
                              <span>{booking.time}</span>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="destructive" size="sm">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Bus className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Upcoming Bookings</h3>
                    <p className="text-muted-foreground mb-4">
                      You don't have any scheduled bus trips at the moment.
                    </p>
                    <Button asChild>
                      <Link href="/travel">Book a Trip</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Book</CardTitle>
                <CardDescription>
                  Frequently used routes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/80 transition-colors">
                  <p className="font-medium">Main Campus to Staff Quarters</p>
                  <p className="text-sm text-muted-foreground">5:00 PM daily</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">₦200</span>
                    <Button size="sm">Book</Button>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/80 transition-colors">
                  <p className="font-medium">Staff Quarters to Main Campus</p>
                  <p className="text-sm text-muted-foreground">7:30 AM daily</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">₦200</span>
                    <Button size="sm">Book</Button>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <Button asChild className="w-full">
                    <Link href="/travel">View All Routes</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Your Listings</CardTitle>
                <CardDescription>
                  Items you're currently selling
                </CardDescription>
              </CardHeader>
              <CardContent>
                {marketplaceItems.length > 0 ? (
                  <div className="space-y-4">
                    {marketplaceItems.map((item) => (
                      <div key={item.id} className="border rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="mr-4 rounded-md bg-primary/10 p-2 text-center min-w-[50px]">
                            <ShoppingCart className="h-5 w-5 mx-auto text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{item.title}</p>
                            <p className="text-lg font-bold text-primary">₦{item.price.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">
                              Listed on {item.date}
                            </p>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <span className={cn(
                              "text-xs font-medium px-2 py-1 rounded-full",
                              "bg-green-100 text-green-800"
                            )}>
                              Active
                            </span>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Active Listings</h3>
                    <p className="text-muted-foreground mb-4">
                      You don't have any items for sale at the moment.
                    </p>
                    <Button asChild>
                      <Link href="/marketplace/new">Sell Something</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Marketplace</CardTitle>
                <CardDescription>
                  Buy and sell within the cooperative
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-medium mb-2">Popular Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="justify-start">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Electronics
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Home
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Food
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Services
                    </Button>
                  </div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Cooperative Shop</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Discounted bulk purchases for members
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/marketplace/cooperative">Shop Now</Link>
                  </Button>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <Button asChild className="w-full">
                    <Link href="/marketplace">Browse Marketplace</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}