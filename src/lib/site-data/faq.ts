export interface FaqEntry {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqEntry[];
}

const link = (href: string, label: string) =>
  `<a href="${href}" class="text-primary hover:underline">${label}</a>`;

export const faqGroups: FaqGroup[] = [
  {
    id: "basics",
    title: "Getting Started With IPTV",
    items: [
      {
        question: "What is IPTV?",
        answer: `IPTV is television delivered over the internet instead of through a cable or satellite line. ${link("/guides/what-is-iptv", "What IPTV is")} explains the model. TryIPTV is a prepaid IPTV service: you receive login details and use them in a compatible player.`,
      },
      {
        question: "What does IPTV stand for?",
        answer: "IPTV stands for Internet Protocol Television. It means the video is sent over an internet connection to a player app on your TV, streaming device, or computer.",
      },
      {
        question: "How does TryIPTV work?",
        answer: `You choose a prepaid plan or the 24-hour trial. After confirmation, support sends Xtream Codes or M3U login details, typically within 5–15 minutes. You enter those details in a compatible IPTV player. You do not need a TryIPTV app. See ${link("/guides/how-does-iptv-work", "how IPTV works")} and the ${link("/setup", "setup guide")}.`,
      },
      {
        question: "Is TryIPTV an IPTV player?",
        answer: `No. TryIPTV provides the service credentials. You use those credentials with a compatible IPTV player such as the apps listed in the ${link("/players", "player guides")}.`,
      },
      {
        question: "What should I check before choosing an IPTV service?",
        answer: `Confirm that it works with your ${link("/devices", "device")} and ${link("/players", "preferred player")}, check the channels you need, and review the connection limit, trial, and billing terms. TryIPTV includes 2 simultaneous connections on paid plans, is prepaid with no automatic renewal, and offers a ${link("/iptv-free-trial", "24-hour free trial")}.`,
      },
    ],
  },
  {
    id: "plans",
    title: "Free Trial, Plans, and Payment",
    items: [
      {
        question: "Does TryIPTV offer a free trial?",
        answer: `Yes. The trial lasts 24 hours, costs $0, and does not require a credit card. It does not renew or turn into a paid plan. Request it on the ${link("/iptv-free-trial", "free trial page")}.`,
      },
      {
        question: "How much does TryIPTV cost?",
        answer: `Prepaid plans cost $16 for 1 month, $39 for 3 months, $60 for 6 months, and $90 for 12 months. The 12-month plan equals $7.50 per month. ${link("/pricing", "Compare all IPTV plans")}.`,
      },
      {
        question: "Is there a contract or automatic renewal?",
        answer: "No. Plans are prepaid for the term you choose. TryIPTV does not automatically renew or charge a recurring fee. When the term ends, access stops unless you buy another term.",
      },
      {
        question: "How do I pay for TryIPTV?",
        answer: "Support sends payment instructions when you order. Accepted methods are cryptocurrency, PayPal, and Stripe. The charge is a single prepaid payment.",
      },
      {
        question: "How long does activation take?",
        answer: "Login details are typically delivered within 5–15 minutes after the trial request or payment is confirmed.",
      },
      {
        question: "Is there a refund if the service does not work?",
        answer: `If a paid subscription has a critical technical problem that support cannot resolve within 7 days of purchase, you may be eligible for a refund. Read the ${link("/refund-policy", "refund policy")} for the exact terms. The 24-hour trial is the way to test compatibility before paying.`,
      },
    ],
  },
  {
    id: "account",
    title: "Account, Renewal, and Billing",
    items: [
      {
        question: "What happens when my subscription expires?",
        answer: "Streaming access stops at the end of the prepaid term. You are not billed again. Buy a new term on the pricing page if you want to continue.",
      },
      {
        question: "How do I renew my TryIPTV subscription?",
        answer: `Order another 1, 3, 6, or 12 month plan and pay once. There is no automatic renewal. ${link("/pricing", "See the current plans")}.`,
      },
      {
        question: "I lost my IPTV login details. What do I do?",
        answer: `Contact support at ${link("/contact-us", "the contact page")} or support@tryiptv.com with the account details you used to order. Support can help you recover the login for an active subscription.`,
      },
      {
        question: "How do I cancel a TryIPTV subscription?",
        answer: `There is no recurring charge to cancel. Access ends when the prepaid term ends. Refund eligibility for unresolved technical problems is described in the ${link("/refund-policy", "refund policy")}.`,
      },
    ],
  },
  {
    id: "channels",
    title: "Channels, Sports, and On-Demand",
    items: [
      {
        question: "What can I watch with TryIPTV?",
        answer: "The service includes 25,000+ live channels and 120,000+ movies and TV shows where those titles are available on your lineup. Use the free trial to check the channels and programs you care about before you pay.",
      },
      {
        question: "What is an EPG on IPTV?",
        answer: `EPG means electronic programme guide, the schedule listings inside your player. Listings appear where the guide data is supplied. ${link("/guides/what-is-epg", "Read the EPG guide")}.`,
      },
      {
        question: "Can I watch IPTV in 4K?",
        answer: "Some streams are available in HD and 4K where the source provides that resolution. The trial is the practical way to judge the picture on your own TV.",
      },
      {
        question: "Can I watch live sports?",
        answer: "Live sports are part of the channel lineup where those channels are available. Test the events you want during the 24-hour trial before choosing a plan.",
      },
    ],
  },
  {
    id: "devices",
    title: "Devices and Setup",
    items: [
      {
        question: "Which devices can I use?",
        answer: `Compatible devices include Fire TV, Android TV, Samsung and LG TVs, Apple TV, Roku, MAG boxes, Windows, and Mac, plus phones and tablets with a compatible player. Start with the ${link("/devices", "device setup guides")}.`,
      },
      {
        question: "Do I need an IPTV box or a TryIPTV app?",
        answer: "No. TryIPTV does not require its own app or a dedicated box. You use the login details in a compatible player on a device you already have.",
      },
      {
        question: "Can I use one subscription on multiple devices?",
        answer: "Every paid plan includes 2 simultaneous connections. You can install the credentials on more than two devices, but only two can stream at the same time.",
      },
      {
        question: "What internet speed do I need for IPTV?",
        answer: `There is no single speed that fits every stream. As a planning guide, about 15–25 Mbps is useful headroom for one Full HD stream, and 4K generally benefits from 50+ Mbps. See the ${link("/guides/iptv-internet-speed", "IPTV internet speed guide")}.`,
      },
      {
        question: "How do I set up IPTV on Fire TV?",
        answer: `Install a compatible player, then enter the Xtream Codes or M3U details support sends. Follow the ${link("/devices/firestick-iptv", "Fire TV Stick setup guide")} or the ${link("/setup", "universal setup guide")}.`,
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    items: [
      {
        question: "Why is my IPTV not working?",
        answer: `Start with the player login, the playlist URL, and the device connection. The ${link("/help/iptv-not-working", "IPTV not working guide")} walks through those checks.`,
      },
      {
        question: "How do I fix buffering or freezing?",
        answer: `Check the connection, close other heavy downloads, and try Ethernet if you are on Wi-Fi. Use the ${link("/help/iptv-buffering", "buffering guide")} before changing plans.`,
      },
      {
        question: "Why does the channel guide not match what is playing?",
        answer: `Guide data is supplied where it is available and can lag or miss a listing. See ${link("/help/epg-not-working", "EPG not working")} for the player checks.`,
      },
      {
        question: "My login or M3U playlist will not load. What should I check?",
        answer: `Confirm the server, username, and password, or the playlist URL, were pasted completely. Then use the ${link("/help/iptv-login-not-working", "login guide")} or the ${link("/help/m3u-not-loading", "M3U guide")}.`,
      },
    ],
  },
];

export const faqs: FaqEntry[] = faqGroups.flatMap((group) => group.items);
