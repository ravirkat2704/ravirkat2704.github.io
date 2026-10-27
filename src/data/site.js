// Edit your details HERE — every link on the site reads from this file.
export const SITE = {
  github: "ravirkat2704", // must match your real GitHub username
  linkedin: "https://www.linkedin.com/in/ravi-kenchanagoudar-006506188",
  email: "ravikenchanagoudar@gmail.com",
  phone: "+919265150356", // set to "" to hide phone + WhatsApp from the site
  location: "Anand, Gujarat, India"
};

const BASE = import.meta.env.BASE_URL;
const img = (path) => `${BASE}images/${path}`;
export const asset = (path) => `${BASE}${path}`;

// repo / demo: paste real URLs; empty string hides the link.
export const projects = [
  {
    number: "01", title: "TravelGo", category: "TRAVEL BOOKING PLATFORM", color: "lime",
    type: "Full-stack web app",
    description: "A trip package booking system with package discovery, user accounts, booking management and separate admin and user panels.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    features: ["Trip package catalogue", "User authentication", "Booking and invoice generation", "Admin dashboard"],
    repo: "", demo: "",
    images: [
      { src: img("TravelGo/travelgo-homepage.jpg"), label: "Homepage" },
      { src: img("TravelGo/travelgo-packages.jpg"), label: "Packages" },
      { src: img("TravelGo/travelgo-admin.jpg"), label: "Admin panel" }
    ]
  },
  {
    number: "02", title: "Cafe Management", category: "ONLINE COFFEE SHOP", color: "purple",
    type: "Management system",
    description: "A café application for menu display, customer orders and payments, with an admin dashboard for menu, orders and inventory.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    features: ["Digital menu", "Order processing", "Payment workflow", "Admin and inventory tools"],
    repo: "", demo: "",
    images: [
      { src: img("Cafe Management System/cafe-homepage.png"), label: "Homepage" },
      { src: img("Cafe Management System/cafe-admin-dashboard.jpg"), label: "Admin dashboard" }
    ]
  },
  {
    number: "03", title: "Nursery Management", category: "PLANT CATALOGUE & ORDERS", color: "green",
    type: "E-commerce website",
    description: "A nursery website with a plant catalogue, shopping cart and order management, plus an admin dashboard for users, products and categories.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: ["Plant catalogue", "Shopping cart", "Order management", "Admin dashboard"],
    repo: "", demo: "",
    images: [
      { src: img("Nursery Management/nursery-homepage.png"), label: "Homepage" },
      { src: img("Nursery-management/nursery-catalogue.png"), label: "Catalogue" },
      { src: img("Nursery-management/nursery-admin-dashboard.png"), label: "Admin dashboard" }
    ]
  },
  {
    number: "04", title: "Airline Reservation", category: "DESKTOP APPLICATION", color: "blue",
    type: "Desktop application",
    description: "A Windows Forms college project covering flight scheduling, ticket booking, refunds and cancellations, and booking reports.",
    stack: ["VB.NET", "Windows Forms", "SQL Server"],
    features: ["Flight and route scheduling", "Passenger booking", "Refund and cancellation", "Reports"],
    repo: "", demo: "",
    images: [
      { src: img("Airline Reservation/airline-homepage.png"), label: "Homepage" },
      { src: img("Airline Reservation/booking-form.png"), label: "Booking form" },
      { src: img("Airline Reservation/airline-admin-dashboard.png"), label: "Admin dashboard" }
    ]
  }
];

export const skillGroups = [
  { title: "Languages", code: "01 / CORE", skills: ["PHP", "Python", "Java", "JavaScript", "HTML5", "CSS3"] },
  { title: "Frameworks & tools", code: "02 / BUILD", skills: ["Laravel", "Node.js", "Bootstrap", "VS Code", "Git", "GitHub"] },
  { title: "Databases", code: "03 / DATA", skills: ["MySQL", "MongoDB", "SQL Server"] }
];

export const education = [
  { period: "2025 — PRESENT", degree: "Master of Computer Applications", institute: "ISTAR", score: "7.42", status: "IN PROGRESS" },
  { period: "2022 — 2025", degree: "Bachelor of Computer Applications", institute: "Natubhai V Patel College of Pure and Applied Sciences", score: "8.03", status: "COMPLETED" }
];

export const certifications = [
  { title: "Introduction to Java", provider: "Coursera", date: "SEP 2023" },
  { title: "Python Basic Structures", provider: "Coursera", date: "FEB 2024" },
  { title: "Introduction to AI", provider: "Coursera", date: "JAN 2025" }
];
