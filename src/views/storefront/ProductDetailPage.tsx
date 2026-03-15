// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Stack,
  Chip,
  Rating,
  IconButton,
  Breadcrumbs,
  Link as MuiLink,
  Tab,
  Tabs,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconShoppingCart,
  IconHeart,
  IconShare,
  IconTruck,
  IconShieldCheck,
  IconRefresh,
  IconCheck,
} from '@tabler/icons-react';
import { Link, useParams } from 'react-router';
import { motion } from 'framer-motion';

// Mock data
const productData = {
  id: 1,
  title: 'Serum Vitamin C 20% Brightening',
  brand: 'Natural Skin',
  price: 650000,
  salePrice: 520000,
  description: 'Serum Vitamin C 20% với công thức ổn định giúp làm sáng da, mờ thâm nám, chống lão hóa hiệu quả. Sản phẩm phù hợp mọi loại da.',
  longDescription: `
## Công dụng

- Làm sáng và đều màu da
- Mờ thâm nám, vết chàm
- Chống lão hóa, tăng đàn hồi da
- Bảo vệ da khỏi tác hại của tia UV
- Cấp ẩm sâu, giúp da mềm mại

## Thành phần chính

- Vitamin C 20% (L-Ascorbic Acid)
- Hyaluronic Acid
- Vitamin E
- Niacinamide
- Ferulic Acid

## Hướng dẫn sử dụng

1. Làm sạch da mặt bằng sữa rửa mặt
2. Thoa toner cân bằng da
3. Lấy 2-3 giọt serum thoa đều lên mặt
4. Massage nhẹ nhàng trong 1-2 phút
5. Sử dụng vào buổi sáng và tối
6. Kết hợp kem chống nắng vào ban ngày
  `,
  images: [
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop',
  ],
  rating: 4.8,
  reviewCount: 234,
  sold: 1520,
  inStock: true,
  tags: ['Serum', 'Vitamin C', 'Làm sáng', 'Chống lão hóa'],
  variants: [
    { name: 'Dung tích', options: ['15ml', '30ml', '50ml'] },
  ],
};

const relatedProducts = [
  {
    id: 2,
    title: 'Kem Chống Nắng SPF50+ PA++++',
    brand: 'SkinCeuticals',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Sữa Rửa Mặt Dịu Nhẹ Amino Acid',
    brand: 'CeraVe',
    price: 380000,
    salePrice: 299000,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Toner HA Cấp Ẩm Chuyên Sâu',
    brand: 'Hada Labo',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Kem Dưỡng Ẩm Daily Moisturizing',
    brand: 'CeraVe',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop',
    rating: 4.8,
  },
];

const reviews = [
  {
    id: 1,
    name: 'Ngọc Trinh',
    rating: 5,
    date: '15/01/2024',
    comment: 'Sản phẩm tuyệt vời! Da mình cải thiện rõ rệt sau 2 tuần sử dụng. Serum thấm nhanh, không nhờn rít.',
    avatar: 'N',
  },
  {
    id: 2,
    name: 'Minh Anh',
    rating: 5,
    date: '10/01/2024',
    comment: 'Đã mua lần thứ 3. Rất hài lòng với chất lượng. Giá cả hợp lý so với các thương hiệu khác.',
    avatar: 'M',
  },
  {
    id: 3,
    name: 'Thanh Hà',
    rating: 4,
    date: '05/01/2024',
    comment: 'Sản phẩm tốt, giao hàng nhanh. Mùi hơi chua nhẹ nhưng có thể chấp nhận được.',
    avatar: 'T',
  },
];

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

