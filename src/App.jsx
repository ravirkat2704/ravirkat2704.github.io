import { useCallback, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight, ArrowUpRight, Code2, Download, Github, GraduationCap,
  Mail, MapPin, Menu, MessageCircle, Phone, Terminal, X, Zap
} from "lucide-react";
import { SITE, asset, projects, skillGroups, education, certifications } from "./data/site";
import { reveal } from "./components/reveal";
import ProjectCard from "./components/ProjectCard";
import Lightbox from "./components/Lightbox";
import "./styles.css";
import "./extras.css";

const GITHUB_URL = `https://github.com/${SITE.github}`;
const WHATSAPP_URL = SITE.phone ? `https://wa.me/${SITE.phone.replace(/\D/g, "")}` : "";
const NAV = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"]];

function SectionHeading({ index, eyebrow, title, accent, description }) {
  return (
    <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-eyebrow"><span>{index}</span><span className="eyebrow-line" />{eyebrow}</div>
      <h2>{title} <span>{accent}</span></h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const closeMenu = () => setMenuOpen(false);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="background-grid" aria-hidden="true" />
      <div className="ambient-glow glow-one" aria-hidden="true" />
      <div className="ambient-glow glow-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Ravi — home">
            <span className="brand-symbol">R<span>.</span></span>
            <span className="brand-name">RAVI<span>_DEV</span></span>
          </a>
          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {NAV.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="availability">
              <span className="availability-pulse" aria-hidden="true" />
              MCA STUDENT <span className="availability-divider">/</span> OPEN TO ENTRY-LEVEL ROLES
            </div>
            <p className="hero-kicker">HELLO, WORLD! I'M</p>
            <h1>Ravi<br /><span className="hero-name-accent">Kenchanagoudar</span><span className="hero-dot">.</span></h1>
            <div className="hero-role">
              <span className="role-bracket">&lt;</span>Aspiring full-stack web developer<span className="role-bracket">/&gt;</span>
            </div>
            <p className="hero-description">
              I build practical web applications with Laravel, PHP and MySQL, connect interfaces
              with databases, and turn ideas into working software — one commit at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-outline" href={asset("resume.pdf")} download="Ravi-Kenchanagoudar-Resume.pdf">
                <Download size={16} /> Download resume
              </a>
            </div>
            <div className="hero-socials">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
            </div>
          </motion.div>

          <motion.div className="hero-terminal-wrap" initial={{ opacity: 0, scale: 0.96, x: 15 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12 }} aria-hidden="true">
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
                <p className="terminal-indent"><span className="syntax-green">education</span>: <span className="syntax-yellow">"MCA"</span>,</p>
                <p className="terminal-indent"><span className="syntax-green">stack</span>: [</p>
                <p className="terminal-indent terminal-indent-double"><span className="syntax-yellow">"PHP"</span>, <span className="syntax-yellow">"Laravel"</span>,</p>
                <p className="terminal-indent terminal-indent-double"><span className="syntax-yellow">"MySQL"</span>, <span className="syntax-yellow">"JavaScript"</span></p>
                <p className="terminal-indent">],</p>
                <p className="terminal-indent"><span className="syntax-green">mindset</span>: <span className="syntax-yellow">"Always learning"</span></p>
                <p>{"}"};</p>
                <div className="terminal-output"><span className="syntax-green">➜</span> Ready to build something useful<span className="terminal-cursor">_</span></div>
              </div>
              <div className="terminal-status"><span><span className="status-dot" /> SYSTEM ONLINE</span><span>UTF-8</span><span>JS</span></div>
            </div>
            <div className="floating-code-chip"><Code2 size={15} /> clean code / useful products</div>
          </motion.div>

          <a href="#about" className="scroll-indicator"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
          <div className="hero-index">PORTFOLIO — 2026</div>
        </section>

        <section className="quick-stats section-shell" aria-label="Portfolio overview">
          <div className="stat-item"><span className="stat-number">{String(projects.length).padStart(2, "0")}</span><span className="stat-label">PROJECTS BUILT</span></div>
          <div className="stat-item"><span className="stat-number">{String(certifications.length).padStart(2, "0")}</span><span className="stat-label">CERTIFICATIONS</span></div>
          <div className="stat-item"><span className="stat-number">03</span><span className="stat-label">DATABASES USED</span></div>
          <div className="stat-item stat-location"><MapPin size={18} /><span className="stat-label">{SITE.location.toUpperCase()}</span></div>
        </section>

        <section className="section-shell section-block" id="about">
          <SectionHeading index="01" eyebrow="THE PERSON BEHIND THE CODE" title="Curious mind." accent="Practical builder." description="A little about my journey and how I approach development." />
          <div className="about-grid">
            <div className="about-main">
              <div className="about-label"><Zap size={16} /> MY APPROACH</div>
              <h3>Building software is more than writing code.</h3>
              <p>I'm a BCA graduate (2025) currently pursuing my MCA at ISTAR. I enjoy developing web applications that bring together useful interfaces, reliable database operations and straightforward user workflows.</p>
              <p>From booking systems to management dashboards, my projects have helped me practise planning features, implementing them and improving the user experience. I'm looking for an entry-level role with practical exposure and room to keep learning.</p>
              <a className="text-link" href="#projects">See what I've built <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-side">
              <div className="about-code-card" aria-hidden="true">
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
          <SectionHeading index="02" eyebrow="MY TOOLKIT" title="Tools I work" accent="with." description="Technologies used in my coursework and projects. My experience varies by tool." />
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <motion.article className="skill-card" key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.08 }}>
                <div className="skill-card-top"><Code2 size={19} /><span>{group.code}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map((s) => <span key={s}>{s}</span>)}</div>
                <div className="skill-card-bottom"><span /> TOOLKIT / RAVI</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="projects-section section-block" id="projects">
          <div className="section-shell">
            <SectionHeading index="03" eyebrow="SELECTED WORK" title="Projects that" accent="do the work." description="Academic and hands-on projects. Click a screenshot to enlarge it." />
            <div className="projects-toolbar">
              <span><span className="status-dot" /> PROJECT ARCHIVE</span>
              <span>{String(projects.length).padStart(2, "0")} ENTRIES <span className="toolbar-divider">/</span> 2024—2026</span>
            </div>
            <div className="projects-grid">
              {projects.map((p) => (
                <ProjectCard key={p.number} project={p} onImageOpen={(src, title) => setLightbox({ src, title })} />
              ))}
            </div>
            <div className="projects-footer">
              <span>MORE CODE. MORE LEARNING. MORE TO BUILD.</span>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-link">Explore GitHub <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="journey">
          <SectionHeading index="04" eyebrow="EDUCATION & LEARNING" title="The learning" accent="continues." description="My academic journey and additional learning milestones." />
          <div className="journey-grid">
            <div className="education-list">
              {education.map((item) => (
                <motion.article className="education-card" key={item.degree} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
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
              <div className="cert-panel-heading"><span>LEARNING LOG</span><Terminal size={16} aria-hidden="true" /></div>
              <h3>Certifications<span className="title-period">.</span></h3>
              {certifications.map((cert, i) => (
                <div className="cert-item" key={cert.title}>
                  <span className="cert-index">0{i + 1}</span>
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
            <div className="contact-orbit orbit-one" aria-hidden="true" />
            <div className="contact-orbit orbit-two" aria-hidden="true" />
            <div className="contact-content">
              <div className="section-eyebrow"><span>05</span><span className="eyebrow-line" /> NEXT CONNECTION</div>
              <p className="contact-kicker">LOOKING FOR AN ENTRY-LEVEL DEVELOPER?</p>
              <h2>Let's make<br />something <span>useful.</span></h2>
              <p className="contact-description">Have an opportunity, a project idea or want to connect about development? Send me a message — I'd be happy to hear from you.</p>
              <div className="contact-actions">
                <a className="button button-primary" href={`mailto:${SITE.email}`}><Mail size={17} /> Email me <ArrowUpRight size={15} /></a>
                {WHATSAPP_URL && (
                  <a className="button button-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={19} /> WhatsApp</a>
                )}
              </div>
            </div>
            <div className="contact-details">
              <a href={`mailto:${SITE.email}`}><Mail size={16} /><span>{SITE.email}</span><ArrowUpRight size={13} /></a>
              {SITE.phone && <a href={`tel:${SITE.phone}`}><Phone size={16} /><span>{SITE.phone}</span><ArrowUpRight size={13} /></a>}
              <div><MapPin size={16} /><span>{SITE.location}</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a href="#home" className="brand footer-brand" aria-label="Back to top">
          <span className="brand-symbol">R<span>.</span></span>
          <span className="brand-name">RAVI<span>_DEV</span></span>
        </a>
        <p>Designed & built with curiosity<span className="title-period">.</span></p>
        <div className="footer-right">
          <span>© {new Date().getFullYear()} RAVI K.</span>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        </div>
      </footer>

      {WHATSAPP_URL && (
        <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={25} /></a>
      )}

      {lightbox && <Lightbox item={lightbox} onClose={closeLightbox} />}
    </div>
  );
}
