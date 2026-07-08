// ── Frost Elite Events ────────────────────────────────────
// Add new events here — both events.html and index.html pull from this file.

const FROST_EVENTS = [
  {
    id: "tryouts-2026-2027",
    title: "Frost Elite Tryouts",
    tag: "Tryouts",
    // No single date — this event stays listed until expiresISO passes.
    noDate: true,
    seasonLabel: "2026–2027 Season",
    expiresISO: "2026-10-31",
    time: "Dates & times by age group",
    ages: "10U · 12U · 14U · 16U · 18U",
    description: "At Frost Elite, we are committed to developing confident athletes in a competitive, family-oriented environment. Our focus is on player development, teamwork, leadership, and building young women who are prepared for success both on and off the field.",
    noteTitle: "Can't Make Your Tryout?",
    note: "If you are unable to attend your scheduled tryout, please contact Landon Frost at (541) 521-4224 to arrange a private evaluation.",
    notePhone: "541-521-4224",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdqS_jzpiTIFVhznCpGTyCFYKHwBOZmcB2vydjpRYz5iKgIJg/viewform",
  },
  {
    id: "memorial-day-camp-2026",
    title: "Memorial Day Softball Camp",
    tag: "Camp",
    dateISO: "2026-05-25",
    dateDisplay: "Monday, May 25th, 2026",
    time: "9:00 AM – 12:00 PM",
    ages: "All Ages",
    cost: "$60",
    location: "Clackamas High School Softball Field",
    address: "14486 SE 122nd Ave, Clackamas, OR 97015",
    description: "A great opportunity for athletes to get quality reps, sharpen their skills, and train in a competitive, high-energy environment. Designed for players of all levels who want to improve their mechanics, build confidence, and get better heading into the summer season.",
    bring: ["Cleats or Tennis Shoes", "Glove", "Bat", "Helmet", "Water"],
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexpOL9dFETnwb3qGNCqefNdLC5v-lrE6bSXJXGWAA7xrujXA/viewform?usp=pp_url",
    payment: ["Venmo: @frostelite (to lock in your spot)", "Cash accepted the day of camp"],
    paymentNote: "If you do not have Venmo, please text 541-521-4224 to reserve your spot.",
  },
];
