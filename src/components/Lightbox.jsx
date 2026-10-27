import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); } // keep focus inside
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-topbar">
          <span><span className="status-dot" /> {item.title}</span>
          <button ref={closeRef} onClick={onClose} aria-label="Close screenshot"><X size={21} /></button>
        </div>
        <img src={item.src} alt={item.title} />
      </div>
    </div>
  );
}
