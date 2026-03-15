// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
  IconButton,
  Badge,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useTheme,
  useMediaQuery,
  Stack,
  Divider,
  InputBase,
  alpha,
} from '@mui/material';
import {
  IconShoppingCart,
  IconUser,
  IconSearch,
  IconMenu2,
  IconX,
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconHeart,
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { useCart } from '../../../context/CartContext';
import CartDrawer from '../../../components/storefront/CartDrawer';

const NAV_ITEMS = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Sản phẩm', path: '/products' },
  { label: 'Về chúng tôi', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Liên hệ', path: '/contact' },
];

const StorefrontHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const { state: cartState } = useCart();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: '#fff',
          py: 0.75,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={3} alignItems="center">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconPhone size={14} />
                <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.75rem' }}>
                  0123 456 789
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconMail size={14} />
                <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.75rem' }}>
                  contact@naturalskin.vn
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.75rem', mr: 1 }}>
                Miễn phí vận chuyển đơn từ 500K
              </Typography>
              <IconButton size="small" sx={{ color: '#fff', p: 0.3 }}>
                <IconBrandFacebook size={16} />
              </IconButton>
              <IconButton size="small" sx={{ color: '#fff', p: 0.3 }}>
                <IconBrandInstagram size={16} />
              </IconButton>
              <IconButton size="small" sx={{ color: '#fff', p: 0.3 }}>
                <IconBrandTiktok size={16} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.paper,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          backdropFilter: 'blur(20px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              minHeight: { xs: 64, md: 72 },
              px: { xs: 0 },
            }}
          >
            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: theme.palette.text.primary, mr: 1 }}
              >
                <IconMenu2 size={24} />
              </IconButton>
            )}

            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  letterSpacing: '0.05em',
                }}
              >
                Natural
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  color: theme.palette.secondary.main,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  letterSpacing: '0.05em',
                }}
              >
                Skin
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        color: theme.palette.primary.main,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 2,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 1,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '60%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Right Actions */}
            <Stack direction="row" spacing={0.5} alignItems="center">
              {/* Search */}
              {searchOpen && !isMobile ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: alpha(theme.palette.primary.main, 0.06),
                    borderRadius: 2,
                    px: 1.5,
                    mr: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <IconSearch size={18} color={theme.palette.text.secondary} />
                  <InputBase
                    placeholder="Tìm kiếm sản phẩm..."
                    autoFocus
                    sx={{
                      ml: 1,
                      fontSize: '0.875rem',
                      width: 200,
                    }}
                    onBlur={() => setSearchOpen(false)}
                  />
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSearchOpen(true)}
                  sx={{ color: theme.palette.text.primary }}
                >
                  <IconSearch size={22} />
                </IconButton>
              )}

              {/* Cart */}
              <IconButton
                onClick={() => setCartOpen(true)}
                sx={{ color: theme.palette.text.primary }}
              >
                <Badge badgeContent={cartState.totalItems} color="secondary">
                  <IconShoppingCart size={22} />
                </Badge>
              </IconButton>

              {/* Wishlist */}
              <IconButton
                onClick={() => navigate('/wishlist')}
                sx={{ color: theme.palette.text.primary }}
              >
                <IconHeart size={22} />
              </IconButton>

              {/* User */}
              <IconButton
                onClick={() => navigate('/auth/login')}
                sx={{ color: theme.palette.text.primary }}
              >
                <IconUser size={22} />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: theme.palette.primary.main,
              }}
            >
              Natural{' '}
              <Box component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 400 }}>
                Skin
              </Box>
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              <IconX size={20} />
            </IconButton>
          </Stack>
          <Divider sx={{ mb: 1 }} />
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 1.5,
                    mb: 0.5,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
          <Stack spacing={1} sx={{ px: 2, pt: 1 }}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <IconPhone size={14} color={theme.palette.text.secondary} />
              <Typography variant="body2" color="text.secondary">
                0123 456 789
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <IconMail size={14} color={theme.palette.text.secondary} />
              <Typography variant="body2" color="text.secondary">
                contact@naturalskin.vn
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Drawer>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default StorefrontHeader;
