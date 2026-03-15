// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
  Link as MuiLink,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  '/': [{ label: 'Trang chủ' }],
  '/products': [{ label: 'Trang chủ' }, { label: 'Sản phẩm' }],
  '/about': [{ label: 'Trang chủ' }, { label: 'Về chúng tôi' }],
  '/blog': [{ label: 'Trang chủ' }, { label: 'Blog' }],
  '/contact': [{ label: 'Trang chủ' }, { label: 'Liên hệ' }],
  '/cart': [{ label: 'Trang chủ' }, { label: 'Giỏ hàng' }],
  '/checkout': [{ label: 'Trang chủ' }, { label: 'Giỏ hàng' }, { label: 'Thanh toán' }],
  '/wishlist': [{ label: 'Trang chủ' }, { label: 'Yêu thích' }],
};

const Breadcrumbs: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();

  // Generate breadcrumbs based on path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;

    // Check for exact match first
    if (breadcrumbMap[path]) {
      return breadcrumbMap[path];
    }

    // Check for dynamic routes
    if (path.startsWith('/products/')) {
      return [
        { label: 'Trang chủ', path: '/' },
        { label: 'Sản phẩm', path: '/products' },
        { label: 'Chi tiết sản phẩm' },
      ];
    }

    if (path.startsWith('/blog/')) {
      return [
        { label: 'Trang chủ', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: 'Chi tiết bài viết' },
      ];
    }

    if (path.startsWith('/auth/')) {
      return [
        { label: 'Trang chủ', path: '/' },
        { label: path === '/auth/login' ? 'Đăng nhập' : 'Đăng ký' },
      ];
    }

    return [{ label: 'Trang chủ' }];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <Box sx={{ py: 2, px: { xs: 2, md: 0 } }}>
      <MuiBreadcrumbs
        separator="/"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'text.disabled',
          },
        }}
      >
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          if (isLast || !item.path) {
            return (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: isLast ? 'text.primary' : 'text.secondary',
                  fontWeight: isLast ? 600 : 400,
                }}
              >
                {item.label}
              </Typography>
            );
          }

          return (
            <MuiLink
              key={index}
              component={Link}
              to={item.path}
              underline="hover"
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {item.label}
            </MuiLink>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
