// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  useTheme,
  alpha,
  Button,
  Chip,
} from '@mui/material';
import {
  IconHeart,
  IconShieldCheck,
  IconLeaf,
  IconAward,
  IconArrowRight,
} from '@tabler/icons-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const values = [
  { icon: <IconLeaf size={32} />, title: 'Thiên Nhiên', desc: 'Chiết xuất 100% từ thảo mộc và tinh chất thiên nhiên quý hiếm' },
  { icon: <IconShieldCheck size={32} />, title: 'An Toàn', desc: 'Không paraben, không sulfate, không hóa chất độc hại' },
  { icon: <IconHeart size={32} />, title: 'Không Thử Nghiệm Trên ĐV', desc: 'Cam kết Cruelty-free, đạt chứng nhận Leaping Bunny' },
  { icon: <IconAward size={32} />, title: 'Chất Lượng Quốc Tế', desc: 'Đạt chuẩn GMP, ISO 22716 trong sản xuất mỹ phẩm' },
];

const milestones = [
  { year: '2018', title: 'Khởi đầu', desc: 'Ra đời với 5 sản phẩm đầu tiên' },
  { year: '2020', title: 'Mở rộng', desc: '50+ sản phẩm, 10K khách hàng' },
  { year: '2022', title: 'Chứng nhận', desc: 'Đạt ISO 22716 & Cruelty-free' },
  { year: '2024', title: 'Phát triển', desc: '200+ sản phẩm, 100K khách hàng' },
];

const stats = [
  { number: '200+', label: 'Sản phẩm' },
  { number: '100K+', label: 'Khách hàng' },
  { number: '50+', label: 'Thương hiệu' },
  { number: '4.8★', label: 'Đánh giá' },
];

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.06)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Chip
                label="🌿 Câu chuyện của chúng tôi"
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.dark,
                  fontWeight: 500,
                  mb: 3,
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 3,
                }}
              >
                Vẻ đẹp bền vững, <br />
                <Box component="span" sx={{ color: theme.palette.primary.main }}>
                  từ thiên nhiên
                </Box>
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: 650,
                  mx: 'auto',
                }}
              >
                Natural Skin ra đời với sứ mệnh mang đến những sản phẩm chăm sóc da 
                an toàn, hiệu quả, được chiết xuất từ những thành phần thiên nhiên 
                tinh khiết nhất, vì làn da khỏe mạnh và hành tinh xanh.
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((stat, i) => (
              <Grid key={i} size={{ xs: 6, md: 3 }}>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Core Values */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: alpha(theme.palette.primary.main, 0.03) }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={6}>
                <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 1 }}>
                  Giá trị cốt lõi
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Những nguyên tắc định hướng mọi hoạt động của chúng tôi
                </Typography>
              </Box>
            </motion.div>
            <Grid container spacing={3}>
              {values.map((val, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                        boxShadow: 'none',
                        textAlign: 'center',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.12)}`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {val.icon}
                      </Box>
                      <Typography variant="h6" fontWeight={700} mb={1}>
                        {val.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                        {val.desc}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Timeline */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 1 }}>
              Hành trình phát triển
            </Typography>
          </Box>
          <Stack spacing={4}>
            {milestones.map((ms, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box
                    sx={{
                      minWidth: 80,
                      height: 80,
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {ms.year}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={700}>
                      {ms.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {ms.desc}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: '#fff',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Hãy bắt đầu hành trình chăm sóc da
          </Typography>
          <Typography variant="body1" sx={{ color: alpha('#fff', 0.8), mb: 4 }}>
            Khám phá hơn 200+ sản phẩm được tuyển chọn kỹ lưỡng
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            size="large"
            endIcon={<IconArrowRight size={18} />}
            sx={{
              bgcolor: '#fff',
              color: theme.palette.primary.main,
              borderRadius: 3,
              px: 5,
              py: 1.5,
              fontWeight: 700,
              '&:hover': {
                bgcolor: alpha('#fff', 0.9),
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Khám phá sản phẩm
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
