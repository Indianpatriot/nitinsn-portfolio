import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { links } from '@/lib/portfolio';
export const resumeUrl = "/NitinSN_Resume.pdf?v=2";
const nav = [ ['Home', 'home'], ['Education', 'education'], ['What I build', 'build'], ['Projects', 'projects'], ['Highlights', 'highlights'], ['Experience', 'experience'], ['Skills', 'skills'], ['Contact', 'contact'] ] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => {
    const saved = window.localStorage.getItem('nitin-theme');
    setLight(saved === 'light');
    document.documentElement.classList.toggle('light', saved === 'light');
  }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    window.localStorage.setItem('nitin-theme', next ? 'light' : 'dark');
  };
  return <header className="site-header"><div className="site-header-inner">
    <Link to="/" className="site-logo" aria-label="Nitin S N home">NITIN<span className="logo-dot">.</span><span className="logo-surname">S N</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, id]) => <a key={id} href={`/#${id}`} className={id === 'home' ? 'nav-home' : ''}>{label}</a>)}</nav>
    <div className="header-actions"><a className="header-social" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17}/></a><a className="header-social" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><Button asChild variant="outline" size="sm" className="header-resume"><a href={resumeUrl} download="NitinSN_Resume.pdf">Resume <ArrowDownToLine size={13}/></a></Button><Button variant="ghost" size="icon" className="theme-button" onClick={toggleTheme} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} title={light ? 'Dark theme' : 'Light theme'}>{light ? <Moon size={18}/> : <Sun size={18}/>}</Button><Button variant="ghost" size="icon" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</Button></div>
  </div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, id]) => <a href={`/#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17}/></a>)}<div className="mobile-nav-social"><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={resumeUrl} download="NitinSN_Resume.pdf">Resume</a></div></nav>}</header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container-wide footer-inner"><div><Link to="/" className="site-logo">NITIN<span className="logo-dot">.</span><span className="logo-surname">S N</span></Link><p>MCA Student · Full-Stack Developer</p></div><div className="footer-links"><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href={links.email}>Email <Mail size={13}/></a></div></div><div className="container-wide footer-bottom"><span>© 2026 Nitin S N</span><span>Built with React &amp; TanStack Start</span></div></footer>;
}
