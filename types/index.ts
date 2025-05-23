export interface User {
  id: string;
  name: string;
  email: string;
  staffId: string;
  department: string;
  role: 'admin' | 'member';
  contributions: Contribution[];
  loans: Loan[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Contribution {
  id: string;
  userId: string;
  amount: number;
  month: string;
  year: number;
  date: Date;
  status: 'pending' | 'confirmed';
}

export interface Loan {
  id: string;
  userId: string;
  type: 'emergency' | 'housing' | 'car' | 'other';
  amount: number;
  interestRate: number;
  tenure: number;
  purpose: string;
  dateApplied: Date;
  status: 'pending' | 'approved' | 'rejected' | 'disbursed' | 'completed';
  approvedBy?: string;
  disbursedDate?: Date;
}

export interface BusRoute {
  id: string;
  name: string;
  startLocation: string;
  endLocation: string;
  departureTime: string;
  arrivalTime: string;
  daysOfOperation: string[];
  fare: number;
  totalSeats: number;
}

export interface BusBooking {
  id: string;
  userId: string;
  routeId: string;
  bookingDate: Date;
  travelDate: Date;
  seatNumber: number;
  status: 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'completed';
}

export interface Marketplace {
  id: string;
  userId: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrls: string[];
  status: 'active' | 'sold' | 'deleted';
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  imageUrl?: string;
  type: 'meeting' | 'agm' | 'workshop' | 'other';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  postedBy: string;
  postedDate: Date;
  priority: 'high' | 'medium' | 'low';
}

export interface Feedback {
  id: string;
  userId: string;
  subject: string;
  message: string;
  type: 'suggestion' | 'complaint' | 'inquiry';
  status: 'new' | 'inProgress' | 'resolved';
  createdAt: Date;
  resolvedAt?: Date;
}

export interface Investment {
  id: string;
  title: string;
  description: string;
  totalAmount: number;
  currentAmount: number;
  minContribution: number;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'completed' | 'cancelled';
  participants: {
    userId: string;
    amount: number;
    date: Date;
  }[];
}