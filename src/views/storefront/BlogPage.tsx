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
  Stack,
  Chip,
  useTheme,
  alpha,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { IconCalendar, IconUser, IconClock } from '@tabler/icons-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const blogPosts = [
  {
    id: 1, title: '10 Bước Chăm Sóc Da Ban Đêm Hoàn Hảo',
    excerpt: 'Hướng dẫn chi tiết routine chăm sóc da ban đêm giúp da phục hồi và tái tạo tối ưu.',
    coverImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop',
    category: 'Chăm sóc da', author: 'Dr. Minh Anh', date: '15/03/2026', readTime: 8,
  },
  {
    id: 2, title: 'Cách Chọn Kem Chống Nắng Phù Hợp Với Loại Da',
    excerpt: 'Hướng dẫn chọn kem chống nắng đúng cách dành cho từng loại da: dầu, khô, nhạy cảm.',
    coverImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
    category: 'Tips & Tricks', author: 'Thanh Hà', date: '12/03/2026', readTime: 6,
  },
  {
    id: 3, title: 'Xu Hướng Makeup Tự Nhiên 2026',
    excerpt: 'Khám phá những xu hướng trang điểm tự nhiên đang hot nhất trong năm 2026.',
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop',
    category: 'Trang điểm', author: 'Ngọc Trinh', date: '10/03/2026', readTime: 5,
  },
  {
    id: 4, title: 'Serum Vitamin C: Hướng Dẫn Sử Dụng Toàn Diện',
    excerpt: 'Mọi điều bạn cần biết về serum vitamin C và cách sử dụng hiệu quả nhất.',
    coverImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop',
    category: 'Chăm sóc da', author: 'Dr. Minh Anh', date: '08/03/2026', readTime: 10,
  },
  {
    id: 5, title: 'Top 5 Thành Phần Chống Lão Hóa Hiệu Quả Nhất',
    excerpt: 'Retinol, Vitamin C, Niacinamide... Đâu là thành phần chống lão hóa tốt nhất cho bạn?',
    coverImage: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=400&fit=crop',
    category: 'Chăm sóc da', author: 'Thanh Hà', date: '05/03/2026', readTime: 7,
  },
  {
    id: 6, title: 'Chăm Sóc Da Mùa Hè: Những Điều Cần Biết',
    excerpt: 'Bảo vệ da khỏi tác hại của ánh nắng mặt trời và giữ da luôn tươi mát.',
    coverImage: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=400&fit=crop',
    category: 'Tips & Tricks', author: 'Ngọc Trinh', date: '01/03/2026', readTime: 6,
  },
];

const categories = ['Tất cả', 'Chăm sóc da', 'Trang điểm', 'Tips & Tricks'];

const BlogPage = () => {
  const theme = useTheme();
  const [selectedCat, setSelectedCat] = React.useState('Tất cả');

  const filtered = blogPosts.filter((p) => selectedCat === 'Tất cả' || p.category === selectedCat);

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Container maxWidth="xl">
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink component={Link} to="/" underline="hover" color="inherit">Trang chủ</MuiLink>
          <Typography color="text.primary" fontWeight={500}>Blog</Typography>
        </Breadcrumbs>

        <Box mb={4}>
          <Typography
            variant="h1"
            sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, mb: 1 }}
          >
            Blog & Tin tức
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Chia sẻ kiến thức chăm sóc da và làm đẹp
          </Typography>
        </Box>

        {/* Category filter */}
        <Stack direction="row" spacing={1} mb={5} flexWrap="wrap" useFlexGap>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setSelectedCat(cat)}
              sx={{
                borderRadius: 2,
                fontWeight: 500,
                bgcolor: selectedCat === cat ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.06),
                color: selectedCat === cat ? '#fff' : theme.palette.text.primary,
                '&:hover': {
                  bgcolor: selectedCat === cat ? theme.palette.primary.dark : alpha(theme.palette.primary.main, 0.12),
                },
              }}
            />
          ))}
        </Stack>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <Grid container spacing={3}>
            {filtered.map((post) => (
              <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={fadeInUp}>
                  <Card
                    component={Link}
                    to={`/blog/${post.id}`}
                    sx={{
                      borderRadius: 3,
                      border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                      boxShadow: 'none',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 40px ${alpha('#000', 0.1)}`,
                      },
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Box sx={{ overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.coverImage}
                        alt={post.title}
                        sx={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          fontSize: '0.7rem',
                          mb: 1.5,
                          alignSelf: 'flex-start',
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          mb: 1,
                          color: theme.palette.text.primary,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          lineHeight: 1.7,
                          flexGrow: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.08)}` }}>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <IconUser size={14} color={theme.palette.text.secondary} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            {post.author}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <IconCalendar size={14} color={theme.palette.text.secondary} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            {post.date}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <IconClock size={14} color={theme.palette.text.secondary} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            {post.readTime} phút
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogPage;
