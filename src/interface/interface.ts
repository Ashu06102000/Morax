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
  sale?: number;
}
export interface ConsoleData {
  id: string;
  name: string;
  price: number;
  category: string[];
  stock: number;
  image: string;
  description: string;
  isComingSoon?: boolean;
  isFeatured?: boolean;
  devices: string[];
  sale?: number;
  requirements: {
    minimum: {
      requires: string;
      OS: string;
      processor: string;
      memory: string;
      graphics: string;
      DirectX: string;
      storage: string;
      additional_notes: string;
    };
    recommended: {
      requires: string;
      OS: string;
      processor: string;
      memory: string;
      graphics: string;
      DirectX: string;
      storage: string;
      additional_notes: string;
    };
  };
}

export interface gameDetails {
  id: string;
  name: string;
  price: number;
  category: string[];
  stock: number;
  image: string;
  description: string;
  isComingSoon?: boolean;
  isFeatured?: boolean;
  devices: string[];
  sale?: number;
  requirements: {
    minimum: {
      requires: string;
      OS: string;
      processor: string;
      memory: string;
      graphics: string;
      DirectX: string;
      storage: string;
      additional_notes: string;
    };
    recommended: {
      requires: string;
      OS: string;
      processor: string;
      memory: string;
      graphics: string;
      DirectX: string;
      storage: string;
      additional_notes: string;
    };
  };
}
