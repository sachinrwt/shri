import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionTitle from "@/components/shared/SectionTitle";

const Terms = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Terms & Conditions" }]} />
      </div>

      {/* Terms & Conditions Content */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle title="Terms & Conditions" />

          <p className="text-sm text-muted-foreground mb-6">
            Last updated: February 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Welcome to Shri Sai Marketing. By accessing or using our website, products, or
              services, you agree to be bound by these Terms & Conditions. Please read them
              carefully before placing any order or using our website.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                1. General Information
              </h2>
              <p>
                Shri Sai Marketing is engaged in trading and retailing devotional items,
                pooja samagri, deity dresses, idols, and related products. All products are
                offered subject to availability and may be modified or discontinued at any
                time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                2. Orders & Communication
              </h2>
              <p>
                Orders may be placed via our website, WhatsApp, or direct communication.
                Submitting an order or enquiry does not create a binding contract until we
                confirm availability, pricing, and other details with you. We reserve the
                right to accept or reject any order at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                3. Pricing & Payment
              </h2>
              <p>
                All prices are listed in Indian Rupees (₹) and are subject to change
                without prior notice. Any taxes, shipping charges, or additional fees (if
                applicable) will be communicated at the time of order confirmation. Payment
                terms and accepted modes of payment will be shared directly with you during
                the order process.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                4. Shipping, Delivery & Risk
              </h2>
              <p>
                Dispatch and delivery timelines depend on product availability, order size,
                and delivery location. While we take utmost care in packing devotional and
                fragile items, risk of loss or damage passes to the customer once the order
                is handed over to the courier or transport partner. Any transit damage
                claims should be raised immediately upon receipt with supporting
                photographs.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                5. Returns, Replacement & Cancellations
              </h2>
              <p>
                Due to the devotional and sensitive nature of many of our products,
                returns are generally not accepted once goods are delivered, except in
                cases of genuine defects or wrong items supplied. Any issue must be
                reported within 24–48 hours of delivery with clear proof (images/video).
                Eligibility for replacement or partial refund will be determined on a
                case-by-case basis at our sole discretion. Orders once confirmed may not be
                cancellable after dispatch.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                6. Product Descriptions & Variations
              </h2>
              <p>
                We try our best to describe products accurately and display images that are
                close representations. However, minor variations in color, finish, texture,
                or packaging may occur due to lighting, screen settings, and handcrafted
                nature of many items. Such natural variations do not qualify as defects.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                7. Use of Website & Content
              </h2>
              <p>
                All content on this website, including text, images, logos, and graphics,
                is the property of Shri Sai Marketing or its content suppliers and is
                protected under applicable laws. You agree not to copy, reproduce,
                redistribute, or use any content for commercial purposes without our prior
                written consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Shri Sai Marketing shall not be
                liable for any indirect, incidental, special, or consequential damages
                arising out of the use of our products or website. Our total liability, if
                any, shall be limited to the value of the products purchased from us.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                9. Privacy & Data
              </h2>
              <p>
                Any personal information shared with us (such as name, phone number,
                address, or WhatsApp details) is used only for communication, order
                processing, and service improvement. We do not sell or share your personal
                data with unrelated third parties for marketing without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                10. Changes to These Terms
              </h2>
              <p>
                We may update or modify these Terms & Conditions from time to time to
                reflect changes in our business, products, or legal requirements. Updated
                terms will be posted on this page with a revised “Last updated” date. Your
                continued use of our website or services after such changes constitutes
                acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                11. Contact Us
              </h2>
              <p>
                For any questions or clarifications regarding these Terms & Conditions,
                you can contact us at:
              </p>
              <ul className="mt-2 space-y-1">
                <li>Address: Av-6, Pitampura, New Delhi - 110088, Delhi, India</li>
                <li>Phone: 07942818130</li>
                <li>Email: shrisaimarketing@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;

