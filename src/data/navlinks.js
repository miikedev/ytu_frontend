const publicURL = process.env.PUBLIC_URL;

const navLinks = [
  { name: "Home", targetURL: publicURL },
  {
    name: "News",
    targetURL: `${publicURL}/news`,
    dropdownItems: [
      {
        name: "Statements",
        targetURL: `${publicURL}/news/statements`,
      },
      {
        name: "Recent News",
        targetURL: `${publicURL}/news/recent-news`,
      },
    ],
  },
  {
    name: "Spring",
    targetURL: `${publicURL}/spring`,
    dropdownItems: [
      {
        name: "Ground Movements / Strikes",
        targetURL: `${publicURL}/spring/strikes`,
      },
      {
        name: "Civil Disobedience Movement (CDM) Support",
        targetURL: `${publicURL}/spring/cdm`,
      },
      {
        name: "IDP Support",
        targetURL: `${publicURL}/spring/idp`,
      },
      {
        name: "Supporting Revolutionary Comrades",
        targetURL: `${publicURL}/spring/supports`,
      },
      {
        name: "Educational Support for Children",
        targetURL: `${publicURL}/spring/educational-support`,
      },
      {
        name: "Food Donation",
        targetURL: `${publicURL}/spring/donate-food`,
      },
    ],
  },
  {
    name: "Clubs",
    targetURL: `${publicURL}/clubs`,
    dropdownItems: [
      {
        name: "Students' Associations",
        targetURL: `${publicURL}/clubs/student-associations`,
      },
      {
        name: "Clubs",
        targetURL: `${publicURL}/clubs/clubs`,
      },
      {
        name: "Others",
        targetURL: `${publicURL}/clubs/other-clubs`,
      },
    ],
  },
  {
    name: "Union Support",
    targetURL: `${publicURL}/union-support`,
    dropdownItems: [
      {
        name: "Master Plan",
        targetURL: `${publicURL}/union-support/master-plan`,
      },
      {
        name: "Autonomy and Charter",
        targetURL: `${publicURL}/union-support/autonomy`,
      },
    ],
  },
  {
    name: "About",
    targetURL: `${publicURL}/about`,
  },
  {
    name: "Contact",
    targetURL: `${publicURL}/contact`,
  },
];

export default navLinks;
