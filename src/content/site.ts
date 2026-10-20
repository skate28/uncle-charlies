import type { SiteContent } from "./types";

/**
 * Uncle Charlie's Sandwiches (Jacksonville, FL): the only editable content file. Data only.
 *
 * Shapes: src/content/types.ts + CONTENT_SCHEMA.md in skate28/uncle-charlies (local copy:
 * handoff/types.reference.ts, byte-for-byte). Researched 2026-10-20; sources in research_brief.md.
 * No owner/staff names, personal emails, reviewer names or photo-source URLs in this file.
 *
 * WEBSITES: the business has no website. Facebook (facebook.com/ucharliespizza) is its only
 * presence. Two look-alike domains are NOT theirs and must never be linked:
 *   - unclecharlies[.]com = Uncle Charlie's liquor store / grill & tavern in Cheyenne, WY.
 *   - unclecharliespizza[.]com = redirects to an unrelated ocean-policy site (domain expires 2026-10-26).
 *
 * Ordering: phone + walk-in (dine-in / takeout). Verified: Uber Eats store "Closed on Uber Eats as of
 * Apr 8, 2024"; DoorDash store "not active" and "unaffiliated with DoorDash"; no Grubhub store found;
 * Google shows no "Order online" button; no Toast/Clover/Square page found. So the only CTA is the phone.
 *
 * Menu: item list from the shop's own printed takeout menu (photo posted on its Facebook page,
 * undated, mirrored by Restaurantji), cross-checked with DoorDash/Grubhub-derived item lists and the
 * SinglePlatform/Yelp menu. PRICES OMITTED: every price source is old or conflicting (see brief §2).
 *
 * Photos: real customer photos from the Google Maps listing (13) and two more Google-credited
 * photos mirrored by Restaurantji. Pitch use only until the owner approves. No logo found.
 */

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Uncle+Charlie%27s+Sandwiches+Inc+1977+Lane+Ave+S+Jacksonville+FL+32210&query_place_id=ChIJr67HTZa45YgRYTzKTbnPSL8";
const YELP_URL = "https://www.yelp.com/biz/uncle-charlies-sandwiches-jacksonville";

