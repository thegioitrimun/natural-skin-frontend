// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
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
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconHeart,
  IconShoppingCart,
  IconTrash,
  IconArrowLeft,
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

const WishlistPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { state, removeItem } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item: typeof state.items[0]) => {
    addItem({
      id: item.id,
      title: item.title,
      brand: item.brand,
      price: item.price,
      salePrice: item.salePrice,
      image: item.image,
      quantity: 1,
      variant: '30ml', // Default variant
    });
  };

  return (
    <Box sx={{ py: { xs: 3, md: 5 }, bgcolor: alpha(theme.palette.primary.main, 0.02), minHeight: '60vh' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Stack direction="row" alignItems="center" spacing={2} mb={4}>
            <IconHeart size={32} color={theme.palette.primary.main} />
            <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Sản phẩm yêu thích
            </Typography>
            <Button
              variant="text"
              startIcon={<IconArrowLeft size={18} />}
              onClick={() => navigate(-1)}
              sx={{ ml: 'auto', color: 'text.secondary' }}
            >
              Quay lại
            </Button>
          </Stack>
        </motion.div>

        {state.items.length === 0 ? (
          // Empty Wishlist
          <Box textAlign="center" py={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
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
                <IconHeart size={48} color={theme.palette.primary.main} />
              </Box>
              <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", mb: 2 }}>
                Chưa có sản phẩm yêu thích
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Hãy thêm sản phẩm bạn yêu thích vào danh sách
              </Typography>
              <Button
                component={Link}
                to="/products"
                variant="contained"
                size="large"
                sx={{ borderRadius: 3, px: 4 }}
              >
                Khám phá sản phẩm
              </Button>
            </motion.div>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {state.items.map((item, index) => (
              <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
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
                    {/* Image */}
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component={Link}
                        to={`/products/${item.id}`}
                        sx={{
                          display: 'block',
                          height: 220,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          height="220"
                          image={item.image}
                          alt={item.title}
                          sx={{
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            '&:hover': { transform: 'scale(1.05)' },
                          }}
                        />
                      </CardMedia>

                      {/* Remove Button */}
                      <IconButton
                        size="small"
                        onClick={() => removeItem(item.id)}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: 'rgba(255,255,255,0.9)',
                          '&:hover': {
                            bgcolor: '#fff',
                            color: '#FF6B6B',
                          },
                        }}
                      >
                        <IconTrash size={16} />
                      </IconButton>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 2 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.75rem', mb: 0.5 }}
                      >
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
                          fontSize: '0.85rem',
                          lineHeight: 1.4,
                          mb: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          '&:hover': { color: theme.palette.primary.main },
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Price */}
                      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                        {item.salePrice ? (
                          <>
                            <Typography variant="h6" color="error.main" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                              {formatPrice(item.salePrice)}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                textDecoration: 'line-through',
                                color: 'text.disabled',
                                fontSize: '0.75rem',
                              }}
                            >
                              {formatPrice(item.price)}
                            </Typography>
                          </>
                        ) : (
                          <Typography variant="h6" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                            {formatPrice(item.price)}
                          </Typography>
                        )}
                      </Stack>

                      {/* Add to Cart */}
                      <Button
                        variant="contained"
                        fullWidth
                        size="small"
                        startIcon={<IconShoppingCart size={16} />}
                        onClick={() => handleAddToCart(item)}
                        sx={{
                          borderRadius: 2,
                          bgcolor: theme.palette.primary.main,
                          '&:hover': {
                            bgcolor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        Thêm vào giỏ
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default WishlistPage;
