import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// @mui
import { Box, Stack, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import FinancialAdvisors from './config-navigationFinancialAdvisors';
import NavDocs from './NavDocs';
import NavAccount from './NavAccount';
import NavToggleButton from './NavToggleButton';
import logo from '../../../assets/img/logo-icon.svg';

// ----------------------------------------------------------------------

NavVertical.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function NavVertical({ openNav, onCloseNav }) {
  const { pathname } = useLocation();
  const FinancialAdviserid = useSelector((state) => state.Auth.role); // 'FinancialAdviser',

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      > */}
      {/* <Logo /> */}
      <Link to="/" style={{ textDecoration: 'none' }}>
      <img
        src={logo}
        alt="Logo"
        height="50px"
        className="logo"
        style={{
          marginLeft: '2rem',
          marginTop: '0.5rem',
          marginBottom: '1.5rem',
          cursor: 'pointer',
          width: 100,
          height: 100,
        }}
      />
      </Link>

      <NavAccount />
      {/* </Stack> */}

      <NavSectionVertical
        data={FinancialAdviserid !== 'FinancialAdviser' ? navConfig : FinancialAdvisors}
      />

      <Box sx={{ flexGrow: 1 }} />

      {/* <NavDocs /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      <NavToggleButton />

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
