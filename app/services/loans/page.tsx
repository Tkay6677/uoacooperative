"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CreditCard, HelpCircle, Building, Car, AlertCircle } from "lucide-react";

const loanTypes = [
  {
    id: "emergency",
    name: "Emergency Loan",
    icon: <AlertCircle className="h-6 w-6 text-red-500" />,
    description: "Quick access loans for urgent needs with simplified approval process.",
    maxAmount: 200000,
    interestRate: 5,
    maxTenure: 12,
    requirements: [
      "Must have been a member for at least 3 months",
      "Maximum loan amount is ₦200,000",
      "Maximum tenure is 12 months",
      "Requires minimal documentation",
      "Quick approval within 24-48 hours"
    ]
  },
  {
    id: "housing",
    name: "Housing Loan",
    icon: <Building className="h-6 w-6 text-blue-500" />,
    description: "Long-term loans for home purchase, building or renovation.",
    maxAmount: 10000000,
    interestRate: 8,
    maxTenure: 120,
    requirements: [
      "Must have been a member for at least 1 year",
      "Maximum loan amount is ₦10,000,000",
      "Maximum tenure is 10 years (120 months)",
      "Requires property documentation",
      "Approval process takes 2-3 weeks"
    ]
  },
  {
    id: "car",
    name: "Car Loan",
    icon: <Car className="h-6 w-6 text-green-500" />,
    description: "Medium-term loans for vehicle purchase with competitive rates.",
    maxAmount: 5000000,
    interestRate: 7,
    maxTenure: 60,
    requirements: [
      "Must have been a member for at least 6 months",
      "Maximum loan amount is ₦5,000,000",
      "Maximum tenure is 5 years (60 months)",
      "Requires vehicle documentation",
      "Approval process takes 1-2 weeks"
    ]
  },
  {
    id: "personal",
    name: "Personal Loan",
    icon: <CreditCard className="h-6 w-6 text-purple-500" />,
    description: "Flexible loans for personal projects and general purposes.",
    maxAmount: 1000000,
    interestRate: 6,
    maxTenure: 36,
    requirements: [
      "Must have been a member for at least 3 months",
      "Maximum loan amount is ₦1,000,000",
      "Maximum tenure is 3 years (36 months)",
      "Requires statement of purpose",
      "Approval process takes 1 week"
    ]
  }
];

const loanFormSchema = z.object({
  loanType: z.string({
    required_error: "Please select a loan type",
  }),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid amount",
  }),
  tenure: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid tenure",
  }),
  purpose: z.string().min(10, {
    message: "Purpose must be at least 10 characters",
  }),
});

