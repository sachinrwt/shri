import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProductCard from "@/components/shared/ProductCard";
import Newsletter from "@/components/shared/Newsletter";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";

const Wishlist = () => {
  const { wishlistIds } = useWishlist();

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary/10 py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Wishlist
              </h1>
              <Breadcrumb
                items={[
                  { label: "Home", path: "/" },
                  { label: "Wishlist" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {wishlistProducts.length === 0 ? (
          <p className="text-muted-foreground">
            You haven't added any products to your wishlist yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={undefined}
                unit={product.unit}
                image={product.images[0]}
                badge={product.badge}
              />
            ))}
          </div>
        )}
      </div>

      <Newsletter />
    </Layout>
  );
};

export default Wishlist;

