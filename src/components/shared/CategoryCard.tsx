import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  itemCount: number;
  link?: string;
}

const CategoryCard = ({ name, image, itemCount, link = "/shop" }: CategoryCardProps) => {
  return (
    <Link to={link} className="category-card group">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-xs text-muted-foreground">{itemCount} Items</p>
    </Link>
  );
};

export default CategoryCard;
