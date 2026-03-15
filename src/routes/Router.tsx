// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const StorefrontLayout = Loadable(lazy(() => import('../layouts/storefront/StorefrontLayout')));

/* ****Admin Pages***** */
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));
const EcommerceDash = Loadable(lazy(() => import('../views/dashboard/Ecommerce')));

/* ****Admin Apps***** */
const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const EcommerceAddProduct = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceAddProduct')),
);
const EcommerceEditProduct = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceEditProduct')),
);
const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));
const EcomProductCheckout = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceCheckout')),
);

// authentication
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

// ===== Storefront Pages =====
const HomePage = Loadable(lazy(() => import('../views/storefront/HomePage')));
const ProductsPage = Loadable(lazy(() => import('../views/storefront/ProductsPage')));
const ProductDetailPage = Loadable(lazy(() => import('../views/storefront/ProductDetailPage')));
const AboutPage = Loadable(lazy(() => import('../views/storefront/AboutPage')));
const BlogPage = Loadable(lazy(() => import('../views/storefront/BlogPage')));
const ContactPage = Loadable(lazy(() => import('../views/storefront/ContactPage')));
const CartPage = Loadable(lazy(() => import('../views/storefront/CartPage')));
const CheckoutPage = Loadable(lazy(() => import('../views/storefront/CheckoutPage')));
const WishlistPage = Loadable(lazy(() => import('../views/storefront/WishlistPage')));
const OrderSuccessPage = Loadable(lazy(() => import('../views/storefront/OrderSuccessPage')));
const LoginPage = Loadable(lazy(() => import('../views/storefront/auth/LoginPage')));
const RegisterPage = Loadable(lazy(() => import('../views/storefront/auth/RegisterPage')));
const AccountPage = Loadable(lazy(() => import('../views/storefront/AccountPage')));

const Router = [
  // ===== STOREFRONT (Public) =====
  {
    path: '/',
    element: <StorefrontLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/blog/:id', element: <BlogPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/wishlist', element: <WishlistPage /> },
      { path: '/order-success', element: <OrderSuccessPage /> },
      { path: '/account', element: <AccountPage /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
  // ===== ADMIN DASHBOARD =====
  {
    path: '/admin',
    element: <FullLayout />,
    children: [
      { path: '/admin', element: <Navigate to="/admin/dashboard" /> },
      { path: '/admin/dashboard', element: <ModernDash /> },
      { path: '/admin/dashboard/ecommerce', element: <EcommerceDash /> },
      { path: '/admin/contacts', element: <Contacts /> },
      { path: '/admin/chats', element: <Chats /> },
      { path: '/admin/notes', element: <Notes /> },
      { path: '/admin/ecommerce/shop', element: <Ecommerce /> },
      { path: '/admin/ecommerce/product-list', element: <EcomProductList /> },
      { path: '/admin/ecommerce/checkout', element: <EcomProductCheckout /> },
      { path: '/admin/ecommerce/add-product', element: <EcommerceAddProduct /> },
      { path: '/admin/ecommerce/edit-product', element: <EcommerceEditProduct /> },
      { path: '/admin/ecommerce/detail/:id', element: <EcommerceDetail /> },
      { path: '*', element: <Navigate to="/admin/dashboard" /> },
    ],
  },
  // ===== AUTH (Storefront) =====
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/login', element: <LoginPage /> },
      { path: '/auth/register', element: <RegisterPage /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];
const router = createBrowserRouter(Router);

export default router;
