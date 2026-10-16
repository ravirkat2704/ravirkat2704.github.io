
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check,
  Code2, Download, ExternalLink, Github, GraduationCap, Mail,
  MapPin, Menu, Phone, Terminal, X, Zap
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "TravelGo",
    category: "TRAVEL BOOKING PLATFORM",
    description: "A trip package booking system with package discovery, user accounts, booking management and an administrative dashboard.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    features: ["Trip package catalogue", "User authentication", "Booking and invoice management", "Admin dashboard"],
    images: [
      { src: "/images/TravelGo/travelgo-homepage.jpg", label: "Homepage" },
      { src: "/images/TravelGo/travelgo-packages.jpg", label: "Packages" },
      { src: "/images/TravelGo/travelgo-admin.jpg", label: "Admin panel" }
    ],
    color: "lime",
    type: "Full-stack web app"
  },
  {
    number: "02",
    title: "Cafe Management",
    category: "ONLINE COFFEE SHOP",
    description: "A café management application for displaying menu items, handling customer orders and supporting administrative inventory tasks.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    features: ["Digital menu", "Order management", "Payment workflow", "Admin and inventory tools"],
    images: [
      { src: "/images/Cafe%20Management%20System/cafe-homepage.png", label: "Homepage" },
      { src: "/images/Cafe%20Management%20System/cafe-admin-dashboard.jpg", label: "Admin dashboard" }
    ],
    color: "purple",
    type: "Management system"
  },
  {
    number: "03",
    title: "Nursery Management",
    category: "PLANT CATALOGUE & ORDERS",
    description: "A nursery website that presents plants and products through a catalogue with cart, order and administrative management features.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    features: ["Plant catalogue", "Product browsing", "Cart and order workflow", "Admin management"],
    images: [
      { src: "/images/Nursery%20Management/nursery-homepage.png", label: "Homepage" },
      { src: "/images/Nursery%20Management/nursery-catalogue.png", label: "Catalogue" },
      { src: "/images/Nursery%20Management/nursery-admin-dashboard.png", label: "Admin dashboard" }
    ],
    color: "green",
    type: "E-commerce website"
  },
  {
    number: "04",
    title: "Airline Reservation",
    category: "DESKTOP APPLICATION",
    description: "A Windows Forms college project for demonstrating flight information, passenger booking, reservation management and administrative operations.",
    stack: ["VB.NET", "Windows Forms", "SQL Server"],
    features: ["Flight information", "Passenger booking form", "Reservation workflow", "Admin dashboard"],
    images: [
      { src: "/images/Airline%20Reservation/airline-homepage.png", label: "Homepage" },
      { src: "/images/Airline%20Reservation/booking-form.png", label: "Booking form" },
      { src: "/images/Airline%20Reservation/airline-admin-dashboard.png", label: "Admin dashboard" }
    ],
    color: "blue",
    type: "Desktop application"
  }
];

