// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOData {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const pageSEO: Record<string, SEOData> = {
  '/': {
    title: 'Natural Skin — Mỹ Phẩm Thiên Nhiên Chính Hãng',
    description: 'Khám phá bộ sưu tập mỹ phẩm thiên nhiên cao cấp. Chăm sóc da, trang điểm, chống nắng từ các thương hiệu uy tín. Miễn phí vận chuyển từ 500K.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=630&fit=crop',
  },
  '/products': {
    title: 'Sản phẩm — Natural Skin',
    description: 'Mua sắm mỹ phẩm thiên nhiên chính hãng. Serum, kem dưỡng, sữa rửa mặt, kem chống nắng và nhiều sản phẩm chăm sóc da khác.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&h=630&fit=crop',
  },
  '/about': {
    title: 'Về chúng tôi — Natural Skin',
    description: 'Tìm hiểu câu chuyện thương hiệu Natural Skin. Chúng tôi cam kết mang đến những sản phẩm mỹ phẩm thiên nhiên chất lượng cao.',
  },
  '/blog': {
    title: 'Blog — Natural Skin',
    description: 'Tin tức, tips chăm sóc da, reviews sản phẩm và xu hướng làm đẹp mới nhất từ Natural Skin.',
  },
  '/contact': {
    title: 'Liên hệ — Natural Skin',
    description: 'Liên hệ với Natural Skin. Chúng tôi sẵn sàng hỗ trợ bạn 24/7 qua điện thoại, email hoặc chat trực tuyến.',
  },
};

const SEOMeta: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Get SEO data for current path
    const path = location.pathname;
    let seoData = pageSEO[path];

    // Check for dynamic routes
    if (!seoData) {
      if (path.startsWith('/products/')) {
        seoData = {
          title: 'Chi tiết sản phẩm — Natural Skin',
          description: 'Xem chi tiết sản phẩm, đánh giá và mua hàng tại Natural Skin.',
        };
      } else if (path.startsWith('/blog/')) {
        seoData = {
          title: 'Chi tiết bài viết — Natural Skin',
          description: 'Đọc bài viết chi tiết tại Natural Skin.',
        };
      }
    }

    // Default SEO
    const defaultSEO: SEOData = {
      title: 'Natural Skin — Mỹ Phẩm Thiên Nhiên',
      description: 'Mỹ phẩm thiên nhiên chính hãng, chăm sóc da an toàn và hiệu quả.',
    };

    const data = seoData || defaultSEO;

    // Update meta tags
    document.title = data.title;

    // Remove existing meta tags
    const metaTags = document.querySelectorAll('meta[data-seo]');
    metaTags.forEach(tag => tag.remove());

    // Add new meta tags
    const metaTagsToAdd = [
      { name: 'description', content: data.description },
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { property: 'og:type', content: 'website' },
    ];

    if (data.image) {
      metaTagsToAdd.push(
        { property: 'og:image', content: data.image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: data.image },
      );
    }

    metaTagsToAdd.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

  }, [location.pathname]);

  return null;
};

export default SEOMeta;
