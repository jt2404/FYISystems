const HomePage = require('../models/homePageModel');
const Appointment = require('../models/appointmentModel');


// Get all feedbacks
const getLandingPageDetails = async (req, res) => {
  try {
    const landinPageDetails = await HomePage.findOne({});
    res.status(200).json({data:landinPageDetails});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedbacks', error });
  }
};
const FinancialAdvisor = require('../models/financialAdvisorModel');
const financialAdvisorModel = require('../models/financialAdvisorModel');

const getFinancialAdvisorStats = async (req, res) => {
  try {
    // 1. Total count
    const total = await financialAdvisorModel.countDocuments();

    // 2. Count of advisors joined this month
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const joinedThisMonth = await FinancialAdvisor.countDocuments({
      createdAt: { $gte: startOfMonth }
    });

    res.status(200).json({
      total,
      joinedThisMonth
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error });
  }
};

const updateHeroSection = async (req, res) => {
  try {
    const { bannertext, title, subtitle, title1 } = req.body;
    const bannerUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const landing = await HomePage.findOne();
    if (!landing) return res.status(404).json({ message: 'Landing page not found' });

    landing.heroSection = {
      bannertext,
      title,
      subtitle,
      bannerUrl: bannerUrl || landing.heroSection.bannerUrl,
      title1
    };

    await landing.save();
    res.json({ message: 'Hero Section updated successfully', heroSection: landing.heroSection });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating hero section' });
  }
};

const updateAboutSection = async (req, res) => {
  try {
    const { bannertext, title, description, Timing } = req.body;

    const landing = await HomePage.findOne();
    if (!landing) return res.status(404).json({ message: 'Landing page not found' });

    const bigImageUrl = req.files?.bigImage?.[0] ? `/uploads/${req.files.bigImage[0].filename}` : landing.aboutSection.bigImageUrl;
    const smallImageUrl = req.files?.smallImage?.[0] ? `/uploads/${req.files.smallImage[0].filename}` : landing.aboutSection.smallImageUrl;
    const bannerUrl = req.files?.bannerImage?.[0] ? `/uploads/${req.files.bannerImage[0].filename}` : landing.aboutSection.bannerUrl;

    landing.aboutSection = {
      bannertext,
      title,
      description,
      Timing: Array.isArray(Timing) ? Timing : [Timing],
      bigImageUrl,
      smallImageUrl,bannerUrl
    };

    await landing.save();
    res.json({ message: 'About Section updated successfully', aboutSection: landing.aboutSection });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating about section' });
  }
};


const updateMarqueeText = async (req, res) => {
  const { marqueeText } = req.body;

  try {
    const updated = await HomePage.findOneAndUpdate(
      {},
      { marqueeText },
      { new: true, upsert: true }
    );
    res.json({ message: 'Marquee text updated', data: updated.marqueeText });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateFacilities = async (req, res) => {
  try {
    const titles = Array.isArray(req.body.titles) ? req.body.titles : [req.body.titles];
    const descriptions = Array.isArray(req.body.descriptions) ? req.body.descriptions : [req.body.descriptions];
    const links = Array.isArray(req.body.links) ? req.body.links : [req.body.links];
    const icons = req.files || [];

    const facilities = titles.map((title, index) => ({
      title,
      description: descriptions[index],
      link: links[index],
      iconUrl: icons[index] ? `/uploads/${icons[index].filename}` : null
    }));

    const landing = await HomePage.findOne();
    if (!landing) return res.status(404).json({ message: 'Landing page not found' });

    landing.facilities = facilities;
    await landing.save();

    res.json({ message: 'Facilities updated successfully', facilities });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating facilities section' });
  }
};
const updateServicesSection = async (req, res) => {
  try {
    const { title, description, bannerText } = req.body;
    const titles = Array.isArray(req.body.titles) ? req.body.titles : [req.body.titles];
    const descriptions = Array.isArray(req.body.descriptions) ? req.body.descriptions : [req.body.descriptions];
    const links = Array.isArray(req.body.links) ? req.body.links : [req.body.links];
    const services = titles.map((t, index) => ({
      title: t,
      description: descriptions[index],
      imageUrl: req.files?.[index] ? `/uploads/${req.files[index].filename}` : null,
      link: links[index]
    }));

    const landing = await HomePage.findOne();
    if (!landing) return res.status(404).json({ message: 'Landing page not found' });

    landing.servicesSection = {
      title,
      description,
      bannerText,
      services
    };

    await landing.save();
    res.json({ message: 'Services updated successfully', servicesSection: landing.servicesSection });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating services section' });
  }
};

const updateContactSection = async (req, res) => {
  const {
    title,
    bannertext,
    description,
    address,
    phoneNumber,
    phoneHelp,
    emailHelp,
    addressHelp,
    email
  } = req.body;

  if (!Array.isArray(phoneNumber) || !Array.isArray(email)) {
    return res.status(400).json({ message: 'phoneNumber and email must be arrays' });
  }

  try {
    const updated = await HomePage.findOneAndUpdate(
      {},
      {
        contactSection: {
          title,
          bannertext,
          description,
          address,
          phoneNumber,
          phoneHelp,
          emailHelp,
          addressHelp,
          email
        }
      },
      { new: true, upsert: true }
    );
    res.json({ message: 'Contact section updated', data: updated.contactSection });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getChartCounts = async (req, res) => {
  try {
    const counts = await Appointment.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(counts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getFinancialAdvisorStats, getChartCounts,getLandingPageDetails,updateAboutSection,updateFacilities,updateHeroSection,updateMarqueeText,updateServicesSection,updateContactSection };
