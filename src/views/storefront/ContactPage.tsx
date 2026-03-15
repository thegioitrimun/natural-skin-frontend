// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  TextField,
  Button,
  useTheme,
  alpha,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconSend,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Container maxWidth="xl">
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink component={Link} to="/" underline="hover" color="inherit">Trang chủ</MuiLink>
          <Typography color="text.primary" fontWeight={500}>Liên hệ</Typography>
        </Breadcrumbs>

        <Box textAlign="center" mb={6}>
          <Typography
            variant="h1"
            sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, mb: 1 }}
          >
            Liên hệ với chúng tôi
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  color: '#fff',
                  height: '100%',
                }}
              >
                <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 1 }}>
                  Thông tin liên hệ
                </Typography>
                <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mb: 4 }}>
                  Liên hệ với chúng tôi qua các kênh sau
                </Typography>

                <Stack spacing={3}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ p: 1, bgcolor: alpha('#fff', 0.15), borderRadius: 2 }}>
                      <IconMapPin size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>Địa chỉ</Typography>
                      <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>
                        123 Nguyễn Huệ, Phường Bến Nghé,<br />Quận 1, TP. Hồ Chí Minh
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ p: 1, bgcolor: alpha('#fff', 0.15), borderRadius: 2 }}>
                      <IconPhone size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>Điện thoại</Typography>
                      <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>
                        0123 456 789
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ p: 1, bgcolor: alpha('#fff', 0.15), borderRadius: 2 }}>
                      <IconMail size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>Email</Typography>
                      <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>
                        contact@naturalskin.vn
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ p: 1, bgcolor: alpha('#fff', 0.15), borderRadius: 2 }}>
                      <IconClock size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>Giờ làm việc</Typography>
                      <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>
                        Thứ 2 - Thứ 7: 8:00 - 21:00<br />Chủ nhật: 9:00 - 18:00
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={1} mt={4}>
                  {[IconBrandFacebook, IconBrandInstagram, IconBrandTiktok].map((Icon, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: alpha('#fff', 0.15),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: alpha('#fff', 0.25),
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Icon size={18} />
                    </Box>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  boxShadow: 'none',
                }}
              >
                <Typography variant="h5" fontWeight={700} mb={3}>
                  Gửi tin nhắn cho chúng tôi
                </Typography>

                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Họ và tên"
                      placeholder="Nguyễn Văn A"
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      placeholder="email@example.com"
                      type="email"
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Số điện thoại"
                      placeholder="0123 456 789"
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Chủ đề"
                      placeholder="Hỏi về sản phẩm"
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Nội dung tin nhắn"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      multiline
                      rows={5}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<IconSend size={18} />}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 2,
                        px: 5,
                        py: 1.5,
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: theme.palette.primary.dark,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Gửi tin nhắn
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map */}
        <Box mt={6}>
          <Card
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              boxShadow: 'none',
            }}
          >
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674198073!2d106.69901!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e1234567%3A0x1234567890abcdef!2zMTIzIE5ndXnhu4VuIEh14buHLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1234567890!5m2!1svi!2s"
              sx={{
                width: '100%',
                height: { xs: 250, md: 400 },
                border: 'none',
              }}
              loading="lazy"
              title="Natural Skin Location"
            />
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
