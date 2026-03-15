// Product Types
export interface ProductType {
  id: string | number;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  category: string;
  brand: string;
  price: number;
  salePrice?: number;
  discount?: number;
  images: string[];
  thumbnail: string;
  rating: number;
  reviewCount: number;
  stock: number;
  skinType?: string[]; // Da dầu, Da khô, Da nhạy cảm, Da hỗn hợp
  ingredients?: string;
  howToUse?: string;
  volume?: string;
  tags?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  createdAt: string;
}

// Category Types
export interface CategoryType {
  id: string | number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  icon?: string;
  productCount?: number;
}

// Brand Types
export interface BrandType {
  id: string | number;
  name: string;
  slug: string;
  logo?: string;
  description?: string;
}

// Cart Types
export interface CartItemType {
  product: ProductType;
  quantity: number;
  selectedVariant?: string;
}

// Blog Types
export interface BlogPostType {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime?: number;
}

// Review Types
export interface ReviewType {
  id: string | number;
  productId: string | number;
  userName: string;
  userAvatar?: string;
  rating: number;
  title?: string;
  comment: string;
  createdAt: string;
  verified?: boolean;
}

// Order Types
export interface OrderType {
  id: string | number;
  orderNumber: string;
  items: CartItemType[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  status: 'pending' | 'confirmed' | 'shipping' | 'delivered' | 'cancelled';
  shippingAddress: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    district: string;
    ward?: string;
  };
  paymentMethod: 'cod' | 'bank_transfer' | 'ewallet';
  createdAt: string;
}

// Testimonial Types
export interface TestimonialType {
  id: string | number;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  product?: string;
}
