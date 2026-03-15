// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconX,
  IconCheck,
} from '@tabler/icons-react';

interface NewsletterPopupProps {
  open?: boolean;
  onClose?: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ open: externalOpen, onClose: externalOnClose }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed
    const hasSubscribed = localStorage.getItem('naturalskin_newsletter_subscribed');
    const hasDismissed = localStorage.getItem('naturalskin_newsletter_dismissed');

    if (hasSubscribed || hasDismissed) return;

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);
    localStorage.setItem('naturalskin_newsletter_dismissed', 'true');
    externalOnClose?.();
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Save to localStorage (in real app, would send to API)
    localStorage.setItem('naturalskin_newsletter_subscribed', email);
    localStorage.setItem('naturalskin_newsletter_dismissed', 'true');
    setSubscribed(true);

    // Close after 2 seconds
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  // Handle external control
  useEffect(() => {
    if (externalOpen !== undefined) {
      setOpen(externalOpen);
    }
  }, [externalOpen]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            position: 'relative',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop"
            alt="Newsletter"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.8)} 0%, ${alpha(theme.palette.primary.dark, 0.9)} 100%)`,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                fontWeight: 700,
                mb: 2,
              }}
            >
              🌿 Natural Skin
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              Nhận ưu đãi độc quyền lên đến 30%
            </Typography>
          </Box>
        </Box>

        {/* Content Section */}
        <Box sx={{ flex: 1, p: 4, position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
            }}
          >
            <IconX size={20} />
          </IconButton>

          {subscribed ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                py: 4,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: alpha(theme.palette.success.main, 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <IconCheck size={40} color={theme.palette.success.main} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Đăng ký thành công!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cảm ơn bạn đã đăng ký. Chúng tôi sẽ gửi ưu đãi đến email của bạn sớm nhất!
              </Typography>
            </Box>
          ) : (
            <>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Đăng ký nhận tin
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Nhận thông tin về sản phẩm mới, ưu đãi đặc biệt và tips chăm sóc da
              </Typography>

              <Box component="form" onSubmit={handleSubscribe}>
                <TextField
                  fullWidth
                  placeholder="Email của bạn..."
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: 600,
                    bgcolor: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Đăng ký ngay
                </Button>
              </Box>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 2, textAlign: 'center' }}
              >
                Chúng tôi cam kết không gửi spam. Bạn có thể hủy đăng ký bất kỳ lúc nào.
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default NewsletterPopup;
