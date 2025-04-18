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
    subheader: 'general v4.1.0',
    items: [
      { title: 'dashboard', path: "", icon: ICONS.dashboard },
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
          { title: 'Category', path: PATH_DASHBOARD.user.Category },
          { title: 'SubCategory', path: PATH_DASHBOARD.user.SubCategory },       
          { title: 'Faq', path: PATH_DASHBOARD.user.Faq },
          { title: 'Privacy', path: PATH_DASHBOARD.user.Privacy },
          { title: 'Terms', path: PATH_DASHBOARD.user.Terms },
          { title: 'User', path: PATH_DASHBOARD.user.User },
          { title: 'FinancialAdvisors', path: PATH_DASHBOARD.user.FinancialAdvisors },
          { title: 'Products', path: PATH_DASHBOARD.user.Products },
          { title: 'Appointmentsoduct', path: PATH_DASHBOARD.user.Appointments },
          { title: 'FeedbackPage', path: PATH_DASHBOARD.user.FeedbackPage }
        ],
      },
    ],
  },
  {
    subheader: 'landing page',
    items: [
      {
        title: 'Landing page',
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
