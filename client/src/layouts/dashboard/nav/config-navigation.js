// routes
import { LANDING_PAGE, PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'dashboard', path: "/dashboard", icon: ICONS.dashboard },
    ],
  },

  
  
 
  {
    subheader: 'management',
    items: [
      {
        title: 'management',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'FinancialAdvisors', path: PATH_DASHBOARD.user.FinancialAdvisors },
          { title: 'Appointments', path: PATH_DASHBOARD.user.Appointments },
          { title: 'Category', path: PATH_DASHBOARD.user.Category },
          { title: 'SubCategory', path: PATH_DASHBOARD.user.SubCategory },       
          { title: 'Products', path: PATH_DASHBOARD.user.Products },
          { title: 'Terms', path: PATH_DASHBOARD.user.Terms },
          { title: 'Policy', path: PATH_DASHBOARD.user.Privacy },
          // { title: 'User', path: PATH_DASHBOARD.user.User },
          // { title: 'Faq', path: PATH_DASHBOARD.user.Faq },
          // { title: 'FeedbackPage', path: PATH_DASHBOARD.user.FeedbackPage }
        ],
      },
    ],
  },
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Pages',
        path: LANDING_PAGE.user.root,
        icon: ICONS.ecommerce,
        children: [
          { title: 'Home Page', path: LANDING_PAGE.user.Home },
          { title: 'About Page', path: LANDING_PAGE.user.About },       
          { title: 'Services Page', path: LANDING_PAGE.user.Services },       
          { title: 'Contact us Page', path: LANDING_PAGE.user.Contactus },       
         
        ],
      },
    ],
  },
];


export default navConfig;
