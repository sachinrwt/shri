import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowLeft, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const { toast } = useToast();

    const handleOrderWholeCart = () => {
        if (cartItems.length === 0) return;

        const phoneNumber = "9899618128"; // Replace with actual WhatsApp number if available in config
        let message = "Hello Shri Sai, I would like to order the following items from your store:\n\n";

        cartItems.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
            message += `   Quantity: ${item.quantity} ${item.unit}(s)\n`;
            message += `   Price: ₹ ${item.price.toFixed(2)} per ${item.unit}\n`;
            message += `   Subtotal: ₹ ${(item.price * item.quantity).toFixed(2)}\n`;
            message += `   View Image: ${window.location.origin}${item.images[0]}\n\n`;
        });

        message += `*Total Order Value: ₹ ${totalPrice.toFixed(2)}*\n\n`;
        message += "Please let me know the next steps for payment and delivery.";

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");

        // Clear cart after ordering
        clearCart();

        toast({
            title: "Order Placed Successfully",
            description: "Your order details have been sent to WhatsApp. Our team will contact you soon.",
        });
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <Breadcrumb items={[{ label: "Cart" }]} />

                <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-8 flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <SectionTitle title={`Your Cart (${cartItems.length} items)`} />
                            {cartItems.length > 0 && (
                                <button
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to clear your cart?")) {
                                            clearCart();
                                        }
                                    }}
                                    className="text-sm text-destructive hover:underline flex items-center gap-1"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    Clear Cart
                                </button>
                            )}
                        </div>

                        {cartItems.length === 0 ? (
                            <div className="bg-muted/30 rounded-2xl p-12 text-center">
                                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Plus className="w-10 h-10 text-muted-foreground rotate-45" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                                <p className="text-muted-foreground mb-8">
                                    Looks like you haven't added anything to your cart yet.
                                </p>
                                <Link to="/shop">
                                    <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to Shop
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-xl border border-border group hover:shadow-md transition-shadow"
                                    >
                                        {/* Item Image */}
                                        <Link
                                            to={`/product/${item.id}`}
                                            className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0"
                                        >
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </Link>

                                        {/* Item Info */}
                                        <div className="flex-1 text-center sm:text-left">
                                            <Link to={`/product/${item.id}`}>
                                                <h4 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
                                                    {item.name}
                                                </h4>
                                            </Link>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Category: {item.category}
                                            </p>
                                            <div className="mt-2 text-primary font-semibold">
                                                ₹ {item.price.toFixed(2)} / {item.unit}
                                            </div>
                                        </div>

                                        {/* Quantity Selector */}
                                        <div className="flex items-center border border-border rounded-lg bg-muted/30">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 hover:bg-muted transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="px-3 font-medium min-w-[2rem] text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 hover:bg-muted transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>

                                        {/* Subtotal & Actions */}
                                        <div className="flex flex-col items-end gap-2 pr-2">
                                            <div className="font-bold text-lg">
                                                ₹ {(item.price * item.quantity).toFixed(2)}
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-muted-foreground hover:text-destructive transition-colors"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    {cartItems.length > 0 && (
                        <div className="lg:w-80 flex-shrink-0">
                            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm sticky top-24">
                                <h3 className="text-lg font-semibold mb-6">Order Summary</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Subtotal ({cartItems.length} items)</span>
                                        <span>₹ {totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Shipping</span>
                                        <span className="text-green-500 font-medium">Free</span>
                                    </div>
                                    <div className="border-t border-border pt-4 mt-4 flex justify-between font-bold text-xl">
                                        <span>Total</span>
                                        <span className="text-primary text-2xl">₹ {totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleOrderWholeCart}
                                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Order on WhatsApp
                                </Button>

                                <p className="text-xs text-muted-foreground text-center mt-4">
                                    Tax included. Shipping and discount codes calculated at checkout.
                                </p>

                                <div className="mt-8 space-y-4">
                                    <div className="flex justify-center gap-4">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" alt="Visa" className="h-6 opacity-50 gray-scale" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 gray-scale" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 opacity-50 gray-scale" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
