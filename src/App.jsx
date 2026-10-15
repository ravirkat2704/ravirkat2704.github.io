import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight, ArrowUpRight, Code2, Database, ExternalLink, Github,
  GraduationCap, Mail, MapPin, Menu, MessageCircle, MonitorSmartphone,
  Server, X, Download, Linkedin, Layers3, Sparkles
} from "lucide-react";

const EMAIL = "ravikenchanagoudar@gmail.com";
const WHATSAPP = "919265150356";
const WHATSAPP_MESSAGE = "Hello Ravi, I found your portfolio and would like to discuss a work opportunity.";
const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const projects = [
  {
    number: "01",
    title: "TravelGo",
    type: "Trip Package Booking System",
    description: "A trip package booking management system with separate user and admin experiences, package management, booking workflows, profile management and invoice generation.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/images/travelgo.jpg",
    imageAlt: "TravelGo project screenshot",
    status: "Academic project",
    github: "",
    demo: ""
  },
  {
    number: "02",
    title: "Online Coffee Shop",
    type: "Cafe Management System",
    description: "A cafe management application covering menu management, customer order processing, payment functionality, inventory and an admin dashboard.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    image: "/images/coffee-shop.jpg",
    imageAlt: "Online Coffee Shop project screenshot",
    status: "Academic project",
    github: "",
    demo: ""
  },
  {
    number: "03",
    title: "Online Nursery",
    type: "Nursery Management System",
    description: "An online nursery system with product catalog, shopping cart, order management and administration for users, products and categories.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/images/nursery.jpg",
    imageAlt: "Online Nursery project screenshot",
    status: "Academic project",
    github: "",
    demo: ""
  },
  {
    number: "04",
    title: "Airline Reservation",
    type: "Reservation & Passenger Management",
    description: "A desktop reservation system featuring flight scheduling, route management, ticket booking, passenger records, cancellations, refunds and reports.",
    stack: ["VB.NET", "SQL Server 2008"],
    image: "/images/airline.jpg",
    imageAlt: "Airline Reservation project screenshot",
    status: "Academic project",
    github: "",
    demo: ""
  }
];

