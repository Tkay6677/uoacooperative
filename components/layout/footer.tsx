import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom mx-auto pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-primary-foreground/90 mb-4">
              University of Africa Workers Multi-Purpose Cooperative Society Limited - 
              Serving university staff with financial services, community support, and welfare programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/savings" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Savings
                </Link>
              </li>
              <li>
                <Link href="/services/loans" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Loans
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/travel" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Travel Booking
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Member Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Member Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Member Dashboard
                </Link>
              </li>
              <li>
                <Link href="/services/calculator" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources/forms" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Forms & Documents
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  University of Africa Campus, Admin Block, Floor 2, Room 204, Bayelsa State, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/90">+234 803 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/90">cooperative@uoa.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/90 text-sm">
            &copy; {new Date().getFullYear()} University of Africa Workers Multi-Purpose Cooperative Society Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}