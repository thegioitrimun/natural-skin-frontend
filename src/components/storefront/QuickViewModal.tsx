// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Rating,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconX,
  IconShoppingCart,
  IconHeart,
} from '@tabler/icons-react';
import { useCart } from '../../context/CartContext';
import { useWishlist, WishlistItem } from '../../context/WishlistContext';

interface QuickViewProduct {
  id: number;
  title: string;
  brand: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  variants?: { name: string; options: string[] };
}

interface QuickViewModalProps {
  open: boolean;
  onClose: () => void;
  product: QuickViewProduct | null;
}

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

const QuickViewModal: React.FC<QuickViewModalProps> = ({ open, onClose, product }) => {
  const theme = useTheme();
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.options?.[1] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      salePrice: product.salePrice,
      image: product.image,
      quantity,
      variant: selectedVariant,
    });
    onClose();
  };

  const handleToggleWishlist = () => {
    const wishlistItem: WishlistItem = {
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      salePrice: product.salePrice,
      image: product.image,
      rating: product.rating,
    };
    toggleItem(wishlistItem);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 1,
          bgcolor: 'background.paper',
          boxShadow: 1,
          '&:hover': {
            bgcolor: 'background.paper',
          },
        }}
      >
        <IconX size={20} />
      </IconButton>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            position: 'relative',
            bgcolor: alpha(theme.palette.primary.main, 0.03),
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: '100%',
              height: { xs: 300, md: 450 },
              objectFit: 'cover',
            }}
          />
          {product.salePrice && (
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                bgcolor: '#FF6B6B',
                color: '#fff',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontWeight: 700,
                fontSize: '0.8rem',
              }}
            >
              Giảm {Math.round((1 - product.salePrice / product.price) * 100)}%
            </Box>
          )}
        </Box>

        {/* Details Section */}
        <Box sx={{ flex: 1, p: 3.5 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
            {product.brand}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            {product.title}
          </Typography>

          {/* Rating */}
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Rating value={product.rating} precision={0.1} size="small" readOnly />
            <Typography variant="body2" color="text.secondary">
              {product.rating} ({product.reviewCount} đánh giá)
            </Typography>
          </Stack>

          {/* Price */}
          <Stack direction="row" alignItems="center" spacing={2} mb={3}>
            {product.salePrice ? (
              <>
                <Typography variant="h4" color="error.main" fontWeight={700}>
                  {formatPrice(product.salePrice)}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textDecoration: 'line-through', color: 'text.disabled' }}
                >
                  {formatPrice(product.price)}
                </Typography>
              </>
            ) : (
              <Typography variant="h4" fontWeight={700}>
                {formatPrice(product.price)}
              </Typography>
            )}
          </Stack>

          {/* Description */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            {product.description}
          </Typography>

          {/* Variants */}
          {product.variants && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                {product.variants.name}
              </Typography>
              <Stack direction="row" spacing={1}>
                {product.variants.options.map((option) => (
                  <Button
                    key={option}
                    variant={selectedVariant === option ? 'contained' : 'outlined'}
                    onClick={() => setSelectedVariant(option)}
                    sx={{
                      minWidth: 60,
                      borderColor: theme.palette.divider,
                      color: selectedVariant === option ? '#fff' : 'text.primary',
                      bgcolor: selectedVariant === option ? theme.palette.primary.main : 'transparent',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        bgcolor: selectedVariant === option ? theme.palette.primary.dark : alpha(theme.palette.primary.main, 0.08),
                      },
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </Stack>
            </Box>
          )}

          {/* Quantity & Actions */}
          <Stack direction="row" spacing={2} mb={3}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
              }}
            >
              <IconButton
                size="small"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </IconButton>
              <Typography sx={{ px: 2, minWidth: 40, textAlign: 'center' }}>{quantity}</Typography>
              <IconButton
                size="small"
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                disabled={quantity >= 10}
              >
                +
              </IconButton>
            </Stack>
            <Button
              variant="contained"
              size="large"
              startIcon={<IconShoppingCart size={20} />}
              onClick={handleAddToCart}
              sx={{
                flex: 1,
                borderRadius: 2.5,
                py: 1.2,
                bgcolor: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Thêm vào giỏ
            </Button>
            <IconButton
              size="large"
              onClick={handleToggleWishlist}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                color: isInWishlist(product.id) ? '#FF6B6B' : 'text.secondary',
                '&:hover': {
                  color: '#FF6B6B',
                  borderColor: '#FF6B6B',
                },
              }}
            >
              <IconHeart size={24} fill={isInWishlist(product.id) ? '#FF6B6B' : 'none'} />
            </IconButton>
          </Stack>

          {/* Quick Info */}
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                ✓ Miễn phí vận chuyển đơn từ 500K
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                ✓ Đổi trả trong 30 ngày
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
};

export default QuickViewModal;
