// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  alpha,
} from '@mui/material';
import { IconX } from '@tabler/icons-react';

interface SizeGuideModalProps {
  open: boolean;
  onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ open, onClose }) => {
  const theme = useTheme();

  const sizeData = [
    { size: 'XS', bust: '76-81', waist: '58-64', hips: '82-87' },
    { size: 'S', bust: '82-87', waist: '65-69', hips: '88-93' },
    { size: 'M', bust: '88-93', waist: '70-75', hips: '94-99' },
    { size: 'L', bust: '94-99', waist: '76-81', hips: '100-105' },
    { size: 'XL', bust: '100-106', waist: '82-88', hips: '106-112' },
    { size: 'XXL', bust: '107-114', waist: '89-96', hips: '113-120' },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3 },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Bảng size
          </Typography>
          <IconButton onClick={onClose}>
            <IconX size={20} />
          </IconButton>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Hướng dẫn chọn size phù hợp với cơ thể bạn. Số đo tính bằng cm.
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: alpha(theme.palette.primary.main, 0.08) }}>
                <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Vòng ngực</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Vòng eo</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Vòng mông</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sizeData.map((row) => (
                <TableRow key={row.size} hover>
                  <TableCell sx={{ fontWeight: 600 }}>{row.size}</TableCell>
                  <TableCell>{row.bust}</TableCell>
                  <TableCell>{row.waist}</TableCell>
                  <TableCell>{row.hips}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 3, p: 2, bgcolor: alpha(theme.palette.info.main, 0.08), borderRadius: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Cách đo:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Vòng ngực: Đo quanh phần nở nhất của ngực<br />
            • Vòng eo: Đo quanh phần hẹp nhất của eo<br />
            • Vòng mông: Đo quanh phần nở nhất của mông
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default SizeGuideModal;
