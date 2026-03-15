import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeSettings } from './theme/Theme';
import RTL from './layouts/full/shared/customizer/RTL';
import { RouterProvider } from 'react-router';
import router from './routes/Router';
import { CustomizerContext } from 'src/context/CustomizerContext';
import { useContext } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { CouponProvider } from './context/CouponContext';
import SEOMeta from './components/storefront/SEOMeta';

function App() {

  const theme = ThemeSettings();
  const { activeDir } = useContext(CustomizerContext);


  return (

    <ThemeProvider theme={theme}>
      <RTL direction={activeDir}>
        <CssBaseline />
        <SEOMeta />
        <CartProvider>
          <WishlistProvider>
            <RecentlyViewedProvider>
              <CouponProvider>
                <RouterProvider router={router} />
              </CouponProvider>
            </RecentlyViewedProvider>
          </WishlistProvider>
        </CartProvider>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