const skillGroups = [
  {
    title: "Languages",
    code: "01 / CORE",
    skills: ["PHP", "Python", "Java", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks & tools",
    code: "02 / BUILD",
    skills: ["Laravel", "Node.js", "Bootstrap", "VS Code", "Git", "GitHub"]
  },
  {
    title: "Databases",
    code: "03 / DATA",
    skills: ["MySQL", "MongoDB", "SQL Server"]
  }
];

const education = [
  {
    period: "2025 — PRESENT",
    degree: "Master of Computer Applications",
    institute: "ISTAR",
    score: "7.42",
    status: "IN PROGRESS"
  },
  {
    period: "2022 — 2025",
    degree: "Bachelor of Computer Applications",
    institute: "Natubhai V Patel College of Pure and Applied Sciences",
    score: "8.03",
    status: "COMPLETED"
  }
];

const certifications = [
  { title: "Introduction to Java", provider: "Coursera", date: "SEP 2023" },
  { title: "Python Basic Structures", provider: "Coursera", date: "FEB 2024" },
  { title: "Introduction to AI", provider: "Coursera", date: "JAN 2025" }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

function SectionHeading({ index, eyebrow, title, accent, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-eyebrow">
        <span>{index}</span>
        <span className="eyebrow-line" />
        {eyebrow}
      </div>
      <h2>{title} <span>{accent}</span></h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ProjectCard({ project, onImageOpen }) {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = project.images[activeImage];

  const changeImage = (direction) => {
    setActiveImage((current) =>
      (current + direction + project.images.length) % project.images.length
    );
  };

  return (
    <motion.article
      className={`project-card project-${project.color}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="project-topline">
        <span className="project-number">/{project.number}</span>
        <span className="project-type">{project.type}</span>
      </div>

      <div className="project-preview">
        <button
          className="preview-image-button"
          onClick={() => onImageOpen(currentImage.src, `${project.title} — ${currentImage.label}`)}
          aria-label={`Open ${currentImage.label} screenshot`}
        >
          <img
            src={currentImage.src}
            alt={`${project.title} ${currentImage.label}`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.opacity = "0.15";
            }}
          />
          <span className="preview-open"><ExternalLink size={16} /></span>
        </button>
        <div className="preview-caption">
          <span><span className="status-dot" /> SCREEN / {currentImage.label.toUpperCase()}</span>
          <span>{String(activeImage + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}</span>
        </div>
        {project.images.length > 1 && (
          <div className="gallery-thumbnails">
            {project.images.map((image, index) => (
              <button
                key={image.src}
                className={`gallery-thumb ${activeImage === index ? "active" : ""}`}
                onClick={() => setActiveImage(index)}
                aria-label={`Show ${image.label}`}
                aria-pressed={activeImage === index}
              >
                <img src={image.src} alt="" loading="lazy" />
                <span>{image.label}</span>
              </button>
            ))}
            <div className="gallery-arrows">
              <button onClick={() => changeImage(-1)} aria-label="Previous screenshot"><ArrowLeft size={15} /></button>
              <button onClick={() => changeImage(1)} aria-label="Next screenshot"><ArrowRight size={15} /></button>
            </div>
          </div>
        )}
      </div>

      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}<span className="title-period">.</span></h3>
        <p className="project-description">{project.description}</p>

        <div className="project-features">
          {project.features.map((feature) => (
            <span key={feature}><Check size={13} /> {feature}</span>
          ))}
        </div>

        <div className="project-stack">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Contact", "#contact"]
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="background-grid" aria-hidden="true" />
      <div className="ambient-glow glow-one" aria-hidden="true" />
      <div className="ambient-glow glow-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Ravi home">
            <span className="brand-symbol">R<span>.</span></span>
            <span className="brand-name">RAVI<span>_DEV</span></span>
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="availability">
              <span className="availability-pulse" />
              MCA STUDENT <span className="availability-divider">/</span> DEVELOPER
            </div>

            <p className="hero-kicker">HELLO, WORLD! I'M</p>
            <h1>Ravi<br /><span className="hero-name-accent">Kenchanagoudar</span><span className="hero-dot">.</span></h1>

            <div className="hero-role">
              <span className="role-bracket">&lt;</span>
              Full-stack web developer
              <span className="role-bracket">/&gt;</span>
            </div>

            <p className="hero-description">
              I build practical web applications, connect interfaces with databases,
              and turn ideas into working software — one commit at a time.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-outline" href="/resume.pdf" target="_blank" rel="noreferrer">
                <Download size={16} /> View resume
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/ravirkat2704" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a href="https://www.linkedin.com/in/ravi-kenchanagoudar-006506188" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-terminal-wrap"
            initial={{ opacity: 0, scale: 0.96, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="terminal-decoration terminal-decoration-top">DEV_ENVIRONMENT / 01</div>
            <div className="hero-terminal">
              <div className="terminal-titlebar">
                <div className="terminal-lights"><i /><i /><i /></div>
                <span>ravi@portfolio:~</span>
                <Terminal size={15} />
              </div>
              <div className="terminal-body">
                <p className="terminal-muted"># A little about me</p>
                <p><span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {"{"}</p>
                <p className="terminal-indent"><span className="syntax-green">name</span>: <span className="syntax-yellow">"Ravi"</span>,</p>
                <p className="terminal-indent"><span className="syntax-green">role</span>: <span className="syntax-yellow">"Web Developer"</span>,</p>
                <p className="terminal-indent"><span className="syntax-green">education</span>: <span className="syntax-yellow">"MCA"</span>,</p>
                <p className="terminal-indent"><span className="syntax-green">stack</span>: [</p>
                <p className="terminal-indent terminal-indent-double"><span className="syntax-yellow">"PHP"</span>, <span className="syntax-yellow">"Laravel"</span>,</p>
                <p className="terminal-indent terminal-indent-double"><span className="syntax-yellow">"MySQL"</span>, <span className="syntax-yellow">"JavaScript"</span></p>
                <p className="terminal-indent">],</p>
                <p className="terminal-indent"><span className="syntax-green">mindset</span>: <span className="syntax-yellow">"Always learning"</span></p>
                <p>{"}"};</p>
                <div className="terminal-output"><span className="syntax-green">➜</span> Ready to build something useful<span className="terminal-cursor">_</span></div>
              </div>
              <div className="terminal-status">
                <span><span className="status-dot" /> SYSTEM ONLINE</span>
                <span>UTF-8</span>
                <span>JS</span>
              </div>
            </div>
            <div className="floating-code-chip"><Code2 size={15} /> clean code / useful products</div>
            <div className="hero-coordinate">22.56° N<br />72.93° E</div>
          </motion.div>

          <a href="#about" className="scroll-indicator">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
          <div className="hero-index">PORTFOLIO — 2026</div>
        </section>

        <section className="quick-stats section-shell" aria-label="Portfolio overview">
          <div className="stat-item">
            <span className="stat-number">04<span>+</span></span>
            <span className="stat-label">PROJECTS BUILT</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">03</span>
            <span className="stat-label">CERTIFICATIONS</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">03<span>+</span></span>
            <span className="stat-label">DATABASE / DEV TOOLS</span>
          </div>
          <div className="stat-item stat-location">
            <MapPin size={18} />
            <span className="stat-label">ANAND, GUJARAT, INDIA</span>
          </div>
        </section>

        <section className="section-shell section-block" id="about">
          <SectionHeading
            index="01"
            eyebrow="THE PERSON BEHIND THE CODE"
            title="Curious mind."
            accent="Practical builder."
            description="A little about my journey and how I approach development."
          />
          <div className="about-grid">
            <div className="about-main">
              <div className="about-label"><Zap size={16} /> MY APPROACH</div>
              <h3>Building software is more than writing code.</h3>
              <p>
                I'm a computer applications graduate currently pursuing my MCA at ISTAR.
                I enjoy developing web applications that bring together useful interfaces,
                reliable database operations and straightforward user workflows.
              </p>
              <p>
                From booking systems to management dashboards, my projects have helped me
                practise the process of planning features, implementing them and improving
                the overall user experience. I'm continuing to strengthen my development
                skills through hands-on work and learning.
              </p>
              <a className="text-link" href="#projects">See what I've built <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-side">
              <div className="about-code-card">
                <div className="mini-card-header"><span>principles.js</span><span>●</span></div>
                <p><span className="syntax-purple">function</span> <span className="syntax-blue">buildSolution</span>() {"{"}</p>
                <p className="terminal-indent"><span className="syntax-purple">return</span> {"{"}</p>
                <p className="terminal-indent terminal-indent-double"><span className="syntax-green">learn</span>: <span className="syntax-yellow">"daily"</span>,</p>
                <p className="terminal-indent terminal-indent-double"><span className="syntax-green">build</span>: <span className="syntax-yellow">"with purpose"</span>,</p>
                <p className="terminal-indent terminal-indent-double"><span className="syntax-green">improve</span>: <span className="syntax-yellow">"always"</span></p>
                <p className="terminal-indent">{"}"}</p>
                <p>{"}"}</p>
              </div>
              <div className="about-note">
                <span className="note-icon"><GraduationCap size={19} /></span>
                <div><strong>Currently learning</strong><p>MCA coursework and hands-on development</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="skills">
          <SectionHeading
            index="02"
            eyebrow="MY TOOLKIT"
            title="Tools I work"
            accent="with."
            description="Technologies used in my coursework and projects. My experience varies by tool."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                className="skill-card"
                key={group.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="skill-card-top"><Code2 size={19} /><span>{group.code}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <div className="skill-card-bottom"><span /> TOOLKIT / RAVI</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="projects-section section-block" id="projects">
          <div className="section-shell">
            <SectionHeading
              index="03"
              eyebrow="SELECTED WORK"
              title="Projects that"
              accent="do the work."
              description="A selection of academic and hands-on projects. Use the image controls to explore their screens."
            />
            <div className="projects-toolbar">
              <span><span className="status-dot" /> PROJECT ARCHIVE</span>
              <span>04 ENTRIES <span className="toolbar-divider">/</span> 2023—2026</span>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.number}
                  project={project}
                  onImageOpen={(src, title) => setLightbox({ src, title })}
                />
              ))}
            </div>
            <div className="projects-footer">
              <span>MORE CODE. MORE LEARNING. MORE TO BUILD.</span>
              <a href="https://github.com/ravirkat2704" target="_blank" rel="noreferrer" className="text-link">
                Explore GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="journey">
          <SectionHeading
            index="04"
            eyebrow="EDUCATION & LEARNING"
            title="The learning"
            accent="continues."
            description="My academic journey and additional learning milestones."
          />
          <div className="journey-grid">
            <div className="education-list">
              {education.map((item, index) => (
                <motion.article
                  className="education-card"
                  key={item.degree}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="education-marker"><GraduationCap size={18} /></div>
                  <div className="education-content">
                    <div className="education-meta"><span>{item.period}</span><span className="education-status">{item.status}</span></div>
                    <h3>{item.degree}</h3>
                    <p>{item.institute}</p>
                    <div className="education-score"><span>Academic score</span><strong>{item.score}</strong></div>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="certifications-panel">
              <div className="cert-panel-heading"><span>LEARNING LOG</span><Terminal size={16} /></div>
              <h3>Certifications<span className="title-period">.</span></h3>
              {certifications.map((cert, index) => (
                <div className="cert-item" key={cert.title}>
                  <span className="cert-index">0{index + 1}</span>
                  <div className="cert-details"><strong>{cert.title}</strong><span>{cert.provider}</span></div>
                  <span className="cert-date">{cert.date}</span>
                </div>
              ))}
              <div className="cert-footnote"><span className="status-dot" /> KEEP LEARNING / KEEP BUILDING</div>
            </div>
          </div>
        </section>

        <section className="section-shell section-block contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />
            <div className="contact-content">
              <div className="section-eyebrow"><span>05</span><span className="eyebrow-line" /> NEXT CONNECTION</div>
              <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
              <h2>Let's make<br />something <span>useful.</span></h2>
              <p className="contact-description">
                Have an opportunity, a project idea or want to connect about development?
                Send me a message. I'd be happy to hear from you.
              </p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:ravikenchanagoudar@gmail.com">
                  <Mail size={17} /> Email me <ArrowUpRight size={15} />
                </a>
                <a className="button button-whatsapp" href="https://wa.me/919265150356" target="_blank" rel="noreferrer">
                  <SiWhatsapp size={19} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="contact-details">
              <a href="mailto:ravikenchanagoudar@gmail.com"><Mail size={16} /><span>ravikenchanagoudar@gmail.com</span><ArrowUpRight size={13} /></a>
              <a href="tel:+919265150356"><Phone size={16} /><span>+91 92651 50356</span><ArrowUpRight size={13} /></a>
              <div><MapPin size={16} /><span>Anand, Gujarat, India</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a href="#home" className="brand footer-brand">
          <span className="brand-symbol">R<span>.</span></span>
          <span className="brand-name">RAVI<span>_DEV</span></span>
        </a>
        <p>Designed & built with curiosity<span className="title-period">.</span></p>
        <div className="footer-right">
          <span>© {new Date().getFullYear()} RAVI K.</span>
          <a href="https://github.com/ravirkat2704" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/ravi-kenchanagoudar-006506188" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href="https://wa.me/919265150356"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={25} />
      </a>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-topbar">
              <span><span className="status-dot" /> {lightbox.title}</span>
              <button onClick={() => setLightbox(null)} aria-label="Close screenshot"><X size={21} /></button>
            </div>
            <img src={lightbox.src} alt={lightbox.title} />
          </div>
        </div>
      )}
    </div>
  );
}
