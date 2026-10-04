import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projectCategories, projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState<string>('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Selected work"
        title="Projects"
        subtitle="Real systems, academic work, and workshop builds. Filter by category."
      />
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {projectCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
              filter === c
                ? 'border-teal-400/60 bg-teal-400/10 text-teal-300'
                : 'border-white/10 text-slate-400 hover:border-teal-400/30 hover:text-teal-300'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
