// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Stack,
  Button,
  Divider,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconX,
  IconTrash,
  IconPlus,
  IconMinus,
  IconShoppingCart,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useCart } from '../../context/CartContext';

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { state, removeItem, updateQuantity } = useCart();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 420 },
          maxWidth: '100vw',
          bgcolor: theme.palette.background.paper,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <IconShoppingCart size={24} color={theme.palette.primary.main} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Giỏ hàng
          </Typography>
          <Box
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              px: 1.5,
              py: 0.25,
              borderRadius: 10,
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            {state.totalItems} sản phẩm
          </Box>
        </Stack>
        <IconButton onClick={onClose} size="small">
          <IconX size={20} />
        </IconButton>
      </Box>

      {/* Cart Items */}
      {state.items.length === 0 ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <IconShoppingCart size={40} color={theme.palette.primary.main} />
          </Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Giỏ hàng trống
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Hãy thêm sản phẩm vào giỏ hàng của bạn
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              onClose();
              navigate('/products');
            }}
            sx={{ borderRadius: 2 }}
          >
            Tiếp tục mua sắm
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
            <Stack spacing={2}>
              {state.items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    bgcolor: alpha(theme.palette.primary.main, 0.02),
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      flexShrink: 0,
                      borderRadius: 1.5,
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      onClose();
                      navigate(`/products/${item.id}`);
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    />
                  </Box>

                  {/* Details */}
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: '0.7rem', mb: 0.25 }}
                    >
                      {item.brand}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{
                        fontSize: '0.85rem',
                        lineHeight: 1.3,
                        mb: 0.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        '&:hover': { color: theme.palette.primary.main },
                      }}
                      onClick={() => {
                        onClose();
                        navigate(`/products/${item.id}`);
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', mb: 1 }}>
                      {item.variant}
                    </Typography>

                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 'auto' }}>
                      {/* Quantity */}
                      <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: 1.5,
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          sx={{ borderRadius: 1 }}
                        >
                          <IconMinus size={14} />
                        </IconButton>
                        <Typography
                          sx={{
                            px: 1.5,
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            minWidth: 28,
                            textAlign: 'center',
                          }}
                        >
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= 10}
                          sx={{ borderRadius: 1 }}
                        >
                          <IconPlus size={14} />
                        </IconButton>
                      </Stack>

                      {/* Price & Remove */}
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" fontWeight={700} color="primary.main">
                          {formatPrice((item.salePrice || item.price) * item.quantity)}
                        </Typography>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => removeItem(item.id)}
                          sx={{ ml: 0.5 }}
                        >
                          <IconTrash size={16} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              p: 2.5,
              borderTop: `1px solid ${theme.palette.divider}`,
              bgcolor: alpha(theme.palette.primary.main, 0.02),
            }}
          >
            {/* Free shipping progress */}
            {state.subtotal < 500000 && (
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Miễn phí vận chuyển
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={600}>
                    {formatPrice(500000 - state.subtotal)} more
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      width: `${Math.min(100, (state.subtotal / 500000) * 100)}%`,
                      height: '100%',
                      borderRadius: 3,
                      bgcolor: theme.palette.primary.main,
                      transition: 'width 0.3s ease',
                    }}
                  />
                </Box>
              </Box>
            )}

            <Stack spacing={1.5}>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Tạm tính</Typography>
                <Typography fontWeight={600}>{formatPrice(state.subtotal)}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Phí vận chuyển</Typography>
                <Typography fontWeight={600}>
                  {state.shipping === 0 ? 'Miễn phí' : formatPrice(state.shipping)}
                </Typography>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6" fontWeight={700}>
                  Tổng cộng
                </Typography>
                <Typography variant="h6" fontWeight={700} color="primary.main">
                  {formatPrice(state.total)}
                </Typography>
              </Stack>
            </Stack>

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleCheckout}
              sx={{
                mt: 2.5,
                borderRadius: 2.5,
                py: 1.5,
                fontSize: '0.95rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                '&:hover': {
                  boxShadow: `0 6px 24px ${alpha(theme.palette.primary.main, 0.5)}`,
                },
              }}
            >
              Tiến hành thanh toán
            </Button>

            <Button
              variant="text"
              fullWidth
              onClick={() => {
                onClose();
                navigate('/cart');
              }}
              sx={{ mt: 1, color: 'text.secondary' }}
            >
              Xem giỏ hàng
            </Button>
          </Box>
        </>
      )}
    </Drawer>
  );
};

export default CartDrawer;
