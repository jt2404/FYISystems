const mongoose = require('mongoose');
const homePageSchema = new mongoose.Schema({
  heroSection:{
    bannertext: { type: String },
    title: { type: String },
    title1: { type: String },
    subtitle: { type: String },
    bannerUrl: { type: String },
  },
  aboutSection:{
    bannertext: { type: String },
    title: { type: String },
    description: { type: String },
    bigImageUrl: { type: String },
    smallImageUrl: { type: String },
    Timing: [{ type: String }], 
    bannerUrl: { type: String },
  },
  marqueeText: { type: String },
  facilities:[{iconUrl: { type: String }, title: { type: String }, description: { type: String },link: { type: String }}],
  servicesSection:{
    title: { type: String },
    bannertext: { type: String },
    description: { type: String },
    services: [
      {
        title: { type: String },
        description: { type: String },
        imageUrl: { type: String },
        link: { type: String },
      }
    ],
  },
  contactSection:{
    title: { type: String },
    bannertext: { type: String },

    description: { type: String },
    address: { type: String },
    phoneNumber:[ { type: String }],
    phoneHelp: { type: String },
    emailHelp: { type: String },
    addressHelp: { type: String },
    email: [{ type: String }],
  },
}, {
  timestamps: true,
});
module.exports = mongoose.model('HomePage', homePageSchema);