// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface RecentlyViewedItem {
  id: number;
  title: string;
  brand: string;
  price: number;
  salePrice?: number;
  image: string;
  viewedAt: number;
}

interface RecentlyViewedState {
  items: RecentlyViewedItem[];
}

type RecentlyViewedAction =
  | { type: 'ADD_ITEM'; payload: RecentlyViewedItem }
  | { type: 'LOAD'; payload: RecentlyViewedItem[] };

const MAX_ITEMS = 10;

const recentlyViewedReducer = (state: RecentlyViewedState, action: RecentlyViewedAction): RecentlyViewedState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Remove if already exists
      const filtered = state.items.filter(item => item.id !== action.payload.id);
      // Add to beginning
      const newItems = [action.payload, ...filtered].slice(0, MAX_ITEMS);
      return { items: newItems };
    }
    case 'LOAD':
      return { items: action.payload };
    default:
      return state;
  }
};

interface RecentlyViewedContextType {
  state: RecentlyViewedState;
  addItem: (item: Omit<RecentlyViewedItem, 'viewedAt'>) => void;
  clearAll: () => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

const STORAGE_KEY = 'naturalskin_recently_viewed';

export const RecentlyViewedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(recentlyViewedReducer, { items: [] });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const items = JSON.parse(saved);
        dispatch({ type: 'LOAD', payload: items });
      } catch (e) {
        console.error('Failed to parse recently viewed');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: Omit<RecentlyViewedItem, 'viewedAt'>) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, viewedAt: Date.now() } });
  };

  const clearAll = () => {
    dispatch({ type: 'LOAD', payload: [] });
  };

  return (
    <RecentlyViewedContext.Provider value={{ state, addItem, clearAll }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = (): RecentlyViewedContextType => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error('useRecentlyViewed must be used within RecentlyViewedProvider');
  }
  return context;
};
