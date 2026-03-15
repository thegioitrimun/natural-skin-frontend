// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  Box,
  Typography,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import { IconCheck } from '@tabler/icons-react';

const AgeVerification: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem('naturalskin_age_verified');
    if (!hasVerified) {
      setOpen(true);
    }
  }, []);

  const handleVerify = (isAdult: boolean) => {
    if (isAdult) {
      localStorage.setItem('naturalskin_age_verified', 'true');
    }
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxWidth: 450,
          width: '100%',
          overflow: 'hidden',
        },
      }}
      BackdropProps={{ style: { backdropFilter: 'blur(10px)' } }}
    >
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            bgcolor: alpha(theme.palette.warning.main, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
          }}
        >
          <Typography fontSize="2.5rem">🔞</Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Xác nhận độ tuổi
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Bạn cần đủ 18 tuổi để truy cập website này. Vui lòng xác nhận độ tuổi của bạn.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="outlined"
            onClick={() => handleVerify(false)}
            sx={{
              flex: 1,
              borderRadius: 2,
              py: 1.5,
            }}
          >
            Chưa, tôi chưa 18
          </Button>
          <Button
            variant="contained"
            onClick={() => handleVerify(true)}
            sx={{
              flex: 1,
              borderRadius: 2,
              py: 1.5,
              bgcolor: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              },
            }}
          >
            Đã, tôi trên 18 tuổi
          </Button>
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
          Bằng việc xác nhận, bạn đồng ý với Điều khoản sử dụng và Chính sách bảo mật của chúng tôi.
        </Typography>
      </Box>
    </Dialog>
  );
};

export default AgeVerification;
