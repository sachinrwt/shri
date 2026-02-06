import { useState, useEffect, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProductCard from "@/components/shared/ProductCard";
import Newsletter from "@/components/shared/Newsletter";
import { ChevronRight, ChevronLeft, Grid3X3, List } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products, getCategories, getTopSellingProducts } from "@/data/products";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "newest">("featured");
  
  // Read filters from URL params on mount and when they change
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory(null);
    }

    const qParam = searchParams.get("q");
    setSearchQuery(qParam ?? "");
  }, [searchParams]);
  
  // Update URL when category is selected from sidebar
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category) params.set("category", category);
    else params.delete("category");
    navigate(`/shop${params.toString() ? `?${params.toString()}` : ""}`, {
      replace: true,
    });
  };
  
  const categories = getCategories();
  const newProducts = getTopSellingProducts(3);

  const filterTags = ["Statue", "Idols", "Dress", "Candle", "Mukut"];

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery = q
        ? `${p.name} ${p.category} ${p.subcategory ?? ""} ${p.shortDescription}`
            .toLowerCase()
            .includes(q)
        : true;

      // If searching, don't further restrict by category to avoid hiding items from other categories.
      if (q) return matchesQuery;

      // Without a query, respect the selected category filter.
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return list.sort((a, b) => a.price - b.price);
      case "price-high":
        return list.sort((a, b) => b.price - a.price);
      case "newest":
        // No explicit createdAt in data; prioritize items marked as "new" then fallback to name.
        return list.sort((a, b) => {
          const aNew = a.badge === "new" ? 1 : 0;
          const bNew = b.badge === "new" ? 1 : 0;
          if (aNew !== bNew) return bNew - aNew;
          return a.name.localeCompare(b.name);
        });
      case "featured":
      default:
        return list; // Keep original ordering
    }
  }, [filteredProducts, sortBy]);

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary/10 pt-8 mb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Items</h1>
              <Breadcrumb items={[{ label: "Shop", path: "/shop" }, { label: "Items" }]} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className={`w-full category-sidebar-item ${
                      selectedCategory === null ? "category-sidebar-item-active" : ""
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">📿</span>
                      All Products
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === null 
                        ? "bg-white/20" 
                        : "bg-primary text-white"
                    }`}>
                      {products.length}
                    </span>
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => handleCategorySelect(category.name)}
                      className={`w-full category-sidebar-item ${
                        selectedCategory === category.name ? "category-sidebar-item-active" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg">📿</span>
                        {category.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === category.name 
                          ? "bg-white/20" 
                          : "bg-primary text-white"
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Products */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4">New products</h3>
              <ul className="space-y-4">
                {newProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      to={`/product/${product.id}`}
                      className="flex items-center gap-3 hover:bg-accent rounded-lg p-1 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground truncate">{product.name}</h4>
                        <p className="text-primary text-sm font-semibold">
                          ₹ {product.price.toFixed(2)}/{product.unit}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
              <p className="text-muted-foreground text-sm">
                We found <span className="text-primary font-semibold">{filteredProducts.length} items</span> for you!
              </p>

              <div className="flex items-center gap-4">
                

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  image={product.images[0]}
                  badge={product.badge}
                />
              ))}
            </div>

            
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Shop;
