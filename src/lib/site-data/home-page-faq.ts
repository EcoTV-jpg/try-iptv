export interface FaqItem {
  question: string;
  answer: string;
}

export const homePageFaqs: FaqItem[] = [
  {
    question: "What is an IPTV service?",
    answer: "An IPTV (Internet Protocol Television) service delivers live television broadcasts, sports events, and on-demand movies over the internet rather than through traditional coaxial cable lines or satellite dishes. You stream content directly to your television, streaming stick, computer, or mobile phone using an internet connection."
  },
  {
    question: "How do I choose the best IPTV provider?",
    answer: "When evaluating an IPTV service, prioritize providers that offer a free trial before payment, transparent prepaid pricing with no automatic recurring charges, at least 2 simultaneous connections, standard login protocols (Xtream Codes API and M3U playlists), and responsive 24/7 technical support."
  },
  {
    question: "Can I try TryIPTV before paying?",
    answer: "Yes. TryIPTV offers a full 24-hour free trial with no credit card required. You receive instant login credentials to test our 25,000+ live channels, 120,000+ VOD titles, EPG schedules, and picture stability during peak evening hours on your own devices."
  },
  {
    question: "Which devices and apps are supported?",
    answer: "TryIPTV works across Amazon Fire TV, Android TV, Google TV, Apple TV, iPhone, iPad, Windows, macOS, Samsung and LG Smart TVs, Roku, and MAG boxes. It is compatible with all standard IPTV player applications including TiviMate, IPTV Smarters Pro, XCIPTV, and GSE Smart IPTV."
  },
  {
    question: "What is the difference between an IPTV service and an IPTV player?",
    answer: "TryIPTV is an IPTV service provider that manages the streaming servers, live channel feeds, and VOD library. An IPTV player (such as TiviMate or IPTV Smarters) is a software application installed on your device that loads and plays those feeds using your TryIPTV login credentials. TryIPTV provides the active service; the player provides the interface."
  },
  {
    question: "What are Xtream Codes and M3U playlists?",
    answer: "Xtream Codes and M3U are the two universal formats used to connect IPTV services to player applications. Xtream Codes uses a Server URL, Username, and Password for easy entry and automatic EPG synchronization. M3U is a direct web link containing the playlist and channel index. TryIPTV provides both formats with every trial and subscription."
  },
  {
    question: "Can two devices stream simultaneously?",
    answer: "Yes. Every standard TryIPTV plan includes 2 simultaneous connections. You can install your playlist on all of your devices and actively stream on up to two separate screens at the exact same moment in your household."
  },
  {
    question: "Do TryIPTV subscriptions renew automatically?",
    answer: "No. All TryIPTV subscriptions are 100% flat prepaid purchases for the exact term you choose (1, 3, 6, or 12 months). We never store your card for recurring billing or charge renewal fees automatically. You decide if and when to purchase a renewal."
  },
  {
    question: "How long does activation take?",
    answer: "Account activation is fast. For free trials and paid orders, your Xtream Codes credentials, M3U playlist URL, and step-by-step setup guides are delivered directly to your email address within 5 to 15 minutes following request or payment confirmation."
  }
];
