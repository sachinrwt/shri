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
    { number: "01", title: "Visit Feedback", description: "Share your experience with Shri Sai Marketing and help us improve our services. Your feedback helps us serve devotees better with quality products and reliable support." },
    { number: "02", title: "Product & Order Support", description: "Get quick assistance related to product details, availability, pricing, bulk orders, and order status for all our devotional and pooja items." },
    { number: "03", title: "Billing & Product support", description: "Contact us for any questions related to payments, invoices, refunds, or order confirmations to ensure a smooth and secure shopping experience." },
    { number: "04", title: "General Inquiries", description: "Reach out to us for any general questions about our products, services, store location, or devotional requirements. We are happy to guide you." },
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
                
              </p>
              <p className="text-muted-foreground leading-relaxed">
              At Shri Sai Marketing, we are dedicated to helping you find authentic devotional and pooja essentials for your daily worship and special religious occasions. Whether you are looking for idols, pooja samagri, car dashboard idols, dresses for deities, or spiritual accessories, our team is always ready to assist you with the right guidance and support.
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
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=shri%20sai%20marketing%20au-6%2C%20pitampura%20new%20delhi%20-%20110088%2C%20delhi%2C%20india&t=k&z=14&ie=UTF8&iwloc=B&output=embed"
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
