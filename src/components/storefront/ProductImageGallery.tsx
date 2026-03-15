// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useRef } from 'react';
import {
  Box,
  Modal,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import {
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconZoomIn,
} from '@tabler/icons-react';

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, title }) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <>
      {/* Main Image with Zoom */}
      <Box sx={{ position: 'relative' }}>
        {/* Main Image */}
        <Box
          ref={imageRef}
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
          onMouseMove={handleMouseMove}
          onClick={() => setLightboxOpen(true)}
          sx={{
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            cursor: 'zoom-in',
            bgcolor: alpha(theme.palette.primary.main, 0.02),
          }}
        >
          <Box
            component="img"
            src={images[selectedIndex]}
            alt={`${title} - Image ${selectedIndex + 1}`}
            sx={{
              width: '100%',
              height: { xs: 300, md: 500 },
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              transform: isZooming ? 'scale(1.5)' : 'scale(1)',
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          />

          {/* Zoom indicator */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: '#fff',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.75rem',
            }}
          >
            <IconZoomIn size={14} />
            Hover to zoom
          </Box>
        </Box>

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.9)',
            boxShadow: 2,
            '&:hover': {
              bgcolor: '#fff',
            },
          }}
        >
          <IconChevronLeft />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.9)',
            boxShadow: 2,
            '&:hover': {
              bgcolor: '#fff',
            },
          }}
        >
          <IconChevronRight />
        </IconButton>
      </Box>

      {/* Thumbnails */}
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          mt: 2,
          overflowX: 'auto',
          pb: 1,
          '&::-webkit-scrollbar': {
            height: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: alpha(theme.palette.primary.main, 0.3),
            borderRadius: 2,
          },
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            onClick={() => setSelectedIndex(index)}
            sx={{
              width: 80,
              height: 80,
              flexShrink: 0,
              borderRadius: 2,
              overflow: 'hidden',
              cursor: 'pointer',
              border: `2px solid ${selectedIndex === index ? theme.palette.primary.main : 'transparent'}`,
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: theme.palette.primary.light,
              },
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Thumbnail ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={() => setLightboxOpen(false)}
            sx={{
              position: 'absolute',
              top: -50,
              right: 0,
              color: '#fff',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <IconX size={24} />
          </IconButton>

          {/* Main image */}
          <Box
            component="img"
            src={images[selectedIndex]}
            alt={`${title} - Image ${selectedIndex + 1}`}
            sx={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />

          {/* Navigation */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#fff',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <IconChevronLeft size={32} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#fff',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <IconChevronRight size={32} />
          </IconButton>

          {/* Counter */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#fff',
              bgcolor: 'rgba(0,0,0,0.5)',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              fontSize: '0.875rem',
            }}
          >
            {selectedIndex + 1} / {images.length}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProductImageGallery;
