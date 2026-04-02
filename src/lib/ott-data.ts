import type { OTTPlatform } from "./types";

/** Replace affiliateLink values with your real program URLs before going live. */
export const ottPlatforms: OTTPlatform[] = [
  {
    name: "Netflix",
    price: "₹149/month",
    affiliateLink: "https://www.netflix.com/in/",
    pros: ["Best originals", "No ads", "High quality"],
    cons: ["Most expensive", "Less Indian content"],
  },
  {
    name: "Amazon Prime Video",
    price: "₹299/month",
    affiliateLink: "https://www.primevideo.com/",
    pros: ["Best value", "Huge library", "+ Prime shipping"],
    cons: ["Some content costs extra"],
  },
  {
    name: "Disney+ Hotstar",
    price: "₹149/month",
    affiliateLink: "https://www.hotstar.com/in",
    pros: ["Sports + IPL", "Disney & Marvel", "Hindi dubs"],
    cons: ["Ads on lower tiers"],
  },
  {
    name: "Sony LIV",
    price: "₹299/year",
    affiliateLink: "https://www.sonyliv.com/",
    pros: ["Regional shows", "WWE"],
    cons: ["Smaller catalog vs top 3"],
  },
  {
    name: "ZEE5",
    price: "₹399/year",
    affiliateLink: "https://www.zee5.com/",
    pros: ["TV serials", "Regional movies"],
    cons: ["UI can feel cluttered"],
  },
];