const skillGroups = [
  { icon: Code2, title: "Frontend", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { icon: Server, title: "Backend", items: ["PHP", "Laravel", "Node.js"] },
  { icon: Database, title: "Databases", items: ["MySQL", "MongoDB", "SQL Server"] },
  { icon: Layers3, title: "Other tools & languages", items: ["Java", "Python", "VS Code", "GitHub"] }
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <Reveal className="project-card-wrap" delay={index * 0.07}>
      <article className="project-card">
        <div className={`project-image ${imageFailed ? "project-image-placeholder" : ""}`}>
          {!imageFailed ? (
            <img src={project.image} alt={project.imageAlt} loading="lazy" onError={() => setImageFailed(true)} />
          ) : (
            <div className="image-placeholder-content">
              <MonitorSmartphone size={34} strokeWidth={1.5} />
              <span>Project screenshot</span>
              <small>Add your image to <code>public/images/</code></small>
            </div>
          )}
          <span className="project-number">{project.number}</span>
        </div>
        <div className="project-content">
          <div className="project-topline"><span>{project.status}</span><ArrowUpRight size={17} /></div>
          <h3>{project.title}</h3>
          <p className="project-type">{project.type}</p>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="project-actions">
            {project.github ? <a href={project.github} target="_blank" rel="noreferrer">Source code <Github size={15} /></a> : <span className="link-placeholder">Add repository URL</span>}
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a> : <span className="link-placeholder">Add demo URL</span>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]];

  return (
    <>
      <div className="hero-shell" id="home">
        <header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <a className="brand" href="#home" onClick={closeMenu}>RK<span>.</span></a>
            <button className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
              <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
            </div>
          </nav>
        </header>

        <main>
          <section className="hero container">
            <div className="hero-copy">
              <motion.div className="availability" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="availability-dot" /> MCA student · Developer
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>
                Building useful<br />things for the <span className="gradient-text">real world.</span>
              </motion.h1>
              <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>
                I'm Ravi Kenchanagoudar, a developer and MCA student interested in web applications, backend systems and thoughtful user experiences.
              </motion.p>
              <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}>
                <a className="button button-light" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
                <a className="button button-outline" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
                <a className="button button-outline" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16} /> View CV</a>
              </motion.div>
              <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
                <span><MapPin size={15} /> Anand, Gujarat, India</span>
                <span className="meta-separator" />
                <a href="https://github.com/ravirk2704" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
                <a href="https://www.linkedin.com/in/ravi-kenchanagoudar-006506188" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              </motion.div>
            </div>
            <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="art-glow" />
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="code-window">
                <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><Sparkles size={14} /></div>
                <div className="code-lines">
                  <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {'{'}</p>
                  <p><span className="code-muted">02</span> &nbsp;name: <span className="code-green">'Ravi'</span>,</p>
                  <p><span className="code-muted">03</span> &nbsp;focus: <span className="code-green">'Web apps'</span>,</p>
                  <p><span className="code-muted">04</span> &nbsp;stack: [</p>
                  <p><span className="code-muted">05</span> &nbsp;&nbsp;<span className="code-yellow">'Laravel'</span>, <span className="code-yellow">'PHP'</span>,</p>
                  <p><span className="code-muted">06</span> &nbsp;&nbsp;<span className="code-yellow">'MySQL'</span>, <span className="code-yellow">'JS'</span></p>
                  <p><span className="code-muted">07</span> &nbsp;],</p>
                  <p><span className="code-muted">08</span> &nbsp;alwaysLearning: <span className="code-blue">true</span></p>
                  <p><span className="code-muted">09</span> {'}'};</p>
                </div>
                <div className="window-status"><span><span className="status-dot" /> Available for opportunities</span><span>UTF-8</span></div>
              </div>
              <div className="floating-chip chip-top"><Code2 size={16} /> Clean code, clear purpose</div>
              <div className="floating-chip chip-bottom"><Database size={16} /> Backend + database</div>
            </motion.div>
            <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
          </section>
        </main>
      </div>

      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <span>Currently focused on</span>
          <strong>Web application development</strong><i />
          <strong>Backend & databases</strong><i />
          <strong>Learning by building</strong>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-layout">
          <Reveal><SectionHeading eyebrow="A little about me" title={<>Curious by nature.<br /><span className="text-accent">Practical by approach.</span></>} /></Reveal>
          <Reveal delay={0.1} className="about-copy">
            <p>I'm a BCA graduate (2025) currently pursuing a Master of Computer Applications at ISTAR. My academic projects have given me hands-on exposure to building web applications, connecting databases and implementing workflows for real use cases.</p>
            <p>I enjoy understanding how an application works beyond its interface — from data models and CRUD operations to authentication, booking flows and admin tools. I'm looking for opportunities to learn from real development teams and contribute reliably.</p>
            <div className="about-facts">
              <div><span className="fact-number">2025</span><span>BCA graduate</span></div>
              <div><span className="fact-number">MCA</span><span>Currently studying</span></div>
              <div><span className="fact-number">4</span><span>Projects listed</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Tools of the trade" title="Technical toolkit" description="Technologies and tools listed in my current CV. Experience levels vary by project and coursework." /></Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return <Reveal key={group.title} delay={i * 0.06}><article className="skill-card"><div className="skill-icon"><Icon size={20} /></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <Reveal><div className="projects-heading"><SectionHeading eyebrow="Selected work" title="Projects I've worked on" description="Academic projects that demonstrate practice with application workflows, data management and user-facing features." /><span className="project-count">04 <span>projects</span></span></div></Reveal>
          <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
          <p className="projects-note">Repository and live-demo links will be added when the corresponding projects are published. Screenshots are placeholders until you add your own project images.</p>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Learning journey" title="Education & certifications" description="Academic background and certificates listed in my CV." /></Reveal>
          <div className="education-layout">
            <Reveal className="education-list">
              <article className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><span className="education-date">2025 — Ongoing</span><h3>Master of Computer Applications (MCA)</h3><p>ISTAR · CGPA/score listed in CV: 7.42</p></div></article>
              <article className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><span className="education-date">2022 — 2025</span><h3>Bachelor of Computer Applications (BCA)</h3><p>Natubhai V Patel College of Pure and Applied Sciences · Score listed in CV: 8.03</p></div></article>
              <article className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><span className="education-date">2018 — 2019</span><h3>Class 12 — PCM</h3><p>Saraswati Shishukunj, Borsad</p></div></article>
              <article className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><span className="education-date">2016 — 2017</span><h3>Class 10 — SSLC</h3><p>United School, Vasad</p></div></article>
            </Reveal>
            <Reveal delay={0.12} className="cert-card">
              <div className="cert-card-head"><Sparkles size={18} /><span>Certifications</span></div>
              <div className="cert-item"><div><strong>Introduction to Java</strong><span>Coursera</span></div><time>Sep 2023</time></div>
              <div className="cert-item"><div><strong>Python Basic Structures</strong><span>Coursera</span></div><time>Feb 2024</time></div>
              <div className="cert-item"><div><strong>Introduction to Artificial Intelligence</strong><span>Coursera</span></div><time>Jan 2025</time></div>
              <div className="language-block"><span>Languages</span><p>English · Hindi · Gujarati · Kannada</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <Reveal><p className="eyebrow">Have a role or project in mind?</p><h2>Let's make<br /><span>something useful.</span></h2><p className="contact-description">I'm open to discussing entry-level opportunities, internships and suitable project work.</p></Reveal>
          <Reveal delay={0.12} className="contact-panel">
            <a className="contact-row" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Work opportunity")}`}><span className="contact-icon"><Mail size={19} /></span><span><small>Email me</small><strong>{EMAIL}</strong></span><ArrowUpRight size={19} /></a>
            <a className="contact-row" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-icon whatsapp-icon"><MessageCircle size={19} /></span><span><small>WhatsApp</small><strong>+91 92651 50356</strong></span><ArrowUpRight size={19} /></a>
            <a className="contact-row" href="https://github.com/ravirk2704" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={19} /></span><span><small>GitHub</small><strong>github.com/ravirk2704</strong></span><ArrowUpRight size={19} /></a>
            <a className="contact-row" href="https://www.linkedin.com/in/ravi-kenchanagoudar-006506188" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={19} /></span><span><small>LinkedIn</small><strong>Connect professionally</strong></span><ArrowUpRight size={19} /></a>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner"><a className="brand footer-brand" href="#home">RK<span>.</span></a><p>Designed and built by Ravi Kenchanagoudar.</p><a href="#home" className="back-top">Back to top ↑</a></div>
      </footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Ravi on WhatsApp"><MessageCircle size={22} /><span>Let's chat</span></a>
    </>
  );
}

export default App;