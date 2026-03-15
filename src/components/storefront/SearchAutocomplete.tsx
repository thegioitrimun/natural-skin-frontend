// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  InputBase,
  IconButton,
  Popper,
  Fade,
  ClickAwayListener,
  useTheme,
  alpha,
  CircularProgress,
} from '@mui/material';
import {
  IconSearch,
  IconX,
  IconArrowRight,
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';

interface SearchProduct {
  id: number;
  title: string;
  brand: string;
  price: number;
  salePrice?: number;
  image: string;
}

const mockProducts: SearchProduct[] = [
  { id: 1, title: 'Serum Vitamin C 20% Brightening', brand: 'Natural Skin', price: 650000, salePrice: 520000, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=60&h=60&fit=crop' },
  { id: 2, title: 'Kem Chống Nắng SPF50+ PA++++', brand: 'SkinCeuticals', price: 890000, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=60&h=60&fit=crop' },
  { id: 3, title: 'Sữa Rửa Mặt Dịu Nhẹ Amino Acid', brand: 'CeraVe', price: 380000, salePrice: 299000, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=60&h=60&fit=crop' },
  { id: 4, title: 'Toner HA Cấp Ẩm Chuyên Sâu', brand: 'Hada Labo', price: 420000, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=60&h=60&fit=crop' },
  { id: 5, title: 'Kem Dưỡng Ẩm Daily Moisturizing', brand: 'CeraVe', price: 450000, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=60&h=60&fit=crop' },
  { id: 6, title: 'Serum Retinol 0.5% Anti-Aging', brand: 'The Ordinary', price: 350000, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=60&h=60&fit=crop' },
  { id: 7, title: 'Tẩy Tế Bào Chết AHA/BHA', brand: 'Paula\'s Choice', price: 680000, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=60&h=60&fit=crop' },
  { id: 8, title: 'Xịt Khoáng Cấp Ẩm Mist', brand: 'La Roche-Posay', price: 420000, image: 'https://images.unsplash.com/photo-1571781348782-92c8812e8839?w=60&h=60&fit=crop' },
];

const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN') + 'đ';
};

interface SearchAutocompleteProps {
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const anchorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    // Simulate API call
    const timer = setTimeout(() => {
      const filtered = mockProducts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
      setOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        navigate(`/products/${results[selectedIndex].id}`);
        handleClose();
      } else if (query.trim()) {
        navigate(`/products?search=${encodeURIComponent(query)}`);
        handleClose();
      }
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleClose = () => {
    setOpen(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box ref={anchorRef} sx={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        {/* Search Input */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: alpha(theme.palette.primary.main, 0.06),
            borderRadius: 3,
            px: 2,
            py: 0.5,
            border: `1px solid transparent`,
            transition: 'all 0.3s ease',
            '&:focus-within': {
              borderColor: theme.palette.primary.main,
              bgcolor: 'background.paper',
              boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
            },
          }}
        >
          <IconSearch size={20} color={theme.palette.text.secondary} />
          <InputBase
            ref={inputRef}
            placeholder="Tìm kiếm sản phẩm..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
              flex: 1,
              ml: 1,
              fontSize: '0.9rem',
            }}
          />
          {loading && <CircularProgress size={20} sx={{ color: theme.palette.primary.main }} />}
          {query && !loading && (
            <IconButton size="small" onClick={handleClose} sx={{ p: 0.5 }}>
              <IconX size={16} />
            </IconButton>
          )}
        </Box>

        {/* Results Dropdown */}
        <Popper
          open={open && results.length > 0}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          style={{ zIndex: 1300, width: anchorRef.current?.offsetWidth }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={200}>
              <Paper
                elevation={8}
                sx={{
                  mt: 1,
                  borderRadius: 2,
                  overflow: 'hidden',
                  maxHeight: 400,
                  overflowY: 'auto',
                }}
              >
                {/* Results List */}
                {results.map((product, index) => (
                  <Box
                    key={product.id}
                    component={Link}
                    to={`/products/${product.id}`}
                    onClick={handleClose}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 1.5,
                      textDecoration: 'none',
                      bgcolor: index === selectedIndex ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.title}
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 1,
                        objectFit: 'cover',
                      }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: 'text.primary',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {product.brand}
                      </Typography>
                    </Box>
                    <Typography variant="body2" fontWeight={600} color="primary.main" sx={{ whiteSpace: 'nowrap' }}>
                      {product.salePrice ? formatPrice(product.salePrice) : formatPrice(product.price)}
                    </Typography>
                  </Box>
                ))}

                {/* View All Results */}
                <Box
                  component={Link}
                  to={`/products?search=${encodeURIComponent(query)}`}
                  onClick={handleClose}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    p: 2,
                    bgcolor: alpha(theme.palette.primary.main, 0.04),
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  <Typography variant="body2">Xem tất cả kết quả</Typography>
                  <IconArrowRight size={16} />
                </Box>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchAutocomplete;
