import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "hot" | "sale" | "new" | string;
  badgeText?: string;
  unit?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  badge,
  badgeText,
  unit = "",
}: ProductCardProps) => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const getBadgeClass = () => {
    switch (badge) {
      case "hot":
        return "bg-green-500";
      case "sale":
        return "bg-primary";
      case "new":
        return "bg-blue-500";
      default:
        return "bg-primary";
    }
  };

  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  const wishlisted = isWishlisted(id);

  const handleWishlistClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(id);
  };

  return (
    <div className="product-card group">
      {/* Image Container */}
      <Link to={`/product/${id}`} className="product-card-image block">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {(badge || badgeText || discountPercent) && (
          <span className={`product-badge ${getBadgeClass()}`}>
            {badgeText || (discountPercent ? `${discountPercent}%` : badge?.toUpperCase())}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all ${
            wishlisted
              ? "bg-primary text-white"
              : "bg-white text-foreground hover:bg-primary hover:text-white"
          }`}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className="w-4 h-4" />
        </button>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="price text-lg">
              ₹ {price.toFixed(2)}
              {unit && <span className="text-sm text-muted-foreground">/{unit}</span>}
            </span>
            {originalPrice && (
              <span className="price-original">₹ {originalPrice.toFixed(2)}</span>
            )}
          </div>

          <button className="add-to-cart-btn">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
