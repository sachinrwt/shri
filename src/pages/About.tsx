import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Newsletter from "@/components/shared/Newsletter";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import aboutHero from "@/assets/about/about-hero.jpg";
import poojaSamagri from "@/assets/about/pooja-samagri.jpg";
import whoWeAre from "@/assets/about/who-we-are.jpg";
import certificate from "@/assets/about/certificate.jpg";

const About = () => {
  const productRangeItems = [
    {
      icon: "🙏",
      title: "Pooja Samagri",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: "🪔",
      title: "Incense Sticks & Dhoop",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: "💡",
      title: "Lamps & Diyas",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: "🛕",
      title: "Religious Idols",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: "🎨",
      title: "Traditional Decor Items",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: "📦",
      title: "Daily Use Products",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Pages", path: "/pages" }, { label: "About us" }]} />
      </div>

      {/* About Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src={aboutHero}
                    alt="About Shri Sai Marketing"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                </div>
                <img
                  src={poojaSamagri}
                  alt="Pooja items"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <img
                  src={whoWeAre}
                  alt="Who we are"
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                About Sri Sai Marketing
              </h2>
              <p className="text-primary font-medium mb-4">
                Your Trusted Store for Devotional & Daily Essentials
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sri Sai Marketing is a trusted one-stop destination for a wide range of devotional products, pooja essentials, traditional items, and everyday household needs. Deeply rooted in faith, values, and quality, we aim to support spiritual and daily requirements by offering authentic, carefully sourced products that meet the highest standards. Our collection includes everything required for pooja, festivals, and religious ceremonies, along with traditional and essential items that are an integral part of Indian households. We believe that devotion should be accessible to everyone, which is why we are committed to providing genuine products at affordable prices without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Range */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Product Range" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productRangeItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <Link to="/shop" className="text-primary text-sm font-medium hover:underline">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={whoWeAre}
                alt="Who we are"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Sri Sai Marketing was established with a vision to provide pure, high-quality devotional and household products to every home. We believe that faith begins with purity, and every product we offer reflects our commitment to tradition, trust, and customer satisfaction.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From pooja samagri to daily essentials, our collection is carefully curated to meet the needs of modern families while preserving traditional values.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Our Vision</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    To become a trusted name in devotional and household products by spreading faith, tradition, and happiness to every home.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Why choose Us</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sri Sai Marketing provides authentic devotional and daily essentials with a focus on quality, purity, and trust.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Our mission</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    To make devotional and daily essential products easily accessible to everyone, while maintaining quality, authenticity, and affordability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold">8+</p>
              <p className="text-sm md:text-base opacity-90 mt-2">Glorious years</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">50+</p>
              <p className="text-sm md:text-base opacity-90 mt-2">Product</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">0+</p>
              <p className="text-sm md:text-base opacity-90 mt-2">Projects complete</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">0+</p>
              <p className="text-sm md:text-base opacity-90 mt-2">Team advisor</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">40 L - 1.5 Cr</p>
              <p className="text-sm md:text-base opacity-90 mt-2">Annual Turnover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Certificate of Registration" align="center" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">About Us</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Established in Year 2017, "Shri Sai Marketing" is a Leading Trader And Retailer of Sai Baba Dress, Kumkum Roli, Chandan Etc. Our professionals work in close coordination to assure a high-quality assortment of products to the customers. We have recruited a team of professionals. In addition to this, to avoid disputes in the workplace, our professionals serve distributors. Owing to our fair polices as the best quality products.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Under the direction of our mentor, Mr.Chander Prabha Negi we are creating a long list of clients. Also, owing to his knowledge, commitment, skills, and ethical business strategies, we have been able to achieve a renowned position in the market.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-muted rounded-xl p-4 mb-4 max-w-md">
                <img
                  src={certificate}
                  alt="Udyam Registration Certificate"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-primary font-medium">Our Udyam Certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default About;
