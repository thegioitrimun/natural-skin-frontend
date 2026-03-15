// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Link as MuiLink,
  IconButton,
  Divider,
  TextField,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconMapPin,
  IconPhone,
  IconMail,
  IconSend,
} from '@tabler/icons-react';
import { Link } from 'react-router';

const footerLinks = {
  about: [
    { label: 'Giới thiệu', path: '/about' },
    { label: 'Câu chuyện thương hiệu', path: '/about' },
    { label: 'Tuyển dụng', path: '/about' },
    { label: 'Blog', path: '/blog' },
  ],
  policy: [
    { label: 'Chính sách bảo mật', path: '#' },
    { label: 'Chính sách đổi trả', path: '#' },
    { label: 'Điều khoản sử dụng', path: '#' },
    { label: 'Chính sách vận chuyển', path: '#' },
  ],
  support: [
    { label: 'Hướng dẫn mua hàng', path: '#' },
    { label: 'Hướng dẫn thanh toán', path: '#' },
    { label: 'Câu hỏi thường gặp', path: '#' },
    { label: 'Liên hệ', path: '/contact' },
  ],
};

const StorefrontFooter = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? alpha('#000', 0.3) : '#2D2D2D',
        color: '#E0E0E0',
        pt: { xs: 5, md: 7 },
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        {/* Newsletter bar */}
        <Box
          sx={{
            bgcolor: alpha(theme.palette.primary.main, 0.15),
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: { xs: 5, md: 7 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              Đăng ký nhận tin
            </Typography>
            <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>
              Nhận ưu đãi độc quyền và cập nhật sản phẩm mới nhất
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} sx={{ minWidth: { md: 400 } }}>
            <TextField
              placeholder="Email của bạn..."
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: alpha('#fff', 0.1),
                  borderRadius: 2,
                  color: '#fff',
                  '& fieldset': { borderColor: alpha('#fff', 0.2) },
                  '&:hover fieldset': { borderColor: alpha('#fff', 0.4) },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
                '& .MuiOutlinedInput-input::placeholder': {
                  color: alpha('#fff', 0.5),
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.primary.main,
                borderRadius: 2,
                px: 3,
                whiteSpace: 'nowrap',
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
              startIcon={<IconSend size={16} />}
            >
              Đăng ký
            </Button>
          </Stack>
        </Box>

        {/* Main footer content */}
        <Grid container spacing={4}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              Natural{' '}
              <Box component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 400 }}>
                Skin
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ color: alpha('#fff', 0.65), mb: 2, lineHeight: 1.8 }}>
              Chúng tôi mang đến những sản phẩm mỹ phẩm thiên nhiên chất lượng cao,
              an toàn và hiệu quả cho làn da của bạn.
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <IconMapPin size={16} color={theme.palette.primary.main} />
                <Typography variant="body2" sx={{ color: alpha('#fff', 0.65) }}>
                  123 Nguyễn Huệ, Quận 1, TP.HCM
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <IconPhone size={16} color={theme.palette.primary.main} />
                <Typography variant="body2" sx={{ color: alpha('#fff', 0.65) }}>
                  0123 456 789
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <IconMail size={16} color={theme.palette.primary.main} />
                <Typography variant="body2" sx={{ color: alpha('#fff', 0.65) }}>
                  contact@naturalskin.vn
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Links columns */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
              Về Natural Skin
            </Typography>
            <Stack spacing={1.2}>
              {footerLinks.about.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: alpha('#fff', 0.65),
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
              Chính sách
            </Typography>
            <Stack spacing={1.2}>
              {footerLinks.policy.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: alpha('#fff', 0.65),
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
              Hỗ trợ
            </Typography>
            <Stack spacing={1.2}>
              {footerLinks.support.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: alpha('#fff', 0.65),
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Social */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
              Theo dõi chúng tôi
            </Typography>
            <Stack direction="row" spacing={1}>
              {[
                { icon: <IconBrandFacebook size={20} />, label: 'Facebook' },
                { icon: <IconBrandInstagram size={20} />, label: 'Instagram' },
                { icon: <IconBrandTiktok size={20} />, label: 'TikTok' },
                { icon: <IconBrandYoutube size={20} />, label: 'YouTube' },
              ].map((social) => (
                <IconButton
                  key={social.label}
                  sx={{
                    color: alpha('#fff', 0.65),
                    border: `1px solid ${alpha('#fff', 0.15)}`,
                    borderRadius: 2,
                    width: 38,
                    height: 38,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#fff',
                      bgcolor: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Divider sx={{ borderColor: alpha('#fff', 0.1), my: 4 }} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" sx={{ color: alpha('#fff', 0.45), fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Natural Skin. Tất cả quyền được bảo lưu.
          </Typography>
          <Stack direction="row" spacing={2}>
            <MuiLink
              href="#"
              sx={{
                color: alpha('#fff', 0.45),
                textDecoration: 'none',
                fontSize: '0.8rem',
                '&:hover': { color: alpha('#fff', 0.7) },
              }}
            >
              Điều khoản
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: alpha('#fff', 0.45),
                textDecoration: 'none',
                fontSize: '0.8rem',
                '&:hover': { color: alpha('#fff', 0.7) },
              }}
            >
              Bảo mật
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default StorefrontFooter;
