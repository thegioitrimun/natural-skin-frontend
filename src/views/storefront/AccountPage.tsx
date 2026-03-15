// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Card,
  Grid,
  TextField,
  Button,
  Stack,
  Avatar,
  Divider,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconUser,
  IconShoppingCart,
  IconHeart,
  IconLock,
  IconEdit,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <Box hidden={value !== index} sx={{ py: 3 }}>
    {value === index && children}
  </Box>
);

// Mock order data
const orders = [
  { id: 'NS001', date: '15/03/2024', status: 'Delivered', total: 1250000 },
  { id: 'NS002', date: '10/03/2024', status: 'Processing', total: 890000 },
  { id: 'NS003', date: '05/03/2024', status: 'Delivered', total: 520000 },
];

const AccountPage = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: { xs: 3, md: 5 }, bgcolor: alpha(theme.palette.primary.main, 0.02), minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 4 }}>
            Tài khoản của tôi
          </Typography>

          <Grid container spacing={4}>
            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Card sx={{ p: 3, borderRadius: 3, border: `1px solid ${alpha(theme.palette.divider, 0.1)}`, boxShadow: 'none' }}>
                <Stack alignItems="center" spacing={2} mb={3}>
                  <Avatar sx={{ width: 80, height: 80, bgcolor: theme.palette.primary.main, fontSize: '2rem' }}>
                    N
                  </Avatar>
                  <Box textAlign="center">
                    <Typography variant="h6" fontWeight={600}>Nguyễn Văn A</Typography>
                    <Typography variant="body2" color="text.secondary">nguyenvana@email.com</Typography>
                  </Box>
                </Stack>

                <Tabs
                  orientation="vertical"
                  value={tabValue}
                  onChange={handleTabChange}
                  sx={{
                    '& .MuiTab-root': {
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      textTransform: 'none',
                      px: 2,
                      py: 1.5,
                    },
                    '& .Mui-selected': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      borderRadius: 2,
                    },
                  }}
                >
                  <Tab icon={<IconUser size={20} />} label="Thông tin cá nhân" iconPosition="start" />
                  <Tab icon={<IconShoppingCart size={20} />} label="Lịch sử đơn hàng" iconPosition="start" />
                  <Tab icon={<IconHeart size={20} />} label="Sản phẩm yêu thích" iconPosition="start" />
                  <Tab icon={<IconLock size={20} />} label="Đổi mật khẩu" iconPosition="start" />
                </Tabs>
              </Card>
            </Grid>

            {/* Content */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Card sx={{ p: 3, borderRadius: 3, border: `1px solid ${alpha(theme.palette.divider, 0.1)}`, boxShadow: 'none' }}>
                {/* Profile Tab */}
                <TabPanel value={tabValue} index={0}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>Thông tin cá nhân</Typography>
                    <Button startIcon={<IconEdit size={16} />} size="small">Chỉnh sửa</Button>
                  </Stack>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Họ và tên" defaultValue="Nguyễn Văn A" disabled />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email" defaultValue="nguyenvana@email.com" disabled />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Số điện thoại" defaultValue="0123 456 789" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Ngày sinh" defaultValue="01/01/1990" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="Địa chỉ" defaultValue="123 Nguyễn Huệ, Quận 1, TP.HCM" />
                    </Grid>
                  </Grid>
                  <Button variant="contained" sx={{ mt: 3 }}>Lưu thay đổi</Button>
                </TabPanel>

                {/* Orders Tab */}
                <TabPanel value={tabValue} index={1}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Lịch sử đơn hàng</Typography>
                  <Stack spacing={2}>
                    {orders.map((order) => (
                      <Card key={order.id} sx={{ p: 2, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600}>Đơn hàng #{order.id}</Typography>
                            <Typography variant="body2" color="text.secondary">{order.date}</Typography>
                          </Box>
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle1" fontWeight={600}>{order.total.toLocaleString('vi-VN')}đ</Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: order.status === 'Delivered' ? 'success.main' : 'warning.main',
                                fontWeight: 500,
                              }}
                            >
                              {order.status === 'Delivered' ? 'Đã giao' : 'Đang xử lý'}
                            </Typography>
                          </Box>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                </TabPanel>

                {/* Wishlist Tab */}
                <TabPanel value={tabValue} index={2}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Sản phẩm yêu thích</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bạn chưa có sản phẩm yêu thích nào.
                  </Typography>
                </TabPanel>

                {/* Password Tab */}
                <TabPanel value={tabValue} index={3}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Đổi mật khẩu</Typography>
                  <Stack spacing={3} maxWidth={400}>
                    <TextField fullWidth label="Mật khẩu hiện tại" type="password" />
                    <TextField fullWidth label="Mật khẩu mới" type="password" />
                    <TextField fullWidth label="Xác nhận mật khẩu mới" type="password" />
                    <Button variant="contained" sx={{ width: 'fit-content' }}>Cập nhật mật khẩu</Button>
                  </Stack>
                </TabPanel>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AccountPage;
