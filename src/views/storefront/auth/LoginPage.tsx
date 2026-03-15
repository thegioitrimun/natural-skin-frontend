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
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
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
                Chào mừng trở lại! Đăng nhập để tiếp tục
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
                hoặc đăng nhập với email
              </Typography>
            </Divider>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  label="Mật khẩu"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" />}
                    label={<Typography variant="body2">Ghi nhớ đăng nhập</Typography>}
                  />
                  <MuiLink
                    component={Link}
                    to="/auth/forgot-password"
                    sx={{
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Quên mật khẩu?
                  </MuiLink>
                </Stack>

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
                  Đăng nhập
                </Button>
              </Stack>
            </form>

            {/* Register Link */}
            <Box textAlign="center" mt={4}>
              <Typography variant="body2" color="text.secondary">
                Chưa có tài khoản?{' '}
                <MuiLink
                  component={Link}
                  to="/auth/register"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Đăng ký ngay
                </MuiLink>
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LoginPage;
