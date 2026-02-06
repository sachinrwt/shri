import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface WishlistContextValue {
  wishlistIds: string[];
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "shri-wishlist";

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // Load from localStorage once on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setWishlistIds(parsed);
        }
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Persist whenever wishlist changes
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // ignore storage errors
    }
  }, [wishlistIds]);

  const isWishlisted = (id: string) => wishlistIds.includes(id);

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const value: WishlistContextValue = {
    wishlistIds,
    isWishlisted,
    toggleWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextValue => {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
};

