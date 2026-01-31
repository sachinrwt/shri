import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import newsletterBg from "@/assets/banners/newsletter-bg.jpg";

const Newsletter = () => {
  return (
    <section
      className="newsletter-section relative overflow-hidden"
      style={{
        backgroundImage: `url(${newsletterBg})`,
      }}
    >
      <div className="newsletter-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
            All your devotional needs at one place
          </h2>
          <p className="text-white/90 mb-6">
            One stop solution at <span className="underline">Shri Sai Marketing</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full pl-12 py-6 rounded-full bg-white border-0 text-foreground"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