export default function LoansPage() {
  const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTenure, setLoanTenure] = useState(6);
  const [activeTab, setActiveTab] = useState("calculator");
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  const handleLoanTypeChange = (type: string) => {
    const loanType = loanTypes.find(loan => loan.id === type);
    if (loanType) {
      setSelectedLoanType(loanType);
      setLoanAmount(Math.min(loanAmount, loanType.maxAmount));
      setLoanTenure(Math.min(loanTenure, loanType.maxTenure));
    }
  };
  
  const calculateMonthlyPayment = (amount: number, interestRate: number, tenure: number) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = tenure;
    
    if (monthlyInterestRate === 0) {
      return amount / totalPayments;
    }
    
    const x = Math.pow(1 + monthlyInterestRate, totalPayments);
    return (amount * monthlyInterestRate * x) / (x - 1);
  };
  
  const monthlyPayment = calculateMonthlyPayment(loanAmount, selectedLoanType.interestRate, loanTenure);
  const totalPayment = monthlyPayment * loanTenure;
  const totalInterest = totalPayment - loanAmount;
  
  const form = useForm<z.infer<typeof loanFormSchema>>({
    resolver: zodResolver(loanFormSchema),
    defaultValues: {
      loanType: selectedLoanType.id,
      amount: loanAmount.toString(),
      tenure: loanTenure.toString(),
      purpose: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof loanFormSchema>) {
    console.log(values);
    // Here would be where you'd submit to your backend
    setApplicationSubmitted(true);
  }

  if (applicationSubmitted) {
    return (
      <div className="container-custom mx-auto py-32 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CreditCard className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Your loan application has been submitted successfully. We'll review your application and get back to you shortly.
          </p>
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <div className="text-left space-y-4">
              <div className="flex items-start">
                <div>
                  <div className="font-semibold">Loan Type</div>
                  <div className="text-sm text-muted-foreground">{selectedLoanType.name}</div>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <div className="font-semibold">Amount</div>
                  <div className="text-sm text-muted-foreground">₦{loanAmount.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <div className="font-semibold">Tenure</div>
                  <div className="text-sm text-muted-foreground">{loanTenure} months</div>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <div className="font-semibold">Monthly Payment</div>
                  <div className="text-sm text-muted-foreground">₦{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                </div>
              </div>
            </div>
          </div>
          <Button onClick={() => setApplicationSubmitted(false)}>Return to Loans</Button>
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
        <h1 className="text-4xl font-bold mb-4 text-primary">Loan Services</h1>
        <p className="text-lg text-muted-foreground">
          Access affordable loans tailored for University of Africa staff members. 
          Choose from various loan types and enjoy competitive interest rates.
        </p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="calculator">Loan Calculator</TabsTrigger>
          <TabsTrigger value="application">Loan Application</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Loan Types</CardTitle>
                  <CardDescription>
                    Select a loan type to view details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {loanTypes.map((loan) => (
                    <div
                      key={loan.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedLoanType.id === loan.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleLoanTypeChange(loan.id)}
                    >
                      <div className="flex items-center mb-2">
                        {loan.icon}
                        <span className="font-medium ml-2">{loan.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{loan.description}</p>
                    </div>
                  ))}
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
                  <CardTitle>Loan Calculator</CardTitle>
                  <CardDescription>
                    Calculate your loan repayment based on amount and tenure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium">
                          Loan Amount
                        </label>
                        <span className="text-sm font-medium">
                          ₦{loanAmount.toLocaleString()}
                        </span>
                      </div>
                      <Slider
                        value={[loanAmount]}
                        min={10000}
                        max={selectedLoanType.maxAmount}
                        step={10000}
                        onValueChange={(values) => setLoanAmount(values[0])}
                        className="mb-1"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₦10,000</span>
                        <span>₦{selectedLoanType.maxAmount.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium">
                          Loan Tenure (Months)
                        </label>
                        <span className="text-sm font-medium">
                          {loanTenure} months
                        </span>
                      </div>
                      <Slider
                        value={[loanTenure]}
                        min={1}
                        max={selectedLoanType.maxTenure}
                        step={1}
                        onValueChange={(values) => setLoanTenure(values[0])}
                        className="mb-1"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 month</span>
                        <span>{selectedLoanType.maxTenure} months</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Repayment Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Amount:</span>
                        <span className="font-medium">₦{loanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate:</span>
                        <span className="font-medium">{selectedLoanType.interestRate}% per annum</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Tenure:</span>
                        <span className="font-medium">{loanTenure} months</span>
                      </div>
                      <div className="border-t pt-3 mt-3 flex justify-between">
                        <span className="text-muted-foreground">Monthly Payment:</span>
                        <span className="text-xl font-bold text-primary">
                          ₦{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Interest:</span>
                        <span className="font-medium">₦{totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Payment:</span>
                        <span className="font-medium">₦{totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" onClick={() => setActiveTab("application")}>
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Requirements for {selectedLoanType.name}</CardTitle>
              <CardDescription>
                Please ensure you meet these requirements before applying
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {selectedLoanType.requirements.map((requirement, index) => (
                  <li key={index} className="text-muted-foreground">{requirement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="application">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Loan Application Form</CardTitle>
              <CardDescription>
                Fill out the form below to apply for a loan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="loanType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Type</FormLabel>
                        <Select 
                          onValueChange={(value) => {
                            field.onChange(value);
                            handleLoanTypeChange(value);
                          }}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a loan type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {loanTypes.map((loan) => (
                              <SelectItem key={loan.id} value={loan.id}>
                                {loan.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select the type of loan you wish to apply for
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount (₦)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="Enter amount" 
                            {...field} 
                            onChange={(e) => {
                              field.onChange(e);
                              const value = Number(e.target.value);
                              if (!isNaN(value) && value > 0) {
                                setLoanAmount(Math.min(value, selectedLoanType.maxAmount));
                              }
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Maximum amount: ₦{selectedLoanType.maxAmount.toLocaleString()}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tenure"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Tenure (Months)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="Enter tenure in months" 
                            {...field} 
                            onChange={(e) => {
                              field.onChange(e);
                              const value = Number(e.target.value);
                              if (!isNaN(value) && value > 0) {
                                setLoanTenure(Math.min(value, selectedLoanType.maxTenure));
                              }
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Maximum tenure: {selectedLoanType.maxTenure} months
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Loan</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe why you need this loan" 
                            {...field} 
                            rows={4}
                          />
                        </FormControl>
                        <FormDescription>
                          Clearly state the purpose of the loan to help with the approval process
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="bg-muted rounded-lg p-4 flex items-start">
                    <HelpCircle className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>Your application will be reviewed by the loan committee. The approval process typically takes:</p>
                      <p className="mt-1">{selectedLoanType.id === "emergency" ? "24-48 hours" : selectedLoanType.id === "personal" ? "1 week" : selectedLoanType.id === "car" ? "1-2 weeks" : "2-3 weeks"}</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Repayment Summary</div>
                    <div className="flex justify-between mb-2">
                      <span>Monthly Payment</span>
                      <span className="font-medium">₦{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Total Interest</span>
                      <span>₦{totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 font-medium flex justify-between">
                      <span>Total Repayment</span>
                      <span>₦{totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" className="w-full" onClick={() => setActiveTab("calculator")}>
                      Back to Calculator
                    </Button>
                    <Button type="submit" className="w-full">Submit Application</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}