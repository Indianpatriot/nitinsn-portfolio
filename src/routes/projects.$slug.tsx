import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectVisual } from '@/components/portfolio/ProjectVisual';
import { SiteFooter, SiteHeader } from '@/components/portfolio/SiteChrome';
import { projects } from '@/lib/portfolio';

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => { const project = projects.find(p => p.slug === params.slug); if (!project) throw notFound(); return project; },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} Case Study | Nitin S N` : 'Project not found | Nitin S N';
    const description = loaderData?.description ?? 'Explore software engineering projects by Nitin S N.';
    return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'article' }, { name: 'twitter:card', content: 'summary_large_image' }] };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const next = projects[(projects.findIndex(p => p.slug === project.slug) + 1) % projects.length] ?? project;
  return <div className="portfolio-site"><SiteHeader/><main className="case-main container-wide"><Link to="/" hash="projects" className="back-link"><ArrowLeft size={16}/> Back to projects</Link><div className="case-hero"><div><span className="eyebrow"><span className="eyebrow-index">{project.number}</span> / CASE STUDY · {project.category}</span><h1>{project.name}<span className="hero-period">.</span></h1><p className="case-subtitle">{project.subtitle}</p><p className="case-description">{project.description}</p><div className="case-links">{project.github && <Button asChild className="button-primary"><a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={16}/> View on GitHub <ArrowUpRight size={15}/></a></Button>}{project.demo && <Button asChild variant="outline" className="button-outline"><a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink size={15}/></a></Button>}</div></div><div className="case-hero-index">PROJECT / {project.number}</div></div><ProjectVisual visual={project.visual} compact/><div className="case-overview"><div><span className="label-small">TECHNOLOGIES</span><div className="tech-list">{project.stack.map(s => <span key={s}>{s}</span>)}</div></div><div><span className="label-small">KEY FEATURES</span><ul>{project.features.map(f => <li key={f}>{f}</li>)}</ul></div></div><div className="case-sections"><div className="case-section-intro"><span className="eyebrow">UNDER THE HOOD</span><h2>How it works<span className="hero-period">.</span></h2><p>From the problem to the decisions and trade-offs behind the build.</p></div><div className="case-section-list">{project.sections.map((section, i) => <section key={section.title} className="case-section"><span>{String(i+1).padStart(2,'0')}</span><div><h3>{section.title}</h3><p>{section.body}</p></div></section>)}</div></div><div className="case-next"><span className="eyebrow">KEEP EXPLORING</span><Link to="/projects/$slug" params={{slug: next.slug}}><span>Next project</span><strong>{next.name} <ArrowRight size={28}/></strong></Link></div></main><SiteFooter/></div>;
}
