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
  CardContent,
  Button,
  Stack,
  Chip,
  Rating,
  useTheme,
  alpha,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Slider,
  Checkbox,
  FormControlLabel,
  Drawer,
  Divider,
  Breadcrumbs,
  Link as MuiLink,
  Pagination,
} from '@mui/material';
import {
  IconShoppingCart,
  IconHeart,
  IconEye,
  IconFilter,
  IconX,
} from '@tabler/icons-react';
import { Link } from 'react-router';

const allProducts = [
  {
    id: 1, title: 'Serum Vitamin C 20% Brightening', brand: 'Natural Skin', category: 'Serum',
    price: 650000, salePrice: 520000, rating: 4.8, reviewCount: 234, badge: 'Best Seller', badgeColor: '#FF6B6B',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
  },
  {
    id: 2, title: 'Kem Chống Nắng SPF50+ PA++++', brand: 'SkinCeuticals', category: 'Chống nắng',
    price: 890000, rating: 4.9, reviewCount: 189, badge: 'Hot', badgeColor: '#FF9800',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
  },
  {
    id: 3, title: 'Sữa Rửa Mặt Dịu Nhẹ Amino Acid', brand: 'CeraVe', category: 'Chăm sóc da',
    price: 380000, salePrice: 299000, rating: 4.7, reviewCount: 456, badge: 'Sale', badgeColor: '#4CAF50',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop',
  },
  {
    id: 4, title: 'Toner HA Cấp Ẩm Chuyên Sâu', brand: 'Hada Labo', category: 'Chăm sóc da',
    price: 420000, rating: 4.6, reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
  },
  {
    id: 5, title: 'Kem Dưỡng Ẩm Ceramide', brand: 'CeraVe', category: 'Dưỡng thể',
    price: 450000, rating: 4.5, reviewCount: 178, badge: 'Mới', badgeColor: '#2196F3',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop',
  },
  {
    id: 6, title: 'Mặt Nạ Đất Sét Trà Xanh', brand: 'Innisfree', category: 'Mặt nạ',
    price: 280000, salePrice: 220000, rating: 4.4, reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop',
  },
  {
    id: 7, title: 'Tinh Chất Retinol 0.5%', brand: 'The Ordinary', category: 'Serum',
    price: 520000, rating: 4.7, reviewCount: 267,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
  },
  {
    id: 8, title: 'Son Dưỡng Môi Hoa Hồng', brand: 'Natural Skin', category: 'Trang điểm',
    price: 180000, rating: 4.3, reviewCount: 156, badge: 'Mới', badgeColor: '#2196F3',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
  },
];

const categoryFilters = ['Tất cả', 'Chăm sóc da', 'Trang điểm', 'Chống nắng', 'Dưỡng thể', 'Mặt nạ', 'Serum'];

const formatPrice = (price: number) => price.toLocaleString('vi-VN') + '₫';

