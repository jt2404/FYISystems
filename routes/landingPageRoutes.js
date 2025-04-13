const express = require('express');
const { getLandingPageDetails,updateAboutSection,updateContactSection,updateFacilities,updateHeroSection,updateMarqueeText,updateServicesSection, getChartCounts, getFinancialAdvisorStats } = require('../controllers/landingPageController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', getLandingPageDetails);
router.put('/hero', upload.single('bannerImage'), updateHeroSection);

// About Section (big & small images)
router.put('/about', upload.fields([
  { name: 'bigImage', maxCount: 1 },
  { name: 'smallImage', maxCount: 1 },
  { name: 'bannerImage', maxCount: 1 }
]), updateAboutSection);

router.put('/services', upload.array('serviceImages'), updateServicesSection);

// Others
router.put('/marquee', updateMarqueeText);
router.put('/facilities', upload.array('icons'), updateFacilities);

router.put('/contact', updateContactSection);
router.get('/status-count',getChartCounts);
router.get('/finance-count',getFinancialAdvisorStats);

module.exports = router;
