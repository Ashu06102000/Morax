export interface GamingData {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  description?: string;
  isComingSoon?: boolean;
  isFeatured?: boolean;
}
