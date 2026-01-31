import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import purityBanner from "@/assets/promo/purity-banner.jpg";
import blessingsBanner from "@/assets/promo/blessings-banner.jpg";
import organicBanner from "@/assets/promo/organic-banner.jpg";

const PromoBanners = () => {
  const banners = [
    {
      title: "Purity rooted in devotion.",
      image: purityBanner,
      buttonText: "Shop Now",
      link: "/shop",
      bgColor: "from-orange-400 to-orange-500",
    },
    {
      title: "Begin every day with blessings.",
      image: blessingsBanner,
      buttonText: "Shop Now",
      link: "/shop",
      bgColor: "from-yellow-400 to-orange-400",
    },
    {
      title: "Sacred, organic essentials for your pooja.",
      image: organicBanner,
      buttonText: "Shop Now",
      link: "/shop",
      bgColor: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-[180px] md:h-[200px] group"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <h3 className="text-white text-lg md:text-xl font-medium max-w-[180px]">
                  {banner.title}
                </h3>
                <Button
                  asChild
                  size="sm"
                  className="w-fit bg-primary hover:bg-primary/90 text-white"
                >
                  <Link to={banner.link}>{banner.buttonText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
