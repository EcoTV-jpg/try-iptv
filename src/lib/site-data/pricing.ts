
export const plans = [
  {
    id: "1-month",
    name: "1 Month",
    duration: "1 month",
    price: 16.00,
    price_monthly: 16.00,
    savings: null,
    features: [
      "1-month prepaid access",
      "$16.00 billed once",
      "Shortest commitment",
      "2 simultaneous device streams",
    ],
    isPopular: false,
    url: "/checkout?plan=1-month"
  },
  {
    id: "3-months",
    name: "3 Months",
    duration: "3 months",
    price: 39.00,
    price_monthly: 13.00,
    savings: "Save 19%",
    features: [
      "3-month prepaid access",
      "$13.00 / month equivalent",
      "Save 19% vs monthly rate",
      "2 simultaneous device streams",
    ],
    isPopular: false,
    url: "/checkout?plan=3-months"
  },
  {
    id: "6-months",
    name: "6 Months",
    duration: "6 months",
    price: 60.00,
    price_monthly: 10.00,
    savings: "Save 38%",
    features: [
      "6-month prepaid access",
      "$10.00 / month equivalent",
      "Save 38% vs monthly rate",
      "2 simultaneous device streams",
    ],
    isPopular: false,
    url: "/checkout?plan=6-months"
  },
  {
    id: "12-months",
    name: "12 Months",
    duration: "12 months",
    price: 90.00,
    price_monthly: 7.50,
    savings: "Save 53%",
    features: [
      "12-month prepaid access",
      "$7.50 / month equivalent",
      "Save 53% — Lowest rate",
      "2 simultaneous device streams",
    ],
    isPopular: true,
    url: "/checkout?plan=12-months"
  },
];
