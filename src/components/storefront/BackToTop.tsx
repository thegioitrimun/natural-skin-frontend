// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import { IconArrowUp } from '@tabler/icons-react';

const BackToTop: React.FC = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        cursor: 'pointer',
      }}
    >
      <IconButton
        sx={{
          width: 48,
          height: 48,
          bgcolor: theme.palette.primary.main,
          color: '#fff',
          boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
          '&:hover': {
            bgcolor: theme.palette.primary.dark,
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <IconArrowUp size={24} />
      </IconButton>
    </Box>
  );
};

export default BackToTop;
