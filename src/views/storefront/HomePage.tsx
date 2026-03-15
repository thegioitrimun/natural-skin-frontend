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
  CardContent,
  Button,
  Stack,
  Chip,
  Rating,
  useTheme,
  alpha,
  IconButton,
} from '@mui/material';
import {
  IconShoppingCart,
  IconEye,
  IconHeart,
  IconArrowRight,
  IconTruck,
  IconShieldCheck,
  IconPlant,
  IconRefresh,
  IconStar,
  IconQuote,
} from '@tabler/icons-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

// =====================
// MOCK DATA
// =====================
const categories = [
  { id: 1, name: 'Chăm sóc da', icon: '🧴', count: 48, color: '#E8F5E9' },
  { id: 2, name: 'Trang điểm', icon: '💄', count: 36, color: '#FFF3E0' },
  { id: 3, name: 'Chống nắng', icon: '☀️', count: 24, color: '#FFF8E1' },
  { id: 4, name: 'Dưỡng thể', icon: '🫧', count: 30, color: '#F3E5F5' },
  { id: 5, name: 'Mặt nạ', icon: '🎭', count: 18, color: '#E0F7FA' },
  { id: 6, name: 'Serum', icon: '💧', count: 42, color: '#E8EAF6' },
];

const bestSellers = [
  {
    id: 1,
    title: 'Serum Vitamin C 20% Brightening',
    brand: 'Natural Skin',
    price: 650000,
    salePrice: 520000,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 234,
    badge: 'Best Seller',
    badgeColor: '#FF6B6B',
  },
  {
    id: 2,
    title: 'Kem Chống Nắng SPF50+ PA++++',
    brand: 'SkinCeuticals',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 189,
    badge: 'Hot',
    badgeColor: '#FF9800',
  },
  {
    id: 3,
    title: 'Sữa Rửa Mặt Dịu Nhẹ Amino Acid',
    brand: 'CeraVe',
    price: 380000,
    salePrice: 299000,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 456,
    badge: 'Sale',
    badgeColor: '#4CAF50',
  },
  {
    id: 4,
    title: 'Toner HA Cấp Ẩm Chuyên Sâu',
    brand: 'Hada Labo',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 312,
    badge: 'Mới',
    badgeColor: '#2196F3',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Ngọc Trinh',
    comment: 'Sản phẩm tuyệt vời! Da mình cải thiện rõ rệt sau 2 tuần sử dụng serum.',
    rating: 5,
    product: 'Serum Vitamin C',
  },
  {
    id: 2,
    name: 'Minh Anh',
    comment: 'Kem chống nắng không bết dính, thấm nhanh. Rất phù hợp với da dầu.',
    rating: 5,
    product: 'Kem Chống Nắng SPF50+',
  },
  {
    id: 3,
    name: 'Thanh Hà',
    comment: 'Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm chính hãng 100%.',
    rating: 4,
    product: 'Sữa Rửa Mặt CeraVe',
  },
];

