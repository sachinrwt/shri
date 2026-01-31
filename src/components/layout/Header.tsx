import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop", hasDropdown: true },
    { name: "Blog", path: "/blog", hasDropdown: true },
    { name: "Pages", path: "/pages", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    "God Statue Dress",
    "Car Dashboard Idol",
    "Pooja Items",
    "Candle",
    "Laddu Gopal Mukut",
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              shri sai <span className="text-primary">marketing</span>
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-4 pr-24 py-2 rounded-lg border border-border"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
              <span className="hidden lg:inline text-sm">Wishlist</span>
            </button>
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
              <span className="hidden lg:inline text-sm">Cart</span>
            </button>
            <button className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden lg:inline text-sm">Account</span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Browse Categories Button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  <Menu className="w-4 h-4" />
                  Browse All Categories
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link to="/shop">{category}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hot Deals */}
            <Link
              to="/shop"
              className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary font-medium"
            >
              <span className="text-lg">🔥</span>
              Hot Deals
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={`flex items-center gap-1 font-medium transition-colors ${
                            isActive(item.path)
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                          <Link to={item.path}>{item.name}</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Phone Number */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-primary font-semibold">1900888123</p>
                <p className="text-xs text-muted-foreground">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-4 pr-12"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Phone */}
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">1900888123</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
