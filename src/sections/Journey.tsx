import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/timeline'

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Progression"
        title="Development Journey"
        subtitle="Student → learner → builder → IT practitioner."
      />
      <ol className="relative border-l border-white/10 pl-8">
        {timeline.map((item, i) => (
          <li key={i} className="relative pb-10">
            <span className="absolute -left-[37px] mt-1 h-3 w-3 rounded-full border-2 border-teal-400 bg-ink-950" aria-hidden="true" />
            <p className="font-mono text-xs text-teal-300">{item.period}</p>
            <h3 className="mt-1 font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
