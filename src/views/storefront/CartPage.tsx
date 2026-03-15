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
  IconButton,
  TextField,
  Divider,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconShoppingCart,
  IconTrash,
  IconPlus,
  IconMinus,
  IconArrowLeft,
  IconTag,
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

const CartPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      title: 'Serum Vitamin C 20% Brightening',
      brand: 'Natural Skin',
      price: 520000,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=120&h=120&fit=crop',
      quantity: 2,
      variant: '30ml',
    },
    {
      id: 2,
      title: 'Kem Chống Nắng SPF50+ PA++++',
      brand: 'SkinCeuticals',
      price: 890000,
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=120&h=120&fit=crop',
      quantity: 1,
      variant: '50ml',
    },
    {
      id: 3,
      title: 'Sữa Rửa Mặt Dịu Nhẹ Amino Acid',
      brand: 'CeraVe',
      price: 299000,
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=120&h=120&fit=crop',
      quantity: 1,
      variant: '150ml',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <Box sx={{ py: { xs: 3, md: 5 }, bgcolor: alpha(theme.palette.primary.main, 0.02), minHeight: '60vh' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Stack direction="row" alignItems="center" spacing={2} mb={4}>
            <IconShoppingCart size={32} color={theme.palette.primary.main} />
            <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Giỏ hàng của bạn
            </Typography>
            <Chip label={`${cartItems.length} sản phẩm`} size="small" sx={{ ml: 'auto' }} />
          </Stack>
        </motion.div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <Box textAlign="center" py={10}>
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <IconShoppingCart size={48} color={theme.palette.primary.main} />
            </Box>
            <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", mb: 2 }}>
              Giỏ hàng trống
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Hãy th phẩmêm sản vào giỏ hàng của bạn
            </Typography>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              size="large"
              sx={{ borderRadius: 3, px: 4 }}
            >
              Tiếp tục mua hàng
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {/* Cart Items */}
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack spacing={2}>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        p: 2,
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        boxShadow: 'none',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                      }}
                    >
                      {/* Image */}
                      <Box
                        component={Link}
                        to={`/products/${item.id}`}
                        sx={{
                          width: { xs: '100%', sm: 140 },
                          height: { xs: 160, sm: 140 },
                          flexShrink: 0,
                          borderRadius: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={item.image}
                          alt={item.title}
                          sx={{ objectFit: 'cover', width: '100%' }}
                        />
                      </Box>

                      {/* Details */}
                      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                          <Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                              {item.brand}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              fontWeight={600}
                              component={Link}
                              to={`/products/${item.id}`}
                              sx={{
                                textDecoration: 'none',
                                color: 'text.primary',
                                '&:hover': { color: theme.palette.primary.main },
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                              {item.variant}
                            </Typography>
                          </Box>
                          <IconButton size="small" color="error">
                            <IconTrash size={18} />
                          </IconButton>
                        </Stack>

                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          sx={{ mt: 'auto', pt: 2 }}
                        >
                          {/* Quantity */}
                          <Stack direction="row" alignItems="center" sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
                            <IconButton size="small">
                              <IconMinus size={16} />
                            </IconButton>
                            <Typography sx={{ px: 2, minWidth: 30, textAlign: 'center' }}>
                              {item.quantity}
                            </Typography>
                            <IconButton size="small">
                              <IconPlus size={16} />
                            </IconButton>
                          </Stack>

                          {/* Price */}
                          <Typography variant="h6" fontWeight={700} color="primary.main">
                            {formatPrice(item.price * item.quantity)}
                          </Typography>
                        </Stack>
                      </Box>
                    </Card>
                  </motion.div>
                ))}

                {/* Continue Shopping */}
                <Button
                  component={Link}
                  to="/products"
                  startIcon={<IconArrowLeft size={18} />}
                  sx={{ mt: 2, color: 'text.secondary' }}
                >
                  Tiếp tục mua hàng
                </Button>
              </Stack>
            </Grid>

            {/* Order Summary */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: 'none',
                    position: 'sticky',
                    top: 100,
                  }}
                >
                  <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 3 }}>
                    Tổng quan đơn hàng
                  </Typography>

                  {/* Coupon */}
                  <Box mb={3}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Mã giảm giá
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <TextField
                        size="small"
                        placeholder="Nhập mã..."
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        fullWidth
                        InputProps={{
                          startAdornment: <IconTag size={16} style={{ marginRight: 8, color: '#999' }} />,
                        }}
                      />
                      <Button variant="outlined" sx={{ whiteSpace: 'nowrap' }}>
                        Áp dụng
                      </Button>
                    </Stack>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  {/* Summary */}
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="text.secondary">Tạm tính</Typography>
                      <Typography fontWeight={500}>{formatPrice(subtotal)}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="text.secondary">Phí vận chuyển</Typography>
                      <Typography fontWeight={500}>
                        {shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}
                      </Typography>
                    </Stack>
                    {discount > 0 && (
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">Giảm giá</Typography>
                        <Typography fontWeight={500} color="success.main">
                          -{formatPrice(discount)}
                        </Typography>
                      </Stack>
                    )}

                    {shipping > 0 && (
                      <Typography variant="body2" color="text.secondary" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.08), p: 1.5, borderRadius: 2 }}>
                        Miễn phí vận chuyển đơn hàng từ 500K
                      </Typography>
                    )}

                    <Divider />

                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="h6" fontWeight={600}>Tổng cộng</Typography>
                      <Typography variant="h5" fontWeight={700} color="primary.main">
                        {formatPrice(total)}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => navigate('/checkout')}
                    sx={{
                      mt: 3,
                      borderRadius: 3,
                      py: 1.5,
                      bgcolor: theme.palette.primary.main,
                      '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Tiến hành thanh toán
                  </Button>

                  <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 2 }}>
                    ✓ Thanh toán an toàn ✓ Đổi trả 30 ngày
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CartPage;