export const site: SiteContent = {
  // Google lists "Uncle Charlie's Sandwiches Inc."; the sign reads "Uncle Charlie's Sandwiches";
  // Facebook/Apple Maps call it "Uncle Charlie's Pizza and Subs". Repo default name kept.
  name: "Uncle Charlie's Sandwiches",
  tagline: "Italian subs, pizza & sandwiches",
  description:
    "Uncle Charlie's Sandwiches is a family-run Italian pizza and sub shop at 1977 Lane Ave S on Jacksonville's Westside, serving homemade-dough pizza, hot and cold subs, steak subs, pasta and salads since 1977. Open Tuesday–Sunday; closed Monday. Call (904) 781-4770.",
  // Facebook post 2026-07-08: "a major milestone with 49 years of service"; Facebook graphic (2021):
  // "Made in July 1977"; Restaurantji summary + Google review: "since they first opened way back in 1977".
  opened: "1977",

  address: {
    street: "1977 Lane Ave S",
    suite: "",
    // Yelp: "Westside"; Google/exa area: Hyde Park.
    neighborhood: "Westside",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32210",
    country: "US",
    full: "1977 Lane Ave S, Jacksonville, FL 32210",
  },
  // Storefront photos show the shop's own lot; Apple Maps lists "Parking Lot".
  locationHint: "On Lane Avenue South in Hyde Park, with a parking lot out front.",

  // Google Maps pin (feature 0x88e5b8964dc7aeaf:0xbf48cfb94dca3c61), read live 2026-10-20.
  geo: {
    latitude: 30.2826824,
    longitude: -81.7549209,
  },
  mapUrl: MAP_URL,

  // Google, Apple Maps, Facebook, Yelp, SinglePlatform, Restaurantji and the printed menu all agree.
  phone: {
    display: "(904) 781-4770",
    tel: "tel:+19047814770",
    e164: "+19047814770",
  },

  closedNotice:
    "We're closed right now. We're open Tuesday–Wednesday and Sunday 11 AM–9 PM, and Thursday–Saturday 11 AM–10 PM. Closed Mondays.",

  // Verified live on Google Maps 2026-10-20 (per-day hours); matches Yelp, Restaurantji, exa/Google mirror
  // and Chamber of Commerce. Visit Jacksonville's older listing ("Sun–Thu 11AM–10PM") is out of date.
  // Holiday closures are announced on Facebook (e.g. Dec 24 2025–Jan 1 2026; July 4–6 2026).
  hours: {
    timezone: "America/New_York",
    summary: "Tue–Wed 11 AM–9 PM · Thu–Sat 11 AM–10 PM · Sun 11 AM–9 PM · Closed Monday",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: null, closeTime: null, closed: true },
      tue: { openTime: "11:00", closeTime: "21:00" },
      wed: { openTime: "11:00", closeTime: "21:00" },
      thu: { openTime: "11:00", closeTime: "22:00" },
      fri: { openTime: "11:00", closeTime: "22:00" },
      sat: { openTime: "11:00", closeTime: "22:00" },
      sun: { openTime: "11:00", closeTime: "21:00" },
    },
  },

  // "$" on Yelp, Facebook and Restaurantji.
  priceRange: "$",
  // Only Apple Maps says "Accepts contactless payments". Hidden until the owner confirms.
  paymentNote: "",

  // Phone + walk-in only (see header). No delivery links: Uber Eats closed 2024, DoorDash inactive.
  orderingLinks: [{ label: "Call to order", href: "tel:+19047814770", kind: "phone" }],

  // Active page: posts through Aug 2026, 3.5K followers. Listed as the website on Google and Apple Maps.
  socials: [{ label: "Facebook", href: "https://www.facebook.com/ucharliespizza/" }],

  // Google Maps, read live 2026-10-20.
  rating: {
    value: 4.7,
    count: 1304,
    source: "Google",
    sourceUrl: MAP_URL,
  },

  // Yelp 4.4 from 80: Yelp data on Apple Maps, read live 2026-10-20 (yelp.com blocks automated
  // fetches; an older Yelp search snippet shows 4.3 from 68). No Tripadvisor listing found.
  // Not shown: Facebook "94% recommend (401 reviews)" (not a star score), Restaurantji 4.5/329
  // (aggregator), DoorDash 4.6/100+ (store inactive).
  extraRatings: [{ value: 4.4, count: 80, source: "Yelp", sourceUrl: YELP_URL }],

  // Verbatim excerpts from public reviews (whole sentences, original spelling/punctuation). Platform
  // label only; sourceUrl is the platform's business page. Reviewer initials/dates: research_brief.md §3a.
  // OWNER APPROVAL NEEDED: get the owner's OK before quoting these on a live site.
  testimonials: [
    {
      quote:
        "I have never had a bad meal. The portions they give you are great, and it is always prepared to order.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "Best pizza and sandwiches in town !!",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "We live so close that I think we just found our new pizza spot!",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      // Seen on the exa.ai mirror of the Google listing only (2025-11-04); not yet seen on Google directly.
      quote: "Old school mom and pop feel. The toppings were abundant! Highly recommend.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      // Yelp review as shown on Apple Maps (star rating not shown there).
      quote: "Always great food! Always fresh they make their own pizza dough.",
      sourceLabel: "Yelp",
      sourceUrl: YELP_URL,
    },
    {
      quote:
        "Uncle Charlie's is truly a local staple with consistently great food and so many memories tied to it.",
      sourceLabel: "Yelp",
      sourceUrl: YELP_URL,
    },
  ],

  faq: [
    {
      question: "What are your hours?",
      answer:
        "Tuesday, Wednesday and Sunday 11 AM–9 PM; Thursday, Friday and Saturday 11 AM–10 PM. We're closed on Mondays. Holiday closures are posted on our Facebook page.",
    },
    {
      question: "How do I place an order?",
      answer: "Call us at (904) 781-4770 or order at the counter. Eat in or take it to go.",
    },
    {
      // Printed menu header "Pizza (Homemade pizza dough)"; SinglePlatform "Homemade pizza dough".
      question: "Do you make your own pizza dough?",
      answer: "Yes. Our pizza dough is homemade.",
    },
    {
      // Printed menu: "Beer (With food purchase only)", Bud Light / Budweiser, mug or pitcher.
      question: "Do you serve beer?",
      answer: "Yes. Bud Light and Budweiser by the mug or pitcher, with a food purchase.",
    },
    {
      // Facebook "Outdoor seating"; Apple Maps "Outdoor Dining"; photos of the covered front walkway.
      question: "Can we sit outside?",
      answer: "Yes. There are tables out front under the covered walkway, plus seating inside.",
    },
    {
      question: "Where do I park?",
      answer: "We have our own parking lot right in front of the shop at 1977 Lane Ave S.",
    },
  ],

  menuNote: "Homemade pizza dough. Subs come small or large. Call (904) 781-4770 for current prices.",

  // Items from the shop's printed takeout menu (see header + brief §2). No prices (old/conflicting).
  // `signature` = most-mentioned dishes in reviews (steak sub, Italian/Special subs, lasagna, pizza).
  menu: [
    {
      id: "pizza",
      name: "Pizza",
      description:
        "Homemade pizza dough. Small or large. Toppings: extra cheese, pepperoni, sausage, hamburger, ham, mushroom, black olive, onion, peppers, anchovy, pineapple.",
      items: [
        { id: "cheese-pizza", name: "Cheese Pizza", description: "Small or large." },
        { id: "topping-pizza", name: "Pizza with Toppings", description: "1, 2 or 3 toppings. Small or large." },
        {
          id: "all-the-way-pizza",
          signature: true,
          name: "All the Way Pizza",
          description: "Pepperoni, sausage, hamburger, ham, mushroom, black olive, onion, peppers and extra cheese.",
        },
        { id: "two-large-cheese-pizzas", name: "2 Large Cheese Pizzas", description: "Special. Toppings extra." },
        { id: "calzone", name: "Calzone", description: "Add your choice of fillings." },
        { id: "wings", name: "Wings", description: "Plain, Buffalo or Golden BBQ. 10 or 20 pieces." },
      ],
    },
    {
      id: "subs",
      name: "Subs",
      description: "Small or large.",
      items: [
        { id: "italian-sub", signature: true, name: "Italian", description: "Salami, hot ham and mortadella." },
        {
          id: "uncle-charlies-special-sub",
          signature: true,
          name: "Uncle Charlie's Special",
          description: "Salami, hot ham, roast beef, turkey and provolone.",
        },
        { id: "ham-cheese-sub", name: "Ham & Cheese" },
        { id: "roast-beef-sub", name: "Roast Beef" },
        { id: "tuna-sub", name: "Tuna" },
        { id: "turkey-sub", name: "Turkey" },
        { id: "pastrami-sub", name: "Pastrami" },
        { id: "salami-sub", name: "Salami" },
        // DoorDash/Grubhub item lists name these four "... Parmesan".
        { id: "chicken-sub", name: "Chicken Parmesan" },
        { id: "veal-sub", name: "Veal Parmesan" },
        { id: "meatball-sub", signature: true, name: "Meatball Parmesan" },
        { id: "eggplant-sub", name: "Eggplant Parmesan" },
        { id: "sausage-sub", name: "Sausage" },
        { id: "cheeseburger-sub", name: "Cheeseburger Sub" },
      ],
    },
    {
      id: "steak-subs",
      name: "Steak Subs",
      description: "Small or large.",
      items: [
        {
          id: "steak-sub",
          signature: true,
          name: "Steak Sub",
          description: "Plain, or add cheese, onion, mushroom and peppers. Extra meat available.",
        },
      ],
    },
    {
      id: "pasta",
      name: "Pasta",
      items: [
        { id: "lasagna", signature: true, name: "Lasagna" },
        { id: "stuffed-shells", name: "Stuffed Shells" },
        { id: "manicotti", name: "Manicotti" },
        { id: "spaghetti", name: "Spaghetti", description: "Plain or with meatballs." },
        { id: "shells", name: "Shells", description: "Plain or with meatballs." },
        { id: "ravioli", name: "Ravioli", description: "Plain or with meatballs." },
        { id: "extra-meatball", name: "Extra Meatball" },
        { id: "garlic-bread", name: "Extra Cheese / Garlic Bread" },
      ],
    },
    {
      id: "salads",
      name: "Salads",
      description: "Small or large. Extra feta, peppers or dressing available.",
      items: [
        { id: "garden-salad", name: "Garden Salad", description: "Tomato, provolone and onion." },
        {
          id: "greek-salad",
          name: "Greek Salad",
          description: "Tomato, provolone, onion, feta, black olive and pepperoncini.",
        },
        {
          id: "antipasto-salad",
          name: "Antipasto",
          description: "Tomato, provolone, onion, ham, pepperoni, black olive and pepperoncini.",
        },
        { id: "grilled-chicken-salad", name: "Grilled Chicken Salad" },
      ],
    },
    {
      id: "burgers",
      name: "Burgers & Hot Dogs",
      items: [
        { id: "hamburger", name: "Hamburger" },
        { id: "cheeseburger", name: "Cheeseburger" },
        { id: "hot-dog", name: "Hot Dog" },
      ],
    },
    {
      id: "sides",
      name: "Sides",
      items: [
        { id: "fries", name: "Fries" },
        { id: "onion-rings", name: "Onion Rings" },
        { id: "cheese-sticks", name: "Cheese Sticks" },
        { id: "fried-mushrooms", name: "Fried Mushrooms" },
        { id: "corn-nuggets", name: "Corn Nuggets" },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        { id: "cannoli", name: "Cannoli" },
        { id: "cheesecake", name: "Cheesecake" },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Kids, medium or large. Refills available.",
      items: [
        { id: "fountain-soda", name: "Fountain Soda", description: "Coca-Cola products." },
        { id: "iced-tea", name: "Homemade Iced Tea", description: "Sweet or unsweet." },
        {
          id: "beer",
          name: "Beer",
          description: "Bud Light or Budweiser by the mug, small pitcher or large pitcher. With food purchase only.",
        },
      ],
    },
  ],

  // Real customer photos (see images/MANIFEST.md); credit keys only, no URLs. Owner's OK needed.
  photos: [
    { src: "/images/hero-half-and-half-pizza.jpg", alt: "Large pizza topped half with pepperoni and half with crumbled meat", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600, hero: true },
    { src: "/images/pepperoni-pizza.jpg", alt: "Pepperoni pizza on a metal tray", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/cheese-pizza.jpg", alt: "Cheese pizza in a takeout box", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/half-pepperoni-half-cheese-pizza.jpg", alt: "Half pepperoni, half cheese pizza in a takeout box", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/cold-sub-hot-peppers.jpg", alt: "Cold sub loaded with lettuce, tomato, banana peppers and jalapeños", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/steak-sub-peppers-onions.jpg", alt: "Steak sub with grilled onions and peppers", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/hot-sub-melted-cheese.jpg", alt: "Hot sub with melted cheese, cut in half", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/calzone-marinara.jpg", alt: "Golden calzone with a cup of marinara", category: "food", credit: "google-maps-ugc", width: 1590, height: 1600 },
    { src: "/images/meatballs-marinara.jpg", alt: "Two meatballs in red sauce", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/corn-nuggets.jpg", alt: "Basket of fried corn nuggets with a dipping sauce", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/french-fries.jpg", alt: "Basket of thick-cut fries", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/storefront-pizza-pasta-sign.jpg", alt: "Storefront with the Pizza, Pasta, Uncle Charlie's Sandwiches sign and an Italian flag", category: "storefront", credit: "google-maps-ugc", width: 1024, height: 768 },
    { src: "/images/storefront-green-facade.jpg", alt: "Green and white storefront with Pizza and Pasta in the windows", category: "storefront", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/order-counter-mangiare.jpg", alt: "Wood-paneled order counter painted with \"Mangiare!\" under the menu boards", category: "interior", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/open-kitchen.jpg", alt: "Open kitchen behind the counter with menu boards overhead", category: "interior", credit: "google-maps-ugc", width: 1600, height: 1200 },
  ],
  heroImage: "/images/hero-half-and-half-pizza.jpg",

  // Red/green/white from the storefront trim and Italian flag; mustard from the window lettering.
  palette: {
    ink: "#2A2420",
    brand: "#B8322A",
    brandDeep: "#8E2520",
    accent: "#2E7D4F",
    mustard: "#E3B23C",
    cream: "#FBF6EC",
    paper: "#FFFFFF",
  },

  about: {
    // Verified: open since July 1977 (Facebook posts 2021 + 2026); family-owned and operated with the
    // same family behind the counter for years (Restaurantji summary, Google/Yelp reviews); homemade dough
    // (printed menu); open kitchen (Google review via exa mirror + photos); carry-out help for customers
    // (Google review, live). Neutral wording; no owner/staff names.
    heading: "A Westside pizza and sub shop since 1977",
    paragraphs: [
      "Uncle Charlie's has been making pizza, subs and pasta on Lane Avenue South since July 1977. It's a family-run, old-school Italian shop, and plenty of today's regulars first came in as kids.",
      "The pizza dough is homemade, the subs come small or large, and everything is made to order in an open kitchen. Favorites include the Italian and Uncle Charlie's Special subs, steak subs, lasagna, stuffed shells and the All the Way pizza.",
      "Eat in, grab a table out front, or call ahead and pick it up. Bud Light and Budweiser come by the mug or pitcher with your meal.",
    ],
  },

  heroKicker: "Westside Jax since 1977",

  servesCuisine: ["Italian", "Pizza", "Sandwiches"],

  seo: {
    title: "Uncle Charlie's Sandwiches | Pizza, Subs & Pasta on Lane Ave, Jacksonville",
    description:
      "Homemade-dough pizza, Italian subs, steak subs, lasagna and salads at 1977 Lane Ave S, Jacksonville, FL since 1977. Tue–Sun from 11 AM; closed Monday. Call (904) 781-4770.",
  },

  // Footer credit is handled by the dev (repo default kept).
  footerCredit: "Built by nicklopacki.com",
};
