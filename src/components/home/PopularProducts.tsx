import { useMemo, useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { products } from "@/data/products";

const PopularProducts = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Dresses", "Candles", "Holy water", "Statues", "Pooja Items"];

  // Filter products based on selected tab, then take first 10
  const displayProducts = useMemo(() => {
    let filtered = products;

    switch (activeFilter) {
      case "Dresses":
        filtered = products.filter((p) => p.category === "Deity Dresses");
        break;
      case "Candles":
        // When candle products are added, ensure their category/subcategory matches this.
        filtered = products.filter(
          (p) =>
            p.category === "Pooja Items" &&
            (p.subcategory?.toLowerCase().includes("candle") ?? false)
        );
        break;
      case "Holy water":
        filtered = products.filter(
          (p) =>
            p.category === "Pooja Items" &&
            (p.subcategory === "Holy Water" ||
              p.name.toLowerCase().includes("ganga jal") ||
              p.shortDescription.toLowerCase().includes("holy water"))
        );
        break;
      case "Statues":
        filtered = products.filter((p) => p.category === "God Statues");
        break;
      case "Pooja Items":
        filtered = products.filter((p) => p.category === "Pooja Items");
        break;
      case "All":
      default:
        filtered = products;
        break;
    }

    return filtered.slice(0, 10);
  }, [activeFilter]);

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
