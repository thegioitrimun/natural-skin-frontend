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
  Button,
  Stack,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  alpha,
  Divider,
} from '@mui/material';
import {
  IconTruck,
  IconCreditCard,
  IconMapPin,
  IconBuildingStore,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

const steps = ['Thông tin giao hàng', 'Phương thức vận chuyển', 'Phương thức thanh toán', 'Xác nhận đơn hàng'];

const CheckoutPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      title: 'Serum Vitamin C 20% Brightening',
      price: 520000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=80&h=80&fit=crop',
    },
    {
      id: 2,
      title: 'Kem Chống Nắng SPF50+ PA++++',
      price: 890000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&h=80&fit=crop',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      // Complete order - redirect to success
      navigate('/');
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={3}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Thông tin giao hàng</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="Họ và tên" placeholder="Nguyễn Văn A" required />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="Số điện thoại" placeholder="0123 456 789" required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="Email" placeholder="email@example.com" type="email" required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="Địa chỉ" placeholder="Số nhà, đường, phường/xã" required />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label="Tỉnh/Thành" placeholder="TP. Hồ Chí Minh" required />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label="Quận/Huyện" placeholder="Quận 1" required />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth label="Phường/Xã" placeholder="Phường Bến Nghé" required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="Ghi chú" placeholder="Ghi chú thêm cho đơn hàng..." multiline rows={3} />
              </Grid>
            </Grid>
          </Stack>
        );

      case 1:
        return (
          <Stack spacing={3}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Phương thức vận chuyển</Typography>
            <FormControl component="fieldset">
              <RadioGroup defaultValue="standard">
                <Card
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    border: `2px solid ${theme.palette.primary.main}`,
                    bgcolor: alpha(theme.palette.primary.main, 0.04),
                  }}
                >
                  <FormControlLabel
                    value="standard"
                    control={<Radio />}
                    label={
                      <Stack direction="row" spacing={2} alignItems="center">
                        <IconTruck size={24} color={theme.palette.primary.main} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>Giao tiêu chuẩn</Typography>
                          <Typography variant="body2" color="text.secondary">3-5 ngày làm việc</Typography>
                        </Box>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ ml: 'auto' }}>
                          {subtotal > 500000 ? 'Miễn phí' : formatPrice(30000)}
                        </Typography>
                      </Stack>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </Card>
                <Card sx={{ p: 2, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }}>
                  <FormControlLabel
                    value="express"
                    control={<Radio />}
                    label={
                      <Stack direction="row" spacing={2} alignItems="center">
                        <IconBuildingStore size={24} color={theme.palette.secondary.main} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>Giao hàng nhanh</Typography>
                          <Typography variant="body2" color="text.secondary">1-2 ngày làm việc</Typography>
                        </Box>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ ml: 'auto' }}>
                          {formatPrice(50000)}
                        </Typography>
                      </Stack>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </Card>
              </RadioGroup>
            </FormControl>
          </Stack>
        );

      case 2:
        return (
          <Stack spacing={3}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Phương thức thanh toán</Typography>
            <FormControl component="fieldset">
              <RadioGroup defaultValue="cod">
                <Card
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    border: `2px solid ${theme.palette.primary.main}`,
                    bgcolor: alpha(theme.palette.primary.main, 0.04),
                  }}
                >
                  <FormControlLabel
                    value="cod"
                    control={<Radio />}
                    label={
                      <Stack direction="row" spacing={2} alignItems="center">
                        <IconMapPin size={24} color={theme.palette.primary.main} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>Thanh toán khi nhận hàng (COD)</Typography>
                          <Typography variant="body2" color="text.secondary">Trả tiền mặt khi nhận được hàng</Typography>
                        </Box>
                      </Stack>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </Card>
                <Card sx={{ p: 2, mb: 2, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }}>
                  <FormControlLabel
                    value="bank"
                    control={<Radio />}
                    label={
                      <Stack direction="row" spacing={2} alignItems="center">
                        <IconCreditCard size={24} color={theme.palette.secondary.main} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>Chuyển khoản ngân hàng</Typography>
                          <Typography variant="body2" color="text.secondary">Chuyển khoản trước qua ngân hàng</Typography>
                        </Box>
                      </Stack>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </Card>
                <Card sx={{ p: 2, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }}>
                  <FormControlLabel
                    value="momo"
                    control={<Radio />}
                    label={
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#D32F2F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>M</Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>Ví điện tử MoMo</Typography>
                          <Typography variant="body2" color="text.secondary">Thanh toán qua ứng dụng MoMo</Typography>
                        </Box>
                      </Stack>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </Card>
              </RadioGroup>
            </FormControl>
          </Stack>
        );

      case 3:
        return (
          <Stack spacing={3}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Xác nhận đơn hàng</Typography>

            {/* Order Summary */}
            <Card sx={{ p: 3, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }}>
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>Sản phẩm</Typography>
              <Stack spacing={2}>
                {cartItems.map((item) => (
                  <Stack key={item.id} direction="row" spacing={2} alignItems="center">
                    <CardMedia
                      component="img"
                      sx={{ width: 60, height: 60, borderRadius: 1 }}
                      image={item.image}
                      alt={item.title}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight={500}>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">x{item.quantity}</Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={600}>{formatPrice(item.price * item.quantity)}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Tạm tính</Typography>
                  <Typography>{formatPrice(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Phí vận chuyển</Typography>
                  <Typography>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6" fontWeight={600}>Tổng cộng</Typography>
                  <Typography variant="h6" fontWeight={700} color="primary.main">{formatPrice(total)}</Typography>
                </Stack>
              </Stack>
            </Card>

            <Card sx={{ p: 3, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }}>
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>Thông tin giao hàng</Typography>
              <Stack spacing={1}>
                <Typography><strong>Nguyễn Văn A</strong></Typography>
                <Typography variant="body2" color="text.secondary">0123 456 789</Typography>
                <Typography variant="body2" color="text.secondary">email@example.com</Typography>
                <Typography variant="body2" color="text.secondary">123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</Typography>
              </Stack>
            </Card>
          </Stack>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ py: { xs: 3, md: 5 }, bgcolor: alpha(theme.palette.primary.main, 0.02), minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Thanh toán
          </Typography>

          {/* Stepper */}
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ p: 4, borderRadius: 3, border: `1px solid ${alpha(theme.palette.divider, 0.1)}`, boxShadow: 'none' }}>
                {renderStepContent(activeStep)}

                <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(activeStep - 1)}
                    sx={{ borderRadius: 2 }}
                  >
                    Quay lại
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      borderRadius: 2,
                      px: 4,
                      bgcolor: theme.palette.primary.main,
                      '&:hover': { bgcolor: theme.palette.primary.dark },
                    }}
                  >
                    {activeStep === steps.length - 1 ? 'Đặt hàng' : 'Tiếp tục'}
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, borderRadius: 3, border: `1px solid ${alpha(theme.palette.divider, 0.1)}`, boxShadow: 'none', position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>Tổng quan đơn hàng</Typography>

                <Stack spacing={2}>
                  {cartItems.map((item) => (
                    <Stack key={item.id} direction="row" spacing={2} alignItems="center">
                      <Box sx={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 50, height: 50, borderRadius: 1 }}
                          image={item.image}
                          alt={item.title}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            color: '#fff',
                            fontSize: '0.7rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {item.quantity}
                        </Box>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" noWrap sx={{ maxWidth: 180 }}>{item.title}</Typography>
                      </Box>
                      <Typography variant="body2" fontWeight={600}>{formatPrice(item.price * item.quantity)}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="text.secondary">Tạm tính</Typography>
                    <Typography>{formatPrice(subtotal)}</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="text.secondary">Vận chuyển</Typography>
                    <Typography>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</Typography>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6" fontWeight={600}>Tổng</Typography>
                    <Typography variant="h6" fontWeight={700} color="primary.main">{formatPrice(total)}</Typography>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CheckoutPage;
