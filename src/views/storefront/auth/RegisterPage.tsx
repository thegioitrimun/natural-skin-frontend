// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Link as MuiLink,
  InputAdornment,
  IconButton,
  Divider,
  useTheme,
  alpha,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import {
  IconBrandGoogle,
  IconBrandFacebook,
  IconEye,
  IconEyeOff,
  IconMail,
  IconLock,
  IconUser,
  IconPhone,
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    // Simulate registration
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: alpha(theme.palette.primary.main, 0.03),
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 4,
              p: { xs: 3, sm: 5 },
              boxShadow: `0 8px 40px ${alpha('#000', 0.08)}`,
            }}
          >
            {/* Logo */}
            <Box textAlign="center" mb={4}>
              <MuiLink component={Link} to="/" sx={{ textDecoration: 'none' }}>
                <Typography
                  variant="h4"
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
              </MuiLink>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Tạo tài khoản để trải nghiệm mua sắm tốt hơn
              </Typography>
            </Box>

            {/* Social Login */}
            <Stack spacing={2} mb={3}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<IconBrandGoogle />}
                sx={{
                  borderColor: theme.palette.divider,
                  color: 'text.primary',
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#DB4437',
                    bgcolor: alpha('#DB4437', 0.05),
                  },
                }}
              >
                Tiếp tục với Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<IconBrandFacebook />}
                sx={{
                  borderColor: theme.palette.divider,
                  color: 'text.primary',
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#4267B2',
                    bgcolor: alpha('#4267B2', 0.05),
                  },
                }}
              >
                Tiếp tục với Facebook
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                hoặc đăng ký với email
              </Typography>
            </Divider>

            {/* Register Form */}
            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Họ và tên"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconUser size={20} color="#999" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconMail size={20} color="#999" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Số điện thoại"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconPhone size={20} color="#999" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Mật khẩu"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  helperText="Tối thiểu 8 ký tự"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconLock size={20} color="#999" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Xác nhận mật khẩu"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconLock size={20} color="#999" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                          {showConfirmPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <FormControlLabel
                  control={<Checkbox required size="small" />}
                  label={
                    <Typography variant="body2">
                      Tôi đồng ý với{' '}
                      <MuiLink href="#" sx={{ color: theme.palette.primary.main }}>
                        Điều khoản
                      </MuiLink>{' '}
                      và{' '}
                      <MuiLink href="#" sx={{ color: theme.palette.primary.main }}>
                        Chính sách bảo mật
                      </MuiLink>
                    </Typography>
                  }
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    borderRadius: 2.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    '&:hover': {
                      boxShadow: `0 6px 24px ${alpha(theme.palette.primary.main, 0.5)}`,
                    },
                  }}
                >
                  Tạo tài khoản
                </Button>
              </Stack>
            </form>

            {/* Login Link */}
            <Box textAlign="center" mt={4}>
              <Typography variant="body2" color="text.secondary">
                Đã có tài khoản?{' '}
                <MuiLink
                  component={Link}
                  to="/auth/login"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Đăng nhập ngay
                </MuiLink>
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RegisterPage;
