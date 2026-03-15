// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Card,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconCheck,
  IconShoppingCart,
  IconPackage,
  IconMail,
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const OrderSuccessPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Generate random order number
  const orderNumber = `NS${Date.now().toString().slice(-8)}`;

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box textAlign="center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  bgcolor: alpha(theme.palette.success.main, 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                <IconCheck size={56} color={theme.palette.success.main} />
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Đặt hàng thành công!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1, fontSize: '1.1rem' }}>
                Cảm ơn bạn đã mua sắm tại Natural Skin
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Mã đơn hàng của bạn: <strong>{orderNumber}</strong>
              </Typography>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Stack spacing={2} sx={{ mb: 4 }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: 'none',
                    textAlign: 'left',
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconMail size={24} color={theme.palette.primary.main} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 0.5 }}>
                        Email xác nhận đã gửi
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Chúng tôi đã gửi email xác nhận đơn hàng đến địa chỉ email của bạn.
                      </Typography>
                    </Box>
                  </Stack>
                </Card>

                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: 'none',
                    textAlign: 'left',
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.secondary.main, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconPackage size={24} color={theme.palette.secondary.main} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 0.5 }}>
                        Thời gian giao hàng dự kiến
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Đơn hàng sẽ được giao trong vòng 3-5 ngày làm việc.
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Stack>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  component={Link}
                  to="/products"
                  variant="contained"
                  size="large"
                  startIcon={<IconShoppingCart size={20} />}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    bgcolor: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Tiếp tục mua sắm
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/')}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                  }}
                >
                  Về trang chủ
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OrderSuccessPage;
