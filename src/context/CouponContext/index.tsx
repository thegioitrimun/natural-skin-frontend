// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Coupon {
  code: string;
  description: string;
  discountType: 'percent' | 'fixed';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  validFrom: Date;
  validUntil: Date;
}

interface CouponContextType {
  appliedCoupon: Coupon | null;
  discount: number;
  applyCoupon: (code: string, orderValue: number) => { success: boolean; message: string };
  removeCoupon: () => void;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

// Mock coupons data
const availableCoupons: Coupon[] = [
  {
    code: 'WELCOME10',
    description: 'Giảm 10% cho đơn hàng đầu tiên',
    discountType: 'percent',
    discountValue: 10,
    minOrderValue: 0,
    maxDiscount: 100000,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2024-12-31'),
  },
  {
    code: 'SUMMER20',
    description: 'Giảm 20% mùa hè',
    discountType: 'percent',
    discountValue: 20,
    minOrderValue: 500000,
    maxDiscount: 200000,
    validFrom: new Date('2024-06-01'),
    validUntil: new Date('2024-08-31'),
  },
  {
    code: 'FREESHIP',
    description: 'Miễn phí vận chuyển',
    discountType: 'fixed',
    discountValue: 30000,
    minOrderValue: 0,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2024-12-31'),
  },
  {
    code: 'NEW50K',
    description: 'Giảm 50K cho đơn từ 300K',
    discountType: 'fixed',
    discountValue: 50000,
    minOrderValue: 300000,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2024-12-31'),
  },
];

export const CouponProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (code: string, orderValue: number): { success: boolean; message: string } => {
    const coupon = availableCoupons.find(c => c.code.toUpperCase() === code.toUpperCase());

    if (!coupon) {
      return { success: false, message: 'Mã giảm giá không tồn tại' };
    }

    const now = new Date();
    if (now < coupon.validFrom || now > coupon.validUntil) {
      return { success: false, message: 'Mã giảm giá đã hết hạn' };
    }

    if (orderValue < coupon.minOrderValue) {
      return {
        success: false,
        message: `Đơn hàng tối thiểu ${coupon.minOrderValue.toLocaleString('vi-VN')}đ`,
      };
    }

    let discountAmount = 0;
    if (coupon.discountType === 'percent') {
      discountAmount = (orderValue * coupon.discountValue) / 100;
      if (coupon.maxDiscount) {
        discountAmount = Math.min(discountAmount, coupon.maxDiscount);
      }
    } else {
      discountAmount = coupon.discountValue;
    }

    setAppliedCoupon(coupon);
    setDiscount(discountAmount);

    return { success: true, message: `Áp dụng thành công! Giảm ${discountAmount.toLocaleString('vi-VN')}đ` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  return (
    <CouponContext.Provider value={{ appliedCoupon, discount, applyCoupon, removeCoupon }}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCoupon = (): CouponContextType => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error('useCoupon must be used within CouponProvider');
  }
  return context;
};

export const availableCouponsList = availableCoupons;
