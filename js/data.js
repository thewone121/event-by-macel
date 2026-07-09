/* =========================================================================
   EVENT BY MACEL — Content data
   All imagery is royalty-free Unsplash placeholder photography — replace
   with the client's own event photography before launch (see data-placeholder).
   ========================================================================= */

function img(id, w, h){
  w = w || 1000; h = h || 1200;
  return "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + w + "&h=" + h + "&q=80";
}

const SERVICES = [
  { idx:"01", name:"Wedding Planning", slug:"wedding-planning", short:"End-to-end planning for the day you've always imagined.", desc:"From the first venue visit to the final send-off, we manage every vendor, timeline and detail so you experience your wedding as a guest of honour, not a project manager." },
  { idx:"02", name:"Full Planning", slug:"full-planning", short:"Complete concept-to-execution management for any occasion.", desc:"Concept development, budget architecture, vendor sourcing and on-site production — a single point of contact carrying your vision from idea to reality." },
  { idx:"03", name:"Corporate Events", slug:"corporate-events", short:"Polished product launches, galas and company milestones.", desc:"Brand-aligned staging, guest experience design and flawless logistics for product launches, conferences, award nights and company anniversaries." },
  { idx:"04", name:"Day-of Coordination", slug:"day-of-coordination", short:"You've planned it — we make sure it runs perfectly.", desc:"For couples and hosts who've done the planning themselves, our team steps in on the day to manage vendors, timing and any last-minute surprises." },
  { idx:"05", name:"Birthday Celebrations", slug:"birthday-celebrations", short:"Milestone birthdays styled to feel unmistakably you.", desc:"From intimate dinners to landmark milestone parties, we design themes, décor and entertainment that reflect the guest of honour's story." },
  { idx:"06", name:"Event Styling", slug:"event-styling", short:"Tablescapes, florals and décor with an editorial eye.", desc:"Colour palettes, floral direction, table styling and lighting design that transform any venue into a considered, photograph-ready space." },
  { idx:"07", name:"Bridal Showers", slug:"bridal-showers", short:"Elegant celebrations for the bride-to-be and her circle.", desc:"Thoughtfully styled bridal showers — from soft garden luncheons to sophisticated evening affairs — tailored to the bride's story and taste." },
  { idx:"08", name:"Baby Showers", slug:"baby-showers", short:"Warm, beautifully styled welcomes for the newest arrival.", desc:"Gentle palettes, considered details and a warm atmosphere for celebrating new parents-to-be, styled to suit any theme or tradition." }
];

const FEATURED_EVENTS = [
  { title:"Adjoa &amp; Kwame's Garden Wedding", tag:"Wedding", image:img("1519741497674-611481863552", 900, 1100) },
  { title:"MTN Ghana Leadership Gala", tag:"Corporate", image:img("1470019693664-1d202d2c0907", 900, 1100) },
  { title:"A Milestone 50th in Champagne &amp; Gold", tag:"Birthday", image:img("1478146059778-26028b07395a", 900, 1100) }
];

const PORTFOLIO_PROJECTS = [
  {
    id:"garden-wedding-adjoa-kwame", title:"Adjoa &amp; Kwame", category:"Wedding · Full Planning",
    location:"Aburi Botanical Gardens, Ghana", guests:"220", duration:"9 months", budgetTier:"Signature",
    desc:"An al-fresco celebration built around soft ivory drapery, trailing greenery and candlelight — planned over nine months from venue selection to the final dance.",
    images:[img("1519741497674-611481863552"), img("1519167758481-83f550bb49b3"), img("1511795409834-ef04bbd61622")]
  },
  {
    id:"mtn-leadership-gala", title:"MTN Ghana Leadership Gala", category:"Corporate · Full Planning",
    location:"Kempinski Hotel Gold Coast City, Accra", guests:"340", duration:"5 months", budgetTier:"Signature",
    desc:"A black-and-gold gala staged to mark a decade of leadership milestones, with brand-integrated stage design, entertainment and a seated dinner for 340.",
    images:[img("1470019693664-1d202d2c0907"), img("1520854221256-17451cc331bf"), img("1522413452208-996ff3f3e740")]
  },
  {
    id:"golden-50th-birthday", title:"A Golden 50th", category:"Birthday · Event Styling",
    location:"Private Residence, East Legon", guests:"90", duration:"6 weeks", budgetTier:"Classic",
    desc:"A champagne-and-gold milestone birthday with a bespoke floral arch, personalised tablescape and a surprise reveal timeline coordinated to the minute.",
    images:[img("1478146059778-26028b07395a"), img("1583939003579-730e3918a45a"), img("1519225421980-715cb0215aed")]
  },
  {
    id:"amara-bridal-shower", title:"Amara's Bridal Shower", category:"Bridal Shower · Styling",
    location:"Villa Monticello, Accra", guests:"38", duration:"3 weeks", budgetTier:"Intimate",
    desc:"A soft, garden-inspired luncheon in blush and ivory, styled around a hand-lettered welcome sign and a floating floral centrepiece.",
    images:[img("1511285560929-80b456fea0bc"), img("1519671482749-fd09be7ccebf"), img("1522673607200-164d1b6ce486")]
  },
  {
    id:"safo-baby-shower", title:"Welcoming Baby Safo", category:"Baby Shower · Styling",
    location:"Private Residence, Cantonments", guests:"45", duration:"4 weeks", budgetTier:"Intimate",
    desc:"A gentle sage-and-cream baby shower with a balloon arch, hand-painted dessert table backdrop and personalised keepsake favours.",
    images:[img("1546032996-6dfacbacbf3f"), img("1550005809-91ad75fb315f"), img("1571501679680-de32f1e7aad4")]
  },
  {
    id:"stanbic-product-launch", title:"Stanbic Bank Product Launch", category:"Corporate · Event Styling",
    location:"Movenpick Ambassador Hotel, Accra", guests:"180", duration:"7 weeks", budgetTier:"Classic",
    desc:"A sleek launch evening built around brand colour lighting, a media wall and a choreographed reveal moment for press and stakeholders.",
    images:[img("1533174072545-7a4b6ad7a6c3"), img("1511578314322-379afb476865"), img("1464366400600-7168b8af9bc3")]
  }
];

