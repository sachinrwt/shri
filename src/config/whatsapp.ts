/**
 * WhatsApp Configuration
 * Update the phone number here to change where orders are sent
 */
export const WHATSAPP_PHONE = "919899618128"; // Format: country code + number (no + or spaces)

/**
 * Generate WhatsApp order URL with pre-filled message
 */
export interface WhatsAppOrderData {
  productName: string;
  price: number;
  quantity: number;
  productUrl: string;
  unit?: string;
  size?: string;
  variant?: string;
}

export const generateWhatsAppOrderUrl = (data: WhatsAppOrderData): string => {
  const {
    productName,
    price,
    quantity,
    productUrl,
    unit = "",
    size,
    variant,
  } = data;

  // Build the message
  let message = `Hello, I would like to order the following product:\n\n`;
  message += `Product Name: ${productName}\n`;
  message += `Price: ₹${price.toFixed(2)}${unit ? `/${unit}` : ""}\n`;
  message += `Quantity: ${quantity}\n`;
  
  if (size) {
    message += `Size: ${size}\n`;
  }
  
  if (variant) {
    message += `Variant: ${variant}\n`;
  }
  
  message += `\nProduct Link: ${productUrl}`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Generate WhatsApp URL
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};
