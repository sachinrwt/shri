import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProductCard from "@/components/shared/ProductCard";
import Newsletter from "@/components/shared/Newsletter";
import TrustBadges from "@/components/shared/TrustBadges";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Minus, Plus, Star } from "lucide-react";
import { 
  getProductById, 
  getRelatedProducts, 
  getTopSellingProducts, 
  getCategories,
  Product 
} from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState("");

  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id, 4) : [];
  const topSelling = getTopSellingProducts(3);
  const categories = getCategories();

  // Initialize state when product changes
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setSelectedSize(product.sizes?.[0] || "");
      setQuantity(1);
    }
  }, [product]);

  // Redirect to shop if product not found
  useEffect(() => {
    if (id && !product) {
      navigate("/shop");
    }
  }, [id, product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <Layout>
      {/* Top Bar */}
      <div className="bg-muted/50 border-b border-border py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              <Link to="/account" className="text-muted-foreground hover:text-primary">My Account</Link>
              <Link to="/wishlist" className="text-muted-foreground hover:text-primary">Wishlist</Link>
              <Link to="/tracking" className="text-muted-foreground hover:text-primary">Order Tracking</Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary">100% Secure delivery without contacting the courier</span>
              <span className="text-muted-foreground">Need help? Call Us: <span className="text-primary">1900888122</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <Breadcrumb items={[
          { label: "Our Product", path: "/shop" }, 
          { label: product.category }
        ]} />
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Product Images */}
            <div className="lg:col-span-4">
              <div className="bg-muted rounded-xl p-4 mb-4">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full aspect-square object-contain"
                />
              </div>
              <div className="flex gap-2">
                {product.images.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(thumb)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      mainImage === thumb ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={thumb} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-5">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded mb-3">
                  {product.badge === "hot" ? "Hot" : product.badge === "new" ? "New" : `${product.badge} Off`}
                </span>
              )}
              
              <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <div className="text-3xl font-bold text-primary mb-4">
                ₹ {product.price.toFixed(0)}<span className="text-lg font-normal">/{product.unit}</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Size Selection - Only show if product has sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <span className="text-sm font-medium text-foreground mb-2 block">Size:</span>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedSize === size
                            ? "border-primary bg-primary text-white"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Get Best Quote
                </Button>

                <button className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Product Meta */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Material:</span>{" "}
                  <span className="text-primary">{product.attributes.material}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Finish:</span>{" "}
                  <span className="text-primary">{product.attributes.finish}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Suitable For:</span>{" "}
                  <span className="text-primary">{product.suitableFor}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Category:</span>{" "}
                  <span className="text-primary">{product.category}</span>
                </div>
                {selectedSize && (
                  <div>
                    <span className="text-muted-foreground">Size:</span>{" "}
                    <span className="text-primary">{selectedSize}</span>
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground">MOQ:</span>{" "}
                  <span className="text-primary">{product.MOQ}</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.slice(0, 5).map((category) => (
                    <li key={category.name}>
                      <Link
                        to="/shop"
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span>📿</span>
                          {category.name}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-white">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Selling */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">Top Selling</h3>
                <ul className="space-y-4">
                  {topSelling.map((item) => (
                    <li key={item.id}>
                      <Link 
                        to={`/product/${item.id}`}
                        className="flex items-center gap-3 hover:bg-accent rounded-lg p-1 transition-colors"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground truncate">{item.name}</h4>
                          <p className="text-primary text-sm font-semibold">
                            ₹ {item.price.toFixed(2)}/{item.unit}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">Additional info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="bg-white rounded-xl p-6">
              {/* Introduction Paragraphs */}
              {product.fullDescription.intro.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              <h4 className="font-semibold text-foreground mt-6 mb-2">Packaging & Delivery</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Packaging Type: {product.fullDescription.packaging.type}</li>
                <li>Piece In One Carton: {product.fullDescription.packaging.piecesPerCarton}</li>
                <li>Minimum Order Quantity: {product.fullDescription.packaging.moq}</li>
                <li>Handling: {product.fullDescription.packaging.handling}</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-6 mb-2">Suggested Use</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                {product.fullDescription.suggestedUse.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground mt-6 mb-2">Care Instructions & Warnings</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                {product.fullDescription.careInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="additional" className="bg-white rounded-xl p-6">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Material</td>
                    <td className="py-2 font-medium">{product.attributes.material}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Finish</td>
                    <td className="py-2 font-medium">{product.attributes.finish}</td>
                  </tr>
                  {product.attributes.position && (
                    <tr className="border-b">
                      <td className="py-2 text-muted-foreground">Position</td>
                      <td className="py-2 font-medium">{product.attributes.position}</td>
                    </tr>
                  )}
                  {product.attributes.size && (
                    <tr className="border-b">
                      <td className="py-2 text-muted-foreground">Size</td>
                      <td className="py-2 font-medium">{product.attributes.size}</td>
                    </tr>
                  )}
                  {product.attributes.weight && (
                    <tr className="border-b">
                      <td className="py-2 text-muted-foreground">Weight</td>
                      <td className="py-2 font-medium">{product.attributes.weight}</td>
                    </tr>
                  )}
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Usage/Application</td>
                    <td className="py-2 font-medium">{product.attributes.usage}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">SKU</td>
                    <td className="py-2 font-medium">{product.sku}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">MOQ</td>
                    <td className="py-2 font-medium">{product.MOQ}</td>
                  </tr>
                </tbody>
              </table>
            </TabsContent>

            <TabsContent value="reviews" className="bg-white rounded-xl p-6">
              <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <SectionTitle title="Related products" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct.id} 
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  unit={relatedProduct.unit}
                  image={relatedProduct.images[0]}
                  badge={relatedProduct.badge}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <Newsletter />

      {/* Trust Badges */}
      <TrustBadges />
    </Layout>
  );
};

export default ProductDetails;
