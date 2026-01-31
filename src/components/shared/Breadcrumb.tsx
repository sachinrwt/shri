import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb py-4">
      <Link to="/" className="flex items-center gap-1 text-primary hover:underline">
        <Home className="w-4 h-4" />
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {item.path ? (
            <Link to={item.path} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