const features = [
  { icon: <IconPlant size={28} />, title: '100% Thiên Nhiên', desc: 'Thành phần an toàn, lành tính' },
  { icon: <IconTruck size={28} />, title: 'Miễn Phí Ship', desc: 'Đơn hàng từ 500K' },
  { icon: <IconShieldCheck size={28} />, title: 'Chính Hãng', desc: 'Cam kết hàng chính hãng' },
  { icon: <IconRefresh size={28} />, title: 'Đổi Trả 30 Ngày', desc: 'Hoàn tiền nếu không hài lòng' },
];

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + '₫';
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* ==================== HERO BANNER ==================== */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '70vh', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 50%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
            top: -100,
            right: -100,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
            bottom: -50,
            left: -50,
          }}
        />

        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeInUp}>
                  <Chip
                    label="🌿 Mỹ phẩm thiên nhiên #1 Việt Nam"
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.dark,
                      fontWeight: 500,
                      mb: 3,
                      px: 1,
                      fontSize: '0.85rem',
                    }}
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      lineHeight: 1.2,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Vẻ đẹp từ{' '}
                    <Box
                      component="span"
                      sx={{
                        color: theme.palette.primary.main,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: 0,
                          width: '100%',
                          height: 8,
                          bgcolor: alpha(theme.palette.secondary.main, 0.3),
                          borderRadius: 4,
                          zIndex: -1,
                        },
                      }}
                    >
                      thiên nhiên
                    </Box>
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      lineHeight: 1.8,
                      mb: 4,
                      maxWidth: 500,
                    }}
                  >
                    Khám phá bộ sưu tập mỹ phẩm thiên nhiên cao cấp, 
                    được chiết xuất từ những thành phần tinh khiết nhất 
                    cho làn da khỏe mạnh rạng rỡ.
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      component={Link}
                      to="/products"
                      variant="contained"
                      size="large"
                      endIcon={<IconArrowRight size={18} />}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                        '&:hover': {
                          bgcolor: theme.palette.primary.dark,
                          boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.4)}`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Khám phá ngay
                    </Button>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          borderColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Về chúng tôi
                    </Button>
                  </Stack>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 550,
                    mx: 'auto',
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop"
                    alt="Natural Skin Products"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 4,
                      boxShadow: `0 20px 60px ${alpha('#000', 0.15)}`,
                    }}
                  />
                  {/* Floating card */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 30,
                      left: -30,
                      bgcolor: theme.palette.background.paper,
                      borderRadius: 3,
                      p: 2,
                      boxShadow: `0 8px 32px ${alpha('#000', 0.12)}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconStar size={24} color={theme.palette.secondary.main} fill={theme.palette.secondary.main} />
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={700}>10K+</Typography>
                      <Typography variant="body2" color="text.secondary">Khách hàng tin tưởng</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==================== FEATURES BAR ==================== */}
      <Box
        sx={{
          py: 4,
          bgcolor: theme.palette.background.paper,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.04),
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: '0.85rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                      {feature.desc}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ==================== CATEGORIES ==================== */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Danh mục sản phẩm
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
                  Khám phá đa dạng sản phẩm chăm sóc da và làm đẹp
                </Typography>
              </Box>
            </motion.div>
            <Grid container spacing={3}>
              {categories.map((cat) => (
                <Grid key={cat.id} size={{ xs: 6, sm: 4, md: 2 }}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      component={Link}
                      to="/products"
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        boxShadow: 'none',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        bgcolor: cat.color,
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                        },
                      }}
                    >
                      <Typography fontSize="2.5rem" mb={1}>
                        {cat.icon}
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                        {cat.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cat.count} sản phẩm
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ==================== BEST SELLERS ==================== */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: alpha(theme.palette.primary.main, 0.02),
        }}
      >
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={5}>
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    Sản phẩm bán chạy
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Được yêu thích nhất bởi hàng ngàn khách hàng
                  </Typography>
                </Box>
                <Button
                  component={Link}
                  to="/products"
                  endIcon={<IconArrowRight size={16} />}
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  Xem tất cả
                </Button>
              </Stack>
            </motion.div>

            <Grid container spacing={3}>
              {bestSellers.map((product) => (
                <Grid key={product.id} size={{ xs: 6, sm: 6, md: 3 }}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                        boxShadow: 'none',
                        overflow: 'hidden',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 12px 40px ${alpha('#000', 0.1)}`,
                          transform: 'translateY(-4px)',
                        },
                        '&:hover .product-actions': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        },
                      }}
                    >
                      {/* Badge */}
                      {product.badge && (
                        <Chip
                          label={product.badge}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            zIndex: 2,
                            bgcolor: product.badgeColor,
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                          }}
                        />
                      )}

                      {/* Wishlist button */}
                      <IconButton
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          zIndex: 2,
                          bgcolor: alpha('#fff', 0.9),
                          '&:hover': {
                            bgcolor: '#fff',
                            color: '#FF6B6B',
                          },
                        }}
                      >
                        <IconHeart size={18} />
                      </IconButton>

                      {/* Image */}
                      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <CardMedia
                          component="img"
                          height="260"
                          image={product.image}
                          alt={product.title}
                          sx={{
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                        {/* Quick actions overlay */}
                        <Stack
                          className="product-actions"
                          direction="row"
                          spacing={1}
                          sx={{
                            position: 'absolute',
                            bottom: 12,
                            left: 0,
                            right: 0,
                            justifyContent: 'center',
                            opacity: 0,
                            transform: 'translateY(10px)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<IconShoppingCart size={16} />}
                            sx={{
                              bgcolor: alpha('#fff', 0.95),
                              color: theme.palette.text.primary,
                              borderRadius: 2,
                              fontWeight: 600,
                              fontSize: '0.75rem',
                              '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: '#fff',
                              },
                            }}
                          >
                            Thêm vào giỏ
                          </Button>
                          <IconButton
                            size="small"
                            sx={{
                              bgcolor: alpha('#fff', 0.95),
                              '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: '#fff',
                              },
                            }}
                          >
                            <IconEye size={16} />
                          </IconButton>
                        </Stack>
                      </Box>

                      <CardContent sx={{ p: 2.5 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.75rem' }}>
                          {product.brand}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          sx={{
                            fontSize: '0.9rem',
                            lineHeight: 1.4,
                            mb: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            minHeight: 42,
                          }}
                        >
                          {product.title}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5} mb={1}>
                          <Rating value={product.rating} precision={0.1} size="small" readOnly />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            ({product.reviewCount})
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          {product.salePrice ? (
                            <>
                              <Typography variant="h6" color="error.main" fontWeight={700} sx={{ fontSize: '1rem' }}>
                                {formatPrice(product.salePrice)}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  textDecoration: 'line-through',
                                  color: theme.palette.text.disabled,
                                  fontSize: '0.8rem',
                                }}
                              >
                                {formatPrice(product.price)}
                              </Typography>
                            </>
                          ) : (
                            <Typography variant="h6" color="text.primary" fontWeight={700} sx={{ fontSize: '1rem' }}>
                              {formatPrice(product.price)}
                            </Typography>
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Mobile view all button */}
            <Box textAlign="center" mt={4} display={{ md: 'none' }}>
              <Button
                component={Link}
                to="/products"
                variant="outlined"
                endIcon={<IconArrowRight size={16} />}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                }}
              >
                Xem tất cả sản phẩm
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ==================== PROMOTIONAL BANNERS ==================== */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    height: { xs: 200, md: 280 },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    p: { xs: 3, md: 5 },
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <Box sx={{ zIndex: 1 }}>
                    <Chip
                      label="Giảm đến 40%"
                      size="small"
                      sx={{ bgcolor: alpha('#fff', 0.2), color: '#fff', fontWeight: 600, mb: 2 }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#fff',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      Bộ sưu tập Mùa Xuân
                    </Typography>
                    <Typography variant="body1" sx={{ color: alpha('#fff', 0.8), mb: 2 }}>
                      Chăm sóc da toàn diện cho mùa mới
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#fff',
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: alpha('#fff', 0.9),
                        },
                      }}
                    >
                      Mua ngay
                    </Button>
                  </Box>
                  {/* Decorative */}
                  <Box
                    sx={{
                      position: 'absolute',
                      right: -30,
                      top: -30,
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      bgcolor: alpha('#fff', 0.08),
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      right: 40,
                      bottom: -40,
                      width: 160,
                      height: 160,
                      borderRadius: '50%',
                      bgcolor: alpha('#fff', 0.05),
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    height: { xs: 200, md: 280 },
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    p: { xs: 3, md: 5 },
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <Box sx={{ zIndex: 1 }}>
                    <Chip
                      label="Mới ra mắt"
                      size="small"
                      sx={{ bgcolor: alpha('#fff', 0.2), color: '#fff', fontWeight: 600, mb: 2 }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#fff',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      Serum Premium Line
                    </Typography>
                    <Typography variant="body1" sx={{ color: alpha('#fff', 0.8), mb: 2 }}>
                      Công nghệ dưỡng da tiên tiến nhất
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#fff',
                        color: theme.palette.secondary.dark,
                        fontWeight: 600,
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: alpha('#fff', 0.9),
                        },
                      }}
                    >
                      Khám phá
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      right: -30,
                      top: -30,
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      bgcolor: alpha('#fff', 0.08),
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ==================== TESTIMONIALS ==================== */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: alpha(theme.palette.primary.main, 0.03),
        }}
      >
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Khách hàng nói gì
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
                  Hàng ngàn khách hàng hài lòng với sản phẩm của chúng tôi
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {testimonials.map((testimonial) => (
                <Grid key={testimonial.id} size={{ xs: 12, md: 4 }}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                        boxShadow: 'none',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 8px 32px ${alpha('#000', 0.08)}`,
                        },
                      }}
                    >
                      <IconQuote
                        size={32}
                        color={alpha(theme.palette.primary.main, 0.2)}
                        style={{ marginBottom: 16 }}
                      />
                      <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
                      <Typography
                        variant="body1"
                        sx={{ mb: 3, lineHeight: 1.8, flexGrow: 1, color: theme.palette.text.secondary }}
                      >
                        "{testimonial.comment}"
                      </Typography>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            Đã mua: {testimonial.product}
                          </Typography>
                        </Box>
                        <Chip
                          icon={<IconShieldCheck size={14} />}
                          label="Đã xác thực"
                          size="small"
                          sx={{
                            bgcolor: alpha(theme.palette.success.main, 0.1),
                            color: theme.palette.success.main,
                            fontSize: '0.7rem',
                          }}
                        />
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
