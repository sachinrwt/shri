import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Newsletter from "@/components/shared/Newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

import contactGanesh from "@/assets/contact/ganesh-contact.jpg";

const Contact = () => {
  const inquiryTypes = [
    { number: "01", title: "Visit Feedback", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { number: "02", title: "Employer Services", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { number: "03", title: "Billing Inquiries", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { number: "04", title: "General Inquiries", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Pages", path: "/pages" }, { label: "Contact" }]} />
      </div>

      {/* How Can Help You Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-medium mb-2">How can help you ?</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Let us know how we can help you
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inquiryTypes.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <span className="text-3xl font-bold text-primary/20">{item.number}.</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office & Map Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Office Info */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">Office</h2>
              <div className="space-y-3">
                <p className="font-semibold text-foreground">C.P Negi (Owner)</p>
                <p className="text-foreground">Shri Sai Marketing</p>
                <p className="text-muted-foreground">Av-6, Pitampura</p>
                <p className="text-muted-foreground">New Delhi - 110088, Delhi, India</p>
              </div>
              
              <Button className="mt-6 bg-primary hover:bg-primary/90 text-white gap-2">
                <MapPin className="w-4 h-4" />
                View map
              </Button>
            </div>

            {/* Map */}
            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9044647073!2d77.13361581508!3d28.692139982383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d9c2f3c7a3%3A0x8f3b3c7a3c7a3c7a!2sPitampura%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Sai Marketing Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <p className="text-primary font-medium mb-2">Contact form</p>
              <h2 className="text-3xl font-semibold text-foreground mb-2">Drop Us a Line</h2>
              <p className="text-muted-foreground mb-8">
                Your email address will not be published. Required fields are marked *
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="form-input" />
                  <Input placeholder="Your Email" type="email" className="form-input" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Phone" type="tel" className="form-input" />
                  <Input placeholder="Subject" className="form-input" />
                </div>
                <Textarea 
                  placeholder="Your message..." 
                  className="form-input min-h-[150px]" 
                />
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                  Send message
                </Button>
              </form>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={contactGanesh}
                alt="Contact us"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Contact;
