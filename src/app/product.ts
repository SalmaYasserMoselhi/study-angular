/**
 * TYPESCRIPT INTERFACE — Product
 *
 * An interface defines the *shape* of an object — its properties and types.
 * It exists only at compile time (TypeScript strips it at runtime).
 * Use it to get type-safety and IntelliSense when working with product data.
 *
 * Exported so that any component can import and use this type.
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  imageCover: string; // URL of the main cover image
  price: number;
  quantity: number;
  images: string[]; // Array of additional image URLs
  onSale: boolean;
}
