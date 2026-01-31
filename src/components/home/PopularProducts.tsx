import { useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { products } from "@/data/products";

const PopularProducts = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Dresses", "Candles", "Holy water", "Statues", "Pooja Items"];

  // Get first 10 products for the popular products section
  const displayProducts = products.slice(0, 10);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <SectionTitle title="Popular Products" className="mb-4 md:mb-0" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-tab ${
                  activeFilter === filter ? "filter-tab-active" : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {displayProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
