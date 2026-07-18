export type MenuCategory = 'coffee' | 'tea' | 'breakfast' | 'pasta' | 'pizza' | 'burger' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  isPopular?: boolean;
}

export interface SignatureDrink {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tasteProfile: string[];
  ingredients: string[];
  price: number;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: 'cafe' | 'food' | 'seating' | 'dessert';
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}
