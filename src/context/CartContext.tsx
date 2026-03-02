import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { products, Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextValue {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

const STORAGE_KEY = "shri-cart";

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { toast } = useToast();

    // Load from localStorage once on mount
    useEffect(() => {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    setCartItems(parsed);
                }
            }
        } catch {
            // ignore storage errors
        }
    }, []);

    // Persist whenever cart changes
    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
        } catch {
            // ignore storage errors
        }
    }, [cartItems]);

    const addToCart = (product: Product, quantity: number = 1) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);
            if (existingItem) {
                toast({
                    title: "Added to Cart",
                    description: `Increased quantity of ${product.name} to ${existingItem.quantity + quantity}.`,
                });
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            toast({
                title: "Added to Cart",
                description: `${product.name} has been added to your cart.`,
            });
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (id: string) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        toast({
            title: "Removed from Cart",
            description: "Item has been removed from your cart.",
        });
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const value: CartContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return ctx;
};
