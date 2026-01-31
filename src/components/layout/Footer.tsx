import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Delivery Information", path: "/delivery" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Contact Us", path: "/contact" },
  ];

  const popularLinks = [
    { name: "Laddu Gopal Dress", path: "/shop" },
    { name: "Ram Mandir Poshak", path: "/shop" },
    { name: "God Statue", path: "/shop" },
    { name: "Tilak", path: "/shop" },
    { name: "Ganga Jal", path: "/shop" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Address: Av-6, Pitampura</p>
                  <p className="text-sm text-gray-400">New Delhi - 110088, Delhi, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-400">Call Us: <span className="text-primary">07942818130</span></p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-400">Email: <span className="text-primary">shrisaimarketing@gmail.com</span></p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-400">Hours: 10:00 - 18:00, Mon - Sat</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular</h3>
            <ul className="space-y-3">
              {popularLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">S</span>
              </div>
              <div>
                <h4 className="font-semibold">Shri Sai Marketing</h4>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Shri sai Marketing Provides Sacred Hassle-Free Puja Services. Enjoy a Blissful Experience from booking till completion of the Puja. Best Pandits and Purohits. Multiple Language options. For all Types of Pujas. Includes Puja Materials.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2024. All rights reserved
            </p>

            {/* Phone Numbers */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-primary font-semibold">1900646666</p>
                  <p className="text-xs text-gray-400">Working 8:00 - 22:00</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-primary font-semibold">1900648888</p>
                  <p className="text-xs text-gray-400">24/7 Support Center</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow Us</span>
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Up to 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
