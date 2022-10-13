const publicURL = process.env.PUBLIC_URL;

const footerData = {
  mainSection: {
    logo: `${publicURL}/utils/su_logo.png`,
    title: "Yangon Technological University Studnet's Union",
    socialMedias: [
      {
        platform: "Telegram",
        imgSrc: `${publicURL}/utils/telegram.png`,
        platformURL: "https://google.com",
      },
      {
        platform: "Messenger",
        imgSrc: `${publicURL}/utils/messenger.png`,
        platformURL: "https://google.com",
      },
      {
        platform: "Facebook",
        imgSrc: `${publicURL}/utils/facebook.png`,
        platformURL: "https://google.com",
      },
      {
        platform: "Instagram",
        imgSrc: `${publicURL}/utils/instagram.png`,
        platformURL: "https://google.com",
      },
      {
        platform: "Twitter",
        imgSrc: `${publicURL}/utils/twitter.png`,
        platformURL: "https://google.com",
      },
    ],
  },
  otherPages: [
    {
      imgSrc: `${publicURL}/utils/cdm.png`,
      description: "CDM Support for RIT YIT YTU Heros",
    },
    {
      imgSrc: `${publicURL}/utils/fundraising_footer.png`,
      description: "Fundraising by YTUSU",
    },
  ],
};

export default footerData;
