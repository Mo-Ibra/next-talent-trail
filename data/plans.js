export const plans = ["Hobby", "Basic", "Business", "Enterprise"];

export const plansFeatures = [
  {
    title: "Key features",
    features: [
      {
        name: "Translated Words",
        values: {
          Hobby: "5,000", 
          Basic: "15,000",
          Business: "25,000",
          Enterprise: "50,000",
        },
      },
      {
        name: "Search Page Limit",
        values: {
          Hobby: "100",
          Basic: "1,000",
          Business: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        name: "Custom Fonts",
        values: {
          Hobby: true,
          Basic: true,
          Business: true,
          Enterprise: true,
        },
      },
      {
        name: "Code Editor",
        values: {
          Hobby: false,
          Basic: true,
          Business: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    title: "Hosting",
    features: [
      {
        name: "Bandwidth",
        values: {
          Hobby: "100MB",
          Basic: "1GB",
          Business: "10GB",
          Enterprise: "100GB",
        },
      },
      {
        name: "Visitors",
        values: {
          Hobby: "1,000",
          Basic: "10,000",
          Business: "50,000",
          Enterprise: "100,000",
        },
      },
      {
        name: "Max Upload Size",
        values: {
          Hobby: "5MB",
          Basic: "15MB",
          Business: "25MB",
          Enterprise: "Custom",
        },
      },
      {
        name: "SSL Certificate",
        values: {
          Hobby: true,
          Basic: true,
          Business: true,
          Enterprise: true,
        },
      },
    ],
  },
  {
    title: "Creation",
    features: [
      {
        name: "Created Words",
        values: {
          Hobby: "Unlimited",
          Basic: "Unlimited",
          Business: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        name: "Team Projects",
        values: {
          Hobby: false,
          Basic: false,
          Business: true,
          Enterprise: true,
        },
      },
    ],
  },
];