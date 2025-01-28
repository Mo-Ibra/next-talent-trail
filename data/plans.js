export const plans = [
  {
    id: 1,
    name: "Hobby",
    price: 12,
    description:
      "For hobby, staging sites, and side hustles and personal projects.",
    features: [
      "2 pages",
      "Limited traffic",
      "50 form submissions",
      "1,000 visitors/mo",
    ],
  },
  {
    id: 2,
    name: "Basic",
    price: 34,
    description: "For relatively simple, static sites and landing pages.",
    features: [
      "150 pages",
      "Custom domain",
      "200 form submissions",
      "10,000 visitors/mo",
    ],
  },
  {
    id: 3,
    name: "Business",
    price: 47,
    description: "For larger sites, blogs, and other data-driven content.",
    features: [
      "150 pages",
      "Custom domain",
      "500 form submissions",
      "50,000 visitors/mo",
    ],
    highlighted: true,
  },
  {
    id: 4,
    name: "Enterprise",
    price: 79,
    description: "For those needing an enterprise-grade solution.",
    features: [
      "150 pages",
      "Custom domain",
      "500 form submissions",
      "50,000 visitors/mo",
    ],
  },
];

export const plansFeatures = [
  {
    id: 1,
    title: "Key features",
    features: [
      {
        id: 1,
        name: "Translated Words",
        values: {
          Hobby: "5,000", 
          Basic: "15,000",
          Business: "25,000",
          Enterprise: "50,000",
        },
      },
      {
        id: 2,
        name: "Search Page Limit",
        values: {
          Hobby: "100",
          Basic: "1,000",
          Business: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        id: 3,
        name: "Custom Fonts",
        values: {
          Hobby: true,
          Basic: true,
          Business: true,
          Enterprise: true,
        },
      },
      {
        id: 4,
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
    id: 2,
    title: "Hosting",
    features: [
      {
        id: 5,
        name: "Bandwidth",
        values: {
          Hobby: "100MB",
          Basic: "1GB",
          Business: "10GB",
          Enterprise: "100GB",
        },
      },
      {
        id: 6,
        name: "Visitors",
        values: {
          Hobby: "1,000",
          Basic: "10,000",
          Business: "50,000",
          Enterprise: "100,000",
        },
      },
      {
        id: 7,
        name: "Max Upload Size",
        values: {
          Hobby: "5MB",
          Basic: "15MB",
          Business: "25MB",
          Enterprise: "Custom",
        },
      },
      {
        id: 8,
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
    id: 3,
    title: "Creation",
    features: [
      {
        id: 9,
        name: "Created Words",
        values: {
          Hobby: "Unlimited",
          Basic: "Unlimited",
          Business: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        id: 10,
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