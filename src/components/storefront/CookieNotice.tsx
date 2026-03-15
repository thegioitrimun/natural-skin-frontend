// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  useTheme,
  alpha,
} from '@mui/material';
import { IconCookie } from '@tabler/icons-react';

const CookieNotice: React.FC = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('naturalskin_cookie_notice');
    if (!hasAccepted) {
      setTimeout(() => setVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('naturalskin_cookie_notice', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: '#fff',
        boxShadow: `0 -4px 20px ${alpha('#000', 0.1)}`,
        p: 2,
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconCookie size={24} color={theme.palette.primary.main} />
          <Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Chúng tôi sử dụng cookies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Để cải thiện trải nghiệm của bạn trên website.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="text" size="small" onClick={handleAccept}>
            Từ chối
          </Button>
          <Button variant="contained" size="small" onClick={handleAccept}>
            Đồng ý
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CookieNotice;
