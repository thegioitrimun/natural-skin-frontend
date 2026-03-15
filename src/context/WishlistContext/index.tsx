// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface WishlistItem {
  id: number;
  title: string;
  brand: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
}

interface WishlistState {
  items: WishlistItem[];
}

type WishlistAction =
  | { type: 'ADD_ITEM'; payload: WishlistItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] };

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state;
      }
      return { items: [...state.items, action.payload] };
    }

    case 'REMOVE_ITEM': {
      return { items: state.items.filter((item) => item.id !== action.payload) };
    }

    case 'LOAD_WISHLIST':
      return { items: action.payload };

    default:
      return state;
  }
};

interface WishlistContextType {
  state: WishlistState;
  addItem: (item: WishlistItem) => void;
  removeItem: (id: number) => void;
  toggleItem: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const WISHLIST_STORAGE_KEY = 'naturalskin_wishlist';

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (savedWishlist) {
      try {
        const items = JSON.parse(savedWishlist);
        dispatch({ type: 'LOAD_WISHLIST', payload: items });
      } catch (e) {
        console.error('Failed to parse wishlist from localStorage');
      }
    }
  }, []);

  // Save wishlist to localStorage on change
  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: WishlistItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const toggleItem = (item: WishlistItem) => {
    if (isInWishlist(item.id)) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  };

  const isInWishlist = (id: number) => {
    return state.items.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider value={{ state, addItem, removeItem, toggleItem, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export default WishlistContext;