const GALLERY_IMAGES = [
  { src:img("1519741497674-611481863552", 800, 1000), w:800, h:1000, cat:"Weddings" },
  { src:img("1519167758481-83f550bb49b3", 800, 1000), w:800, h:1000, cat:"Weddings" },
  { src:img("1511795409834-ef04bbd61622", 800, 600), w:800, h:600, cat:"Styling" },
  { src:img("1470019693664-1d202d2c0907", 800, 1000), w:800, h:1000, cat:"Corporate" },
  { src:img("1520854221256-17451cc331bf", 800, 600), w:800, h:600, cat:"Corporate" },
  { src:img("1478146059778-26028b07395a", 800, 1000), w:800, h:1000, cat:"Birthdays" },
  { src:img("1583939003579-730e3918a45a", 800, 600), w:800, h:600, cat:"Birthdays" },
  { src:img("1519225421980-715cb0215aed", 800, 1000), w:800, h:1000, cat:"Styling" },
  { src:img("1522413452208-996ff3f3e740", 800, 600), w:800, h:600, cat:"Corporate" },
  { src:img("1511285560929-80b456fea0bc", 800, 1000), w:800, h:1000, cat:"Bridal Showers" },
  { src:img("1519671482749-fd09be7ccebf", 800, 600), w:800, h:600, cat:"Bridal Showers" },
  { src:img("1522673607200-164d1b6ce486", 800, 1000), w:800, h:1000, cat:"Styling" },
  { src:img("1546032996-6dfacbacbf3f", 800, 600), w:800, h:600, cat:"Baby Showers" },
  { src:img("1550005809-91ad75fb315f", 800, 1000), w:800, h:1000, cat:"Baby Showers" },
  { src:img("1571501679680-de32f1e7aad4", 800, 600), w:800, h:600, cat:"Styling" },
  { src:img("1533174072545-7a4b6ad7a6c3", 800, 1000), w:800, h:1000, cat:"Weddings" },
  { src:img("1511578314322-379afb476865", 800, 600), w:800, h:600, cat:"Corporate" },
  { src:img("1464366400600-7168b8af9bc3", 800, 1000), w:800, h:1000, cat:"Weddings" }
];

const TESTIMONIALS = [
  { name:"Adjoa Frimpong", role:"Bride, Garden Wedding", rating:5, quote:"Macel and her team turned our wedding into something out of a dream. Every single detail, down to the napkin folds, felt considered. Our guests are still talking about it.", avatar:img("1633332755192-727a05c4013d",140,140) },
  { name:"Kwesi Ampofo", role:"Head of Marketing, MTN Ghana", rating:5, quote:"Professional from the first call to the final guest departure. Event by Macel handled our leadership gala with a level of polish we hadn't seen from a local planner before.", avatar:img("1607746882042-944635dfe10e",140,140) },
  { name:"Linda Owusu-Ansah", role:"Mother of the Bride", rating:5, quote:"My daughter's bridal shower was more beautiful than I could have pictured. Macel listened to exactly what we wanted and somehow made it even better.", avatar:img("1580489944761-15a19d654956",140,140) },
  { name:"Yaw Boateng", role:"Host, 50th Birthday", rating:5, quote:"They managed vendors I hadn't even thought to book, kept us on budget, and the day itself ran without a single hitch. Worth every cedi.", avatar:img("1508214751196-bcfd4ca60f91",140,140) },
  { name:"Efua Sarpong", role:"Baby Shower Host", rating:4, quote:"Warm, attentive and endlessly patient with my many change requests. The final result was soft, elegant, and exactly the mood I was hoping for.", avatar:img("1573496359142-b8d87734a5a2",140,140) },
  { name:"Nana Akoto", role:"Event Manager, Stanbic Bank", rating:5, quote:"A true creative partner, not just a vendor. Event by Macel understood our brand and translated it into a launch evening our stakeholders still mention.", avatar:img("1524504388940-b1c1722653e1",140,140) }
];

const TEAM = [
  { name:"Macel Andoh", role:"Founder &amp; Lead Planner", photo:img("1580489944761-15a19d654956",600,750) },
  { name:"Priscilla Mensah", role:"Senior Event Stylist", photo:img("1573496359142-b8d87734a5a2",600,750) },
  { name:"Kojo Antwi", role:"Logistics &amp; Vendor Relations", photo:img("1508214751196-bcfd4ca60f91",600,750) },
  { name:"Abena Owusu", role:"Client Experience Lead", photo:img("1500648767791-00dcc994a43e",600,750) }
];

const INSTAGRAM_PREVIEW = [
  img("1519741497674-611481863552",500,500), img("1470019693664-1d202d2c0907",500,500),
  img("1478146059778-26028b07395a",500,500), img("1511285560929-80b456fea0bc",500,500),
  img("1546032996-6dfacbacbf3f",500,500), img("1533174072545-7a4b6ad7a6c3",500,500)
];

function starString(rating){ const full = Math.round(rating); return "★".repeat(full) + "☆".repeat(5-full); }
function starsMarkup(rating){ return '<span class="t-stars" role="img" aria-label="Rated ' + rating.toFixed(1) + ' out of 5">' + starString(rating) + '</span>'; }
