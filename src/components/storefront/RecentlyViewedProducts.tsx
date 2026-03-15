// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import { IconX } from '@tabler/icons-react';
import { Link } from 'react-router';
import { useRecentlyViewed, RecentlyViewedItem } from '../../context/RecentlyViewedContext';

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

interface RecentlyViewedProductsProps {
  title?: string;
  limit?: number;
}

const RecentlyViewedProducts: React.FC<RecentlyViewedProductsProps> = ({
  title = 'Sản phẩm đã xem gần đây',
  limit = 6
}) => {
  const theme = useTheme();
  const { state, clearAll } = useRecentlyViewed();

  const products = state.items.slice(0, limit);

  if (products.length === 0) return null;

  return (
    <Box sx={{ py: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          {title}
        </Typography>
        {state.items.length > 0 && (
          <Button
            size="small"
            onClick={clearAll}
            startIcon={<IconX size={16} />}
            sx={{ color: 'text.secondary' }}
          >
            Xóa lịch sử
          </Button>
        )}
      </Stack>

      <Grid container spacing={2}>
        {products.map((item: RecentlyViewedItem) => (
          <Grid key={item.id} size={{ xs: 6, sm: 4, md: 2 }}>
            <Card
              component={Link}
              to={`/products/${item.id}`}
              sx={{
                textDecoration: 'none',
                borderRadius: 2,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                boxShadow: 'none',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 24px ${alpha('#000', 0.1)}`,
                },
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{ p: 1.5 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  color="primary.main"
                  sx={{ fontSize: '0.8rem', mt: 0.5 }}
                >
                  {item.salePrice ? formatPrice(item.salePrice) : formatPrice(item.price)}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecentlyViewedProducts;