const ProductDetailPage = () => {
  const theme = useTheme();
  useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0].options[1]);
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, Math.min(10, quantity + delta)));
  };

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink component={Link} to="/" sx={{ textDecoration: 'none', color: 'text.secondary' }}>
            Trang chủ
          </MuiLink>
          <MuiLink component={Link} to="/products" sx={{ textDecoration: 'none', color: 'text.secondary' }}>
            Sản phẩm
          </MuiLink>
          <Typography color="text.primary">{productData.title}</Typography>
        </Breadcrumbs>

        {/* Product Info */}
        <Grid container spacing={4}>
          {/* Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              {/* Main Image */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  mb: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.02),
                }}
              >
                <CardMedia
                  component="img"
                  height="500"
                  image={productData.images[selectedImage]}
                  alt={productData.title}
                  sx={{ objectFit: 'cover' }}
                />
                {productData.salePrice && (
                  <Chip
                    label={`Giảm ${Math.round((1 - productData.salePrice / productData.price) * 100)}%`}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: '#FF6B6B',
                      color: '#fff',
                      fontWeight: 700,
                    }}
                  />
                )}
              </Box>

              {/* Thumbnails */}
              <Stack direction="row" spacing={1.5}>
                {productData.images.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: `2px solid ${selectedImage === index ? theme.palette.primary.main : 'transparent'}`,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: theme.palette.primary.light,
                      },
                    }}
                  >
                    <CardMedia component="img" height="80" image={img} sx={{ objectFit: 'cover' }} />
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Product Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {productData.brand}
              </Typography>
              <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 2 }}>
                {productData.title}
              </Typography>

              {/* Rating & Sold */}
              <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                <Rating value={productData.rating} precision={0.1} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                  {productData.rating} ({productData.reviewCount} đánh giá)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  | Đã bán {productData.sold}+
                </Typography>
              </Stack>

              {/* Price */}
              <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                {productData.salePrice ? (
                  <>
                    <Typography variant="h3" color="error.main" fontWeight={700}>
                      {formatPrice(productData.salePrice)}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ textDecoration: 'line-through', color: 'text.disabled' }}
                    >
                      {formatPrice(productData.price)}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="h3" fontWeight={700}>
                    {formatPrice(productData.price)}
                  </Typography>
                )}
              </Stack>

              {/* Short Description */}
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                {productData.description}
              </Typography>

              {/* Variants */}
              <Box mb={3}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
                  {productData.variants[0].name}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {productData.variants[0].options.map((option) => (
                    <Button
                      key={option}
                      variant={selectedVariant === option ? 'contained' : 'outlined'}
                      onClick={() => setSelectedVariant(option)}
                      sx={{
                        minWidth: 70,
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

              {/* Quantity & Add to Cart */}
              <Stack direction="row" spacing={2} mb={3}>
                <Stack direction="row" alignItems="center" sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
                  <IconButton size="small" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                    -
                  </IconButton>
                  <Typography sx={{ px: 2, minWidth: 40, textAlign: 'center' }}>{quantity}</Typography>
                  <IconButton size="small" onClick={() => handleQuantityChange(1)} disabled={quantity >= 10}>
                    +
                  </IconButton>
                </Stack>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<IconShoppingCart size={20} />}
                  sx={{
                    flex: 1,
                    bgcolor: theme.palette.primary.main,
                    borderRadius: 2,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Thêm vào giỏ
                </Button>
                <IconButton
                  size="large"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    color: isWishlisted ? '#FF6B6B' : 'text.secondary',
                    '&:hover': {
                      color: '#FF6B6B',
                      borderColor: '#FF6B6B',
                    },
                  }}
                >
                  <IconHeart size={24} fill={isWishlisted ? '#FF6B6B' : 'none'} />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                  }}
                >
                  <IconShare size={24} />
                </IconButton>
              </Stack>

              {/* Benefits */}
              <Stack spacing={1.5}>
                {[
                  { icon: <IconTruck size={18} />, text: 'Miễn phí vận chuyển đơn từ 500K' },
                  { icon: <IconShieldCheck size={18} />, text: 'Cam kết hàng chính hãng 100%' },
                  { icon: <IconRefresh size={18} />, text: 'Đổi trả trong 30 ngày' },
                  { icon: <IconCheck size={18} />, text: 'Còn hàng (giao hàng ngay)' },
                ].map((benefit, index) => (
                  <Stack key={index} direction="row" spacing={1.5} alignItems="center">
                    <Box sx={{ color: theme.palette.primary.main }}>{benefit.icon}</Box>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Box sx={{ mt: 6 }}>
          <Tabs
            value={tabValue}
            onChange={(_, v) => setTabValue(v)}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
              },
            }}
          >
            <Tab label="Mô tả chi tiết" />
            <Tab label="Thành phần" />
            <Tab label="Hướng dẫn sử dụng" />
            <Tab label={`Đánh giá (${productData.reviewCount})`} />
          </Tabs>

          {tabValue === 0 && (
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 3 }}>
                Mô tả sản phẩm
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {productData.longDescription}
              </Typography>
            </Box>
          )}

          {tabValue === 1 && (
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 3 }}>
                Thành phần
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Aqua, Ascorbic Acid (20%), Propylene Glycol, Hyaluronic Acid, Vitamin E, Niacinamide, Ferulic Acid, Sodium Citrate, Phenoxyethanol.
              </Typography>
            </Box>
          )}

          {tabValue === 2 && (
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 3 }}>
                Hướng dẫn sử dụng
              </Typography>
              <Stack spacing={2}>
                <Typography variant="body1" color="text.secondary">
                  1. Làm sạch da mặt bằng sữa rửa mặt
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  2. Thoa toner cân bằng da
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  3. Lấy 2-3 giọt serum thoa đều lên mặt và cổ
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  4. Massage nhẹ nhàng trong 1-2 phút để tăng hấp thu
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  5. Sử dụng vào buổi sáng và tối
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  6. Kết hợp kem chống nắng vào ban ngày để bảo vệ da
                </Typography>
              </Stack>
            </Box>
          )}

          {tabValue === 3 && (
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 3 }}>
                Đánh giá của khách hàng
              </Typography>
              <Stack spacing={3}>
                {reviews.map((review) => (
                  <Card
                    key={review.id}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: theme.palette.primary.main,
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 600,
                          }}
                        >
                          {review.avatar}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {review.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {review.date}
                          </Typography>
                        </Box>
                      </Stack>
                      <Rating value={review.rating} readOnly size="small" />
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      {review.comment}
                    </Typography>
                  </Card>
                ))}
              </Stack>
            </Box>
          )}
        </Box>

        {/* Related Products */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 4 }}>
            Sản phẩm liên quan
          </Typography>
          <Grid container spacing={3}>
            {relatedProducts.map((product) => (
              <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
                <Card
                  component={Link}
                  to={`/products/${product.id}`}
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                    boxShadow: 'none',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 40px ${alpha('#000', 0.1)}`,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {product.brand}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{
                        fontSize: '0.85rem',
                        lineHeight: 1.4,
                        mb: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Rating value={product.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary">
                        {product.rating}
                      </Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight={700} sx={{ mt: 1, fontSize: '0.95rem' }}>
                      {product.salePrice ? formatPrice(product.salePrice) : formatPrice(product.price)}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
