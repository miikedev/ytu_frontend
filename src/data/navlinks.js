const navLinks = [
  { name: "Home", targetURL: "/" },
  {
    name: "News",
    targetURL: "/news",
    dropdownItems: [
      {
        name: "Statements",
        targetURL: "/news/statements",
      },
      {
        name: "Recent News",
        targetURL: "/news/recent-news",
      },
    ],
  },
  {
    name: "Spring",
    targetURL: "/spring",
    dropdownItems: [
      {
        name: "Ground Movements / Strikes",
        targetURL: "/spring/strikes",
      },
      {
        name: "Civil Disobedience Movement (CDM) Support",
        targetURL: "/spring/cdm",
      },
      {
        name: "IDP Support",
        targetURL: "/spring/idp",
      },
      {
        name: "Supporting Revolutionary Comrades",
        targetURL: "/spring/supports",
      },
      {
        name: "Educational Support for Children",
        targetURL: "/spring/educational-support",
      },
      {
        name: "Food Donation",
        targetURL: "/spring/donate-food",
      },
    ],
  },
  {
    name: "Clubs",
    targetURL: "/clubs",
    dropdownItems: [
      {
        name: "Students' Associations",
        targetURL: "/clubs/student-associations",
      },
      {
        name: "Clubs",
        targetURL: "/clubs/clubs",
      },
      {
        name: "Others",
        targetURL: "/clubs/other-clubs",
      },
    ],
  },
  {
    name: "Union Support",
    targetURL: "/union-support",
    dropdownItems: [
      { name: "Master Plan", targetURL: "/union-support/master-plan" },
      {
        name: "Autonomy and Charter",
        targetURL: "/union-support/autonomy",
      },
    ],
  },
  {
    name: "About",
    targetURL: "/about",
  },
  {
    name: "Contact",
    targetURL: "/contact",
  },
];

export default navLinks;