const ProductsPage = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [sortBy, setSortBy] = useState('newest');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000000]);

  const filteredProducts = allProducts.filter(
    (p) => selectedCategory === 'Tất cả' || p.category === selectedCategory,
  );

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink component={Link} to="/" underline="hover" color="inherit">
            Trang chủ
          </MuiLink>
          <Typography color="text.primary" fontWeight={500}>
            Sản phẩm
          </Typography>
        </Breadcrumbs>

        {/* Page title */}
        <Box mb={4}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 1,
            }}
          >
            Sản phẩm
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Khám phá {allProducts.length}+ sản phẩm mỹ phẩm thiên nhiên chất lượng cao
          </Typography>
        </Box>

        {/* Filter bar */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
          sx={{
            mb: 4,
            pb: 3,
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          {/* Category chips */}
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {categoryFilters.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  borderRadius: 2,
                  fontWeight: 500,
                  bgcolor:
                    selectedCategory === cat
                      ? theme.palette.primary.main
                      : alpha(theme.palette.primary.main, 0.06),
                  color: selectedCategory === cat ? '#fff' : theme.palette.text.primary,
                  '&:hover': {
                    bgcolor:
                      selectedCategory === cat
                        ? theme.palette.primary.dark
                        : alpha(theme.palette.primary.main, 0.12),
                  },
                }}
              />
            ))}
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            {/* Mobile filter button */}
            <Button
              startIcon={<IconFilter size={18} />}
              onClick={() => setFilterOpen(true)}
              sx={{
                display: { md: 'none' },
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary,
              }}
              variant="outlined"
              size="small"
            >
              Bộ lọc
            </Button>

            {/* Sort */}
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                sx={{ borderRadius: 2, fontSize: '0.85rem' }}
              >
                <MenuItem value="newest">Mới nhất</MenuItem>
                <MenuItem value="bestselling">Bán chạy</MenuItem>
                <MenuItem value="price-asc">Giá: Thấp → Cao</MenuItem>
                <MenuItem value="price-desc">Giá: Cao → Thấp</MenuItem>
                <MenuItem value="rating">Đánh giá cao</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Grid container spacing={3}>
          {/* Desktop Sidebar Filters */}
          <Grid size={{ xs: 12, md: 3 }} sx={{ display: { xs: 'none', md: 'block' } }}>
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
              <Typography variant="h6" fontWeight={700} mb={2}>
                Bộ lọc
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {/* Price range */}
              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                Khoảng giá
              </Typography>
              <Slider
                value={priceRange}
                onChange={(_, newValue) => setPriceRange(newValue as number[])}
                min={0}
                max={1000000}
                step={50000}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => formatPrice(v)}
                sx={{ mb: 1, color: theme.palette.primary.main }}
              />
              <Stack direction="row" justifyContent="space-between" mb={3}>
                <Typography variant="body2" color="text.secondary">
                  {formatPrice(priceRange[0])}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatPrice(priceRange[1])}
                </Typography>
              </Stack>

              <Divider sx={{ mb: 2 }} />

              {/* Skin type */}
              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                Loại da
              </Typography>
              {['Da dầu', 'Da khô', 'Da nhạy cảm', 'Da hỗn hợp', 'Mọi loại da'].map((type) => (
                <FormControlLabel
                  key={type}
                  control={<Checkbox size="small" sx={{ color: theme.palette.primary.main }} />}
                  label={<Typography variant="body2">{type}</Typography>}
                  sx={{ display: 'block', ml: 0, mb: -0.5 }}
                />
              ))}

              <Divider sx={{ my: 2 }} />

              {/* Brand */}
              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                Thương hiệu
              </Typography>
              {['Natural Skin', 'CeraVe', 'The Ordinary', 'Innisfree', 'SkinCeuticals', 'Hada Labo'].map(
                (brand) => (
                  <FormControlLabel
                    key={brand}
                    control={<Checkbox size="small" sx={{ color: theme.palette.primary.main }} />}
                    label={<Typography variant="body2">{brand}</Typography>}
                    sx={{ display: 'block', ml: 0, mb: -0.5 }}
                  />
                ),
              )}

              <Divider sx={{ my: 2 }} />

              {/* Rating */}
              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                Đánh giá
              </Typography>
              {[5, 4, 3].map((star) => (
                <FormControlLabel
                  key={star}
                  control={<Checkbox size="small" sx={{ color: theme.palette.primary.main }} />}
                  label={
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Rating value={star} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary">
                        trở lên
                      </Typography>
                    </Stack>
                  }
                  sx={{ display: 'block', ml: 0, mb: -0.5 }}
                />
              ))}
            </Card>
          </Grid>

          {/* Product Grid */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Grid container spacing={2.5}>
              {filteredProducts.map((product) => (
                <Grid key={product.id} size={{ xs: 6, sm: 4, md: 4 }}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                      boxShadow: 'none',
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 8px 30px ${alpha('#000', 0.1)}`,
                        transform: 'translateY(-3px)',
                      },
                      '&:hover .card-actions': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    {product.badge && (
                      <Chip
                        label={product.badge}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 10,
                          left: 10,
                          zIndex: 2,
                          bgcolor: product.badgeColor,
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                    <IconButton
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 2,
                        bgcolor: alpha('#fff', 0.9),
                        '&:hover': { bgcolor: '#fff', color: '#FF6B6B' },
                      }}
                    >
                      <IconHeart size={16} />
                    </IconButton>

                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="240"
                        image={product.image}
                        alt={product.title}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                          '&:hover': { transform: 'scale(1.05)' },
                        }}
                      />
                      <Stack
                        className="card-actions"
                        direction="row"
                        spacing={1}
                        sx={{
                          position: 'absolute',
                          bottom: 10,
                          left: 0,
                          right: 0,
                          justifyContent: 'center',
                          opacity: 0,
                          transform: 'translateY(10px)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Button
                          size="small"
                          variant="contained"
                          startIcon={<IconShoppingCart size={14} />}
                          sx={{
                            bgcolor: alpha('#fff', 0.95),
                            color: theme.palette.text.primary,
                            borderRadius: 2,
                            fontSize: '0.7rem',
                            fontWeight: 600,
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
                          component={Link}
                          to={`/product/${product.id}`}
                          sx={{ bgcolor: alpha('#fff', 0.95), '&:hover': { bgcolor: theme.palette.primary.main, color: '#fff' } }}
                        >
                          <IconEye size={14} />
                        </IconButton>
                      </Stack>
                    </Box>

                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.7rem' }}>
                        {product.brand}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        component={Link}
                        to={`/product/${product.id}`}
                        sx={{
                          fontSize: '0.85rem',
                          lineHeight: 1.4,
                          mb: 0.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: 38,
                          textDecoration: 'none',
                          color: theme.palette.text.primary,
                          '&:hover': { color: theme.palette.primary.main },
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5} mb={0.5}>
                        <Rating value={product.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                          ({product.reviewCount})
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        {product.salePrice ? (
                          <>
                            <Typography variant="subtitle1" color="error.main" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                              {formatPrice(product.salePrice)}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ textDecoration: 'line-through', color: theme.palette.text.disabled, fontSize: '0.75rem' }}
                            >
                              {formatPrice(product.price)}
                            </Typography>
                          </>
                        ) : (
                          <Typography variant="subtitle1" color="text.primary" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                            {formatPrice(product.price)}
                          </Typography>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            <Box display="flex" justifyContent="center" mt={5}>
              <Pagination
                count={3}
                page={1}
                shape="rounded"
                sx={{
                  '& .MuiPaginationItem-root': {
                    borderRadius: 2,
                  },
                  '& .Mui-selected': {
                    bgcolor: `${theme.palette.primary.main} !important`,
                    color: '#fff',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Mobile Filter Drawer */}
        <Drawer
          anchor="bottom"
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              maxHeight: '80vh',
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" fontWeight={700}>
                Bộ lọc
              </Typography>
              <IconButton onClick={() => setFilterOpen(false)}>
                <IconX size={20} />
              </IconButton>
            </Stack>
            <Typography variant="subtitle2" fontWeight={600} mb={1}>
              Khoảng giá
            </Typography>
            <Slider
              value={priceRange}
              onChange={(_, v) => setPriceRange(v as number[])}
              min={0}
              max={1000000}
              step={50000}
              valueLabelDisplay="auto"
              valueLabelFormat={(v) => formatPrice(v)}
              sx={{ color: theme.palette.primary.main, mb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={() => setFilterOpen(false)}
              sx={{
                bgcolor: theme.palette.primary.main,
                borderRadius: 2,
                py: 1.2,
                mt: 2,
              }}
            >
              Áp dụng bộ lọc
            </Button>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
};

export default ProductsPage;
