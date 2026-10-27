import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Github } from "lucide-react";
import { reveal } from "./reveal";

export default function ProjectCard({ project, onImageOpen }) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState({});
  const current = project.images[active];
  const total = project.images.length;
  const step = (d) => setActive((c) => (c + d + total) % total);

  return (
    <motion.article
      className={`project-card project-${project.color}`}
      variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}
    >
      <div className="project-topline">
        <span className="project-number">/{project.number}</span>
        <span className="project-type">{project.type}</span>
      </div>

      <div className="project-preview">
        {failed[current.src] ? (
          <div className="preview-missing">Screenshot unavailable</div>
        ) : (
          <button
            className="preview-image-button"
            onClick={() => onImageOpen(current.src, `${project.title} — ${current.label}`)}
            aria-label={`Open ${current.label} screenshot of ${project.title}`}
          >
            <img
              src={current.src} alt={`${project.title} ${current.label}`} loading="lazy"
              onError={() => setFailed((f) => ({ ...f, [current.src]: true }))}
            />
            <span className="preview-open" aria-hidden="true"><ExternalLink size={16} /></span>
          </button>
        )}
        <div className="preview-caption" aria-hidden="true">
          <span><span className="status-dot" /> SCREEN / {current.label.toUpperCase()}</span>
          <span>{String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
        {total > 1 && (
          <div className="gallery-thumbnails">
            {project.images.map((image, i) => (
              <button
                key={image.src}
                className={`gallery-thumb ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show ${image.label}`} aria-pressed={active === i}
              >
                <img src={image.src} alt="" />
                <span>{image.label}</span>
              </button>
            ))}
            <div className="gallery-arrows">
              <button onClick={() => step(-1)} aria-label="Previous screenshot"><ArrowLeft size={15} /></button>
              <button onClick={() => step(1)} aria-label="Next screenshot"><ArrowRight size={15} /></button>
            </div>
          </div>
        )}
      </div>

      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}<span className="title-period">.</span></h3>
        <p className="project-description">{project.description}</p>
        <div className="project-features">
          {project.features.map((f) => <span key={f}><Check size={13} /> {f}</span>)}
        </div>
        <div className="project-stack">
          {project.stack.map((s) => <span key={s}>{s}</span>)}
        </div>
        {(project.repo || project.demo) && (
          <div className="project-links">
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer"><Github size={15} /> Source code</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
          </div>
        )}
      </div>
    </motion.article>
  );
}
