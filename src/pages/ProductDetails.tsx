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
import { Heart, MessageCircle, Minus, Plus, Star } from "lucide-react";
import {
  getProductById,
  getRelatedProducts,
  getTopSellingProducts,
  getCategories,
  Product
} from "@/data/products";
import { generateWhatsAppOrderUrl } from "@/config/whatsapp";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColour, setSelectedColour] = useState("");
  const [mainImage, setMainImage] = useState("");

  // Generate WhatsApp order URL
  const getWhatsAppUrl = () => {
    if (!product) return "";
    const productUrl = `${window.location.origin}/product/${product.id}`;
    return generateWhatsAppOrderUrl({
      productName: product.name,
      price: product.price,
      quantity,
      productUrl,
      imageUrl: mainImage,
      unit: product.unit,
      size: selectedSize || undefined,
      variant: selectedColour || undefined,
    });
  };

  const handleWhatsAppOrder = () => {
    window.open(getWhatsAppUrl(), "_blank");
    toast({
      title: "Order Request Sent",
      description: "You have been redirected to WhatsApp to complete your order.",
    });
  };

  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id, 4) : [];
  const topSelling = getTopSellingProducts(3);
  const categories = getCategories();

  // Initialize state when product changes
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setSelectedSize(product.sizes?.[0] || "");
      setSelectedColour(product.colour?.[0] || "");
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <Breadcrumb items={[
          { label: "Shop", path: "/shop" },
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
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${mainImage === thumb ? "border-primary" : "border-border"
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
                      className={`w-4 h-4 ${i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">reviews</span>
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
                        className={`px-4 py-2 rounded-lg border ${selectedSize === size
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

              {/* Colour Selection - Only show if product has colours */}
              {product.colour && product.colour.length > 0 && (
                <div className="mb-6">
                  <span className="text-sm font-medium text-foreground mb-2 block">Colour:</span>
                  <div className="flex gap-2 flex-wrap">
                    {product.colour.map((colour) => (
                      <button
                        key={colour}
                        onClick={() => setSelectedColour(colour)}
                        className={`px-4 py-2 rounded-lg border ${selectedColour === colour
                          ? "border-primary bg-primary text-white"
                          : "border-border hover:border-primary"
                          }`}
                      >
                        {colour}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg bg-card">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors rounded-l-lg"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 font-medium text-lg min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors rounded-r-lg"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => product && toggleWishlist(product.id)}
                    className={`p-3 border rounded-lg transition-all flex-shrink-0 ${product && isWishlisted(product.id)
                      ? "border-primary bg-primary text-white shadow-md scale-105"
                      : "border-border hover:border-primary hover:text-primary bg-white"
                      }`}
                    title={product && isWishlisted(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart className={`w-5 h-5 ${product && isWishlisted(product.id) ? "fill-current" : ""}`} />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => product && addToCart(product, quantity)}
                    className="flex-1 h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 font-medium"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>

                  <Button
                    onClick={handleWhatsAppOrder}
                    className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white gap-2 font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order on WhatsApp
                  </Button>
                </div>
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
                {selectedColour && (
                  <div>
                    <span className="text-muted-foreground">Colour:</span>{" "}
                    <span className="text-primary">{selectedColour}</span>
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground">MOQ:</span>{" "}
                  <span className="text-primary">{product.MOQ}</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
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
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-6">
              <TabsList className="w-full sm:w-auto h-auto p-1 bg-muted/50 inline-flex sm:flex">
                <TabsTrigger value="description" className="flex-1 sm:flex-none">Description</TabsTrigger>
                <TabsTrigger value="additional" className="flex-1 sm:flex-none">Additional info</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1 sm:flex-none">Reviews</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="description" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border/50">
              {/* Introduction Paragraphs */}
              {product.fullDescription.intro.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Packaging & Delivery
                  </h4>
                  <ul className="text-muted-foreground text-sm space-y-2 pl-3.5 border-l-2 border-primary/10">
                    <li><span className="font-medium text-foreground/80">Packaging:</span> {product.fullDescription.packaging.type}</li>
                    <li><span className="font-medium text-foreground/80">Carton Size:</span> {product.fullDescription.packaging.piecesPerCarton}</li>
                    <li><span className="font-medium text-foreground/80">Min Order:</span> {product.fullDescription.packaging.moq}</li>
                    <li><span className="font-medium text-foreground/80">Handling:</span> {product.fullDescription.packaging.handling}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Suggested Use
                  </h4>
                  <ul className="text-muted-foreground text-sm space-y-2 pl-3.5 border-l-2 border-primary/10">
                    {product.fullDescription.suggestedUse.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Care Instructions & Warnings
                </h4>
                <div className="bg-orange-50/50 rounded-lg p-4 border border-orange-100">
                  <ul className="text-muted-foreground text-sm space-y-2">
                    {product.fullDescription.careInstructions.map((instruction, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="additional" className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { label: "Material", value: product.attributes.material },
                      { label: "Finish", value: product.attributes.finish },
                      { label: "Position", value: product.attributes.position },
                      { label: "Size", value: product.attributes.size },
                      { label: "Weight", value: product.attributes.weight },
                      { label: "Usage", value: product.attributes.usage },
                      { label: "SKU", value: product.sku },
                      { label: "MOQ", value: product.MOQ },
                    ].filter(item => item.value).map((item, index, array) => (
                      <tr key={item.label} className={index !== array.length - 1 ? "border-b border-border/50" : ""}>
                        <td className="py-3 text-muted-foreground font-medium pb-2 pr-4">{item.label}</td>
                        <td className="py-3 font-semibold text-foreground">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="bg-white rounded-xl p-8 shadow-sm border border-border/50 text-center">
              <div className="max-w-xs mx-auto">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-muted-foreground opacity-20" />
                </div>
                <h4 className="font-semibold mb-1">No reviews yet</h4>
                <p className="text-muted-foreground text-sm">Be the first to review this product!</p>
                <Button variant="outline" className="mt-6 w-full">Write a Review</Button>
              </div>
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
