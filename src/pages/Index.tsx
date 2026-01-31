import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import PromoBanners from "@/components/home/PromoBanners";
import PopularProducts from "@/components/home/PopularProducts";
import ProductLists from "@/components/home/ProductLists";
import Newsletter from "@/components/shared/Newsletter";
import TrustBadges from "@/components/shared/TrustBadges";

const Index = () => {
  return (
    <Layout>
      {/* Hero Slider */}
      <section className="container mx-auto py-6">
        <HeroSlider />
      </section>

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Promo Banners */}
      <PromoBanners />

      {/* Popular Products */}
      <PopularProducts />

      {/* Product Lists (Top Selling, Trending, Recently Added, Top Rated) */}
      <ProductLists />

      {/* Newsletter */}
      <Newsletter />

      {/* Trust Badges */}
      <TrustBadges />
    </Layout>
  );
};

export default Index;
