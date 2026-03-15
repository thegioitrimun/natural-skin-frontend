// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router';
import StorefrontHeader from './header/StorefrontHeader';
import StorefrontFooter from './footer/StorefrontFooter';
import ScrollToTop from '../../components/shared/ScrollToTop';

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
  backgroundColor: 'transparent',
}));

const ContentWrapper = styled(Box)(() => ({
  flexGrow: 1,
  width: '100%',
}));

const StorefrontLayout = () => {
  return (
    <PageWrapper>
      <StorefrontHeader />
      <ContentWrapper>
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </ContentWrapper>
      <StorefrontFooter />
    </PageWrapper>
  );
};

export default StorefrontLayout;
