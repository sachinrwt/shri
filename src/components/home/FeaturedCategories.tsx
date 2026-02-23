import CategoryCard from "@/components/shared/CategoryCard";
import SectionTitle from "@/components/shared/SectionTitle";

import carDashboard from "@/assets/categories/car-dashboard.jpg";
import godStatue from "@/assets/categories/car-dashboard.jpg";
import dress from "@/assets/categories/dress.jpg";
import poojaItems from "@/assets/categories/pooja-items.jpg";
import candle from "@/assets/categories/candle.jpg";
import gangaJal from "@/assets/categories/ganga-jal (2).jpg";
import rotoFabric from "@/assets/categories/roto-fabric.jpg";
import chandan from "@/assets/categories/chandan-powder.jpg";
import mukut from "@/assets/products/laddu-gopal-mukut.jpg";

const FeaturedCategories = () => {
  const categories = [
    { name: "Car Dashboard Idol", image: carDashboard, itemCount: 18 },
    { name: "God Statue Dress", image: dress, itemCount: 25 },
    { name: "God Statue", image: godStatue, itemCount: 4 },
    { name: "Ashtagandha Powder", image: chandan, itemCount: 6 },
    { name: "Pooja Items", image: poojaItems, itemCount: 4 },
    { name: "Pooja Jal", image: gangaJal, itemCount: 1 },
    { name: "Bibhuti Bhasm", image: chandan, itemCount: 1 },
    { name: "Roto Fabric", image: rotoFabric, itemCount: 4 },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="Featured Categories" />

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={index >= 3 ? "hidden sm:block" : "block"}
            >
              <CategoryCard
                name={category.name}
                image={category.image}
                itemCount={category.itemCount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
