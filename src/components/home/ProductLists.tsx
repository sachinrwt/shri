import { Link } from "react-router-dom";
import { products } from "@/data/products";

interface ProductListItemProps {
  id: string;
  name: string;
  price: number;
  unit?: string;
  image: string;
}

const ProductListItem = ({ id, name, price, unit, image }: ProductListItemProps) => (
  <Link to={`/product/${id}`} className="flex items-center gap-3 py-2 hover:bg-accent rounded-lg px-2 transition-colors group">
    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
        {name}
      </h4>
      <p className="text-primary text-sm font-semibold">
        ₹ {price.toFixed(2)}
        {unit && <span className="text-muted-foreground font-normal">/{unit}</span>}
      </p>
    </div>
  </Link>
);

const ProductLists = () => {
  // Top Selling - products with "hot" badge
  const topSelling = products
    .filter(p => p.badge === "hot")
    .slice(0, 3);

  // Trending Products - products from Car Dashboard category
  const trendingProducts = products
    .filter(p => p.category === "Car Dashboard Idols")
    .slice(0, 3);

  // Recently Added - products with "new" badge or last added
  const recentlyAdded = products
    .filter(p => p.badge === "new" || p.category === "Pooja Items")
    .slice(0, 3);

  // Top Rated - highest rated products
  const topRated = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Top Selling */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Selling</h3>
            <div className="space-y-2">
              {topSelling.map((product) => (
                <ProductListItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  image={product.images[0]}
                />
              ))}
            </div>
          </div>

          {/* Trending Products */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Trending Products</h3>
            <div className="space-y-2">
              {trendingProducts.map((product) => (
                <ProductListItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  image={product.images[0]}
                />
              ))}
            </div>
          </div>

          {/* Recently Added */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recently added</h3>
            <div className="space-y-2">
              {recentlyAdded.map((product) => (
                <ProductListItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  image={product.images[0]}
                />
              ))}
            </div>
          </div>

          {/* Top Rated */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Rated</h3>
            <div className="space-y-2">
              {topRated.map((product) => (
                <ProductListItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  image={product.images[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLists;
