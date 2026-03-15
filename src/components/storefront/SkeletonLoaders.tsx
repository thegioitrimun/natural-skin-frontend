// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Skeleton,
  Card,
  Grid,
  useTheme,
  alpha,
} from '@mui/material';

export const ProductCardSkeleton: React.FC = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 3,
        border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
        boxShadow: 'none',
        overflow: 'hidden',
      }}
    >
      <Skeleton variant="rectangular" height={260} animation="wave" />
      <Box sx={{ p: 2 }}>
        <Skeleton variant="text" width="40%" height={16} animation="wave" />
        <Skeleton variant="text" width="80%" height={24} sx={{ mt: 1 }} animation="wave" />
        <Skeleton variant="text" width="30%" height={20} sx={{ mt: 1 }} animation="wave" />
        <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
          <Skeleton variant="rounded" width={60} height={24} animation="wave" />
          <Skeleton variant="rounded" width={60} height={24} animation="wave" />
        </Box>
      </Box>
    </Card>
  );
};

export const ProductGridSkeleton: React.FC<{ count?: number }> = ({ count = 8 }) => {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
          <ProductCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export const ProductDetailSkeleton: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        {/* Images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Skeleton variant="rectangular" height={500} animation="wave" sx={{ borderRadius: 3 }} />
          <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} variant="rectangular" width={80} height={80} animation="wave" sx={{ borderRadius: 2 }} />
            ))}
          </Box>
        </Grid>

        {/* Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Skeleton variant="text" width="30%" height={20} animation="wave" />
          <Skeleton variant="text" width="80%" height={48} animation="wave" sx={{ mt: 1 }} />
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <Skeleton variant="circular" width={100} height={24} animation="wave" />
            <Skeleton variant="text" width="20%" height={20} animation="wave" />
          </Box>
          <Skeleton variant="text" width="40%" height={48} animation="wave" sx={{ mt: 2 }} />
          <Skeleton variant="text" width="100%" height={60} animation="wave" sx={{ mt: 2 }} />
          <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
            <Skeleton variant="rounded" width={100} height={44} animation="wave" sx={{ borderRadius: 2 }} />
            <Skeleton variant="rounded" width={200} height={44} animation="wave" sx={{ borderRadius: 2 }} />
          </Box>
          <Skeleton variant="rounded" width="100%" height={48} animation="wave" sx={{ mt: 3, borderRadius: 2 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export const CartItemSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        p: 2,
        borderRadius: 2,
        border: '1px solid #eee',
      }}
    >
      <Skeleton variant="rectangular" width={140} height={140} animation="wave" sx={{ borderRadius: 2 }} />
      <Box sx={{ flex: 1 }}>
        <Skeleton variant="text" width="30%" height={16} animation="wave" />
        <Skeleton variant="text" width="80%" height={24} animation="wave" />
        <Skeleton variant="text" width="20%" height={20} animation="wave" sx={{ mt: 1 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Skeleton variant="rounded" width={100} height={32} animation="wave" sx={{ borderRadius: 2 }} />
          <Skeleton variant="text" width="20%" height={24} animation="wave" />
        </Box>
      </Box>
    </Box>
  );
};

export const HomepageSkeleton: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ py: 8, bgcolor: alpha(theme.palette.primary.main, 0.02) }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Skeleton variant="rounded" width={100} height={32} animation="wave" sx={{ borderRadius: 2, mb: 3 }} />
            <Skeleton variant="text" width="90%" height={64} animation="wave" />
            <Skeleton variant="text" width="70%" height={64} animation="wave" />
            <Skeleton variant="text" width="50%" height={24} animation="wave" sx={{ mt: 2 }} />
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Skeleton variant="rounded" width={160} height={48} animation="wave" sx={{ borderRadius: 3 }} />
              <Skeleton variant="rounded" width={140} height={48} animation="wave" sx={{ borderRadius: 3 }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Skeleton variant="rectangular" height={500} animation="wave" sx={{ borderRadius: 4 }} />
          </Grid>
        </Grid>
      </Box>

      {/* Categories */}
      <Box sx={{ py: 10 }}>
        <Skeleton variant="text" width={300} height={48} animation="wave" sx={{ mx: 'auto', mb: 6 }} />
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Grid key={i} size={{ xs: 6, sm: 4, md: 2 }}>
              <Card sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Skeleton variant="circular" width={60} height={60} animation="wave" sx={{ mx: 'auto', mb: 2 }} />
                <Skeleton variant="text" width="80%" height={24} animation="wave" sx={{ mx: 'auto' }} />
                <Skeleton variant="text" width="50%" height={16} animation="wave" sx={{ mx: 'auto' }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Products */}
      <Box sx={{ py: 10, bgcolor: alpha(theme.palette.primary.main, 0.02) }}>
        <Skeleton variant="text" width={300} height={48} animation="wave" sx={{ mb: 5 }} />
        <ProductGridSkeleton count={8} />
      </Box>
    </Box>
  );
};

export const BlogCardSkeleton: React.FC = () => {
  return (
    <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <Box sx={{ p: 3 }}>
        <Skeleton variant="text" width="30%" height={20} animation="wave" />
        <Skeleton variant="text" width="90%" height={32} animation="wave" sx={{ mt: 1 }} />
        <Skeleton variant="text" width="100%" height={60} animation="wave" sx={{ mt: 1 }} />
        <Skeleton variant="text" width="20%" height={20} animation="wave" sx={{ mt: 2 }} />
      </Box>
    </Card>
  );
};
