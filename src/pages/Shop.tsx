import { useState } from "react";
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
import { Link } from "react-router-dom";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = getCategories();
  const newProducts = getTopSellingProducts(3);

  const filterTags = ["Statue", "Idols", "Dress", "Candle", "Mukut"];

  // Filter products based on selected category
  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary/10 py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Items</h1>
              <Breadcrumb items={[{ label: "Shop", path: "/shop" }, { label: "Items" }]} />
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 rounded-full border border-border bg-white text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  × {tag}
                </button>
              ))}
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
                    onClick={() => setSelectedCategory(null)}
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
                      onClick={() => setSelectedCategory(category.name)}
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
                  <span className="text-sm text-muted-foreground">Show:</span>
                  <Select defaultValue="50">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select defaultValue="featured">
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

                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Grid3X3 className="w-5 h-5 text-primary" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <List className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
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

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-border hover:border-primary transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary text-white font-medium">1</button>
                <button className="w-10 h-10 rounded-lg border border-border hover:border-primary transition-colors">2</button>
                <button className="w-10 h-10 rounded-lg border border-border hover:border-primary transition-colors">3</button>
                <button className="p-2 rounded-lg border border-border hover:border-primary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
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
